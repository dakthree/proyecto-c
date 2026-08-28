const EVENT_DATE = '2026-08-28T18:00:00+02:00';
const APP_VERSION = "2026-08-28-c15dab0-1324";

const players = [
{id:'solcius',name:'Solcius',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'dead',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/Solcius',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'abost',name:'Abost',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Guía de pesca',positiveTraits:'Amante de la naturaleza, Manitas',negativeTraits:'Claustrofóbico, Dormilón',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'acedion87',name:'Acedion87',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Ingeniero',positiveTraits:'Herreria, Mecánico aficionado',negativeTraits:'Hemofóbico, Propenso a enfermar',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'andreshouse',name:'Andreshouse',image:'/assets/players/andreshouse.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Reparador',positiveTraits:'Artesano, Tallador',negativeTraits:'Dominguero, Pacifista',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'anselhoenheim',name:'AnselHoenheim',image:'/assets/players/anselhoenheim.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/anselhoenheim',youtube:'https://www.youtube.com/@AnselHoenheim',bio:'Perfil pendiente de información del personaje.'},
{id:'arce',name:'ArCe',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Monitor de fitness',positiveTraits:'Robusto, Jugador de beisbol',negativeTraits:'Piel fina, Desordenado',twitch:'https://www.twitch.tv/arcedelah',youtube:'https://www.youtube.com/@arcedelah',bio:'Perfil pendiente de información del personaje.'},
{id:'asssucar',name:'Asssucar',image:'/assets/players/asssucar.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/asssucar',youtube:'https://www.youtube.com/@asssucar',bio:'Perfil pendiente de información del personaje.'},
{id:'basquewanderer',name:'BasqueWanderer',image:'/assets/players/basquewanderer.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Herrero',positiveTraits:'Tallador, Aprendiz rápido',negativeTraits:'Hemofóbico, Asmático',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'brunusop',name:'BrunusOP',image:'/assets/players/brunusop.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Atlético, Fuerte',negativeTraits:'Analfabeto, Cobarde',twitch:'https://www.twitch.tv/brunusop',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'cere',name:'Cere',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Monitor de fitness',positiveTraits:'Gimnasta, Demonio de la velocidad',negativeTraits:'Desordenado, Dormilón',twitch:'https://www.twitch.tv/cere____',youtube:'https://www.youtube.com/channel/UCE1ISk9jQb7ykFQXy56NbaA',bio:'Perfil pendiente de información del personaje.'},
{id:'elpelas97',name:'elpelas97',image:'/assets/players/elpelas97.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Ganadero',positiveTraits:'Viejo explorador, Cazador',negativeTraits:'Sueño inquieto, Claustrofóbico',twitch:null,twitch:'https://www.twitch.tv/elpelas97',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'elponja92',name:'ElPonja92',image:'/assets/players/elponja92.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Veterano',positiveTraits:'Vista de águila, Hábil',negativeTraits:'Propenso a enfermar, Dormilón',twitch:'https://www.twitch.tv/elponja92',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'emiliano-roca',name:'Emiliano Roca',image:'/assets/players/emiliano-roca.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Peleón, Robusto',negativeTraits:'Mucha sed, Dedos gordos',twitch:'https://www.twitch.tv/emilianorocaa',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'evarath',name:'evarath',image:'/assets/players/evarath.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Guía de pesca',positiveTraits:'Oído fino, Tallador',negativeTraits:'Torpe, Visible',twitch:'https://www.twitch.tv/evarathz',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'ferrox',name:'Ferrox',image:'/assets/players/ferrox.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Oído fino, Vista de águila',negativeTraits:'Cobarde',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'bertok',name:'Bertok',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Electricista',positiveTraits:'Manitas, Mecánico aficionado',negativeTraits:'Propenso a enfermar, Hemofóbico',twitch:null,twitch:'https://www.twitch.tv/el_bertok',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'fichi',name:'Fichi',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Obrero',positiveTraits:'Artesano, Piel dura',negativeTraits:'Enclenque, Fuera de forma',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'fetodevaca',name:'Fetodevaca',image:'/assets/players/fetodevaca.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Obrero',positiveTraits:'Albañil, Peleón',negativeTraits:'Aprendiz lento, Duro de oído',twitch:'https://www.twitch.tv/fetodevaca',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'goblinpeke',name:'GoblinPeke',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Obrero metalúrgico',positiveTraits:'Jugador de beisbol, Peleón',negativeTraits:'Sueño inquieto, Propenso a enfermar',twitch:'https://www.twitch.tv/goblinpeke',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'hax',name:'Hax',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Aprendiz de cocina',positiveTraits:'Insomne, Oido fino',negativeTraits:'Miope, Asmático',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'josuetn',name:'JosueTn',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Gimnasta, Conocimiento de la Naturaleza',negativeTraits:'Dominguero, Propenso a enfermar',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'juanen',name:'Juanen',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Guardia forestal',positiveTraits:'Peleón, Meticuloso',negativeTraits:'Sueño inquieto, hemofobia',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'k4la',name:'K4la',image:'/assets/players/k4la.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Leñador',positiveTraits:'En forma, Robusto',negativeTraits:'Piel Fina, Visible',twitch:null,youtube:'https://www.youtube.com/@k4la_',bio:'Perfil pendiente de información del personaje.'},
{id:'kira',name:'Kira',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Veterano',positiveTraits:'Cocinar, Socorrista',negativeTraits:'Fumador, Visible',twitch:'https://www.twitch.tv/og_kiradr',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'lagatarata',name:'LaGataRata',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/xkattty',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'leissar',name:'Leissar',image:'/assets/players/leissar.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Mecánico',positiveTraits:'Meticuloso, Inventivo',negativeTraits:'Metabolismo lento, Propenso a enfermar',twitch:'https://www.twitch.tv/leissar',youtube:'https://www.youtube.com/channel/UCU6dXXNTstf2_J9rl-BV__A',bio:'Perfil pendiente de información del personaje.'},
{id:'liss',name:'Liss',image:'/assets/players/liss.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Enfermera',positiveTraits:'Meticuloso, Organizado',negativeTraits:'Asmático, Fumador',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'lordzacas',name:'lordzacas',image:'/assets/players/lordzacas.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Peleón, Sanador rápido',negativeTraits:'Comilón',twitch:'https://www.twitch.tv/lordzacas',youtube:'https://www.youtube.com/@lordzacas3015',bio:'Perfil pendiente de información del personaje.'},
{id:'luisgg',name:'LuisGG',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Bombero',positiveTraits:'En forma, Meticuloso',negativeTraits:'Desordenado, Comilón',twitch:null,youtube:'https://www.youtube.com/@luisgamingg',bio:'Perfil pendiente de información del personaje.'},
{id:'magikos',name:'Magikos',image:'/assets/players/magikos.jpg',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Herrero',positiveTraits:'Artesano, Inventivo',negativeTraits:'Duro de oído, Miope',twitch:'https://www.twitch.tv/m4gikos',youtube:'https://www.youtube.com/@M4gikos',bio:'Perfil pendiente de información del personaje.'},
{id:'meremiau',name:'meremiau',image:'/assets/players/meremiau.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Reparador',positiveTraits:'Mañoso, Mecánico aficionado',negativeTraits:'Asmático, Fumador',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'miguel',name:'Miguel',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Sin rasgos positivos',negativeTraits:'Sin rasgos negativos',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'miniarre',name:'Miniarre',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Obrero metalúrgico',positiveTraits:'Organizado, Hábil',negativeTraits:'Comilón, Mucha sed',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'miniyo2',name:'Miniyo2',image:'/assets/players/miniyo2.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/miniyo2',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'nemma',name:'Nemma',image:'/assets/players/nemma.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Cocinero',positiveTraits:'Vista de águila, Amante de la naturaleza',negativeTraits:'Dormilón, Comilón',twitch:'https://www.twitch.tv/nemmacanon',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'pupi',name:'pupi',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Ganadero',positiveTraits:'Atlético, Amante de la naturaleza',negativeTraits:'Piel fina, Torpe',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'rastafrikki',name:'RastaFrikki',image:'/assets/players/rastafrikki.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Piel Dura, Conocimiento de la naturaleza',negativeTraits:'Aprendiz lento, Metabolismo rápido',twitch:'https://www.twitch.tv/rastafrikki',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'romgarrr',name:'romgarrr',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'rubaso',name:'Rubaso',image:'/assets/players/rubaso.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Guardia forestal',positiveTraits:'Conocimiento de la naturaleza, Viejo explorador',negativeTraits:'Claustrofóbico, Visible',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'sarah',name:'Sarah',image:'/assets/players/sarah.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Carpintero',positiveTraits:'Inventivo, Mañoso',negativeTraits:'Pacifista, Dominguero',twitch:'https://www.twitch.tv/sarahgk92',youtube:'https://www.youtube.com/sarahgk92',bio:'Perfil pendiente de información del personaje.'},
{id:'shikafu6',name:'Shikafu6',image:'/assets/players/shikafu6.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Cocinar, Excursionista',negativeTraits:'Sin rasgos negativos',twitch:'https://www.twitch.tv/shikafu6',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'soulreaperdk',name:'SoulReaperDK',image:'/assets/players/soulreaperdk.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Electricista',positiveTraits:'Gimnasta, Jugador de beisbol',negativeTraits:'Visible, Sanador lento',twitch:'https://www.twitch.tv/soulreaperdk_',youtube:'https://www.youtube.com/channel/UCwvqn9OZhmkLBjHOw0us5ZA',bio:'Perfil pendiente de información del personaje.'},
{id:'storvi',name:'Storvi',image:'/assets/players/storvi.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/storviii',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'tamashiiv',name:'TAMASHIIV',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Guardia de seguridad',positiveTraits:'Albañil, Artesano',negativeTraits:'Cobarde, Comilón',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'batracio',name:'Batracio',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Conocimiento de la naturaleza, Manitas',negativeTraits:'Claustrofóbico, Visible',twitch:'https://www.twitch.tv/batraciosr',youtube:'https://www.youtube.com/@batraciosr',bio:'Perfil pendiente de información del personaje.'},
{id:'tencachi',name:'Tencachy',image:'/assets/players/tencachi.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'terohis',name:'Terohis',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Sastre',positiveTraits:'Costurero, En forma',negativeTraits:'Dormilón, Cobarde',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'titohc',name:'Titohc',image:'/assets/players/titohc.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Guardia de seguridad',positiveTraits:'Peleón, Socorrista',negativeTraits:'Sueño inquieto, Dedos gordos',twitch:'https://www.twitch.tv/tit0hc',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'toni18',name:'Toni18',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Agente de policía',positiveTraits:'Demonio de la velocidad, Jugador de beisbol',negativeTraits:'Fumador, Aprendiz lento',twitch:'https://www.twitch.tv/tonism18',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'tyzenh',name:'TyzenH',image:'/assets/players/tyzenh.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Aprendiz de cocina',positiveTraits:'Comedor ligero, Pescador',negativeTraits:'Dedos gordos, Metabolismo rápido',twitch:'https://www.twitch.tv/tyzenh',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'vichum',name:'vichum',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Médico',positiveTraits:'Hábil, Socorrista',negativeTraits:'Sanador lento, Dominguero',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'xl-k-vic',name:'xL𝑜K𝑜Vic',image:'/assets/players/xlokovic.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Cocinero',positiveTraits:'Peléon, Fuerte',negativeTraits:'Piel fina, Visible',twitch:'https://www.twitch.tv/xlokovic',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'yonkimiyagui',name:'yonkimiyagui',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Ingeniero',positiveTraits:'Hábil, Organizado',negativeTraits:'Agorafóbico, Estómago delicado',twitch:'https://www.twitch.tv/miyagui85',youtube:'https://www.youtube.com/channel/UCA-epNDDfdH1JzJOJf0pnCA',bio:'Perfil pendiente de información del personaje.'},
{id:'z3ttii',name:'Z3TTII',image:'/assets/players/z3ttii.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/z3ttii',youtube:'https://www.youtube.com/@Z3TTII',bio:'Perfil pendiente de información del personaje.'},
{id:'zelune',name:'Zelune',image:'/assets/players/zelune.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Granjero',positiveTraits:'Tirador de precisión, Hábil',negativeTraits:'Fumador, Comilón',twitch:'https://www.twitch.tv/Zelune86',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'zigurathz',name:'zigurathz',image:'/assets/players/zigurathz.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/zigurathz',youtube:'https://www.youtube.com/channel/UC36C8AulCMw5QAUV5wrfQpg',bio:'Perfil pendiente de información del personaje.'},
{id:'zonenzonao',name:'Zonenzonao',image:'/assets/players/zonenzonao.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/zonenzonao',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'zripht',name:'Zripht',image:'/assets/players/zripht.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Peleón, Fuerte',negativeTraits:'Aprendiz lento, Miope',twitch:'https://www.twitch.tv/Zripht',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'winwerin',name:'winwerin',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/winwerin',youtube:null,bio:'Perfil pendiente de información del personaje.'},
  {id:'rosa-koala',name:'rosa koala',image:'/assets/players/rosa_koala.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/rosa_koala',youtube:null,bio:'Perfil pendiente de información del personaje.'}
];
const API_ENDPOINT = '/api/live';
let selectedLiveKey = null;

function liveSourceKey(source){
  if(!source) return null;
  return [source.platform, source.channel || '', source.videoId || '', source.url || ''].join('|');
}

function getTwitchParents(){
  const host = location.hostname;
  if(host === 'proyecto.win' || host === 'www.proyecto.win') return ['proyecto.win','www.proyecto.win'];
  if(!host) return [];
  return [host];
}
function twitchEmbedUrl(source){
  if (!/^https?:$/.test(location.protocol) || !location.hostname) return null;
  const parents = getTwitchParents();
  if(!parents.length) return null;
  const parentQs = parents.map(p=>`parent=${encodeURIComponent(p)}`).join('&');
  return `https://player.twitch.tv/?channel=${encodeURIComponent(source.channel)}&${parentQs}&autoplay=true`;
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
  if(source.platform === 'YOUTUBE') embed = `https://www.youtube.com/embed/${encodeURIComponent(source.videoId)}?autoplay=1&rel=0`;

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
    const res=await fetch(API_ENDPOINT + '?v=' + encodeURIComponent(APP_VERSION), {cache:'no-store'});
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
  {date:'21 AGOSTO 2026',title:'PRÓLOGO VIDEO'},
  {date:'21 AGOSTO 2026',title:'PRÓLOGO: RESUMEN'},
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

const characters = [
  {
    name:'Dr. Mercer',
    role:'CIENTÍFICO',
    status:'PARADERO DESCONOCIDO',
    desc:'Científico que estudiaba el virus en los niveles inferiores del búnker.'
  },
  {
    name:'Comandante de la División 29',
    role:'COMANDANTE',
    status:'PARADERO DESCONOCIDO',
    desc:'Paranoico, furioso y radical. Convencido de que los científicos son responsables del virus y dispuesto a eliminar cualquier amenaza para contenerlo.'
  },
  ...Array.from({length:6}, () => ({
    name:'DESCONOCIDO',
    role:'DESCONOCIDO',
    status:'DESCONOCIDO',
    desc:'DESCONOCIDA'
  }))
];

let clips = [];
let clipPlayers = [];
let clipDataLoaded = false;

const navLinks = [...document.querySelectorAll('[data-tab]')];
let previousTabId = document.querySelector('.tab-panel.active')?.id || 'inicio';
function openTab(id){
  const currentActive = document.querySelector('.tab-panel.active');
  if(currentActive && currentActive.id !== id && id === 'pl-bloqueado'){
    previousTabId = currentActive.id;
  }
  document.querySelectorAll('.tab-panel').forEach(el=>el.classList.toggle('active',el.id===id));
  navLinks.forEach(a=>a.classList.toggle('active',a.dataset.tab===id));
  history.replaceState(null,'','#'+id);
  window.scrollTo({top:0,behavior:'smooth'});
}
navLinks.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openTab(a.dataset.tab)}));
document.getElementById('pl-bloqueado')?.addEventListener('click', e=>{
  if(e.target.closest('.future-card')){
    openTab(previousTabId);
  }
});
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape' && document.getElementById('pl-bloqueado')?.classList.contains('active')){
    openTab(previousTabId);
  }
});
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
playerGrid.innerHTML=players.map(p=>`<article class="player-card ${p.status==='dead'?'player-dead':''}" data-player="${p.id}" role="button" tabindex="0"><div class="player-photo"><img src="${p.image||'/assets/silueta.png'}" alt="Imagen de ${String(p.name).replace(/"/g,'&quot;')}" loading="lazy" onerror="this.onerror=null;this.src='/assets/silueta.png';">${p.status==='dead'?'<div class="death-cross" aria-label="Participante muerto">✚</div>':''}<span class="player-status ${p.status==='dead'?'dead':'registered'}">${p.status==='dead'?'FALLECIDO':'REGISTRADO'}</span></div><div class="player-info"><small>${p.twitch?'TWITCH':p.youtube?'YOUTUBE':'SIN CANAL'}</small><h3>${p.name}</h3><p class="player-profession"><b>PROFESIÓN:</b> ${p.profession||'PENDIENTE'}</p><div class="player-tags"><span class="tag">PARTICIPANTE</span>${p.status==='dead'?'<span class="tag dead-tag">MUERTO</span>':''}${p.twitch?'<span class="tag social twitch">TWITCH</span>':''}${p.youtube?'<span class="tag social youtube">YOUTUBE</span>':''}</div><div class="player-traits"><div class="player-trait positive"><b>+</b><span>${p.positiveTraits||'PENDIENTE'}</span></div><div class="player-trait negative"><b>−</b><span>${p.negativeTraits||'PENDIENTE'}</span></div></div></div></article>`).join('');
function openPlayer(id){const p=players.find(x=>x.id===id);if(!p)return;const links=[p.twitch?`<a class="modal-link twitch" href="${p.twitch}" target="_blank" rel="noopener noreferrer">TWITCH</a>`:'',p.youtube?`<a class="modal-link youtube" href="${p.youtube}" target="_blank" rel="noopener noreferrer">YOUTUBE</a>`:''].join('');document.getElementById('modalContent').innerHTML=`<div class="modal-sub">ARCHIVO DEL PARTICIPANTE</div><div class="modal-player-photo"><img src="${p.image||'/assets/silueta.png'}" alt="Imagen de ${String(p.name).replace(/"/g,'&quot;')}"></div><h3>${p.name}</h3><div class="modal-sub">${p.status==='dead'?'FALLECIDO':'PARTICIPANTE'}</div><div class="modal-profile-facts"><div><small>PROFESIÓN</small><strong>${p.profession||'PENDIENTE'}</strong></div><div><small>RASGOS POSITIVOS</small><strong class="trait-positive-text">${p.positiveTraits||'PENDIENTE'}</strong></div><div><small>RASGOS NEGATIVOS</small><strong class="trait-negative-text">${p.negativeTraits||'PENDIENTE'}</strong></div></div><div class="modal-facts"><div class="modal-fact"><small>ESTADO</small><strong>${p.status==='dead'?'FALLECIDO':'REGISTRADO'}</strong></div><div class="modal-fact"><small>CANALES</small><strong>${p.twitch||p.youtube?'DISPONIBLES':'NO REGISTRADOS'}</strong></div><div class="modal-fact"><small>RELACIONES</small><strong>████████</strong></div></div>${links?`<div class="modal-links">${links}</div>`:''}`;document.getElementById('playerModal').classList.add('open');document.getElementById('playerModal').setAttribute('aria-hidden','false')}
playerGrid.addEventListener('click',e=>{const card=e.target.closest('.player-card');if(card)openPlayer(card.dataset.player)});
playerGrid.addEventListener('keydown',e=>{if(e.key==='Enter'){const card=e.target.closest('.player-card');if(card)openPlayer(card.dataset.player)}});

const timelineEl=document.getElementById('timeline');
const loreDetailTitle=document.getElementById('loreDetailTitle');
const loreDetailText=document.getElementById('loreDetailText');
const loreMedia=document.getElementById('loreMedia');

const loreParteII = `
<h4>La Ilusión de Seguridad</h4>
<p>Los primeros días del apocalipsis sumieron al mundo en el caos absoluto, pero un afortunado grupo de civiles (los jugadores) logró ser evacuado a un inmenso búnker subterráneo gestionado por una especie de coalición militar y científica. Durante un tiempo, la vida allí abajo parecía tranquila.</p>
<p>Sin embargo, los civiles tenían prohibido el acceso a los niveles inferiores. Allí, el <strong>Dr. Mercer y su equipo de científicos</strong> llevaban a cabo diversas pruebas e investigaciones sobre el nuevo virus que convertía a todo el infectado en un cadáver andante.</p>

<h4>El Detonante</h4>
<p>La tensión en el búnker escalaba. Los guardias veían cosas extrañas, escuchaban gritos ahogados desde los conductos y notaban que la "investigación para la cura" se parecía cada vez más a una carnicería.</p>
<p>El punto de no retorno ocurrió a la hora de la comida, en el abarrotado comedor del búnker. El <strong>Comandante de los guardias</strong>, presa de la paranoia y la furia, irrumpió en la sala flanqueado por sus hombres más leales. Agarró a uno de los científicos principales por el cuello de la bata y le exigió a gritos saber dónde demonios se escondía el Dr. Mercer y qué estaban creando realmente.</p>
<p>El científico, aterrorizado y leal a Mercer, se negó a hablar. Sin mediar una palabra más, <strong>el Comandante sacó su arma y le voló la cabeza delante de todos los civiles presentes</strong>.</p>

<h4>El Discurso y el Protocolo de Limpieza</h4>
<p>Con el cadáver del científico desangrándose en el suelo del comedor, el Comandante se dirigió a sus tropas y a los aterrorizados supervivientes. En ese instante, nació la ideología radical de <strong>La División 29</strong>.</p>
<p>El Comandante declaró que no existía ninguna cura. Acusó a los científicos del mundo de ser los verdaderos culpables de haber desatado el virus zombi por jugar a ser dioses. Dictaminó que todos los inventos de Mercer eran aberraciones biológicas y que la única forma de detener la propagación era la destrucción y la contención absoluta.</p>
<p>Su orden fue clara: <strong>Nadie ni nada sale de este búnker, excepto ellos.</strong> El Comandante y sus hombres abandonaron el comedor y fueron a activar el <strong>"Protocolo de Limpieza"</strong>: inundar el sistema de ventilación de la zona civil y científica con un gas venenoso letal para aniquilar a todos los presentes y enterrar los secretos de Mercer para siempre.</p>

<h4>La intervención de Mercer</h4>
<p>Con las alarmas sonando en rojo y el siseo del gas tóxico empezando a filtrarse por las rejillas del techo, el pánico estalló. Estaban condenados a morir asfixiados como ratas de laboratorio.</p>
<p>Pero de repente, apareció de un escondite el mismísimo <strong>Dr. Mercer</strong>. Les arrojó unas cuantas <strong>máscaras antigás</strong> y les indicó que la única forma de salir con vida era descender a los túneles del nivel inferior, una zona que ya había sido invadida por zombis errantes.</p>

<h4>El Descenso y la Huida</h4>
<p>Arriba, se escuchaban los ecos de los disparos; los guardias de la División 29 estaban ejecutando a cualquier científico o civil que intentara huir. Abajo, los jugadores tenían que abrirse paso a golpes en el lodo y la oscuridad contra los infectados que bloqueaban la salida de emergencia.</p>
<p>Tras un combate extenuante y casi sin oxígeno, los jugadores lograron llegar a la pesada escotilla de la salida de emergencia que daba al exterior. Una vez en la superficie, <strong>destrozaron y sepultaron la salida de emergencia tras ellos</strong>.</p>
<p>La División 29 quedó atrapada bajo tierra lidiando con los zombis y el gas, mientras los jugadores, agotados y traumatizados, huyeron hacia la noche.</p>
`;

const loreActoI = `
<h4>ACTO I</h4>
<p>Los jugadores que escaparon del bunker bloquearon la salida de emergencia del bunker y, junto a otros que se fueron añadiendo más tarde, acabaron por formar una comunidad en la zona de Dixie.</p>
<p>Han estado sobreviviendo por la zona como han podido durante cerca de 4 años hasta que...</p>
<p><strong>Empieza el Acto I.</strong></p>
`;
const loreActoI_Dia1 = `
<div class="lore-acto-image-wrap"><img src="assets/Acto1Dia1.png" alt="Acto I — Día 1" class="lore-acto-image" loading="lazy"></div>
` + loreActoI;

const loreEntries=timeline.map((t,i)=>({
  ...t,
  id:`lore-${i}`,
  youtube:t.title==='PRÓLOGO VIDEO'?'https://www.youtube.com/watch?v=cH18-brGf7k':null,
  htmlText:t.title==='PRÓLOGO: RESUMEN'?loreParteII:(t.title==='ACTO I'&&i===3)?loreActoI_Dia1:t.title==='ACTO I'?loreActoI:null,
  text:t.title==='PRÓLOGO VIDEO'
    ?'Archivo audiovisual correspondiente al PRÓLOGO.'
    :t.title==='PRÓLOGO: RESUMEN'
      ?'Expediente narrativo: el origen de la División 29 y la huida del búnker.'
      :t.title==='ACTO I'
        ?''
        :'Falta información'
}));

function openLoreEntry(entry,element){
  document.querySelectorAll('.lore-item').forEach(item=>item.classList.remove('active'));
  if(element) element.classList.add('active');
  if(loreDetailTitle) loreDetailTitle.textContent=`${entry.title} // ${entry.date}`;
  if(loreDetailText) loreDetailText.textContent=entry.text;
  if(!loreMedia) return;
  loreMedia.classList.remove('hidden');

  if(entry.youtube){
    let id='';
    try { id=new URL(entry.youtube).searchParams.get('v') || ''; } catch(e) {}
    loreMedia.innerHTML=id
      ? `<div class="lore-video-wrap"><iframe src="https://www.youtube.com/embed/${id}?rel=0" title="Proyecto C - ${entry.title}" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`
      : `<div class="classified-placeholder"><span>EXPEDIENTE BLOQUEADO</span><strong>Falta información</strong></div>`;
  } else if(entry.htmlText){
    loreMedia.innerHTML=`<article class="classified-lore-text">${entry.htmlText}</article>`;
  } else {
    loreMedia.innerHTML=`<div class="classified-placeholder"><span>EXPEDIENTE</span><strong>Falta información</strong><p>Este espacio queda preparado para añadir el lore de ${entry.title} cuando lo tengamos.</p></div>`;
  }
}

timelineEl.innerHTML=loreEntries.map(entry=>`<article class="lore-item ${(entry.title==='REUNIÓN'||entry.title==='PRÓLOGO VIDEO'||entry.title==='PRÓLOGO: RESUMEN')?'lore-completed':''}" data-lore-id="${entry.id}" role="button" tabindex="0" aria-label="Abrir ${entry.title}"><small>${entry.date}</small><h3>${entry.title}</h3></article>`).join('');

timelineEl.querySelectorAll('.lore-item').forEach((item,index)=>{
  const entry=loreEntries[index];
  item.addEventListener('click',()=>openLoreEntry(entry,item));
  item.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){
      e.preventDefault();
      openLoreEntry(entry,item);
    }
  });
});

const initialEntry=loreEntries.find(e=>e.title==='PRÓLOGO VIDEO') || loreEntries[0];
const initialElement=timelineEl.querySelector(`[data-lore-id="${initialEntry.id}"]`);
openLoreEntry(initialEntry,initialElement);
// Calendario clicable en portada → navegación interna a Lore sin recarga (reutiliza openTab/openLoreEntry)
(function initHomeCalendarNav(){
  const calendarMap = {
    reunion: 'lore-0',
    prologo: 'lore-1',
    'acto1-1': 'lore-3',
    'acto1-2': 'lore-4',
    'acto1-3': 'lore-5',
    'acto2-1': 'lore-7',
    'acto2-2': 'lore-8',
    'acto2-3': 'lore-9',
    'acto3-1': 'lore-11',
    'acto3-2': 'lore-12',
    'acto3-3': 'lore-13'
  };
  const attach = () => {
    document.querySelectorAll('.home-calendar [data-lore]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
        const key = btn.dataset.lore;
        const loreId = calendarMap[key];
        if(!loreId) return;
        const entry = loreEntries.find(en=>en.id===loreId);
        if(!entry) return;
        openTab('lore');
        const el = document.querySelector(`[data-lore-id="${entry.id}"]`);
        requestAnimationFrame(()=>openLoreEntry(entry, el));
      });
    });
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', attach);
  else attach();
})();
// ==================================================
// ENTRENAMIENTO — VIKTOR THORNE / RULETA RUSA (CORREGIDO)
// Flujo: POS/NEG -> TIER -> DISPARAR (random del tier) -> RESULTADO
// ==================================================
const trainingPositive = [
  {id:'001',name:'Lector rápido',cost:5, type:'positive', tier:1},
  {id:'002',name:'Sigiloso',cost:10, type:'positive', tier:1},
  {id:'003',name:'Socorrista',cost:10, type:'positive', tier:1},
  {id:'004',name:'Demonio de la velocidad',cost:15, type:'positive', tier:1},
  {id:'005',name:'Albañil',cost:15, type:'positive', tier:1},
  {id:'006',name:'Organizado',cost:15, type:'positive', tier:1},
  {id:'007',name:'Artesano',cost:20, type:'positive', tier:2},
  {id:'008',name:'Inventivo',cost:20, type:'positive', tier:2},
  {id:'009',name:'Jardinero',cost:20, type:'positive', tier:2},
  {id:'010',name:'Estómago de hierro',cost:20, type:'positive', tier:2},
  {id:'011',name:'Corredor',cost:20, type:'positive', tier:2},
  {id:'012',name:'Nutricionista',cost:20, type:'positive', tier:2},
  {id:'013',name:'Meticuloso',cost:20, type:'positive', tier:2},
  {id:'014',name:'Amante de la naturaleza',cost:25, type:'positive', tier:2},
  {id:'015',name:'Cocinar',cost:25, type:'positive', tier:2},
  {id:'016',name:'Sanador rápido',cost:25, type:'positive', tier:2},
  {id:'017',name:'Tallador',cost:30, type:'positive', tier:3},
  {id:'018',name:'Adicto a la adrenalina',cost:30, type:'positive', tier:3},
  {id:'019',name:'Jugador de béisbol',cost:30, type:'positive', tier:3},
  {id:'020',name:'Piel dura',cost:30, type:'positive', tier:3},
  {id:'021',name:'Comedor ligero',cost:35, type:'positive', tier:3},
  {id:'022',name:'Hábil',cost:35, type:'positive', tier:3},
  {id:'023',name:'Poca sed',cost:35, type:'positive', tier:3},
  {id:'024',name:'Mañoso',cost:35, type:'positive', tier:3},
  {id:'025',name:'Oído fino',cost:35, type:'positive', tier:3},
  {id:'026',name:'Insomne',cost:40, type:'positive', tier:4},
  {id:'027',name:'Mecánico aficionado',cost:40, type:'positive', tier:4},
  {id:'028',name:'Herborista',cost:40, type:'positive', tier:4},
  {id:'029',name:'Pescador',cost:40, type:'positive', tier:4},
  {id:'030',name:'Vista de águila',cost:40, type:'positive', tier:4},
  {id:'031',name:'Gimnasta',cost:40, type:'positive', tier:4},
  {id:'032',name:'Manitas',cost:40, type:'positive', tier:4},
  {id:'033',name:'Resiliente',cost:50, type:'positive', tier:4},
  {id:'034',name:'Valiente',cost:50, type:'positive', tier:4},
  {id:'035',name:'Excursionista',cost:50, type:'positive', tier:4},
  {id:'036',name:'Peleón',cost:50, type:'positive', tier:4},
  {id:'037',name:'Viejo explorador',cost:50, type:'positive', tier:4},
  {id:'038',name:'Discreto',cost:50, type:'positive', tier:4},
  {id:'039',name:'Conocimiento de la Naturaleza',cost:50, type:'positive', tier:4},
  {id:'040',name:'Tirador de precisión',cost:60, type:'positive', tier:5},
  {id:'041',name:'Aprendiz rápido',cost:60, type:'positive', tier:5},
  {id:'042',name:'En forma',cost:60, type:'positive', tier:5},
  {id:'043',name:'Robusto',cost:60, type:'positive', tier:5},
  {id:'044',name:'Cazador',cost:70, type:'positive', tier:5},
  {id:'045',name:'Atlético',cost:80, type:'positive', tier:5},
  {id:'046',name:'Fuerte',cost:80, type:'positive', tier:5}
  // 047 Ojos de gato — EXCLUIDO de la ruleta (reservado, no reutilizado)
];
const trainingSpecial = [
  {id:'048',name:'Insensible',cost:100, type:'positive', tier:'ESPECIAL'},
  {id:'049',name:'Señor de las hachas',cost:100, type:'positive', tier:'ESPECIAL'},
  {id:'050',name:'Ladrón',cost:100, type:'positive', tier:'ESPECIAL'},
  {id:'051',name:'Herrería',cost:100, type:'positive', tier:'ESPECIAL'},
  {id:'052',name:'Cocinero',cost:100, type:'positive', tier:'ESPECIAL'},
  {id:'053',name:'Mecánico',cost:100, type:'positive', tier:'ESPECIAL'},
  {id:'054',name:'Noctámbulo',cost:100, type:'positive', tier:'ESPECIAL'}
];
const trainingNegative = [
  {id:'055',name:'Lector lento',cost:0, type:'negative', tier:1},
  {id:'056',name:'Analfabeto',cost:0, type:'negative', tier:1},
  {id:'057',name:'Sordo',cost:0, type:'negative', tier:1},
  {id:'058',name:'Dominguero',cost:5, type:'negative', tier:1},
  {id:'059',name:'Cobarde',cost:5, type:'negative', tier:1},
  {id:'060',name:'Metabolismo rápido',cost:5, type:'negative', tier:1},
  {id:'061',name:'Metabolismo lento',cost:5, type:'negative', tier:1},
  {id:'062',name:'Torpe',cost:5, type:'negative', tier:1},
  {id:'063',name:'Estómago delicado',cost:5, type:'negative', tier:1},
  {id:'064',name:'Sanador lento',cost:5, type:'negative', tier:1},
  {id:'065',name:'Pacifista',cost:5, type:'negative', tier:1},
  {id:'066',name:'Propenso a enfermar',cost:5, type:'negative', tier:1},
  {id:'067',name:'Visible',cost:5, type:'negative', tier:1},
  {id:'068',name:'Hemofobia',cost:5, type:'negative', tier:1},
  {id:'069',name:'Piel fina',cost:5, type:'negative', tier:1},
  {id:'070',name:'Mucha sed',cost:10, type:'negative', tier:2},
  {id:'071',name:'Dedos gordos',cost:10, type:'negative', tier:2},
  {id:'072',name:'Fumador',cost:10, type:'negative', tier:2},
  {id:'073',name:'Agorafóbico',cost:10, type:'negative', tier:2},
  {id:'074',name:'Claustrofóbico',cost:10, type:'negative', tier:2},
  {id:'075',name:'Comilón',cost:15, type:'negative', tier:3},
  {id:'076',name:'Sueño inquieto',cost:15, type:'negative', tier:3},
  {id:'077',name:'Débil',cost:15, type:'negative', tier:3},
  {id:'078',name:'En mala forma',cost:15, type:'negative', tier:3},
  {id:'079',name:'Miope',cost:20, type:'negative', tier:3},
  {id:'080',name:'Dormilón',cost:20, type:'negative', tier:3},
  {id:'081',name:'Duro de oído',cost:20, type:'negative', tier:3},
  {id:'082',name:'Enclenque',cost:20, type:'negative', tier:3},
  {id:'083',name:'Fuera de forma',cost:20, type:'negative', tier:3},
  {id:'084',name:'Obeso',cost:20, type:'negative', tier:3},
  {id:'085',name:'Bajo peso',cost:20, type:'negative', tier:3},
  {id:'086',name:'Asmático',cost:25, type:'negative', tier:4},
  {id:'087',name:'Sobrepeso',cost:25, type:'negative', tier:4},
  {id:'088',name:'Raquítico',cost:25, type:'negative', tier:4},
  {id:'089',name:'Aprendiz lento',cost:30, type:'negative', tier:4},
  {id:'090',name:'Desordenado',cost:30, type:'negative', tier:4},
  {id:'091',name:'Demacrado',cost:30, type:'negative', tier:4}
];
const positiveTiers = [
  {id:'p1',label:'TIER 1',range:'5 — 15 PUNTOS',traits:trainingPositive.filter(t=>[5,10,15].includes(t.cost))},
  {id:'p2',label:'TIER 2',range:'20 — 25 PUNTOS',traits:trainingPositive.filter(t=>[20,25].includes(t.cost))},
  {id:'p3',label:'TIER 3',range:'30 — 35 PUNTOS',traits:trainingPositive.filter(t=>[30,35].includes(t.cost))},
  {id:'p4',label:'TIER 4',range:'40 — 50 PUNTOS',traits:trainingPositive.filter(t=>[40,50].includes(t.cost))},
  {id:'p5',label:'TIER 5',range:'60 — 80 PUNTOS',traits:trainingPositive.filter(t=>[60,70,80].includes(t.cost))},
  {id:'special',label:'TIER ESPECIAL',range:'100 PUNTOS',traits:trainingSpecial,isSpecial:true}
];
const negativeTiers = [
  {id:'n1',label:'TIER 1',range:'0 — 5 PUNTOS',traits:trainingNegative.filter(t=>t.cost===0||t.cost===5)},
  {id:'n2',label:'TIER 2',range:'10 PUNTOS',traits:trainingNegative.filter(t=>t.cost===10)},
  {id:'n3',label:'TIER 3',range:'15 — 20 PUNTOS',traits:trainingNegative.filter(t=>t.cost===15||t.cost===20)},
  {id:'n4',label:'TIER 4',range:'25 — 30 PUNTOS',traits:trainingNegative.filter(t=>t.cost===25||t.cost===30)}
];
// Pool exclusivo por tipo+tier — función pura para validación y uso (protección explícita Ojos de gato)
function getTrainingPool(selectedType, selectedTierId){
  const tiers = selectedType==='positiva'?positiveTiers:selectedType==='negativa'?negativeTiers:null;
  if(!tiers||!selectedTierId) return [];
  const tier = tiers.find(t=>t.id===selectedTierId);
  if(!tier) return [];
  // Excluir Ojos de gato (047) aunque exista en datos legacy — nunca debe estar en pool activo
  return [...tier.traits].filter(t=>t.id!=='047' && t.name!=='Ojos de gato' && t.cost!==1000000000);
}
function randomTrait(selectedType, selectedTierId){
  const pool=getTrainingPool(selectedType, selectedTierId).filter(t=>t.id!=='047' && t.name!=='Ojos de gato');
  if(!pool.length) return null;
  // Crypto random si disponible, fallback Math.random
  let idx;
  try{
    const arr=new Uint32Array(1);
    crypto.getRandomValues(arr);
    idx=arr[0]%pool.length;
  }catch(e){ idx=Math.floor(Math.random()*pool.length); }
  return pool[idx];
}
(function initTraining(){
  const stageEl=document.getElementById('trainingStage');
  if(!stageEl) return;
  const revolver=document.getElementById('revolverCylinder');
  const flash=document.getElementById('revolverFlash');
  const smoke=document.getElementById('revolverSmoke');
  const statusEl=document.getElementById('trainingStatus');
  const choiceEl=document.getElementById('trainingChoice');
  const tiersEl=document.getElementById('trainingTiers');
  const disparoEl=document.getElementById('trainingDisparo');
  const resultEl=document.getElementById('trainingResult');
  const tierGrid=document.getElementById('trainingTierGrid');
  const tiersLabel=document.getElementById('trainingTiersLabel');
  const disparoLabel=document.getElementById('trainingDisparoLabel');
  const disparoBtn=document.getElementById('trainingDisparoBtn');
  let isSpinning=false;
  let selectedType=null; // 'positiva' | 'negativa'
  let selectedTier=null;
  let currentRotation=0;
  let lastVisual=null;
  function showOnly(...els){
    [choiceEl,tiersEl,disparoEl,resultEl].forEach(e=>e&&e.classList.add('hidden'));
    els.forEach(e=>e&&e.classList.remove('hidden'));
  }
  function resetTraining(){
    isSpinning=false;
    selectedType=null;
    selectedTier=null;
    if(disparoBtn) disparoBtn.disabled=false;
    if(statusEl){statusEl.textContent='ELIGE TU TIRADA';statusEl.classList.remove('firing');}
    // Conservar orientación del cilindro, no reset a 0
    if(flash) flash.classList.remove('active');
    if(smoke) smoke.classList.remove('active');
    showOnly(choiceEl);
    if(stageEl) stageEl.dataset.stage='choice';
  }
  function renderTierGrid(type){
    const tiers = type==='positiva'?positiveTiers:negativeTiers;
    if(!tierGrid) return;
    tierGrid.innerHTML=tiers.map(t=>`
      <button type="button" class="training-tier-card ${t.isSpecial?'training-tier-card--special':''}" data-tier="${t.id}" aria-label="${t.label}">
        <strong>${t.label}</strong>
      </button>
    `).join('');
    tierGrid.querySelectorAll('.training-tier-card').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const tierId=btn.dataset.tier;
        const tier=tiers.find(x=>x.id===tierId);
        if(!tier) return;
        selectedTier=tier;
        if(disparoLabel) disparoLabel.textContent=`TIER SELECCIONADO: ${tier.label}`;
        showOnly(disparoEl);
        if(stageEl) stageEl.dataset.stage='disparo';
        if(statusEl) statusEl.textContent=`${tier.label} — LISTO PARA DISPARAR`;
      });
    });
  }
  function showResult(type, tierLabel, picked){
    const isPos=type==='positiva';
    const typeEl=document.getElementById('resultType');
    const tierEl=document.getElementById('resultTier');
    const numberEl=document.getElementById('resultNumber');
    if(typeEl) typeEl.textContent=isPos?'POSITIVA':'NEGATIVA';
    if(typeEl) typeEl.style.color=isPos?'#8ea07a':'#b7463b';
    if(tierEl) tierEl.textContent=tierLabel;
    if(numberEl) numberEl.textContent=picked.id;
    // No exponer nombre ni coste en DOM visible, solo ID — nombre/coste solo interno
    if(numberEl){ numberEl.removeAttribute('title'); numberEl.removeAttribute('aria-label'); }
    // Coste interno conservado pero NUNCA renderizado (requisito 1)
    showOnly(resultEl);
    if(stageEl) stageEl.dataset.stage='result';
  }
  function spinAndResolve(){
    if(isSpinning||!selectedType||!selectedTier) return;
    isSpinning=true;
    if(disparoBtn) disparoBtn.disabled=true;
    if(statusEl){statusEl.textContent='GIRANDO EL CILINDRO...';statusEl.classList.add('firing');}
    // Visual random independiente del RNG del rasgo
    let visualTurns, visualAngle, visualDuration;
    try{
      const a=new Uint32Array(3);
      crypto.getRandomValues(a);
      visualTurns=4 + (a[0]%4); // 4-7 vueltas
      visualAngle=a[1]%360;
      visualDuration=1400 + (a[2]%800); // 1400-2199ms
    }catch(e){
      visualTurns=4 + Math.floor(Math.random()*4);
      visualAngle=Math.floor(Math.random()*360);
      visualDuration=1400 + Math.floor(Math.random()*800);
    }
    const delta=visualTurns*360 + visualAngle;
    const targetRotation=currentRotation + delta;
    lastVisual={turns:visualTurns, angle:visualAngle, duration:visualDuration, from:currentRotation%360, to:targetRotation%360, total:targetRotation};
    if(revolver){
      revolver.style.transition=`transform ${visualDuration}ms cubic-bezier(.25,.46,.45,.94)`;
      void revolver.offsetWidth;
      revolver.style.transform=`rotate(${targetRotation}deg)`;
    }
    if(stageEl) stageEl.dataset.stage='spinning';
    setTimeout(()=>{
      if(flash){flash.classList.remove('active');void flash.offsetWidth;flash.classList.add('active');}
      if(smoke){smoke.classList.remove('active');void smoke.offsetWidth;smoke.classList.add('active');}
      if(statusEl){statusEl.textContent='¡DISPARO!';}
      try{if(navigator.vibrate) navigator.vibrate(60);}catch(e){}
    }, Math.max(0, visualDuration - 250));
    setTimeout(()=>{
      const picked=randomTrait(selectedType, selectedTier.id);
      isSpinning=false;
      currentRotation=targetRotation; // conservar orientación para siguiente tirada, sin salto
      if(statusEl){statusEl.textContent='TIRADA COMPLETADA';statusEl.classList.remove('firing');}
      if(picked){
        // Guardar visual para validación (no visible al jugador, solo para tests)
        window.__trainingLastVisual={...lastVisual, pickedId:picked.id, pickedName:picked.name};
        showResult(selectedType, selectedTier.label, picked);
      } else {
        if(statusEl) statusEl.textContent='ERROR: POOL VACÍO';
        if(disparoBtn) disparoBtn.disabled=false;
      }
    }, visualDuration + 120);
  }
  const posBtn=document.getElementById('trainingPositiveBtn');
  const negBtn=document.getElementById('trainingNegativeBtn');
  if(posBtn) posBtn.addEventListener('click',()=>{
    selectedType='positiva';
    if(tiersLabel) tiersLabel.textContent='TIERS POSITIVOS — ELIGE UNO';
    renderTierGrid('positiva');
    showOnly(tiersEl);
    if(stageEl) stageEl.dataset.stage='tiers';
    if(statusEl) statusEl.textContent='SELECCIONA TIER POSITIVO';
  });
  if(negBtn) negBtn.addEventListener('click',()=>{
    selectedType='negativa';
    if(tiersLabel) tiersLabel.textContent='TIERS NEGATIVOS — ELIGE UNO';
    renderTierGrid('negativa');
    showOnly(tiersEl);
    if(stageEl) stageEl.dataset.stage='tiers';
    if(statusEl) statusEl.textContent='SELECCIONA TIER NEGATIVO';
  });
  if(disparoBtn) disparoBtn.addEventListener('click',spinAndResolve);
  const backFromTiers=document.getElementById('trainingBackFromTiers');
  if(backFromTiers) backFromTiers.addEventListener('click',()=>{
    showOnly(choiceEl);
    if(stageEl) stageEl.dataset.stage='choice';
    if(statusEl) statusEl.textContent='ELIGE TU TIRADA';
  });
  const backFromDisparo=document.getElementById('trainingBackFromDisparo');
  if(backFromDisparo) backFromDisparo.addEventListener('click',()=>{
    if(selectedType) renderTierGrid(selectedType);
    showOnly(tiersEl);
    if(stageEl) stageEl.dataset.stage='tiers';
    if(statusEl) statusEl.textContent='SELECCIONA TIER';
  });
  const resetBtn=document.getElementById('trainingResetBtn');
  if(resetBtn) resetBtn.addEventListener('click',resetTraining);
  // Estado inicial: elección visible
  showOnly(choiceEl);
  if(stageEl) stageEl.dataset.stage='choice';
  if(statusEl) statusEl.textContent='ELIGE TU TIRADA';
  // Exponer para tests automatizados (no afecta producción)
  window.__trainingTest={getPool:getTrainingPool,randomTrait,positiveTiers,negativeTiers,trainingPositive,trainingSpecial,trainingNegative};
})();
const charGrid=document.getElementById('characterGrid');charGrid.innerHTML=characters.map(c=>`<article class="character-card"><div class="char-photo"><img src="/assets/silueta.png" alt="Silueta de personaje desconocido" loading="lazy" onerror="this.onerror=null;this.src='/assets/silueta.png';"><span class="silhouette-label">IDENTIDAD OCULTA</span></div><h3>${c.name}</h3><small>TRABAJO: ${c.role}</small><p>${c.desc}</p><span class="char-status">${c.status}</span></article>`).join('');

