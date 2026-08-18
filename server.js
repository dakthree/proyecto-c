const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const candidates = require(path.join(ROOT, 'live-channels.json'));

let twitchToken = null;
let twitchTokenExpiresAt = 0;
const youtubeHandleCache = new Map();

async function twitchAppToken() {
  if (!process.env.TWITCH_CLIENT_ID || !process.env.TWITCH_CLIENT_SECRET) {
    throw new Error('Faltan TWITCH_CLIENT_ID / TWITCH_CLIENT_SECRET');
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
  const logins = candidates.map(x => x.twitch).filter(Boolean);
  if (!logins.length) return [];
  const token = await twitchAppToken();
  const params = new URLSearchParams();
  logins.forEach(login => params.append('user_login', login));
  const res = await fetch(`https://api.twitch.tv/helix/streams?${params.toString()}`, {
    headers: {
      'Client-Id': process.env.TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${token}`
    }
  });
  if (!res.ok) throw new Error(`Twitch streams HTTP ${res.status}`);
  const data = await res.json();
  return (data.data || []).map(stream => {
    const candidate = candidates.find(x => x.twitch?.toLowerCase() === stream.user_login.toLowerCase());
    return {
      player: candidate?.player || stream.user_name,
      platform: 'TWITCH',
      channel: stream.user_login,
      url: `https://www.twitch.tv/${stream.user_login}`,
      viewerCount: stream.viewer_count,
      title: stream.title,
      startedAt: stream.started_at
    };
  });
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
  const ytCandidates = candidates.filter(x => x.youtube);
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

app.get('/api/live', async (_req, res) => {
  try {
    const [twitch, youtube] = await Promise.allSettled([twitchLive(), youtubeLive()]);
    const live = [
      ...(twitch.status === 'fulfilled' ? twitch.value : []),
      ...(youtube.status === 'fulfilled' ? youtube.value : [])
    ];
    const errors = [];
    if (twitch.status === 'rejected') errors.push(`Twitch: ${twitch.reason.message}`);
    if (youtube.status === 'rejected') errors.push(`YouTube: ${youtube.reason.message}`);
    res.json({
      live,
      checkedAt: new Date().toISOString(),
      configured: {
        twitch: Boolean(process.env.TWITCH_CLIENT_ID && process.env.TWITCH_CLIENT_SECRET),
        youtube: Boolean(process.env.YOUTUBE_API_KEY)
      },
      errors
    });
  } catch (error) {
    res.status(500).json({live: [], errors: [error.message]});
  }
});

app.use(express.static(ROOT));
app.use((_req, res) => res.sendFile(path.join(ROOT, 'index.html')));

app.listen(PORT, () => {
  console.log(`Proyecto C disponible en http://localhost:${PORT}`);
});
