const EVENT_DATE = '2026-08-21T18:00:00+02:00';

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
{id:'cere',name:'Cere',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Monitor de fitness',positiveTraits:'Gimnasta, Demonio de la velocidad',negativeTraits:'Desordenado, Dormilón',twitch:'https://www.twitch.tv/cere',youtube:'https://www.youtube.com/channel/UCE1ISk9jQb7ykFQXy56NbaA',bio:'Perfil pendiente de información del personaje.'},
{id:'elpelas97',name:'elpelas97',image:'/assets/players/elpelas97.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Ganadero',positiveTraits:'Viejo explorador, Cazador',negativeTraits:'Sueño inquieto, Claustrofóbico',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'elponja92',name:'ElPonja92',image:'/assets/players/elponja92.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Veterano',positiveTraits:'Vista de águila, Hábil',negativeTraits:'Propenso a enfermar, Dormilón',twitch:'https://www.twitch.tv/elponja92',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'emiliano-roca',name:'Emiliano Roca',image:'/assets/players/emiliano-roca.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Peleón, Robusto',negativeTraits:'Mucha sed, Dedos gordos',twitch:'https://www.twitch.tv/emilianorocaa',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'evarath',name:'evarath',image:'/assets/players/evarath.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Guía de pesca',positiveTraits:'Oído fino, Tallador',negativeTraits:'Torpe, Visible',twitch:'https://www.twitch.tv/evarathz',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'ferrox',name:'Ferrox',image:'/assets/players/ferrox.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Oído fino, Vista de águila',negativeTraits:'Cobarde',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'bertok',name:'Bertok',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Electricista',positiveTraits:'Manitas, Mecánico aficionado',negativeTraits:'Propenso a enfermar, Hemofóbico',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'fichi',name:'Fichi',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Obrero',positiveTraits:'Artesano, Piel dura',negativeTraits:'Enclenque, Fuera de forma',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'fetodevaca',name:'Fetodevaca',image:'/assets/players/fetodevaca.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Obrero',positiveTraits:'Albañil, Peleón',negativeTraits:'Aprendiz lento, Duro de oído',twitch:'https://www.twitch.tv/fetodevaca',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'goblinpeke',name:'GoblinPeke',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Obrero metalúrgico',positiveTraits:'Jugador de beisbol, Peleón',negativeTraits:'Sueño inquieto, Propenso a enfermar',twitch:'https://www.twitch.tv/goblinpeke',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'hax',name:'Hax',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Aprendiz de cocina',positiveTraits:'Insomne, Oido fino',negativeTraits:'Miope, Asmático',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'josuetn',name:'JosueTn',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Gimnasta, Conocimiento de la Naturaleza',negativeTraits:'Dominguero, Propenso a enfermar',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'juanen',name:'Juanen',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Guardia forestal',positiveTraits:'Peleón, Meticuloso',negativeTraits:'Sueño inquieto, hemofobia',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'k4la',name:'K4la',image:'/assets/players/k4la.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Leñador',positiveTraits:'En forma, Robusto',negativeTraits:'Piel Fina, Visible',twitch:null,youtube:'https://www.youtube.com/@k4la_',bio:'Perfil pendiente de información del personaje.'},
{id:'kira',name:'Kira',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Veterano',positiveTraits:'Cocinar, Socorrista',negativeTraits:'Fumador, Visible',twitch:'https://www.twitch.tv/og_kiradr',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'lagatarata',name:'LaGataRata',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/xkattty',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'leissar',name:'Leissar',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Mecánico',positiveTraits:'Meticuloso, Inventivo',negativeTraits:'Metabolismo lento, Propenso a enfermar',twitch:'https://www.twitch.tv/leissar',youtube:'https://www.youtube.com/channel/UCU6dXXNTstf2_J9rl-BV__A',bio:'Perfil pendiente de información del personaje.'},
{id:'liss',name:'Liss',image:'/assets/players/liss.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Enfermera',positiveTraits:'Meticuloso, Organizado',negativeTraits:'Asmático, Fumador',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'lordzacas',name:'lordzacas',image:'/assets/players/lordzacas.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Peleón, Sanador rápido',negativeTraits:'Comilón',twitch:'https://www.twitch.tv/lordzacas',youtube:'https://www.youtube.com/@lordzacas3015',bio:'Perfil pendiente de información del personaje.'},
{id:'luisgg',name:'LuisGG',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Bombero',positiveTraits:'En forma, Meticuloso',negativeTraits:'Desordenado, Comilón',twitch:null,youtube:'https://www.youtube.com/@luisgamingg',bio:'Perfil pendiente de información del personaje.'},
{id:'magikos',name:'Magikos',image:'/assets/players/magikos.jpg',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Herrero',positiveTraits:'Artesano, Inventivo',negativeTraits:'Duro de oído, Miope',twitch:'https://www.twitch.tv/m4gikos',youtube:'https://www.youtube.com/@M4gikos',bio:'Perfil pendiente de información del personaje.'},
{id:'meremiau',name:'meremiau',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'miguel',name:'Miguel',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Sin rasgos positivos',negativeTraits:'Sin rasgos negativos',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'miniarre',name:'Miniarre',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Obrero metalúrgico',positiveTraits:'Organizado, Hábil',negativeTraits:'Comilón, Mucha sed',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'miniyo2',name:'Miniyo2',image:'/assets/players/miniyo2.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/miniyo2',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'nemma',name:'Nemma',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Cocinero',positiveTraits:'Vista de águila, Amante de la naturaleza',negativeTraits:'Dormilón, Comilón',twitch:'https://www.twitch.tv/nemmacanon',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'pupi',name:'pupi',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Ganadero',positiveTraits:'Atlético, Amante de la naturaleza',negativeTraits:'Piel fina, Torpe',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'rastafrikki',name:'RastaFrikki',image:'/assets/players/rastafrikki.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Piel Dura, Conocimiento de la naturaleza',negativeTraits:'Aprendiz lento, Metabolismo rápido',twitch:'https://www.twitch.tv/rastafrikki',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'romgarrr',name:'romgarrr',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'rubaso',name:'Rubaso',image:'/assets/players/rubaso.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Guardia forestal',positiveTraits:'Conocimiento de la naturaleza, Viejo explorador',negativeTraits:'Claustrofóbico, Visible',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'sarah',name:'Sarah',image:'/assets/players/sarah.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Carpintero',positiveTraits:'Inventivo, Mañoso',negativeTraits:'Pacifista, Dominguero',twitch:'https://www.twitch.tv/sarahgk92',youtube:'https://www.youtube.com/sarahgk92',bio:'Perfil pendiente de información del personaje.'},
{id:'shikafu6',name:'Shikafu6',image:'/assets/players/shikafu6.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Cocinar, Excursionista',negativeTraits:'Sin rasgos negativos',twitch:'https://www.twitch.tv/shikafu6',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'soulreaperdk',name:'SoulReaperDK',image:'/assets/players/soulreaperdk.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Electricista',positiveTraits:'Gimnasta, Jugador de beisbol',negativeTraits:'Visible, Sanador lento',twitch:'https://www.twitch.tv/soulreaperdk_',youtube:'https://www.youtube.com/channel/UCwvqn9OZhmkLBjHOw0us5ZA',bio:'Perfil pendiente de información del personaje.'},
{id:'storvi',name:'Storvi',image:'/assets/players/storvi.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/storviii',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'tamashiiv',name:'TAMASHIIV',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Guardia de seguridad',positiveTraits:'Albañil, Artesano',negativeTraits:'Cobarde, Comilón',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'temecuidas',name:'TeMeCuidaS',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Enfermera',positiveTraits:'Excursionista, En forma',negativeTraits:'Pacifista, Sueño inquieto',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'tencachi',name:'Tencachi',image:'/assets/players/tencachi.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'terohis',name:'Terohis',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Sastre',positiveTraits:'Costurero, En forma',negativeTraits:'Dormilón, Cobarde',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'titohc',name:'Titohc',image:'/assets/players/titohc.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Guardia de seguridad',positiveTraits:'Peleón, Socorrista',negativeTraits:'Sueño inquieto, Dedos gordos',twitch:'https://www.twitch.tv/titohc',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'toni18',name:'Toni18',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Agente de policía',positiveTraits:'Demonio de la velocidad, Jugador de beisbol',negativeTraits:'Fumador, Aprendiz lento',twitch:'https://www.twitch.tv/tonism18',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'tyzenh',name:'TyzenH',image:'/assets/players/tyzenh.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Aprendiz de cocina',positiveTraits:'Comedor ligero, Pescador',negativeTraits:'Dedos gordos, Metabolismo rápido',twitch:'https://www.twitch.tv/tyzenh',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'vichum',name:'vichum',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Médico',positiveTraits:'Hábil, Socorrista',negativeTraits:'Sanador lento, Dominguero',twitch:null,youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'xl-k-vic',name:'xL𝑜K𝑜Vic',image:'/assets/players/xlokovic.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Cocinero',positiveTraits:'Peléon, Fuerte',negativeTraits:'Piel fina, Visible',twitch:'https://www.twitch.tv/xlokovic',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'yonkimiyagui',name:'yonkimiyagui',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Ingeniero',positiveTraits:'Hábil, Organizado',negativeTraits:'Agorafóbico, Estómago delicado',twitch:'https://www.twitch.tv/miyagui85',youtube:'https://www.youtube.com/channel/UCA-epNDDfdH1JzJOJf0pnCA',bio:'Perfil pendiente de información del personaje.'},
{id:'z3ttii',name:'Z3TTII',image:'/assets/players/z3ttii.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/z3ttii',youtube:'https://www.youtube.com/@Z3TTII',bio:'Perfil pendiente de información del personaje.'},
{id:'zelune',name:'Zelune',image:'/assets/players/zelune.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Granjero',positiveTraits:'Tirador de precisión, Hábil',negativeTraits:'Fumador, Comilón',twitch:'https://www.twitch.tv/Zelune86',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'zigurath',name:'zigurath',image:'/assets/players/zigurath.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/zigurath',youtube:'https://www.youtube.com/channel/UC36C8AulCMw5QAUV5wrfQpg',bio:'Perfil pendiente de información del personaje.'},
{id:'zonenzonao',name:'Zonenzonao',image:'/assets/players/zonenzonao.webp',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/zonenzonao',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'zripht',name:'Zripht',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'Desempleado',positiveTraits:'Peleón, Fuerte',negativeTraits:'Aprendiz lento, Miope',twitch:'https://www.twitch.tv/Zripht',youtube:null,bio:'Perfil pendiente de información del personaje.'},
{id:'winwerin',name:'winwerin',character:'POR ASIGNAR',role:'PARTICIPANTE',status:'registered',profession:'PENDIENTE',positiveTraits:'PENDIENTE',negativeTraits:'PENDIENTE',twitch:'https://www.twitch.tv/winwerin',youtube:null,bio:'Perfil pendiente de información del personaje.'}
];
const API_ENDPOINT = '/api/live';
let selectedLiveKey = null;

function liveSourceKey(source){
  if(!source) return null;
  return [source.platform, source.channel || '', source.videoId || '', source.url || ''].join('|');
}

function twitchEmbedUrl(source){
  if (!/^https?:$/.test(location.protocol) || !location.hostname) return null;
  const parent = location.hostname.replace(/^www\./i, '');
  return `https://player.twitch.tv/?channel=${encodeURIComponent(source.channel)}&parent=${encodeURIComponent(parent)}&autoplay=true`;
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
let clipPlayers = [];
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
playerGrid.innerHTML=players.map(p=>`<article class="player-card ${p.status==='dead'?'player-dead':''}" data-player="${p.id}" role="button" tabindex="0"><div class="player-photo"><img src="${p.image||'/assets/silueta.png'}" alt="Imagen de ${String(p.name).replace(/"/g,'&quot;')}" loading="lazy" onerror="this.onerror=null;this.src='/assets/silueta.png';">${p.status==='dead'?'<div class="death-cross" aria-label="Participante muerto">✚</div>':''}<span class="player-status ${p.status==='dead'?'dead':'registered'}">${p.status==='dead'?'FALLECIDO':'REGISTRADO'}</span></div><div class="player-info"><small>${p.twitch?'TWITCH':p.youtube?'YOUTUBE':'SIN CANAL'}</small><h3>${p.name}</h3><p class="player-profession"><b>PROFESIÓN:</b> ${p.profession||'PENDIENTE'}</p><div class="player-tags"><span class="tag">PARTICIPANTE</span>${p.status==='dead'?'<span class="tag dead-tag">MUERTO</span>':''}${p.twitch?'<span class="tag social twitch">TWITCH</span>':''}${p.youtube?'<span class="tag social youtube">YOUTUBE</span>':''}</div><div class="player-traits"><div class="player-trait positive"><b>+</b><span>${p.positiveTraits||'PENDIENTE'}</span></div><div class="player-trait negative"><b>−</b><span>${p.negativeTraits||'PENDIENTE'}</span></div></div></div></article>`).join('');
function openPlayer(id){const p=players.find(x=>x.id===id);if(!p)return;const links=[p.twitch?`<a class="modal-link twitch" href="${p.twitch}" target="_blank" rel="noopener noreferrer">TWITCH</a>`:'',p.youtube?`<a class="modal-link youtube" href="${p.youtube}" target="_blank" rel="noopener noreferrer">YOUTUBE</a>`:''].join('');document.getElementById('modalContent').innerHTML=`<div class="modal-sub">ARCHIVO DEL PARTICIPANTE</div><div class="modal-player-photo"><img src="${p.image||'/assets/silueta.png'}" alt="Imagen de ${String(p.name).replace(/"/g,'&quot;')}"></div><h3>${p.name}</h3><div class="modal-sub">${p.status==='dead'?'FALLECIDO':'PARTICIPANTE'}</div><div class="modal-profile-facts"><div><small>PROFESIÓN</small><strong>${p.profession||'PENDIENTE'}</strong></div><div><small>RASGOS POSITIVOS</small><strong class="trait-positive-text">${p.positiveTraits||'PENDIENTE'}</strong></div><div><small>RASGOS NEGATIVOS</small><strong class="trait-negative-text">${p.negativeTraits||'PENDIENTE'}</strong></div></div><div class="modal-facts"><div class="modal-fact"><small>ESTADO</small><strong>${p.status==='dead'?'FALLECIDO':'REGISTRADO'}</strong></div><div class="modal-fact"><small>CANALES</small><strong>${p.twitch||p.youtube?'DISPONIBLES':'NO REGISTRADOS'}</strong></div><div class="modal-fact"><small>RELACIONES</small><strong>████████</strong></div></div>${links?`<div class="modal-links">${links}</div>`:''}`;document.getElementById('playerModal').classList.add('open');document.getElementById('playerModal').setAttribute('aria-hidden','false')}
playerGrid.addEventListener('click',e=>{const card=e.target.closest('.player-card');if(card)openPlayer(card.dataset.player)});
playerGrid.addEventListener('keydown',e=>{if(e.key==='Enter'){const card=e.target.closest('.player-card');if(card)openPlayer(card.dataset.player)}});

const timelineEl=document.getElementById('timeline');timelineEl.innerHTML=timeline.map(t=>`<article class="lore-item ${t.title==='REUNIÓN'?'lore-completed':''}"><small>${t.date}</small><h3>${t.title}</h3></article>`).join('');
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
  const parent=location.hostname.replace(/^www\\./i,'');
  if(!parent || !c?.id) return '';
  const params=new URLSearchParams({
    clip:String(c.id),
    parent,
    autoplay:'true',
  });
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
    const res=await fetch('/live-channels.json',{cache:'no-store'});
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
  cargarListaJugadores();
  const current=String(inputJugador?.value||'');
  if(current && !jugadoresConTwitch.some(p=>normalizarTexto(p.name)===normalizarTexto(current)) && normalizarTexto(current)!=='todos') resetClipFilter();
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
    const res=await fetch('/api/clips',{cache:'no-store'});
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


// Mercado Negro: inner category tabs
function initMercadoNegroTabs(){
  document.querySelectorAll('.market-tab').forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.marketTab;
      document.querySelectorAll('.market-tab').forEach(b => b.classList.toggle('active', b === button));
      document.querySelectorAll('.market-panel').forEach(panel => panel.classList.toggle('active', panel.id === 'market-' + target));
    });
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMercadoNegroTabs);
} else {
  initMercadoNegroTabs();
}