const inputJugador=document.getElementById('input-jugador');
const jugadorDropdown=document.getElementById('lista-jugadores');
const jugadorCombobox=document.getElementById('jugador-combobox');
const jugadorArrow=document.getElementById('jugador-combobox-arrow');
const clipGrid=document.getElementById('clipGrid');
let jugadoresConTwitch=[];
let jugadoresListaCargada=false;

const clipFeature=document.getElementById('clipFeature');
const clipContainerId='contenedor-iframe-clip';
const clipContainer=()=>document.getElementById(clipContainerId);
let selectedClipKey=null;
let selectedClip=null;
let clipActualSlug=null;

function clipKey(c){ return `${c.platform}|${c.id||c.videoId||c.url||''}`; }

function twitchClipSrc(c){
  if(!c?.id) return '';
  const parents = getTwitchParents();
  if(!parents.length) return '';
  const params=new URLSearchParams();
  params.set('clip', String(c.id));
  parents.forEach(p=>params.append('parent', p));
  params.set('autoplay','true');
  return `https://clips.twitch.tv/embed?${params.toString()}`;
}
function youtubeClipSrc(c){
  if(!c?.videoId) return '';
  return `https://www.youtube.com/embed/${encodeURIComponent(c.videoId)}?autoplay=1&rel=0&playsinline=1`;
}

