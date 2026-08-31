/* PROYECTO C — LANDING FINAL MINIMAL */
(function(){
  'use strict';

  const navLinks = [...document.querySelectorAll('[data-tab]')];
  const panels = [...document.querySelectorAll('.tab-panel')];

  let previousTabId = document.querySelector('.tab-panel.active')?.id || 'portada';

  function openTab(id){
    const target = document.getElementById(id);
    if(!target) return;
    const current = document.querySelector('.tab-panel.active');
    if(current && current.id !== id){
      previousTabId = current.id;
    }
    panels.forEach(el=>el.classList.toggle('active', el.id === id));
    navLinks.forEach(a=>a.classList.toggle('active', a.dataset.tab === id));
    try { history.replaceState(null,'','#'+id); } catch(e){}
    window.scrollTo({top:0, behavior:'smooth'});
  }

  navLinks.forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.dataset.tab;
      if(id) openTab(id);
    });
  });

  // Soporte navegación inicial por hash
  const initial = location.hash.slice(1);
  if(initial && document.getElementById(initial)){
    openTab(initial);
  } else {
    // Asegurar portada activa por defecto
    if(!document.querySelector('.tab-panel.active')){
      const portada = document.getElementById('portada');
      if(portada) portada.classList.add('active');
    }
  }

  // Topbar scrolled effect (opcional, sin errores)
  const topbar = document.querySelector('.topbar');
  if(topbar){
    const onScroll = ()=> topbar.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  // Exponer openTab por si se necesita desde consola o futuro
  window.__openTab = openTab;
})();
