const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
function getCandidates() {
  try {
    const raw = fs.readFileSync(path.join(ROOT, 'live-channels.json'), 'utf8');
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.error('Failed to load live-channels.json:', e.message);
    return [];
  }
}
// Initial load kept for compatibility, but dynamic reads use getCandidates() per request
const candidates = getCandidates();

let twitchToken = null;
let twitchTokenExpiresAt = 0;
const youtubeHandleCache = new Map();
const twitchLoginCache = new Map();
const CLIP_START_DATE = process.env.CLIP_START_DATE || '2026-08-11T10:00:00Z';
const TWITCH_PZ_GAME_ID = process.env.TWITCH_PZ_GAME_ID || null;
let twitchPzGameIdCache = null;
let clipCache = {expiresAt:0, data:[]};

async function twitchAppToken() {
  if (!process.env.TWITCH_CLIENT_ID || !process.env.TWITCH_CLIENT_SECRET) {
    throw new Error('Faltan TWITCH_CLIENT_ID / TWITCH_CLIENT_SECRET en el entorno del servidor.');
  }
  if (twitchToken && Date.now() < twitchTokenExpiresAt - 60_000) return twitchToken;

  const body = new URLSearchParams({
    client_id: process.env.TWITCH_CLIENT_ID,
    client_secret: process.env.TWITCH_CLIENT_SECRET,
    grant_type: 'client_credentials'
  });
  const res = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    body
  });
  if (!res.ok) throw new Error(`Twitch token HTTP ${res.status}`);
  const data = await res.json();
  twitchToken = data.access_token;
  twitchTokenExpiresAt = Date.now() + (data.expires_in * 1000);
  return twitchToken;
}


async function twitchLive() {
  const token = await twitchAppToken();
  // IMPORTANT: only use the Twitch usernames explicitly mapped in live-channels.json.
  // Do not use Twitch search because approximate matches can select the wrong channel.
  // HOME LIVE: only the Twitch login explicitly stored for each participant is used.
  // YouTube URLs are deliberately ignored for this Twitch player list.
  const mapped = getCandidates()
    .map(candidate => ({
      candidate,
      login: candidate.twitch ? String(candidate.twitch).split('/').filter(Boolean).pop().toLowerCase() : null
    }))
    .filter(x => x.login);

  if (!mapped.length) return [];

  const out = [];
  for (let i = 0; i < mapped.length; i += 100) {
    const chunk = mapped.slice(i, i + 100);
    const params = new URLSearchParams();
    chunk.forEach(x => params.append('user_login', x.login));

    const res = await fetch(`https://api.twitch.tv/helix/streams?${params.toString()}`, {
      headers: {
        'Client-Id': process.env.TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${token}`
      }
    });
    if (!res.ok) throw new Error(`Twitch streams HTTP ${res.status}`);
    const data = await res.json();

    const byLogin = new Map(chunk.map(x => [x.login, x.candidate]));
    for (const stream of (data.data || [])) {
      const candidate = byLogin.get(String(stream.user_login || '').toLowerCase());
      if (!candidate) continue;
      out.push({
        player: candidate.player,
        platform: 'TWITCH',
        channel: stream.user_login,
        url: `https://www.twitch.tv/${stream.user_login}`,
        viewerCount: stream.viewer_count,
        title: stream.title,
        startedAt: stream.started_at
      });
    }
  }

  return out;
}