function renderClipText(c){
  document.getElementById('featurePlayer').textContent=c?.player||'—';
  document.getElementById('featureTitle').textContent=c?.title||'Registro seleccionado';
  document.getElementById('featureHeading').textContent=c?.title||'Selección de clip';
  document.getElementById('featureDescription').textContent=c?.description||'Aquí aparecerá la información del clip seleccionado.';
  document.getElementById('featureDuration').textContent=c?.duration||'—';
  document.getElementById('featurePlatform').textContent=c?.platform||'—';
}

function reproducirClip(slug, esClickManual=false, clipObj=null){
  if(!slug) return;
  console.log('--- INICIANDO CAMBIO DE CLIP ---');
  console.log('Slug recibido en la función:', slug);
  console.log('¿Fue click manual del usuario?:', esClickManual);

  if(!esClickManual && clipActualSlug !== null){
    console.log('Refresh automático bloqueado: el usuario ya está viendo el clip', clipActualSlug);
    return;
  }

  const c=clipObj || clips.find(x=>String(x.id||x.videoId||'')===String(slug));
  if(!c) return;
  selectedClip=c;
  selectedClipKey=clipKey(c);
  clipActualSlug=String(slug);
  renderClipText(c);

  const contenedorReproductor=clipContainer();
  if(!contenedorReproductor){
    console.error('No existe #contenedor-iframe-clip');
    return;
  }

  let urlFinal='';
  if(c.platform==='TWITCH') urlFinal=twitchClipSrc(c);
  else if(c.platform==='YOUTUBE') urlFinal=youtubeClipSrc(c);

  if(!urlFinal){
    contenedorReproductor.innerHTML=`<div class="live-placeholder">NO SE PUEDE INSERTAR ESTE CLIP.<br><a href="${c.url||'#'}" target="_blank" rel="noopener noreferrer">ABRIR EN ${c.platform==='TWITCH'?'TWITCH':'YOUTUBE'} ↗</a></div>`;
  }else{
    console.log('URL final del iframe:', urlFinal);
    contenedorReproductor.innerHTML='';
    setTimeout(()=>{
      if(String(clipActualSlug)!==String(slug)) return;
      contenedorReproductor.innerHTML='';
      const iframe=document.createElement('iframe');
      iframe.className='clip-iframe';
      iframe.src=urlFinal;
      iframe.title=c.title||`Clip de ${c.player||'Proyecto C'}`;
      iframe.frameBorder='0';
      iframe.scrolling='no';
      iframe.allowFullscreen=true;
      iframe.allow='autoplay; fullscreen; encrypted-media; picture-in-picture';
      iframe.loading='eager';
      iframe.referrerPolicy='strict-origin-when-cross-origin';
      iframe.dataset.clipId=String(slug);
      contenedorReproductor.appendChild(iframe);
      const scan=document.createElement('div');
      scan.className='scanline';
      contenedorReproductor.appendChild(scan);
      console.log('Iframe recreado e insertado en el DOM para slug:', slug);
    },50);
  }

  document.querySelectorAll('.tarjeta-clip, .clip-card').forEach(tarjeta=>{
    const key=tarjeta.dataset.clipKey;
    tarjeta.classList.toggle('clip-seleccionado',key===selectedClipKey);
    tarjeta.classList.toggle('selected',key===selectedClipKey);
  });
}

