/* ═══════════════════════════════════════════════════════════════
   PROYECTOLIKE — MICROFASE 1.1 · FUENTE DE PARTICIPANTES
   Contrato de aislamiento:
   - IIFE estricta: no crea ni modifica variables globales.
   - Datos LOCALES de solo lectura: PL_ROSTER (el módulo ya no
     depende de app.js en runtime para obtener participantes).
   - Conexión "estable solo de nombres" (LOCKED): los ids/nombres/
     profesiones son una transcripción estática local lista del
     array players del archivo `app.js`. Ninguna línea de este
     archivo lee, importa ni parsea app.js en runtime.
   - Punto único de inicialización: init().
   - Separación interna: inicialización / lógica interna / UI.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── 1. REFERENCIA INTERNA (root del módulo) ────────────────── */
  var root = document.getElementById('proyectolike');
  if (!root) return;

  /* ════ 2. DATOS: FUENTE DE PARTICIPANTES (LOCAL, SOLO LECTURA) ════
     (MICROFASE 1.1 — núcleo de esta microfase)

  - Array propio local `PL_ROSTER` con los 60 participantes actuales
    de Proyecto C, exactamente como están en la fuente (app.js).
  - NO se importa/parsea/lee app.js en runtime: nada, ni una línea,
    de este archivo toca a `app.js`. Es una transcripción estática
    local congelada (Object.freeze) para que el módulo funcione
    igual aunque la web padre cambie.
  - Cada entrada guarda:
      id         - id estable (igual al de la web)
      name       - nombre visible
      profession - profesión
      status     - estado tal como aparece en la fuente
                   ("registered" | "dead")
  - Jugable / no jugable se DERIVA a partir de `status` (no se
    inventa un campo nuevo): si `status === "dead"` → NO jugable;
    en cualquier otro caso → jugable.
  */
  var PL_ROSTER = [
    { id: "solcius", name: "Solcius", profession: "PENDIENTE", status: "dead" },
    { id: "abost", name: "Abost", profession: "Guía de pesca", status: "registered" },
    { id: "acedion87", name: "Acedion87", profession: "Ingeniero", status: "registered" },
    { id: "andreshouse", name: "Andreshouse", profession: "Reparador", status: "registered" },
    { id: "anselhoenheim", name: "AnselHoenheim", profession: "PENDIENTE", status: "registered" },
    { id: "arce", name: "ArCe", profession: "Monitor de fitness", status: "registered" },
    { id: "asssucar", name: "Asssucar", profession: "PENDIENTE", status: "registered" },
    { id: "basquewanderer", name: "BasqueWanderer", profession: "Herrero", status: "registered" },
    { id: "brunusop", name: "BrunusOP", profession: "Desempleado", status: "registered" },
    { id: "cere", name: "Cere", profession: "Monitor de fitness", status: "registered" },
    { id: "elpelas97", name: "elpelas97", profession: "Ganadero", status: "registered" },
    { id: "elponja92", name: "ElPonja92", profession: "Veterano", status: "registered" },
    { id: "emiliano-roca", name: "Emiliano Roca", profession: "Desempleado", status: "registered" },
    { id: "evarath", name: "evarath", profession: "Guía de pesca", status: "registered" },
    { id: "ferrox", name: "Ferrox", profession: "Desempleado", status: "registered" },
    { id: "bertok", name: "Bertok", profession: "Electricista", status: "registered" },
    { id: "fichi", name: "Fichi", profession: "Obrero", status: "registered" },
    { id: "fetodevaca", name: "Fetodevaca", profession: "Obrero", status: "registered" },
    { id: "goblinpeke", name: "GoblinPeke", profession: "Obrero metalúrgico", status: "registered" },
    { id: "hax", name: "Hax", profession: "Aprendiz de cocina", status: "registered" },
    { id: "josuetn", name: "JosueTn", profession: "Desempleado", status: "registered" },
    { id: "juanen", name: "Juanen", profession: "Guardia forestal", status: "registered" },
    { id: "k4la", name: "K4la", profession: "Leñador", status: "registered" },
    { id: "kira", name: "Kira", profession: "Veterano", status: "registered" },
    { id: "lagatarata", name: "LaGataRata", profession: "PENDIENTE", status: "registered" },
    { id: "leissar", name: "Leissar", profession: "Mecánico", status: "registered" },
    { id: "liss", name: "Liss", profession: "Enfermera", status: "registered" },
    { id: "lordzacas", name: "lordzacas", profession: "Desempleado", status: "registered" },
    { id: "luisgg", name: "LuisGG", profession: "Bombero", status: "registered" },
    { id: "magikos", name: "Magikos", profession: "Herrero", status: "registered" },
    { id: "meremiau", name: "meremiau", profession: "Reparador", status: "registered" },
    { id: "miguel", name: "Miguel", profession: "Desempleado", status: "registered" },
    { id: "miniarre", name: "Miniarre", profession: "Obrero metalúrgico", status: "registered" },
    { id: "miniyo2", name: "Miniyo2", profession: "PENDIENTE", status: "registered" },
    { id: "nemma", name: "Nemma", profession: "Cocinero", status: "registered" },
    { id: "pupi", name: "pupi", profession: "Ganadero", status: "registered" },
    { id: "rastafrikki", name: "RastaFrikki", profession: "Desempleado", status: "registered" },
    { id: "romgarrr", name: "romgarrr", profession: "PENDIENTE", status: "registered" },
    { id: "rubaso", name: "Rubaso", profession: "Guardia forestal", status: "registered" },
    { id: "sarah", name: "Sarah", profession: "Carpintero", status: "registered" },
    { id: "shikafu6", name: "Shikafu6", profession: "Desempleado", status: "registered" },
    { id: "soulreaperdk", name: "SoulReaperDK", profession: "Electricista", status: "registered" },
    { id: "storvi", name: "Storvi", profession: "PENDIENTE", status: "registered" },
    { id: "tamashiiv", name: "TAMASHIIV", profession: "Guardia de seguridad", status: "registered" },
    { id: "batracio", name: "Batracio", profession: "Desempleado", status: "registered" },
    { id: "tencachi", name: "Tencachy", profession: "PENDIENTE", status: "registered" },
    { id: "terohis", name: "Terohis", profession: "Sastre", status: "registered" },
    { id: "titohc", name: "Titohc", profession: "Guardia de seguridad", status: "registered" },
    { id: "toni18", name: "Toni18", profession: "Agente de policía", status: "registered" },
    { id: "tyzenh", name: "TyzenH", profession: "Aprendiz de cocina", status: "registered" },
    { id: "vichum", name: "vichum", profession: "Médico", status: "registered" },
    { id: "xl-k-vic", name: "xL𝑜K𝑜Vic", profession: "Cocinero", status: "registered" },
    { id: "yonkimiyagui", name: "yonkimiyagui", profession: "Ingeniero", status: "registered" },
    { id: "z3ttii", name: "Z3TTII", profession: "PENDIENTE", status: "registered" },
    { id: "zelune", name: "Zelune", profession: "Granjero", status: "registered" },
    { id: "zigurathz", name: "zigurathz", profession: "PENDIENTE", status: "registered" },
    { id: "zonenzonao", name: "Zonenzonao", profession: "PENDIENTE", status: "registered" },
    { id: "zripht", name: "Zripht", profession: "Desempleado", status: "registered" },
    { id: "winwerin", name: "winwerin", profession: "PENDIENTE", status: "registered" },
    { id: "rosa-koala", name: "rosa koala", profession: "PENDIENTE", status: "registered" }
  ];

  /* Congelación: PL_ROSTER y cada entrada son inmutables dentro
     del módulo (fuente de solo lectura). */
  (function freezeRoster(list) {
    Object.freeze(list);
    for (var i = 0; i < list.length; i++) Object.freeze(list[i]);
  })(PL_ROSTER);

  /* ── 3. LÓGICA INTERNA (núcleo del módulo) ───────────────────── */
  function initCore() {
    /* Marcador de módulo integrado (solo dentro del propio root). */
    root.setAttribute('data-pl-integrated', 'true');
  }

  /* Helpers internos derivados de `status` (jugable / no jugable).
     No guardan nada: son puras sobre PL_ROSTER. */
  function isPlayable(entry) {
    if (!entry || typeof entry.status !== 'string') return false;
    return entry.status !== 'dead';
  }

  function getRoster() {
    /* Devuelve el array completo (referencia congelada, no copia). */
    return PL_ROSTER;
  }

  function getPlayable() {
    var out = [];
    for (var i = 0; i < PL_ROSTER.length; i++) {
      if (isPlayable(PL_ROSTER[i])) out.push(PL_ROSTER[i]);
    }
    return out;
  }

  function getNonPlayable() {
    var out = [];
    for (var i = 0; i < PL_ROSTER.length; i++) {
      if (!isPlayable(PL_ROSTER[i])) out.push(PL_ROSTER[i]);
    }
    return out;
  }

  function getById(id) {
    for (var i = 0; i < PL_ROSTER.length; i++) {
      if (PL_ROSTER[i].id === id) return PL_ROSTER[i];
    }
    return null;
  }

  /* ── 4. UI (escopada exclusivamente a #proyectolike) ─────────── */
  function initUI() {
    /* Reserved: en 1.1 no se pinta roster. */
  }

  /* ── 5. PUNTO ÚNICO DE INICIALIZACIÓN ────────────────────────── */
  function init() {
    initCore();
    initUI();
  }

  /* Arranque único. No exponemos nada hacia afuera: todo queda
     dentro del scope del IIFE hasta que una microfase futura lo
     use. */
  init();
})();
