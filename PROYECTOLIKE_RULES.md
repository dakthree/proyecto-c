# PROYECTOLIKE — Reglas (decisiones LOCKED / canónicas)

> **Fuente:** `PROYECTOLIKE_SPEC.md` (APROBADA, versión consolidada). Este documento extrae de ella **solo** las decisiones LOCKED / canónicas.
>
> **Ámbito:** reglas que no deben cambiarse sin una nueva decisión explícita y documentada. No incluye detalles de implementación (ver `PROYECTOLIKE_IMPLEMENTATION.md`) ni contenido PENDING tratado como regla (ver `PROYECTOLIKE_DESIGN.md`, sección PENDING).
>
> En caso de ambigüedad, **`PROYECTOLIKE_SPEC.md` es la fuente de verdad**.

---

## 1. Gobernanza de la especificación

1. `PROYECTOLIKE_SPEC.md` es la especificación canónica. `PROYECTOLIKE_DESIGN_UPDATE.md` es la capa de diseño más reciente y **prevalece** (ya incorporada en la spec).
2. Toda implementación futura **DEBE** cumplir la especificación.
3. Si una instrucción futura entra en conflicto con la especificación: **parar y preguntar antes de modificarla**. Nadie (asistente incluido) cambia la spec unilateralmente.
4. La especificación es **solo especificación**: no autoriza código ni implementación por sí misma. La implementación empieza solo con una instrucción explícita.
5. Los puntos PENDIENTE (ver `PROYECTOLIKE_DESIGN.md`) **no se infieren**: no se implementan ni se asignan valores hasta un update explícito.
6. Las **reglas firmadas** (§2 de este documento) tienen **máxima prioridad** sobre el resto de la especificación.
7. Los diseños anteriores ("PROYECTOLIKE — Diseño definitivo") quedan como contexto histórico; la spec (y su capa más reciente) tienen prioridad en caso de conflicto.

---

## 2. Reglas firmadas (contrato inquebrantable, máxima prioridad)

1. El combate es **TOTALMENTE AUTOMÁTICO**.
2. **Ninguna** acción manual durante el combate (sin atacar, defender, curar, elegir objetivo, reposicionar).
3. **Sin** botón de "continuar turno".
4. El jugador elige **formación (posiciones) y equipamiento ANTES** del combate; la formación se bloquea al iniciar.
5. El combate se presenta de forma continua (log + barras de HP), resuelto por una simulación automática interna.
6. Los participantes **DOWNED** permanecen caídos **entre nodos**.
7. **NO hay sistema de reservas.** Un DOWNED deja su posición **vacía**; nadie lo reemplaza automáticamente.
8. **REST** = curación parcial: **+30% del HP máx. a participantes en pie**; **NUNCA** revive a DOWNED; **sin coste**.
9. **HOSPITAL** = participantes en pie al **100% HP**; **todos los DOWNED reviven al 40% HP**; elimina estados médicos negativos; **−2 de ruido**; sin coste; sin riesgo de combate.
10. Hospital es un nodo **raro y de alto valor**: **1–2 oportunidades por acto**; la probabilidad de aparición puede aumentar si hay muchos DOWNED.
11. **Todos los 6 DOWNED = fin de la partida (game over).**

---

## 3. Combate — invariantes LOCKED

1. Combate **6v6** cuando ambos bandos tienen 6 combatientes disponibles (o menor si el bando enemigo tiene menos; el bando del jugador puede desplegar hasta 6).
2. Cada bando tiene **6 posiciones**: FRONT ×2, MIDDLE ×2, REAR ×2.
3. Antes del combate, el jugador puede colocar **libremente** cada participante vivo en cualquier posición. Las posiciones "recomendadas" por arquetipo **no son restricción dura**.
4. **La formación se bloquea al iniciar el combate**; no se reposiciona durante el combate.
5. **Sin reservas:** un DOWNED deja su posición **vacía**.
6. **Alcance:** armas I = corto, II = medio, III = largo. Distancias por zona: **FRONT = 1, MIDDLE = 2, REAR = 3**.
   - Alcance I: normalmente FRONT; si vacío, busca MIDDLE; luego REAR.
   - Alcance II: normalmente FRONT + MIDDLE; si ambas vacías, busca REAR.
   - Alcance III: alcanza todas las zonas.
   - El objetivo de arquetipo **no puede exceder el alcance efectivo** del arma del atacante.