function renderClips(){
  const v=getClipFilterValue();
  const list=filterClipsByValue(v);
  clipGrid.innerHTML=list.map(c=>{
    const thumb=c.thumbnail ? ` style="background-image:url('${String(c.thumbnail).replace(/'/g,'%27')}')"` : '';
    const key=clipKey(c).replace(/&/g,'&amp;').replace(/"/g,'&quot;');
    const slug=String(c.id||c.videoId||'');
    return `<button type="button" class="clip-card tarjeta-clip" data-clip-key="${key}" data-slug="${slug.replace(/"/g,'&quot;')}" aria-label="Reproducir ${String(c.title||'clip').replace(/"/g,'&quot;')}"><div class="clip-thumb"${thumb}></div><div class="clip-card-body"><small>${c.player||'DESCONOCIDO'} · ${c.platform}</small><strong>${c.title||'Clip'}</strong><span>${c.duration||'—'} · ${c.createdAt?new Date(c.createdAt).toLocaleString('es-ES'):''}</span></div></button>`;
  }).join('') || '<div class="clip-empty">NO HAY CLIPS PARA ESTE FILTRO.</div>';

  document.querySelectorAll('.clip-card').forEach(card=>{
    const key=card.dataset.clipKey;
    card.classList.toggle('selected',key===selectedClipKey);
    card.classList.toggle('clip-seleccionado',key===selectedClipKey);
  });
}

function normalizarTexto(value){
  return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
}

async function cargarListaJugadores(){
  if(!jugadorDropdown || jugadoresListaCargada) return;

  const base=new Map(
    players
      .filter(p=>p?.twitch)
      .map(p=>[normalizarTexto(p.name), {name:p.name, twitch:p.twitch}])
  );

  // live-channels.json is the source of truth for all explicit Twitch associations.
  try{
    const res=await fetch('/live-channels.json?v=' + encodeURIComponent(APP_VERSION));
    if(res.ok){
      const rows=await res.json();
      if(Array.isArray(rows)){
        rows.filter(r=>r?.twitch).forEach(r=>{
          const key=normalizarTexto(r.player);
          if(!base.has(key)) base.set(key,{name:r.player,twitch:r.twitch});
        });
      }
    }
  }catch(err){
    console.warn('No se pudo leer live-channels.json para el filtro de clips:',err);
  }

  jugadoresConTwitch=[...base.values()].sort((a,b)=>a.name.localeCompare(b.name,'es',{sensitivity:'base'}));
  jugadoresListaCargada=true;
  renderJugadorDropdown('');
}

function renderJugadorDropdown(query=''){
  if(!jugadorDropdown) return;
  const q=normalizarTexto(query);
  const filtered=jugadoresConTwitch.filter(j=>!q || normalizarTexto(j.name).includes(q));

  const items=[{name:'TODOS',value:'',all:true},...filtered];
  jugadorDropdown.innerHTML=items.map((item,index)=>{
    const active=getClipFilterValue()===(item.value||'') ? ' active' : '';
    return `<button type="button" class="jugador-option${active}" role="option" data-value="${String(item.value||'').replace(/"/g,'&quot;')}" data-name="${String(item.name).replace(/"/g,'&quot;')}" aria-selected="${active?'true':'false'}">${item.name}</button>`;
  }).join('') || '<div class="jugador-dropdown-empty">NO HAY COINCIDENCIAS</div>';
}

function abrirJugadorDropdown(showAll=false){
  if(!jugadorDropdown) return;
  if(showAll) renderJugadorDropdown(''); else renderJugadorDropdown(inputJugador?.value||'');
  jugadorDropdown.classList.add('open');
  inputJugador?.setAttribute('aria-expanded','true');
}

function cerrarJugadorDropdown(){
  if(!jugadorDropdown) return;
  jugadorDropdown.classList.remove('open');
  inputJugador?.setAttribute('aria-expanded','false');
}

function seleccionarJugadorFiltro(name){
  if(!inputJugador) return;
  inputJugador.value=name||'';
  cerrarJugadorDropdown();
  renderClips();
}

function getClipFilterValue(){
  const value=normalizarTexto(inputJugador?.value);
  return value==='' || value==='todos' ? '' : String(inputJugador.value).trim();
}

function filterClipsByValue(value){
  if(!value) return clips;
  const query=normalizarTexto(value);
  return clips.filter(c=>normalizarTexto(c.player).includes(query));
}

function resetClipFilter(){
  if(inputJugador) inputJugador.value='';
  renderJugadorDropdown('');
}

function setClipFilters(){
  const select=document.getElementById('clipPlayerSelect');
  const box=document.getElementById('jugadorDropdown');
  const input=document.getElementById('inputJugador');
  const items=clipPlayers.length ? clipPlayers : players.filter(p=>p.twitch).map(p=>p.name);
  const unique=[...new Set(items)];
  if(select){
    select.innerHTML='<option value="">TODOS</option>'+unique.map(name=>`<option value="${String(name).replace(/"/g,'&quot;')}">${String(name).replace(/</g,'&lt;')}</option>`).join('');
    if(select.value!==getClipFilterValue()) select.value='';
  }
  if(box){
    box.innerHTML='<button type="button" class="jugador-option" data-value="">TODOS</button>'+unique.map(name=>`<button type="button" class="jugador-option" data-value="${String(name).replace(/"/g,'&quot;')}">${String(name).replace(/</g,'&lt;')}</button>`).join('');
  }
}

function selectClip(c, esClickManual=false){
  if(!c){
    selectedClipKey=null;
    selectedClip=null;
    clipActualSlug=null;
    renderClipText(null);
    const cont=clipContainer();
    if(cont) cont.innerHTML='<div class="live-placeholder">NO HAY CLIPS DISPONIBLES TODAVÍA</div>';
    return;
  }
  const slug=String(c.id||c.videoId||'');
  if(!slug) return;
  reproducirClip(slug, esClickManual, c);
}

inputJugador?.addEventListener('input',()=>{
  abrirJugadorDropdown(false);
  renderClips();
});

inputJugador?.addEventListener('focus',()=>{
  abrirJugadorDropdown(false);
});

inputJugador?.addEventListener('keydown',(e)=>{
  if(e.key==='ArrowDown'){
    e.preventDefault();
    abrirJugadorDropdown(false);
  }else if(e.key==='Escape'){
    cerrarJugadorDropdown();
  }else if(e.key==='Enter'){
    const first=jugadorDropdown?.querySelector('.jugador-option');
    if(first){
      e.preventDefault();
      seleccionarJugadorFiltro(first.dataset.name==='TODOS'?'':first.dataset.name);
    }
  }
});

jugadorArrow?.addEventListener('click',(e)=>{
  e.preventDefault();
  e.stopPropagation();
  // La flecha siempre muestra la lista COMPLETA, aunque haya texto seleccionado.
  if(jugadorDropdown?.classList.contains('open')) cerrarJugadorDropdown();
  else { inputJugador?.focus(); abrirJugadorDropdown(true); }
});

jugadorDropdown?.addEventListener('click',(e)=>{
  const option=e.target.closest('.jugador-option');
  if(!option) return;
  const value=option.dataset.name==='TODOS'?'':option.dataset.name;
  seleccionarJugadorFiltro(value);
  renderJugadorDropdown('');
});

document.addEventListener('click',(e)=>{
  if(jugadorCombobox && !jugadorCombobox.contains(e.target)) cerrarJugadorDropdown();
});

document.getElementById('randomClip').addEventListener('click',()=>{
  const list=filterClipsByValue(getClipFilterValue());
  if(!list.length) return;
  const pool=list.length>1 && selectedClipKey ? list.filter(c=>clipKey(c)!==selectedClipKey) : list;
  const choice=pool[Math.floor(Math.random()*pool.length)];
  selectClip(choice,true);
  requestAnimationFrame(()=>clipFeature.scrollIntoView({behavior:'smooth',block:'center'}));
});

clipGrid.addEventListener('click',e=>{
  const tarjeta=e.target.closest('.tarjeta-clip, .clip-card');
  if(!tarjeta) return;
  e.preventDefault();
  const slugDelClip=tarjeta.dataset.slug;
  const key=tarjeta.dataset.clipKey;
  const clip=clips.find(c=>clipKey(c)===key || String(c.id||c.videoId||'')===String(slugDelClip));
  if(!clip || !slugDelClip){
    console.warn('No se pudo resolver el clip seleccionado:', {slugDelClip, key});
    return;
  }
  console.log('Click manual en clip:', {slugDelClip, key, clip});
  reproducirClip(slugDelClip, true, clip);
  requestAnimationFrame(()=>clipFeature.scrollIntoView({behavior:'smooth',block:'center'}));
});

async function loadClips(){
  try{
    const res=await fetch('/api/clips?v=' + encodeURIComponent(APP_VERSION),{cache:'no-store'});
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const payload=await res.json();
    const previousKey=selectedClipKey;
    const previousSlug=clipActualSlug;
    clips=Array.isArray(payload.clips)?payload.clips:[];
    clipPlayers=Array.isArray(payload.twitchPlayers)?payload.twitchPlayers:[];
    clipDataLoaded=true;
    setClipFilters();
    renderClips();
    const current=filterClipsByValue(getClipFilterValue());
    const stillSelected=current.find(c=>clipKey(c)===previousKey);
    if(stillSelected && previousSlug){
      // Preserve the selected clip and, crucially, do not rebuild the iframe.
      selectedClip=stillSelected;
      selectedClipKey=clipKey(stillSelected);
      document.querySelectorAll('.clip-card').forEach(card=>card.classList.toggle('selected',card.dataset.clipKey===selectedClipKey));
    }else if(!clipActualSlug && current[0]){
      // Initial load only: autoplay the first clip.
      selectClip(current[0], false);
    }else if(stillSelected){
      selectedClip=stillSelected;
      selectedClipKey=clipKey(stillSelected);
    }else if(current[0]){
      // If the previously selected clip disappeared, allow the refresh to choose a new one.
      clipActualSlug=null;
      selectedClipKey=null;
      selectClip(current[0], false);
    }else{
      selectedClipKey=null;
      selectedClip=null;
      clipActualSlug=null;
      const cont=clipContainer();
      if(cont) cont.innerHTML='<div class="live-placeholder">NO HAY CLIPS DISPONIBLES TODAVÍA</div>';
    }
  }catch(err){
    console.error('No se pudieron cargar los clips',err);
    clips=[];
    selectedClipKey=null;
    renderClips();
    renderClipFeature(null);
  }
}
loadClips();
setInterval(loadClips,60*1000);

document.getElementById('modalClose').addEventListener('click',()=>document.getElementById('playerModal').classList.remove('open'));document.getElementById('playerModal').addEventListener('click',e=>{if(e.target.id==='playerModal')e.currentTarget.classList.remove('open')});
window.addEventListener('scroll',()=>document.querySelector('.topbar').classList.toggle('scrolled',scrollY>40));


// Mercado Negro: inner category tabs (hidden market, keep isolated)
function initMercadoNegroTabs(){
  const scope = document.getElementById('mercado-negro');
  if(!scope) return;
  scope.querySelectorAll('.market-tab').forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.marketTab;
      scope.querySelectorAll('.market-tab').forEach(b => b.classList.toggle('active', b === button));
      scope.querySelectorAll('.market-panel').forEach(panel => panel.classList.toggle('active', panel.id === 'market-' + target));
    });
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMercadoNegroTabs);
} else {
  initMercadoNegroTabs();
}

