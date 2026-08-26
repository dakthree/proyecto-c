# PROYECTOLIKE — Implementación (arquitectura y fases justificadas)

> **Fuente:** `PROYECTOLIKE_SPEC.md` (sección de integración con la web de Proyecto C y alcance del primer prototipo). Este documento recoge **solo** la arquitectura y las fases de implementación justificadas por la spec actual.
>
> **Ámbito de este documento:**
> - Estructura de archivos, aislamiento técnico y restricciones de la implementación (LOCKED, extraído de la spec).
> - Fases de implementación cuyas capacidades están justificadas por el alcance del prototipo de la spec.
> - Estructura lista para añadir **microfases** (de momento no especificadas en detalle).
>
> **No incluye:** especificaciones detalladas de código de futuras fases (se añadirán después como microfases), ni diseño de juego (ver `PROYECTOLIKE_DESIGN.md`), ni reglas LOCKED (ver `PROYECTOLIKE_RULES.md`).
>
> **Regla de gobernanza (de la spec):** la implementación empieza solo con una instrucción explícita; este documento no autoriza código por sí mismo.

---

## 1. Restricciones técnicas LOCKED

*(Extraídas de la spec — sección de integración. Son canónicas; ver también `PROYECTOLIKE_RULES.md` §14.)*

1. ProyectoLike se integra como **pestaña nueva e aislada** (navegación por hash) en la web de Proyecto C existente.
2. **Solo cambia `index.html`**: ancla `data-tab="proyectolike"` + sección + enlaces CSS/JS.
3. **Archivos propios:**
   - `proyectolike/proyectolike.js` — IIFE, `'use strict'`, **sin globales**.
   - `proyectolike/proyectolike.css` — todo bajo el scope del tab.
4. **Ids/clases con prefijo `pl-`**: las clases generadas por JS y los selectores del CSS usan el mismo prefijo.
5. **NO se modifica:** `app.js`, `server.js`, `styles.css`, `package.json`, `live-channels.json`, `README.md` (salvo instrucción expresa) ni las tabs lógicas existentes.
6. **Sin backend** (nada de API de Twitch), **sin dependencias externas** (vanilla JS).
7. **Estado persistente:** `localStorage`, con **claves propias** del juego (`pl-...`), sin chocar con las de la web padre.
8. **UI en español**, **sin animaciones ni sonido** en el prototipo; estilo card/botón con texto y números claros (sin sprites).
9. **Roster:** array propio local `PL_ROSTER` con los nombres de Proyecto C (ids estables, conexión estable solo de nombres). **No se modifica, importa ni parsea `app.js`.**
10. **Datos deterministas:** la derivación de stats/arquetipo por id (hash) debe ser estable entre partidas y entre save/load (la regla está en `PROYECTOLIKE_RULES.md`; aquí solo se señala que debe ser reproducida por la implementación sin inventar fórmulas PENDING).

---

## 2. Fases de implementación (justificadas por la spec)

Cada fase corresponde a un grupo de capacidades incluidas en el **primer alcance del prototipo** según la spec. Ninguna fase especifica código aún; se ampliarán en microfases.

### Fase 0 — Aislamiento e integración en la web de Proyecto C *(la próxima a especificar como microfase; NO implementada en la actualidad)*
- Creado del aislamiento técnico: `proyectolike/proyectolike.js` (IIFE, sin globales), `proyectolike/proyectolike.css` (escopado), prefijo `pl-` en ids/clases.
- Modificación mínima de `index.html`: ancla `data-tab="proyectolike"`, sección del tab, enlaces CSS/JS; navegación por hash existente.
- **Próxima microfase:** "integración/aislamiento de PROYECTOLIKE" (pendiente de especificar en detalle; no se implementa todavía).

