const EVENT_DATE = '2026-08-21T18:00:00+02:00';

const players = [
  {id:'k4la',name:'K4la',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:'https://www.youtube.com/@k4la_',bio:'Perfil pendiente de información del personaje.'},
  {id:'asssucar',name:'Asssucar',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/asssucar',youtube:'https://www.youtube.com/@asssucar',bio:'Perfil pendiente de información del personaje.'},
  {id:'leissar',name:'Leissar',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/leissar',youtube:'https://www.youtube.com/channel/UCU6dXXNTstf2_J9rl-BV__A',bio:'Perfil pendiente de información del personaje.'},
  {id:'goblinpeke',name:'GoblinPeke',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/goblinpeke',youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'xl-k-vic',name:'xL𝑜K𝑜Vic',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/xlokovic',youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'lagatarata',name:'LaGataRata',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/xkattty',youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'z3ttii',name:'Z3TTII',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/z3ttii',youtube:'https://www.youtube.com/@Z3TTII',bio:'Perfil pendiente de información del personaje.'},
  {id:'tamashiiv',name:'TAMASHIIV',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'ferrox',name:'Ferrox',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'luisgg',name:'LuisGG',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:'https://www.youtube.com/@luisgamingg',bio:'Perfil pendiente de información del personaje.'},
  {id:'lordzacas',name:'lordzacas',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/lordzacas',youtube:'https://www.youtube.com/@lordzacas3015',bio:'Perfil pendiente de información del personaje.'},
  {id:'soulreaperdk',name:'SoulReaperDK',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/soulreaperdk_',youtube:'https://www.youtube.com/channel/UCwvqn9OZhmkLBjHOw0us5ZA',bio:'Perfil pendiente de información del personaje.'},
  {id:'zigurath',name:'zigurath',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/zigurathz',youtube:'https://www.youtube.com/channel/UC36C8AulCMw5QAUV5wrfQpg',bio:'Perfil pendiente de información del personaje.'},
  {id:'arce',name:'ArCe',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/arcedelah',youtube:'https://www.youtube.com/@arcedelah',bio:'Perfil pendiente de información del personaje.'},
  {id:'cere',name:'Cere',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/cere____',youtube:'https://www.youtube.com/channel/UCE1ISk9jQb7ykFQXy56NbaA',bio:'Perfil pendiente de información del personaje.'},
  {id:'storvi',name:'Storvi',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/storviii',youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'rubaso',name:'Rubaso',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'yonkimiyagui',name:'yonkimiyagui',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/miyagui85',youtube:'https://www.youtube.com/channel/UCA-epNDDfdH1JzJOJf0pnCA',bio:'Perfil pendiente de información del personaje.'},
  {id:'miguel',name:'Miguel',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'sarah',name:'Sarah',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/sarahgk92',youtube:'https://www.youtube.com/sarahgk92',bio:'Perfil pendiente de información del personaje.'},
  {id:'vichum',name:'vichum',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'solcius',name:'Solcius',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/Solcius',youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'zone',name:'Zone',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/zonenzonao',youtube:'https://www.youtube.com/channel/UCQcj0iVXK8zYN-JRVPyTtGQ',bio:'Perfil pendiente de información del personaje.'},
  {id:'kira',name:'Kira',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/og_kiradr',youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'magikos',name:'Magikos',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/m4gikos',youtube:'https://www.youtube.com/@M4gikos',bio:'Perfil pendiente de información del personaje.'},
  {id:'miniarre',name:'Miniarre',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'titohc',name:'Titohc',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'shikafu6',name:'Shikafu6',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'hax',name:'Hax',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'zelune',name:'Zelune',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'feto',name:'Feto',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'andreshouse',name:'Andreshouse',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'rastafrikki',name:'RastaFrikki',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'tyzenh',name:'TyzenH',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'anselhoenheim',name:'AnselHoenheim',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/anselhoenheim',youtube:'https://www.youtube.com/@AnselHoenheim',bio:'Perfil pendiente de información del personaje.'},
  {id:'garlic-jr42',name:'Garlic_Jr42',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'toni18',name:'Toni18',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'josuetn',name:'JosueTn',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'miniyo2',name:'Miniyo2',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'nemma',name:'Nemma',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'emiliano-roca',name:'Emiliano Roca',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'meremiau',name:'meremiau',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'liss',name:'Liss',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'abost',name:'Abost',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'elponja92',name:'ElPonja92',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'romgarrr',name:'romgarrr',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'acedion87',name:'Acedion87',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'basquewanderer',name:'BasqueWanderer',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'pupi',name:'pupi',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'zripht',name:'Zripht',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'elpelas97',name:'elpelas97',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'terohis',name:'Terohis',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'juanen',name:'Juanen',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'temecuidas',name:'TeMeCuidaS',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'evarath',name:'evarath',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/evarathz',youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'brunusop',name:'BrunusOP',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',twitch:'https://www.twitch.tv/brunusop',youtube:null,bio:'Perfil pendiente de información del personaje.'}
];


const API_ENDPOINT = '/api/live';
let onlineSources = [];
let selectedLiveKey = null;

function liveSourceKey(source){
  if(!source) return null;
  return [source.platform, source.channel || '', source.videoId || '', source.url || ''].join('|');
}

function twitchEmbedUrl(source){
  if (!/^https?:$/.test(location.protocol) || !location.hostname) return null;
  const parent = location.hostname.replace(/^www\./i, '');
  return `https://player.twitch.tv/?channel=${encodeURIComponent(source.channel)}&parent=${encodeURIComponent(parent)}&muted=true`;
}

function renderLiveSource(source, force=false){
  const screen=document.getElementById('liveScreen');
  const name=document.getElementById('liveChannelName');
  const link=document.getElementById('liveOpenLink');
  if(!screen||!name||!link) return;

  const key=liveSourceKey(source);

  if(!source){
    selectedLiveKey=null;
    screen.innerHTML=`<div class="live-placeholder"><strong>NO HAY PARTICIPANTES EN DIRECTO</strong><small>La lista se actualiza automáticamente.</small></div>`;
    name.textContent='NINGUNA SEÑAL ACTIVA';
    link.href='#';
    link.style.pointerEvents='none';
    return;
  }

  name.textContent=`${source.player} · ${source.platform}`;
  link.href=source.url;
  link.style.pointerEvents='auto';

  // Do not rebuild the iframe while the same channel remains online.
  // Recreating it on every status poll restarts the stream/player.
  if(!force && key === selectedLiveKey){
    return;
  }

  selectedLiveKey=key;

  let embed = null;
  if(source.platform === 'TWITCH') embed = twitchEmbedUrl(source);
  if(source.platform === 'YOUTUBE') embed = `https://www.youtube.com/embed/${encodeURIComponent(source.videoId)}?autoplay=1&mute=1&rel=0`;

  if(embed){
    screen.innerHTML=`<iframe src="${embed}" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen title="Directo de ${source.player}"></iframe>`;
  } else {
    screen.innerHTML=`<div class="live-local-warning"><strong>ABRE EL DIRECTO</strong><a href="${source.url}" target="_blank" rel="noopener noreferrer">VER EN ${source.platform} ↗</a></div>`;
  }
}

function updateLiveSelector(sources){
  const selector=document.getElementById('liveSelector');
  const count=document.getElementById('liveOnlineCount');
  if(!selector||!count) return;
  const previousKey=selectedLiveKey;
  selector.innerHTML='';
  if(!sources.length){
    selector.disabled=true;
    selector.innerHTML='<option>NINGÚN JUGADOR EN DIRECTO</option>';
    count.textContent='0 ONLINE';
    renderLiveSource(null);
    return;
  }

  selector.disabled=false;
  count.textContent=`${sources.length} ONLINE`;

  let selectedIndex=sources.findIndex(source=>liveSourceKey(source)===previousKey);
  if(selectedIndex < 0) selectedIndex=0;

  sources.forEach((source, index)=>{
    const opt=document.createElement('option');
    opt.value=String(index);
    opt.textContent=`${source.player} — ${source.platform}`;
    selector.appendChild(opt);
  });

  selector.value=String(selectedIndex);
  renderLiveSource(sources[selectedIndex]);
}

async function refreshLiveChannels(){
  const selector=document.getElementById('liveSelector');
  const count=document.getElementById('liveOnlineCount');
  const updated=document.getElementById('liveUpdated');
  if(!selector) return;
  selector.disabled=true;
  if(count) count.textContent='COMPROBANDO...';
  try{
    const res=await fetch(API_ENDPOINT, {cache:'no-store'});
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const payload=await res.json();
    onlineSources=Array.isArray(payload.live) ? payload.live : [];
    updateLiveSelector(onlineSources);
    if(updated) updated.textContent=`ACTUALIZADO ${new Date().toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'})}`;
  }catch(err){
    console.error('No se pudo consultar el estado live:', err);
    selector.disabled=true;
    selector.innerHTML='<option>CONFIGURA LA API PARA COMPROBAR DIRECTOS</option>';
    if(count) count.textContent='SIN SEÑAL';
    renderLiveSource(null);
    if(updated) updated.textContent='API NO DISPONIBLE';
  }
}

document.getElementById('liveSelector')?.addEventListener('change', (event)=>{
  const source=onlineSources[Number(event.target.value)];
  renderLiveSource(source, true);
});

refreshLiveChannels();
setInterval(refreshLiveChannels, 60_000);

const timeline = [
  {date:'20 AGOSTO 2026',title:'REUNIÓN'},
  {date:'21 AGOSTO 2026',title:'PRÓLOGO'},
  {date:'28 AGOSTO 2026',title:'ACTO I'},
  {date:'29 AGOSTO 2026',title:'ACTO I'},
  {date:'30 AGOSTO 2026',title:'ACTO I'},
  {date:'3 SEPTIEMBRE 2026',title:'DÍA LIBRE'},
  {date:'4 SEPTIEMBRE 2026',title:'ACTO II'},
  {date:'5 SEPTIEMBRE 2026',title:'ACTO II'},
  {date:'6 SEPTIEMBRE 2026',title:'ACTO II'},
  {date:'10 SEPTIEMBRE 2026',title:'DÍA LIBRE'},
  {date:'11 SEPTIEMBRE 2026',title:'ACTO III'},
  {date:'12 SEPTIEMBRE 2026',title:'ACTO III'},
  {date:'13 SEPTIEMBRE 2026',title:'ACTO III'}
];

const characters = Array.from({length:6}, () => ({
  name:'DESCONOCIDO',
  role:'DESCONOCIDO',
  status:'DESCONOCIDO',
  desc:'DESCONOCIDA'
}));

let clips = [];
let clipDataLoaded = false;

const navLinks = [...document.querySelectorAll('[data-tab]')];
function openTab(id){
  document.querySelectorAll('.tab-panel').forEach(el=>el.classList.toggle('active',el.id===id));
  navLinks.forEach(a=>a.classList.toggle('active',a.dataset.tab===id));
  history.replaceState(null,'','#'+id);
  window.scrollTo({top:0,behavior:'smooth'});
}
navLinks.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openTab(a.dataset.tab)}));
const initial = location.hash.slice(1); if(initial && document.getElementById(initial)) openTab(initial);

const EVENT = new Date(EVENT_DATE);
const eventDateEl = document.getElementById('eventDate');
if(!Number.isNaN(EVENT.getTime())) eventDateEl.textContent = EVENT.toLocaleString('es-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'}).toUpperCase();
function countdown(){
  const diff = EVENT.getTime()-Date.now();
  const vals = {days:0,hours:0,minutes:0,seconds:0};
  if(diff>0){vals.days=Math.floor(diff/86400000);vals.hours=Math.floor(diff%86400000/3600000);vals.minutes=Math.floor(diff%3600000/60000);vals.seconds=Math.floor(diff%60000/1000)}
  Object.entries(vals).forEach(([k,v])=>document.querySelector(`[data-unit="${k}"]`).textContent=String(v).padStart(2,'0'));
  if(diff<=0){document.getElementById('liveStatus').textContent='EN DIRECTO';document.querySelector('.live-status i').style.background='#b6463a';}
}
countdown();setInterval(countdown,1000);

function playerInitials(name){return name.split(' ').slice(0,2).map(x=>x[0]).join('')}
const playerGrid=document.getElementById('playerGrid');
document.getElementById('homeSurvivors').textContent=String(players.length).padStart(2,'0');
document.querySelector('.section-count').firstChild.textContent=String(players.length).padStart(2,'0');
playerGrid.innerHTML=players.map(p=>`<article class="player-card" data-player="${p.id}" role="button" tabindex="0"><div class="player-photo"><div class="player-initial">${playerInitials(p.name)}</div><span class="player-status registered">REGISTRADO</span></div><div class="player-info"><small>${p.twitch?'TWITCH':p.youtube?'YOUTUBE':'SIN CANAL'}</small><h3>${p.name}</h3><p>PERSONAJE POR ASIGNAR</p><div class="player-tags"><span class="tag">PARTICIPANTE</span>${p.twitch?'<span class="tag social twitch">TWITCH</span>':''}${p.youtube?'<span class="tag social youtube">YOUTUBE</span>':''}</div></div></article>`).join('');
function openPlayer(id){const p=players.find(x=>x.id===id);if(!p)return;const links=[p.twitch?`<a class="modal-link twitch" href="${p.twitch}" target="_blank" rel="noopener noreferrer">TWITCH</a>`:'',p.youtube?`<a class="modal-link youtube" href="${p.youtube}" target="_blank" rel="noopener noreferrer">YOUTUBE</a>`:''].join('');document.getElementById('modalContent').innerHTML=`<div class="modal-sub">ARCHIVO DEL PARTICIPANTE</div><h3>${p.name}</h3><div class="modal-sub">PERSONAJE POR ASIGNAR · PARTICIPANTE</div><p>${p.bio}</p><div class="modal-facts"><div class="modal-fact"><small>ESTADO</small><strong>REGISTRADO</strong></div><div class="modal-fact"><small>CANALES</small><strong>${p.twitch||p.youtube?'DISPONIBLES':'NO REGISTRADOS'}</strong></div><div class="modal-fact"><small>PRÓXIMO ARCHIVO</small><strong>NO REGISTRADO</strong></div><div class="modal-fact"><small>RELACIONES</small><strong>████████</strong></div></div>${links?`<div class="modal-links">${links}</div>`:''}`;document.getElementById('playerModal').classList.add('open');document.getElementById('playerModal').setAttribute('aria-hidden','false')}
playerGrid.addEventListener('click',e=>{const card=e.target.closest('.player-card');if(card)openPlayer(card.dataset.player)});
playerGrid.addEventListener('keydown',e=>{if(e.key==='Enter'){const card=e.target.closest('.player-card');if(card)openPlayer(card.dataset.player)}});

const timelineEl=document.getElementById('timeline');timelineEl.innerHTML=timeline.map(t=>`<article class="lore-item"><small>${t.date}</small><h3>${t.title}</h3></article>`).join('');
const charGrid=document.getElementById('characterGrid');charGrid.innerHTML=characters.map(c=>`<article class="character-card"><div class="char-photo"><span class="silhouette-label">IDENTIDAD OCULTA</span></div><h3>${c.name}</h3><small>TRABAJO: ${c.role}</small><p>${c.desc}</p><span class="char-status">${c.status}</span></article>`).join('');

const filter=document.getElementById('playerFilter');
const clipGrid=document.getElementById('clipGrid');
const clipFeature=document.getElementById('clipFeature');
function clipKey(c){return `${c.platform}|${c.id||c.videoId||c.url||''}`}
let selectedClipKey = null;
function renderClipFeature(c){
  const screen=clipFeature.querySelector('.clip-screen');
  if(!c){
    screen.innerHTML='<div class="live-placeholder">NO HAY CLIPS DISPONIBLES TODAVÍA</div>';
    document.getElementById('featurePlayer').textContent='—';
    document.getElementById('featureTitle').textContent='Sin registros';
    document.getElementById('featureHeading').textContent='No hay clips todavía';
    document.getElementById('featureDescription').textContent='Los clips aparecerán cuando comience el evento y se publiquen en los canales participantes.';
    document.getElementById('featureDuration').textContent='—';
    document.getElementById('featurePlatform').textContent='—';
    return;
  }
  document.getElementById('featurePlayer').textContent=c.player||'DESCONOCIDO';
  document.getElementById('featureTitle').textContent=c.title||'Clip';
  document.getElementById('featureHeading').textContent=c.title||'Clip';
  document.getElementById('featureDescription').textContent=c.description||'Momento recuperado de una transmisión del evento.';
  document.getElementById('featureDuration').textContent=c.duration||'—';
  document.getElementById('featurePlatform').textContent=c.platform||'—';
  let src='';
  if(c.platform==='TWITCH'){
    const parent=location.hostname;
    if(parent) src=`https://clips.twitch.tv/embed?clip=${encodeURIComponent(c.id)}&parent=${encodeURIComponent(parent)}&autoplay=true&muted=true&preload=auto`;
  }else if(c.platform==='YOUTUBE' && c.videoId){
    src=`https://www.youtube.com/embed/${encodeURIComponent(c.videoId)}?autoplay=1&mute=1&rel=0`;
  }
  if(src){
    screen.innerHTML=`<iframe src="${src}" title="${(c.title||'Clip').replace(/"/g,'&quot;')}" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen></iframe><div class="scanline"></div>`;
  }else{
    screen.innerHTML='<div class="live-placeholder">ABRIR CLIP PARA REPRODUCIR</div>';
  }
}
function renderClips(){
  const v=filter.value;
  const list=v==='all'?clips:clips.filter(c=>c.player===v);
  clipGrid.innerHTML=list.map(c=>{
    const thumb=c.thumbnail ? ` style="background-image:url('${c.thumbnail.replace(/'/g,'%27')}')"` : '';
    return `<article class="clip-card" data-clip-key="${clipKey(c)}"><div class="clip-thumb"${thumb}></div><div class="clip-card-body"><small>${c.player||'DESCONOCIDO'} · ${c.platform}</small><strong>${c.title||'Clip'}</strong><span>${c.duration||'—'} · ${c.createdAt?new Date(c.createdAt).toLocaleDateString('es-ES'):''}</span></div></article>`;
  }).join('') || '<div class="clip-empty">NO HAY CLIPS PARA ESTE FILTRO.</div>';
}
function setClipFilters(){
  const current=filter.value;
  const names=[...new Set(clips.map(c=>c.player).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'es'));
  filter.innerHTML='<option value="all">TODOS</option>'+names.map(n=>`<option value="${n.replace(/"/g,'&quot;')}">${n}</option>`).join('');
  if(names.includes(current)) filter.value=current; else filter.value='all';
}
function selectClip(c){ selectedClipKey=c?clipKey(c):null; renderClipFeature(c||null); }
filter.addEventListener('change',()=>{
  renderClips();
  const list=filter.value==='all'?clips:clips.filter(c=>c.player===filter.value);
  selectClip(list[0]||null);
});
document.getElementById('randomClip').addEventListener('click',()=>{
  const list=filter.value==='all'?clips:clips.filter(c=>c.player===filter.value);
  if(list.length){ selectClip(list[Math.floor(Math.random()*list.length)]); clipFeature.scrollIntoView({behavior:'smooth',block:'center'}); }
});
clipGrid.addEventListener('click',e=>{
  const card=e.target.closest('.clip-card');
  if(!card)return;
  const clip=clips.find(c=>clipKey(c)===card.dataset.clipKey);
  if(clip){ selectClip(clip); clipFeature.scrollIntoView({behavior:'smooth',block:'center'}); }
});
async function loadClips(){
  try{
    const res=await fetch('/api/clips',{cache:'no-store'});
    if(!res.ok)throw new Error(`HTTP ${res.status}`);
    const payload=await res.json();
    const previousKey=selectedClipKey;
    clips=Array.isArray(payload.clips)?payload.clips:[];
    clipDataLoaded=true;
    setClipFilters();
    renderClips();
    const current=filter.value==='all'?clips:clips.filter(c=>c.player===filter.value);
    const stillSelected=current.find(c=>clipKey(c)===previousKey);
    if(stillSelected){
      // Keep the current iframe alive when the 60s refresh finds no change.
      // Re-rendering it would restart the clip.
      const currentKey=selectedClipKey;
      if(currentKey!==clipKey(stillSelected)) selectClip(stillSelected);
    }else{
      selectClip(current[0]||null);
    }
  }catch(err){
    console.error('No se pudieron cargar los clips',err);
    clips=[]; renderClips(); selectClip(null);
  }
}
loadClips();
setInterval(loadClips,60*1000);

document.getElementById('modalClose').addEventListener('click',()=>document.getElementById('playerModal').classList.remove('open'));document.getElementById('playerModal').addEventListener('click',e=>{if(e.target.id==='playerModal')e.currentTarget.classList.remove('open')});
window.addEventListener('scroll',()=>document.querySelector('.topbar').classList.toggle('scrolled',scrollY>40));