// MERCADO NEGRO — Tienda / Tablero sub-tabs (solo local, sin recarga)
function initShopTabs(){
  const shop = document.getElementById('futuro1');
  if(!shop) return;
  const tabs = shop.querySelectorAll('.shop-tab');
  const mercadoView = document.getElementById('shop-mercado-view');
  const misionesView = document.getElementById('shop-misiones-view');
  if(!tabs.length || !mercadoView || !misionesView) return;
  tabs.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const target = btn.dataset.shopTab;
      tabs.forEach(b=>{
        const isActive = b===btn;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', String(isActive));
      });
      const showMercado = target==='mercado';
      mercadoView.classList.toggle('active', showMercado);
      mercadoView.hidden = !showMercado;
      misionesView.classList.toggle('active', !showMercado);
      misionesView.hidden = showMercado;
    });
  });
  // Estado inicial: mercado visible
  mercadoView.classList.add('active');
  mercadoView.hidden = false;
  misionesView.classList.remove('active');
  misionesView.hidden = true;
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initShopTabs);
} else {
  initShopTabs();
}


/* =========================
   DADOS - LOCAL
   ========================= */
const diceStorageKey = 'proyectoC_dados_v1';
const defaultDiceState = {
  players: [],
  faces: ['1','2','3','4','5','6'],
  history: []
};
let diceState = loadDiceState();