7. **Objetivo automático:** por defecto, el enemigo vivo válido más cercano dentro del alcance. Si la zona preferida está vacía, se busca la siguiente zona alcanzable. Desempate por prioridad: (1) prioridad de arquetipo; (2) menor % de HP; (3) desempate determinista de posición/seed.
8. **Los enemigos usan el mismo framework** y pueden tener arquetipos/pasivas.
9. **Daño:** `ATK efectivo − DEF efectivo`, **mínimo 1**, variación **±10%**. Los buffs/debuffs modifican los stats efectivos en tiempo real.
10. **Crítico:** por defecto **~5% de probabilidad, +50% de daño**; cierto equipamiento puede modificar la probabilidad de crítico.
11. **Timing:** cada unidad tiene su **propio temporizador de acción**; al llegar se ejecuta: comprobación de pasiva → acción → reset del temporizador. Offset inicial determinista pequeño permitido. **No hay turnos visibles manuales.** Prohibido: atacar, defender, curar, elegir objetivo, reposicionar, "continuar turno" (reglas firmadas 2–3).
12. Presentación continua (log de combate + barras de HP) y pantalla de resultado al terminar.
13. **Victoria del bando:** todos los enemigos DOWNED. **Derrota del bando:** todos los participantes desplegados DOWNED. Si los **6 del roster** quedan DOWNED → fin de la run (regla firmada 11). Si la derrota deja DOWNED pero no los 6, la run **continúa** con el estado resultante.
14. **Los arquetipos (13) y sus pasivas no requieren botón manual**: cuando llega el turno del personaje se comprueba la condición de su arquetipo; si aplica, ejecuta la pasiva; si no, ataca normalmente.

---

## 4. DOWNED, REST y HOSPITAL (LOCKED)

### DOWNED
1. Con HP a 0 el participante queda **DOWNED**: deja de actuar; **no puede ser objetivo** como unidad viva; **no puede ser curado por MÉDICO**.
2. **Conserve equipo, XP y nivel.** Queda visible como DOWNED; su posición queda vacía; sin reemplazo por reserva.
3. **El estado persiste entre combates y entre nodos** (regla firmada 6).
4. **6/6 DOWNED = fin de la run** (regla firmada 11).
5. **Los DOWNED no ganan XP** (la interacción exacta con la XP compartida es PENDING; ver `PROYECTOLIKE_DESIGN.md`).

### REST
6. Nodo de descanso: los participantes **en pie** curan **+30% de su HP máx.**
7. **NUNCA** revive a DOWNED. **Sin coste** (sin objeto ni recurso).

### HOSPITAL
8. Nodo **raro y de alto valor**; objetivo: **1–2 oportunidades por acto**; la probabilidad de aparición **puede aumentar** si hay muchos DOWNED.
9. Efectos: en pie → **100% HP**; **todos los DOWNED → revividos al 40% de su HP máx.**; **elimina estados médicos negativos**; **−2 de ruido de run**; **sin coste** ni **riesgo de combate**.

---

## 5. Equipo, roster y reclutamiento (LOCKED)

1. **Róster máximo: 6 participantes.**
2. **Inicio de run:** el juego presenta **exactamente 3 participantes elegibles al azar** (elegibles = desbloqueados en el acto actual; aleatoriedad ligada al seed de la run). El jugador elige **exactamente 1**. **El roster inicial = ese 1 participante.** No se eligen 6 al inicio ni 3 de un pool de 8.
3. El crecimiento del roster **solo** ocurre en nodos de **RECLUTAMIENTO** (escasos).
4. Cada nodo de reclutamiento presenta **exactamente 3 candidatos**:
   - Un participante **ya en el roster NO puede volver a ser candidato en esa run** (nunca).
   - **El mismo participante no puede aparecer dos veces** entre los 3 candidatos de un mismo evento.
   - Se permite similitud de arquetipos entre los 3; **no** se fuerza diversidad artificial.
   - Los candidatos no seleccionados **pueden reaparecer después** según las reglas de aleatoriedad/seed de la run.