function parseYoutube(url) {
  if (!url) return null;
  const mChannel = url.match(/youtube\.com\/channel\/([^/?#]+)/i);
  if (mChannel) return { type: 'id', value: mChannel[1] };
  const mHandle = url.match(/youtube\.com\/@([^/?#]+)/i);
  if (mHandle) return { type: 'handle', value: mHandle[1] };
  const mPath = url.match(/youtube\.com\/([^/?#]+)/i);
  if (mPath) return { type: 'handle', value: mPath[1] };
  return null;
}

async function youtubeChannelId(ref) {
  if (!ref) return null;
  if (ref.type === 'id') return ref.value;
  if (youtubeHandleCache.has(ref.value)) return youtubeHandleCache.get(ref.value);
  if (!process.env.YOUTUBE_API_KEY) return null;

  const url = new URL('https://www.googleapis.com/youtube/v3/channels');
  url.searchParams.set('part', 'id');
  url.searchParams.set('forHandle', `@${ref.value}`);
  url.searchParams.set('key', process.env.YOUTUBE_API_KEY);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`YouTube channel HTTP ${res.status}`);
  const data = await res.json();
  const id = data.items?.[0]?.id || null;
  youtubeHandleCache.set(ref.value, id);
  return id;
}

async function youtubeLiveForChannel(channelId, candidate) {
  const url = new URL('https://www.googleapis.com/youtube/v3/search');
  url.searchParams.set('part', 'snippet');
  url.searchParams.set('channelId', channelId);
  url.searchParams.set('eventType', 'live');
  url.searchParams.set('type', 'video');
  url.searchParams.set('maxResults', '5');
  url.searchParams.set('key', process.env.YOUTUBE_API_KEY);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`YouTube search HTTP ${res.status}`);
  const data = await res.json();
  const item = data.items?.[0];
  if (!item?.id?.videoId) return null;
  return {
    player: candidate.player,
    platform: 'YOUTUBE',
    videoId: item.id.videoId,
    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    title: item.snippet?.title || 'Directo',
    startedAt: item.snippet?.publishedAt || null
  };
}

async function youtubeLive() {
  if (!process.env.YOUTUBE_API_KEY) return [];
  const ytCandidates = getCandidates().filter(x => x.youtube);
  const results = await Promise.all(ytCandidates.map(async candidate => {
    try {
      const ref = parseYoutube(candidate.youtube);
      const channelId = await youtubeChannelId(ref);
      if (!channelId) return null;
      return youtubeLiveForChannel(channelId, candidate);
    } catch (error) {
      console.error(`YouTube ${candidate.player}:`, error.message);
      return null;
    }
  }));
  return results.filter(Boolean);
}


async function twitchProjectZomboidGameId(token){
  if(twitchPzGameIdCache)return twitchPzGameIdCache;
  const params=new URLSearchParams({query:'Project Zomboid'});
  const res=await fetch(`https://api.twitch.tv/helix/search/categories?${params}`,{headers:{'Client-Id':process.env.TWITCH_CLIENT_ID,'Authorization':`Bearer ${token}`}});
  if(!res.ok)throw new Error(`Twitch categories HTTP ${res.status}`);
  const data=await res.json();
  const exact=(data.data||[]).find(x=>x.name?.toLowerCase()==='project zomboid');
  twitchPzGameIdCache=exact?.id || TWITCH_PZ_GAME_ID || '31339';
  return twitchPzGameIdCache;
}

async function twitchUsersByLogin(logins){
  const unique=[...new Set(logins.filter(Boolean).map(x=>x.toLowerCase()))];
  if(!unique.length)return[];
  const token=await twitchAppToken();
  const params=new URLSearchParams(); unique.forEach(login=>params.append('login',login));
  const res=await fetch(`https://api.twitch.tv/helix/users?${params}`,{headers:{'Client-Id':process.env.TWITCH_CLIENT_ID,'Authorization':`Bearer ${token}`}});
  if(!res.ok)throw new Error(`Twitch users HTTP ${res.status}`);
  return (await res.json()).data||[];
}
function weekWindows(startIso,endDate){
  const start=new Date(startIso),end=new Date(endDate),windows=[]; let cursor=new Date(start);
  while(cursor<end){const next=new Date(Math.min(cursor.getTime()+7*86400000,end.getTime()));windows.push([new Date(cursor),new Date(next)]);cursor=next;}
  return windows;
}
async function twitchClips(){
  if(!process.env.TWITCH_CLIENT_ID||!process.env.TWITCH_CLIENT_SECRET)return[];
  const tp=getCandidates().filter(x=>x.twitch);
  if(!tp.length)return[];

  const users=await twitchUsersByLogin(tp.map(x=>String(x.twitch).split('/').filter(Boolean).pop()));
  const byLogin=new Map(users.map(u=>[String(u.login).toLowerCase(),u]));
  const playerByBroadcasterId=new Map();
  for(const c of tp){
    const login=String(c.twitch).split('/').filter(Boolean).pop().toLowerCase();
    const u=byLogin.get(login);
    if(u) playerByBroadcasterId.set(String(u.id),c.player);
  }
  if(!playerByBroadcasterId.size)return[];

  const token=await twitchAppToken();
  const headers={
    'Client-Id':process.env.TWITCH_CLIENT_ID,
    'Authorization':`Bearer ${token}`
  };
  const clipStart=new Date(CLIP_START_DATE);
  const now=new Date();
  const out=[];
  const seen=new Set();

  // Get Clips uses started_at/ended_at windows of at most one week.
  // For each creation week, search the preceding 7 days and the creation week itself,
  // then apply clip.created_at as the actual creation-date filter.
  for(const [creationStart,creationEnd] of weekWindows(CLIP_START_DATE,now)){
    const ranges=[
      [new Date(creationStart), new Date(creationEnd)],
      [new Date(creationStart.getTime()-7*86400000), new Date(creationStart)]
    ];

    for(const [broadcasterId,player] of playerByBroadcasterId){
      for(const [searchStart,searchEnd] of ranges){
        try{
          let after=null;
          let pages=0;
          do{
            const params=new URLSearchParams({
              broadcaster_id:broadcasterId,
              started_at:searchStart.toISOString(),
              ended_at:searchEnd.toISOString(),
              first:'100'
            });
            if(after) params.set('after',after);

            const res=await fetch(`https://api.twitch.tv/helix/clips?${params.toString()}`,{headers});
            if(!res.ok) throw new Error(`Twitch clips HTTP ${res.status}`);
            const data=await res.json();

            for(const clip of (data.data||[])){
              if(seen.has(clip.id)) continue;
              const created=clip.created_at?new Date(clip.created_at):null;
              if(!created || created<clipStart || created>now) continue;
              if(String(clip.broadcaster_id)!==String(broadcasterId)) continue;

              seen.add(clip.id);
              out.push({
                id:clip.id,
                player,
                platform:'TWITCH',
                title:clip.title||'Clip',
                description:`Clip de ${player}.`,
                duration:`${Math.round(Number(clip.duration||0))}s`,
                createdAt:clip.created_at,
                thumbnail:clip.thumbnail_url,
                url:clip.url,
                embedUrl:clip.embed_url,
                views:clip.view_count||0
              });
            }

            after=data.pagination?.cursor||null;
            pages++;
          }while(after && pages<10);
        }catch(e){
          console.error(`Twitch clips ${player}:`,e.message);
        }
      }
    }
  }

  return out.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
}
async function youtubeClips(){
  if(!process.env.YOUTUBE_API_KEY)return[]; const out=[];
  for(const c of getCandidates().filter(x=>x.youtube)){
    try{
      const id=await youtubeChannelId(parseYoutube(c.youtube)); if(!id)continue;
      const url=new URL('https://www.googleapis.com/youtube/v3/search');
      url.searchParams.set('part','snippet'); url.searchParams.set('channelId',id); url.searchParams.set('type','video');
      url.searchParams.set('publishedAfter',CLIP_START_DATE); url.searchParams.set('order','date'); url.searchParams.set('maxResults','25'); url.searchParams.set('key',process.env.YOUTUBE_API_KEY);
      const res=await fetch(url); if(!res.ok)throw new Error(`YouTube search HTTP ${res.status}`); const data=await res.json();
      for(const item of data.items||[]){
        const videoId=item.id?.videoId; if(!videoId)continue;
        out.push({id:videoId,videoId,player:c.player,platform:'YOUTUBE',title:item.snippet?.title||'Project Zomboid',description:'Contenido del canal del participante publicado durante el periodo de prueba.',duration:'VIDEO',createdAt:item.snippet?.publishedAt||null,thumbnail:item.snippet?.thumbnails?.high?.url||item.snippet?.thumbnails?.medium?.url||null,url:`https://www.youtube.com/watch?v=${videoId}`});
      }
    }catch(e){console.error(`YouTube ${c.player}:`,e.message)}
  }
  return out;
}
app.get('/api/clips',async(_req,res)=>{
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  if(Date.now()<clipCache.expiresAt){
    return res.json({
      clips:clipCache.data,
      checkedAt:new Date().toISOString(),
      startDate:CLIP_START_DATE,
      twitchPlayers:getCandidates().filter(x=>x.twitch).map(x=>x.player)
    });
  }
  try{
    const clips=await twitchClips();
    const sorted=[...clips].sort((a,b)=>new Date(b.createdAt||0)-new Date(a.createdAt||0));
    clipCache={expiresAt:Date.now()+30000,data:sorted};
    res.json({
      clips:sorted,
      twitchPlayers:getCandidates().filter(x=>x.twitch).map(x=>x.player),
      checkedAt:new Date().toISOString(),
      startDate:CLIP_START_DATE,
      errors:[]
    });
  }catch(e){
    res.status(500).json({
      clips:[],
      twitchPlayers:getCandidates().filter(x=>x.twitch).map(x=>x.player),
      error:e.message,
      startDate:CLIP_START_DATE
    })
  }
});

app.get('/api/health', (_req,res)=>res.json({
  ok:true,
  twitchConfigured:Boolean(process.env.TWITCH_CLIENT_ID&&process.env.TWITCH_CLIENT_SECRET),
  youtubeConfigured:Boolean(process.env.YOUTUBE_API_KEY)
}));

app.get('/api/live', async (_req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  try {
    const live = await twitchLive();
    res.json({
      live,
      checkedAt: new Date().toISOString(),
      configured: {
        twitch: Boolean(process.env.TWITCH_CLIENT_ID && process.env.TWITCH_CLIENT_SECRET)
      },
      errors: []
    });
  } catch (error) {
    res.status(500).json({
      live: [],
      configured: {
        twitch: Boolean(process.env.TWITCH_CLIENT_ID && process.env.TWITCH_CLIENT_SECRET)
      },
      errors: [error.message]
    });
  }
});

// Version file: never cache (used for deploy detection)
app.get('/version.json', (req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.sendFile(path.join(ROOT, 'version.json'));
});

app.use(express.static(ROOT, {
  // Allow CDN caching for versioned assets; version.json handled above
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('version.json')) {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    }
  }
}));
app.use((_req, res) => res.sendFile(path.join(ROOT, 'index.html')));

app.listen(PORT, () => {
  console.log(`Proyecto C disponible en http://localhost:${PORT}`);
});