function loadDiceState(){
  try{
    const raw=localStorage.getItem(diceStorageKey);
    if(!raw) return structuredClone(defaultDiceState);
    const parsed=JSON.parse(raw);
    return {
      players:Array.isArray(parsed.players)?parsed.players.map(String).filter(Boolean):[],
      faces:Array.isArray(parsed.faces)&&parsed.faces.length?parsed.faces.map(x=>String(x)):[...defaultDiceState.faces],
      history:Array.isArray(parsed.history)?parsed.history.slice(0,30):[]
    };
  }catch(e){
    return structuredClone(defaultDiceState);
  }
}
function saveDiceState(){
  localStorage.setItem(diceStorageKey,JSON.stringify(diceState));
}
function diceEscape(text){
  return String(text).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}
const dicePlayerSelect=document.getElementById('dicePlayerSelect');
const diceResult=document.getElementById('diceResult');
const diceResultSub=document.getElementById('diceResultSub');
const diceHistory=document.getElementById('diceHistory');
const dicePlayerName=document.getElementById('dicePlayerName');
const diceFaceCount=document.getElementById('diceFaceCount');
const diceFaceEditor=document.getElementById('diceFaceEditor');
const rollDiceButton=document.getElementById('rollDiceButton');

function renderDicePlayers(){
  if(!dicePlayerSelect) return;
  dicePlayerSelect.innerHTML=diceState.players.length
    ? diceState.players.map((name,i)=>`<option value="${i}">${diceEscape(name)}</option>`).join('')
    : '<option value="">AÑADE UN JUGADOR</option>';
  if(!diceState.players.length) rollDiceButton.disabled=true;
  else rollDiceButton.disabled=false;
}