5. El jugador puede reclutar **1** candidato (o pasar).
6. **Roster 6/6: reclutar exige despedir a un participante actual**; el despedido **desaparece permanentemente de esa run** y no puede volver.
7. Concepto clave: **ROSTER ≠ DEPLOYMENT.** El roster son los participantes poseídos (máx. 6); el despliegue es decidir, antes de cada combate, **dónde** coloca cada participante vivo.
8. **Origen de los participantes:** no se inventa un roster fictional. Son el roster real de eventos de Proyecto C ya presente en la web (~60 participantes).
9. La conexión con `app.js` es **estable solo de nombres**: array propio local `PL_ROSTER` con nombres (ids estables). **No se modifica, importa ni parsea `app.js`.**
10. **Derivación determinista (LOCKED):** el mismo participante trae siempre los mismos stats base y arquetipo en cualquier run (derivación por hash del id); estable entre partidas y save/load.
11. La asignación inicial de arquetipo es **aproximada por profesión/rol** (el mapeo exacto es PENDING; ver `PROYECTOLIKE_DESIGN.md`).
12. **Pantalla de gestión de equipo** (entre nodos, siempre accesible): lista de los hasta 6 participantes (HP, stats, arquetipo, objeto equipado, estado en pie/DOWNED); colocación de cada participante vivo en una de las 6 posiciones; equipar/desequipar (máx. 1 por participante) del inventario compartido; ver inventario compartido, ruido actual (propiedad del equipamiento), días, comida y XP.

---

## 6. Equipamiento e inventario (LOCKED)

1. **Solo 1 objeto equipado por participante.** Las armas **no se rompen**.
2. **Sin durabilidad. Sin peso/sobrecarga. Sin munición. Sin recarga.** Las armas de fuego **siempre pueden atacar**.
3. **Inventario compartido** para toda la run (un único pool). Los objetos pueden almacenarse y usarse más tarde en nodos/eventos. Se pueden portar **varias armas**; solo afectan al combate las **equipadas**.
4. Quedan **eliminados** del diseño (ya no válidos): seguimiento de munición, durabilidad de armas, peso/sobrecarga, "Noise Maker" como objeto de ruido.
5. (Capacidad exacta del inventario compartido y regla de reemplazo de botín: PENDING, ver `PROYECTOLIKE_DESIGN.md`.)

---

## 7. Ruido (LOCKED en concepto)

1. El **ruido es una propiedad del equipamiento dotado** (loadout), **no un contador por disparo**.
2. Cada arma/objeto equipado tiene un **stat de NOISE**; el ruido del combate/loadout se **deriva del equipamiento** vigente.
3. Disparar una escopeta una vez o muchas **NO** multiplica el ruido del arma para el cálculo de ruido de la run.
4. El ruido de run existe como estado: HOSPITAL lo reduce en **−2** (regla firmada 9); REST también lo reduce (magnitud: PENDING).
5. (Consecuencias exactas del ruido — umbrales, escalas de encuentros atraídos: PENDING; ver `PROYECTOLIKE_DESIGN.md`.)

---

## 8. Armas y progression (LOCKED en estructura)

1. Las armas normales pueden tener **versiones I / II / III** (mayor potencia y/o propiedades mejoradas).
2. El **loot progresa con el progreso de la run/acto**: el equipamiento de principio **no** trivializa la run completa.
3. **No** todas las armas únicas/especiales necesitan las tres versiones.
4. Existe un **catálogo temático LOCKED** (cuerpo a cuerpo, armas de fuego y especiales: ver lista completa en `PROYECTOLIKE_DESIGN.md`, §9).
5. Los **pesos y la munición están deliberadamente ausentes** del catálogo.
6. (Valores numéricos exactos por arma/versión — ATK/DEF/alcance/NOISE/crítico: PENDING; ver `PROYECTOLIKE_DESIGN.md`.)