### Fase 1 — Núcleo de run, participantes y progresión
*(Justificada por: §1 roster/reclutamiento, §2 stats/arquetipos, §8 XP, §9 nodos/mapa/actos, §16 alcance del prototipo.)*
- Estado de run: nodo actual y opciones (2–3 por paso), días, comida, chatarras, ruido de equipamiento, XP/nivel del equipo.
- Roster de hasta 6: inicio 1 de 3 candidatos elegibles; reclutamiento 3 candidatos / 1 / pasa; 6/6 → despedida permanente.
- `PL_ROSTER` propio (~60 nombres, ids estables) + derivación determinista de stats/arquetipo por id.
- Stats HP/ATK/DEF/VEL con los 13 arquetipos y sus pasivas automáticas.
- Pantalla de gestión de equipo (entre nodos, siempre accesible): posiciones, equipamiento, inventario compartido, estados, días/comida/XP.
- XP compartida, niveles 1–8, mejora 1 de 3, desbloqueo de roster por acto.
- Tipos de nodo y recursos: BÚSQUEDA, ENCUENTRO, RECLUTAMIENTO, REST, HOSPITAL, MERCADER, EVENTOS; comida/hambre, chatarras, días, infección.
- 3 actos y 3 defensas mayores (estructura; contenido PENDING).
- Condición de fin de run 6/6 DOWNED (game over) y victoria del Acto 3 (estructura; detalles PENDING).

### Fase 2 — Combate totalmente automático
*(Justificada por: §0.1 reglas firmadas, §3 combate, §4 DOWNED.)*
- Combate 6v6 con formación FRONT/MIDDLE/REAR ×2: colocación libre antes del combate, bloqueo de formación, sin reservas, posición vacía al DOWNED.
- Simulación interna continua: temporizador de acción por unidad, objetivo automático, daño (ATK−DEF, mín. 1, ±10%), crítico, pasivas de arquetipo, buffs/debuffs con duración.
- Alcance I/II/III y distancias por zona; enemigos con el mismo framework (arquetipos/pasivas).
- Presentación: log de combate + barras de HP, tiempo real ~1×, sin botones manuales; pantalla de resultado (victoria → recompensa; derrota → pérdidas según el diseño).
- Persistencia de DOWNED entre combates/nodos; 6/6 DOWNED → fin de run.

### Fase 3 — Equipamiento, ruido, loot y economía
*(Justificada por: §5 inventario, §6 ruido, §7 armas, §12 botín, §9 mercader.)*
- Inventario compartido (1 único pool); equipar/desequipar (máx. 1 por participante); sin munición/peso/durabilidad/recarga.
- Catálogo de armas I/II/III (nombres LOCKED; valores PENDING) con stat de NOISE por objeto equipado; ruido de run derivado del equipamiento.
- Entrypoints de loot: BÚSQUEDA, victoria de combate, mercader, eventos, subida de nivel.
- MERCADER: intercambio de chatarra/objetos → recursos.
- REST/HOSPITAL con sus efectos LOCKED (incluidos sobre ruido y estados médicos).

### Fase 4 — Save/resume e historia
*(Justificada por: §13 de la spec.)*
- Guardado automático en `localStorage` (estado de la run: nodos visitados, roster, HP, DOWNED, inventario, ruido, días, XP/nivel); claves propias (`pl-`).
- "Continuar" desde el menú principal si hay run guardada.
- Historia local (Hall of Fame): última N runs (fecha, resultado, días, participantes en pie); hojear/borrar desde el menú.

> **Fases excluidas por la spec (no se implementan):** moda diario/challenges/infinito; vehículos, crafting, mapa por tiles; animación/sprites/sonido; multijugador/backend/API; edición del roster desde el juego; más de 3 actos; sistema "shiny"; botones de combate (prohibidos por las reglas firmadas 1–3).

---

## 3. Microfases (estructura preparada)

- Cada fase de §2 se dividirá después en **microfases** con especificación de detalle, una por una.
- **Orden acordado hasta la fecha:** la primera microfase a especificar será la de la **Fase 0 (integración/aislamiento de PROYECTOLIKE)**. No está especificada en detalle aquí y **no se implementa todavía**.
- Regla de la spec aplicable a microfases: no se implementan ni se infieren valores PENDIENTE (`PROYECTOLIKE_DESIGN.md`, §18) hasta un update explícito.

---

## 4. Nota sobre PENDING

Todo punto PENDIENTE (`PROYECTOLIKE_DESIGN.md`, §18) queda fuera de las fases hasta un update explícito. En particular (y no solo): la generación exacta de nodos, la curva de XP, los valores numéricos de armas, el mapeo exacto profesión→arquetipo, la capacidad del inventario, el contenido de eventos/encuentros mayores/reliquias/hitos y los detalles de la final y del save/resume.