function renderDiceFaces(){
  if(!diceFaceEditor) return;
  diceFaceEditor.innerHTML=diceState.faces.map((face,i)=>`
    <div class="dice-face-row">
      <span>${i+1}</span>
      <input class="dice-face-input dice-control" data-face-index="${i}" value="${diceEscape(face)}" maxlength="80" placeholder="Nombre de la cara ${i+1}">
    </div>
  `).join('');
  diceFaceCount.value=diceState.faces.length;
}

function renderDiceHistory(){
  if(!diceHistory) return;
  if(!diceState.history.length){
    diceHistory.innerHTML='<div class="dice-empty">AÚN NO HAY TIRADAS</div>';
    return;
  }
  diceHistory.innerHTML=diceState.history.map(item=>`
    <div class="dice-history-item">
      <div>
        <strong>${diceEscape(item.player)}</strong>
        <span>${diceEscape(item.face)}</span>
      </div>
      <small>${diceEscape(item.time)}</small>
    </div>
  `).join('');
}

function renderDiceAll(){
  renderDicePlayers();
  renderDiceFaces();
  renderDiceHistory();
}

document.getElementById('addDicePlayer')?.addEventListener('click',()=>{
  const name=dicePlayerName.value.trim();
  if(!name) return;
  if(diceState.players.some(p=>p.toLowerCase()===name.toLowerCase())){
    dicePlayerName.value='';
    return;
  }
  diceState.players.push(name);
  saveDiceState();
  dicePlayerName.value='';
  renderDicePlayers();
  dicePlayerSelect.value=String(diceState.players.length-1);
  dicePlayerName.focus();
});