---

## 9. XP y niveles (LOCKED en estructura)

1. **XP compartida** entre el equipo (no XP individual por participante).
2. **Niveles 1–8:** cada nivel sube el potencial de stats base del equipo (distribución por arquetipo).
3. Al subir de nivel se elige **1 de 3** mejoras:
   1. **Mejora de equipo** (+1 a 2 stats, elegida aleatoriamente).
   2. **Recurso** (comida / botiquín / comparable del mercader).
   3. **Chatarra** (+3, para el mercader).
4. Al subir de nivel se **desbloquea más roster** por acto.
5. **Los participantes DOWNED no ganan XP** (interacción exacta con la XP compartida: PENDING).
6. (Curva exacta de XP, detalle de subida por arquetipo, valores exactos de las mejoras y fórmula del nivel de entrada de reclutados: PENDING; ver `PROYECTOLIKE_DESIGN.md`.)

---

## 10. Mapa, nodos y actos (tipos de nodo LOCKED)

1. Progreso por nodos con **2–3 opciones** por paso (estilo Pokelike).
2. **Tipos de nodo (LOCKED):** **BÚSQUEDA** (loot + chatarra), **ENCUENTRO** (combate automático 6v6 o menor), **RECLUTAMIENTO** (§5), **DESCANSO (REST)** (§4), **HOSPITAL** (§4), **MERCADER** (intercambio de chatarra/objetos → recursos: comida, botiquín, objetos), **EVENTOS** (eventos aleatorios sin combate; contenido exacto: PENDING).
3. **Recursos compartidos de run (mantenidos):**
   - **Comida (pool):** cada día el equipo consume 1 comida; sin comida → **−10 HP** a cada participante en pie (hambre).
   - **Chatarras:** moneda del mercader.
   - **Días:** el tiempo avanza por nodo (**1 día ≈ 3–4 nodos**); alimentan progresión de infección y hambre.
   - **Infección:** si un zombi golpea, **15% de infección** en el participante (estado médico; curable con antibióticos o HOSPITAL; si no se trata en X días el participante queda DOWNED permanentemente — X días: PENDING).
4. **Actos:** **3 actos** (Acto 1 residencial/farmacia tutorial → desbloquea primer bloque del roster; Acto 2 comercial/presión media → segundo bloque; Acto 3 final → tercer bloque, equipo completo posible, defensa final y evacuación). Estructura LOCKED; tuning y nombres finales de zonas: PENDING.
5. **Cada acto tiene un encuentro mayor** (defensa mayor); contenido exacto: PENDING.
6. (Regla exacta de generación de nodos — probabilidades, frecuencia por acto, ubicación de Reclutamiento: PENDING; ver `PROYECTOLIKE_DESIGN.md`.)

---

## 11. Condiciones de fin de run

**Derrota (LOCKED):**
1. **6/6 DOWNED → fin de la partida** (regla firmada 11).
2. **Infección sin tratar** que lleva a un participante a DOWNED permanente, si eso completa los 6 DOWNED → game over.
3. **Hambre:** sin comida el equipo baja HP cada día; si 6/6 caen → game over.

**Victoria (estructura LOCKED):**
4. La victoria consiste en **sobrevivir a la defensa final del Acto 3 y completar la evacuación** con **al menos 1 participante en pie**.
5. (Detalles exactos de la final — escenario, fases, condición precisa de evacuación, pantalla de victoria: PENDING.)

6. Al terminar (victoria o derrota), la run se registra en la **historia local**.

---

## 12. Botín (loot) (LOCKED en estructura)