dicePlayerName?.addEventListener('keydown',e=>{
  if(e.key==='Enter'){
    e.preventDefault();
    document.getElementById('addDicePlayer')?.click();
  }
});

document.getElementById('generateDiceFaces')?.addEventListener('click',()=>{
  let count=Math.max(1,Math.min(100,Number(diceFaceCount.value)||6));
  const old=[...diceState.faces];
  diceState.faces=Array.from({length:count},(_,i)=>old[i]??String(i+1));
  renderDiceFaces();
});

document.getElementById('saveDiceConfig')?.addEventListener('click',()=>{
  document.querySelectorAll('.dice-face-input').forEach(input=>{
    diceState.faces[Number(input.dataset.faceIndex)]=input.value.trim()||`Cara ${Number(input.dataset.faceIndex)+1}`;
  });
  saveDiceState();
  renderDiceFaces();
  diceResultSub.textContent='CONFIGURACIÓN GUARDADA';
});

document.getElementById('clearDiceConfig')?.addEventListener('click',()=>{
  if(!confirm('¿Borrar jugadores, caras e historial de dados?')) return;
  diceState=structuredClone(defaultDiceState);
  saveDiceState();
  diceResult.textContent='?';
  diceResultSub.textContent='LISTO PARA TIRAR';
  renderDiceAll();
});

let diceRolling=false;
rollDiceButton?.addEventListener('click',()=>{
  if(diceRolling || !diceState.players.length || !diceState.faces.length) return;
  const player=diceState.players[Number(dicePlayerSelect.value)]||diceState.players[0];

  const bytes=new Uint32Array(1);
  crypto.getRandomValues(bytes);
  const finalIndex=bytes[0]%diceState.faces.length;
  const finalFace=diceState.faces[finalIndex];

  diceRolling=true;
  rollDiceButton.disabled=true;
  diceResultSub.textContent=`${player.toUpperCase()} // TIRANDO...`;
  diceResult.textContent='?';

  const cube=document.getElementById('diceCube');
  const visual=document.getElementById('diceVisual');
  cube.classList.remove('rolling');
  visual.classList.remove('rolling-glow');
  // Force reflow so repeated rolls retrigger the animation.
  void cube.offsetWidth;
  cube.classList.add('rolling');
  visual.classList.add('rolling-glow');

  let ticks=0;
  const totalTicks=12;
  const tickMs=90;
  const previewTimer=setInterval(()=>{
    const poolIndex=(ticks + Math.floor(Math.random()*diceState.faces.length))%diceState.faces.length;
    diceResult.textContent=diceState.faces[poolIndex];
    ticks++;
    if(ticks>=totalTicks){
      clearInterval(previewTimer);
      diceResult.textContent=finalFace;
      diceResultSub.textContent=`${player.toUpperCase()} // CARA ${finalIndex+1}`;
      diceState.history.unshift({
        player,
        face:finalFace,
        time:new Date().toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit',second:'2-digit'})
      });
      diceState.history=diceState.history.slice(0,30);
      saveDiceState();
      renderDiceHistory();

      setTimeout(()=>{
        cube.classList.remove('rolling');
        visual.classList.remove('rolling-glow');
        diceRolling=false;
        rollDiceButton.disabled=false;
      },180);
    }
  },tickMs);
});
renderDiceAll();