1. **Entrypoints de loot:** nodo BÚSQUEDA (objetos + chatarras), victoria de combate (XP + botín + chatarras), MERCADER (intercambio), EVENTOS y subidas de nivel.
2. El botín de armas **progresa con el acto**: no hay armas finales al principio.
3. Los objetos entran al **inventario compartido**.
4. (Probabilidades exactas de loot y composición del botín por nodo/acto: PENDING.)

---

## 13. Save / resume, historia y rejugabilidad (LOCKED en concepto)

1. **Guardado automático en `localStorage`** (estado de la run: nodos visitados, roster, HP, DOWNED, inventario, ruido, días, XP/nivel).
2. **Continuar** desde el menú principal si hay run guardada.
3. **Historia local (Hall of Fame):** última N runs (fecha, resultado, días, participantes en pie); hojear/borrar desde el menú. (Detalles exactos — cuándo se guarda, formato, migración, N: PENDING.)
4. Claves de `localStorage` **propias** del juego, sin chocar con las de la web padre.
5. **Rejugabilidad (mecanismos):** mismo roster de nombres reales con stats/arquetipos derivados deterministamente por id (mismos nombres, mezcla distinta); **seed de run** (reclutamientos y eventos aleatorios derivados del seed, cada run distinta); nodos con 2–3 opciones (rutas distintas); recursos y economía (decisiones distintas).

---

## 14. Integración con la web de Proyecto C (restricciones canónicas)

1. ProyectoLike se integra como **pestaña nueva e aislada** (navegación por hash) en la web existente. **Solo cambia `index.html`** (ancla `data-tab="proyectolike"` + sección + enlaces CSS/JS).
2. **Archivos propios:** `proyectolike/proyectolike.js` (IIFE, `'use strict'`, sin globales) y `proyectolike/proyectolike.css` (todo bajo el scope del tab).
3. **Ids/clases con prefijo `pl-`** (clases generadas por JS y selectores del CSS usan el mismo prefijo).
4. **NO se modifica:** `app.js`, `server.js`, `styles.css`, `package.json`, `live-channels.json`, `README.md` (salvo instrucción expresa) ni las tabs lógicas existentes.
5. **Sin backend** (nada de API de Twitch), **sin dependencias externas** (vanilla JS), **UI en español**, **sin animaciones ni sonido** en el prototipo, estilo card/botón con texto y números claros (sin sprites).

---

## 15. Alcance del primer prototipo

**Incluye:**
- Roster de hasta 6 (nombres reales de Proyecto C): inicio 1 de 3 candidatos; crecimiento por RECLUTAMIENTO (6/6 → despedida permanente).
- Stats HP/ATK/DEF/VEL + **13 arquetipos** con pasivas automáticas.
- Combate **6v6, totalmente automático** (formación FRONT/MIDDLE/REAR ×2, bloqueo de formación, sin reservas, DOWNED persiste).
- Nodos: BÚSQUEDA, ENCUENTRO, RECLUTAMIENTO, REST, HOSPITAL (raro), MERCADER, EVENTOS.
- Ruido como propiedad del equipamiento; comida, chatarras, días, infección.
- Armas I/II/III + catálogo temático; inventario compartido, 1 equipado/participante, sin munición/peso/durabilidad.
- XP compartida + niveles 1–8 + mejora 1 de 3 (curva PENDING).
- **3 actos + 3 defensas mayores** (estructura LOCKED, contenido PENDING).
- Game over 6/6 DOWNED; victoria en la evacuación del Acto 3 (detalles PENDING).
- Save/resume + historia local (`localStorage`).
- UI en español, sin animaciones/sonido.

**NO incluye en el prototipo:** moda diario/challenges/infinito; vehículos, crafting, mapa por tiles, animación, sprites, sonido; multijugador/backend/API; edición del roster desde el juego; más de 3 actos; sistema "shiny"; botones de combate (prohibidos por reglas firmadas 1–3).

---

## 16. Nota sobre PENDING

Los puntos PENDIENTE **no son reglas**: no se implementan ni se infieren hasta un update explícito. La lista consolidada (17 puntos) y su contexto están en `PROYECTOLIKE_DESIGN.md` (sección "PENDIENTE — lista consolidada").
