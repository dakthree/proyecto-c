# PROYECTOLIKE — Especificación Canónica

> **Estado:** APROBADA (versión consolidada). Este archivo es la especificación canónica del proyecto ProyectoLike.
>
> Incorpora las decisiones de `PROYECTOLIKE_DESIGN_UPDATE.md` (capa de diseño más reciente). Donde ambos documentos difieren, **prevalece `PROYECTOLIKE_DESIGN_UPDATE.md`**; las reglas viejas que sustituye quedan eliminadas de este archivo (ver §19).
>
> **Reglas de gobernanza:**
> - Toda implementación futura DEBE cumplir este archivo.
> - Si alguna instrucción futura entra en conflicto con esta especificación, **parar y preguntar antes de modificarla**. Nadie (asistente incluido) cambia esta spec unilateralmente.
> - Este archivo es **solo especificación**: no autoriza código ni implementación por sí mismo. La implementación empieza solo con una instrucción explícita.
> - Los points que no están definidos en esta versión se marcan **PENDIENTE** (ver §18). No se infieren valores.
> - Los diseños anteriores ("PROYECTOLIKE — Diseño definitivo") quedan como contexto histórico, pero **este archivo tiene prioridad** en caso de conflicto.

---

## 0. Visión general

- **ProyectoLike** es un roguelike **inspirado en Pokelike**, adaptado al universo **Project Zomboid / Proyecto C**.
- El núcleo es el de Pokelike: **run → mapa con nodos ramificados → combates/eventos → recompensas → gestión del equipo → siguiente nodo**, con actos, encuentros mayores, hitos, reliquias/pasivas, victoria y derrota.
- Los **participantes de Proyecto C son los personajes jugables**: el equivalente funcional a los "pokémon" del loop de Pokelike. No son acompañantes opcionales; son las unidades del combate y el corazón del juego.
- La **estrategia del jugador no ocurre DENTRO del combate, sino ANTES**: formación, posiciones, equipamiento y elección de ruta. Una vez iniciado un encuentro, el combate se resuelve **automáticamente** y el jugador solo observa hasta el resultado.
- Primer alcance: prototipo **100% client-side** (vanilla JS + localStorage), sin backend. Se integra como **pestaña nueva e aislada** en la web de Proyecto C existente.

### 0.1 Reglas firmadas (contrato inquebrantable, máxima prioridad)

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

> Estas 11 reglas tienen la **máxima prioridad** dentro de esta especificación. (Reglas 4, 7, 9 y 10 actualizadas con el design update; el resto se mantiene.)

---

## 1. Equipo, roster y reclutamiento

### 1.1 Inicio de run

- **Róster máximo: 6 participantes.**
- Al iniciar una run nueva, el juego presenta **exactamente 3 participantes elegibles al azar** (elegibles = desbloqueados en el acto actual, §9; aleatoriedad ligada al seed de la run, §3).
- El jugador elige **exactamente 1**.
- **El roster inicial = ese 1 participante.** No se eligen 6 al inicio ni 3 de un pool de 8.

### 1.2 Reclutamiento

- El crecimiento del roster **solo** ocurre en nodos de **RECLUTAMIENTO** (escasos, §9).
- Cada nodo de reclutamiento presenta **exactamente 3 candidatos**.
- Reglas de candidatos:
  - Un participante **ya en el roster NO puede volver a ser candidato en esa run** (nunca).
  - **El mismo participante no puede aparecer dos veces** entre los 3 candidatos de un mismo evento.
  - Se permite similitud de arquetipos entre los 3; **no** se fuerza diversidad artificial.
  - Los candidatos **no seleccionados pueden reaparecer después** según las reglas de aleatoriedad/seed de la run.
- El jugador puede reclutar **1** candidato (o pasar).
- **Si el roster ya está 6/6, reclutar exige despedir a un participante actual:** el despedido **desaparece permanentemente de esa run** y no puede volver.
- El participante reclutado entra **con un nivel apropiado al progreso actual de la run** (fórmula exacta: PENDIENTE, §18).
- Concepto clave: **ROSTER ≠ DEPLOYMENT.** El roster son los participantes poseídos (máx. 6). El despliegue es decidir, antes de cada combate, **dónde** coloca cada participante vivo (posiciones, §3.1).

### 1.3 Origen de los participantes

- **No se inventa un roster fictional.** Los nombres jugables son el roster real de eventos de Proyecto C ya presente en la web (~60 participantes).
- La conexión con `app.js` es **estable solo de nombres**: ProyectoLike mantiene en su propio archivo un array local `PL_ROSTER` con los nombres (ids estables). **No se modifica, importa ni parsea `app.js`.**
- La asignación inicial de arquetipo es **aproximada por profesión/rol** y puede refinarse después (mapeo exacto: PENDIENTE, §18).
- **Derivación determinista:** el mismo participante trae siempre los mismos stats base y arquetipo en cualquier run (derivación por hash del id). La varianza estadística exacta por arquetipo es PENDIENTE (§18); lo que sí está LOCKED es que la derivación es determinista (mismo id → mismos stats) y estable entre partidas y save/load.

### 1.4 Pantalla de gestión de equipo (entre nodos, siempre accesible)

- Lista de los hasta 6 participantes (HP, stats, arquetipo, objeto equipado, estado: en pie / DOWNED).
- Colocación de cada participante vivo en una de las 6 posiciones de combate (§3.1).
- Equipar / desequipar objetos del inventario compartido (máx. 1 por participante).
- Ver inventario compartido, ruido actual (propiedad del equipamiento, §6), días, comida y XP.

---

## 2. Stats primarios

Cada participante posee **4 stats primarios**:

| STAT | Rango de referencia | Función |
|------|------|---------|
| **HP** | ~60–150 | Vida máxima. A 0 el participante queda **DOWNED**. |
| **ATK** | ~8–35 | Poder de ataque. |
| **DEF** | ~5–30 | Reduce el daño recibido. |
| **VEL** | ~4–12 | **Frecuencia de acción** (NO es solo iniciativa). |

- **VEL no es solo turno:** VEL alto = intervalo de acción más corto. Intervalos de referencia:

| VEL | Intervalo |
|----:|----------:|
| 4 | 1.60 s |
| 5 | 1.45 s |
| 6 | 1.30 s |
| 7 | 1.18 s |
| 8 | 1.08 s |
| 9 | 0.99 s |
| 10 | 0.91 s |
| 11 | 0.84 s |
| 12 | 0.78 s |

- El **VEL efectivo** lo modifican armas, buffs y debuffs. Clamp sugerido del motor: **1–20**.
- Los rangos de arriba y los perfiles de §2.1 son **valores de diseño de PROYECTOLIKE**, no stats oficiales de Project Zomboid.

### 2.1 Los 13 arquetipos (LOCKED)

1. TANQUE · 2. OFFTANK · 3. ASESINO · 4. FRANCOTIRADOR · 5. MÉDICO · 6. DEMOLICIONES · 7. ASALTO · 8. HOSTIGADOR · 9. INGENIERO · 10. BERSERKER · 11. SUPERVIVIENTE · 12. SOPORTE · 13. CONTROLADOR.

Perfiles de referencia:

| Arquetipo | HP | ATK | DEF | VEL | Alcance típico |
|---|---:|---:|---:|---:|---|
| TANQUE | 150 | 14 | 30 | 4 | I |
| OFFTANK | 125 | 23 | 24 | 6 | I-II |
| ASESINO | 70 | 35 | 7 | 12 | I-II |
| FRANCOTIRADOR | 65 | 34 | 6 | 6 | III |
| MÉDICO | 90 | 10 | 19 | 7 | II-III |
| DEMOLICIONES | 100 | 24 | 15 | 5 | II-III |
| ASALTO | 105 | 27 | 16 | 9 | I-II |
| HOSTIGADOR | 85 | 20 | 11 | 11 | II-III |
| INGENIERO | 95 | 19 | 18 | 7 | II-III |
| BERSERKER | 120 | 30 | 14 | 8 | I |
| SUPERVIVIENTE | 110 | 22 | 20 | 7 | I-II |
| SOPORTE | 85 | 14 | 17 | 8 | II-III |
| CONTROLADOR | 85 | 18 | 15 | 8 | II-III |

### 2.2 Comportamiento automático de arquetipos (LOCKED)

Regla general: cuando a un personaje le llega su oportunidad de acción, **comprueba la condición de su arquetipo**. Si la condición aplica, ejecuta la acción del arquetipo; si no, ataca normalmente. Ninguna pasiva requiere botón manual.

- **TANQUE — PROVOCACIÓN.** Protector de primera línea. Mientras esté vivo posicionado en FRONT, los enemigos que normalmente apuntarían a FRONT lo atacan preferentemente. Recibe **~15% menos de daño directo** (no reduce daño de área).
- **OFFTANK — GUARDIA.** ~20% de probabilidad de reducir en 30% un golpe directo que vaya a un aliado de la misma zona; si no aplica, ataca normalmente.
- **ASESINO — EJECUCIÓN.** Prioriza enemigos con HP ≤ 30%; contra esos objetivos hace **~+50% de daño**.
- **FRANCOTIRADOR — OBJETIVO PRIORITARIO.** En alcance, prioriza el enemigo con **mayor ATK** (empate → mayor HP). Con arma de alcance **III**, +10% de daño.
- **MÉDICO — TRIAJE.** En su acción: (1) si hay un aliado vivo por debajo del 60% de HP, cura; (2) cura al aliado vivo con menor % de HP; (3) si nadie necesita cura, ataca normalmente. Cura = **~20% del HP máx. del objetivo**. **No revive, no cura DOWNED y no se cura a sí mismo** por esta pasiva.
- **DEMOLICIONES — ÁREA.** Ataque de área automático: objetivo primario 100% de daño; segundo 50%; tercer 35%. El área solo afecta objetivos válidos dentro del alcance del arma. (El "segundo/tercer objetivo" exacto se resuelve por el objetivo automático + la regla de objetivos válidos por rango/posición.)
- **ASALTO — RÁFAGA.** Dos impactos rápidos, cada uno ~60% del daño normal (total teórico ~120% antes de otros modificadores).
- **HOSTIGADOR — ACOSO.** Al acertar, aplica **−10% DEF** al objetivo por ~3 s. No se apila; la reaplicación renueva la duración.
- **INGENIERO — APROVECHAMIENTO.** Al iniciar el combate se revisa el **inventario compartido**: cada objeto **no equipado** da +1% ATK y +1% DEF (máx. 10 objetos contados). Los objetos equipados no cuentan. El bonus se recalcula al inicio de cada combate.
- **BERSERKER — FURIA.** Bonus de ATK según HP actual: >75% = 0%; 51–75% = +5%; 26–50% = +10%; ≤25% = +20%. Con HP ≤ 25% también +10% VEL. Derivado del HP actual, sin stack aparte.
- **SUPERVIVIENTE — ADAPTACIÓN.** Bonus pequeños según el tipo de arma equipada: cuerpo a cuerpo → +5% DEF; pistola/revólver → +5% VEL; rifle → +5% ATK; escopeta → bonus pequeño de supervivencia/HP; explosiva → +5% ATK y +5% daño de área; sin objeto → +5% DEF. **No** se introduce un stat primario nuevo para esto.
- **SOPORTE — MORAL.** En su acción: prefiere un aliado sin el buff; si todos lo tienen, el cuyo buff está por caducar; aplica **un buff de los soporte al azar**: +10% ATK, +10% DEF, +10% VEL, +1 alcance, −10% daño recibido. Reglas: nunca sube HP máx; nunca cura; el mismo tipo de buff no se apila (la reaplicación renueva); distintos tipos pueden coexistir; duración de referencia ~6 s.
- **CONTROLADOR — CONTROL.** En su acción: prefiere enemigos de alto ATK sin el debuff elegido. Debuffs posibles: **DEBILITAR** (−15% ATK ~5 s), **RALENTIZAR** (−20% VEL ~5 s), **EXPONER** (−15% DEF ~5 s), **DESORIENTAR** (−1 alcance ~5 s, mínimo alcance I). Reglas: el mismo tipo de debuff no se apila en un enemigo; si todos los enemigos válidos ya están "útilmente" con debuff, ataca normalmente.

---

## 3. Combate — TOTALMENTE AUTOMÁTICO, 6v6

### 3.1 Formación (LOCKED)

```text
FRONT       [1] [2]
MIDDLE      [3] [4]
REAR        [5] [6]
```

- El combate es **6v6** cuando ambos bandos tienen 6 combatientes disponibles.
- **Cada bando tiene 6 posiciones:** FRONT ×2, MIDDLE ×2, REAR ×2.
- Antes del combate, el jugador puede **colocar libremente cada participante vivo en cualquier posición**.
- Las posiciones "recomendadas" por arquetipo (ver alcance típico, §2.1) **no son restricción dura**.
- **La formación se bloquea al iniciar el combate.** No se reposiciona durante el combate.
- **Sin reservas:** si un participante queda DOWNED, su posición queda **vacía**; nadie entra a reemplazarlo.

### 3.2 Alcance y distancia (LOCKED)

- Alcanzas del arma: **I = corto, II = medio, III = largo.**
- Distancias por zona: **FRONT = 1, MIDDLE = 2, REAR = 3.**
- **Alcance I:** llega normalmente a FRONT; si no hay objetivo válido en FRONT, busca MIDDLE; luego REAR.
- **Alcance II:** llega normalmente a FRONT + MIDDLE; si ambas están vacías, busca REAR.
- **Alcance III:** alcanza todas las zonas.
- El objetivo de arquetipo **no puede exceder el alcance efectivo** del arma del atacante.

### 3.3 Objetivo automático (LOCKED)

- **Por defecto: atacar al enemigo vivo válido más cercano dentro del alcance.**
- Si la zona preferida está vacía, se busca la siguiente zona alcanzable.
- Dos objetivos de la misma zona equivalen a la misma distancia. Desempate por prioridad:
  1. prioridad de arquetipo (ej. ASESINO → objetivo de bajo HP; FRANCOTIRADOR → alto ATK; CONTROLADOR → alto ATK sin su debuff);
  2. menor % de HP;
  3. desempate determinista de posición/seed.
- **Los enemigos usan el mismo framework** y pueden tener arquetipos/pasivas.

### 3.4 Daño (LOCKED)

- **Daño base:** `ATK efectivo − DEF efectivo`, **mínimo 1**, con **variación ±10%**.
- Los buffs/debuffs modifican los stats efectivos en tiempo real.
- **Crítico:** por defecto **~5% de probabilidad, +50% de daño**; cierto equipamiento puede modificar la probabilidad de crítico.

### 3.5 Timing y presentación (LOCKED)

- Cada unidad tiene su **propio temporizador de acción**; cuando el temporizador llega, se ejecuta: **comprobación de pasiva → acción → reset del temporizador**.
- Se permite un offset inicial determinista pequeño.
- **No hay turnos visibles manuales.** El combate puede renderizarse en tiempo real ~1× para el jugador.
- Prohibido: atacar, defender, curar, elegir objetivo, reposicionar o "continuar turno" (reglas firmadas 2–3).
- Presentación: **log de combate + barras de HP**; al terminar, pantalla de resultado (victoria → recompensa; derrota → pérdidas según §4).

### 3.6 Decisión de victoria/derrota en combate

- **Victoria del bando:** todos los enemigos DOWNED.
- **Derrota del bando:** todos los participantes desplegados DOWNED. Si **los 6 del roster** quedan DOWNED → **fin de la run** (regla firmada 11). Si la derrota de un combate deja algunos participantes sin pelear o con posiciones vacías pero no los 6, la run **continúa** con el estado resultante (los DOWNED persisten, §4).

---

## 4. DOWNED, REST y HOSPITAL

### 4.1 DOWNED (LOCKED)

Cuando el HP llega a 0:
- El participante queda **DOWNED**: deja de actuar; **no puede ser objetivo** como unidad viva; no puede ser curado por MÉDICO.
- **Conserve equipo, XP y nivel.**
- Queda **visible como DOWNED**; su posición de combate queda vacía; **sin reemplazo por reserva**.
- **El estado persiste entre combates y entre nodos** (regla firmada 6).
- **6/6 DOWNED = la run terminó** (regla firmada 11).
- **Los participantes DOWNED no ganan XP** (ver §8).

### 4.2 REST (LOCKED)

- Nodo de descanso: los participantes **en pie** curan **+30% de su HP máx.**
- **NUNCA** revive a DOWNED.
- **Sin coste** (sin objeto ni recurso).

### 4.3 HOSPITAL (LOCKED)

- Nodo **raro y de alto valor**; objetivo: **1–2 oportunidades por acto**. La probabilidad de aparición **puede aumentar** si hay muchos participantes DOWNED.
- Efectos (LOCKED):
  - Participantes **en pie → 100% HP.**
  - **Todos los DOWNED → revividos al 40% de su HP máx.**
  - **Elimina estados médicos negativos** (infección, etc.).
  - **−2 de ruido de run** (el ruido es propiedad del equipamiento, §6).
  - **Sin coste** ni **riesgo de combate**.

---

## 5. Equipamiento e inventario (LOCKED)

- **Solo 1 objeto equipado por participante.** Las armas **no se rompen**.
- **Sin durabilidad. Sin peso/sobrecarga. Sin munición. Sin recarga.** Las armas de fuego **siempre pueden atacar**.
- **Inventario compartido** para toda la run (un único pool). Los objetos pueden almacenarse y usarse más tarde en nodos/eventos. Se pueden portar **varias armas**; solo afectan al combate las **equipadas**.
- Capacidad exacta del inventario compartido y regla de reemplazo botín: **PENDIENTE** (§18). (El draft antiguo usaba un pool máx. 8; queda fuera de scope hasta definirse.)
- Se **eliminan** explícitamente del diseño (ya no son válidos): seguimiento de munición, durabilidad de armas, peso/sobrecarga, "Noise Maker" como objeto de ruido.

---

## 6. Ruido (LOCKED en concepto)

- El **ruido es una propiedad del equipamiento dotado** (loadout), **no un contador por disparo**.
- Cada arma/objeto equipado tiene un **stat de NOISE**.
- El ruido del combate/loadout se **deriva del equipamiento** vigente.
- Disparar una escopeta una vez o muchas **NO** multiplica el ruido del arma para el cálculo de ruido de la run.
- El ruido de run existe como estado (los nodos HOSPITAL lo reducen en −2, §4.3) y **REST** lo restablece/reduce (magnitud: PENDIENTE).
- **Consecuencias exactas del ruido de la run** (umbrales, tipos/escalas de encuentros atraídos): **PENDIENTE** (§18).

---

## 7. Armas y progression (LOCKED en estructura)

- Las armas normales pueden tener **versiones I / II / III**. Las versiones altas son más potentes y/o ganan propiedades mejoradas.
- El **loot progresa con el progreso de la run/acto**: el equipamiento de principio **no** trivializa la run completa.
- **No** todas las armas únicas/especiales necesitan las tres versiones.
- **Catálogo temático actual (LOCKED como lista de nombres/conceptos):**

**Cuerpo a cuerpo:** Cuchillo de cocina · Cuchillo de caza · Destornillador · Martillo · Llave inglesa · Pata de cabra · Bat Béisbol · Bat Béisbol con clavos · Lanza · Lanza con cuchillo · Hacha de mano · Hacha de leñador · Machete · Katana · Espada · Pico.

**Armas de fuego:** M9 · M1911 · D-E · M36 · M625 · Magnum · MSR700 · MSR788 · M14 · M16 · JS-2000 · Double Barrel · JS-2000 recortado · Double Barrel recortada.

**Especiales:** Molotov I · Molotov II · Bomba de tubo · Bomba de humo.

- **Los pesos y la munición están deliberadamente ausentes** del catálogo.
- **Valores numéricos exactos** (ATK/DEF/alcance/NOISE/crítico) **de cada arma y versión: PENDIENTE** (§18).

---

## 8. XP y niveles

- **XP compartida** entre el equipo (no XP individual por participante).
- **Niveles 1–8:** cada nivel sube el potencial de stats base del equipo (distribución por arquetipo, ejemplo: TANQUE sube HP/DEF, ASESINO sube ATK, etc.). Detalle de subida por arquetipo: PENDIENTE.
- **Curva exacta de XP por nivel: PENDIENTE.**
- Al subir de nivel se elige **1 de 3** mejoras (estructura de los 3 tipos del draft antiguo; valores exactos PENDIENTE):
  1. **Mejora de equipo** (+1 a 2 stats, elegida de forma aleatoria).
  2. **Recurso** (comida / botiquín / comparable del mercader).
  3. **Chatarra** (+3, para el mercader).
- Al subir de nivel se **desbloquea más roster** por acto (ver §9).
- **Los participantes DOWNED no ganan XP.** Interacción exacta con el sistema de XP compartida (p. ej. si una run en la que uno está DOWNed sigue obteniendo XP): **PENDIENTE** (ver curva/mechanics de §18).
- **Nivel de entrada de un participante reclutado:** apropiado al progreso actual de la run; **fórmula exacta: PENDIENTE.**

---

## 9. Mapa, nodos y actos

### 9.1 Estructura de nodos (LOCKED en tipos, generación PENDIENTE)

Progreso por nodos con **2–3 opciones** por paso (estilo Pokelike). Tipos de nodo:

- **BÚSQUEDA:** loot (objetos del catálogo, §7) + chatarra.
- **ENCUENTRO:** combate automático 6v6 (o menor si el bando enemigo tiene menos combatientes; el bando del jugador puede desplegar hasta 6).
- **RECLUTAMIENTO:** los 3 candidatos con las reglas de §1.2.
- **DESCANSO (REST):** efectos de §4.2.
- **HOSPITAL:** nodo raro de alto valor, §4.3.
- **MERCADER:** intercambio de chatarra/objetos → municiones de recurso (comida, botiquín, objetos). Bono de trato del arquetipo INGENIERO: **PENDIENTE** (el draft antiguo lo asociaba a FORJA, ya sustituido).
- **EVENTOS:** eventos aleatorios sin combate. El contenido exacto de eventos: **PENDIENTE** (§18); el draft antiguo proponía ejemplos (hallar botín, perder una noche con +ruido, concesionario 1 de 3, etc.) como referencia no aprobada.

- **Regla exacta de generación de nodos (probabilidades, frecuencia por acto, dónde aparece Reclutamiento): PENDIENTE** (§18).

### 9.2 Recursos compartidos de run (mantenidos)

- **Comida (pool):** cada día el equipo consume 1 comida; sin comida → −10 HP a cada participante en pie (hambre).
- **Chatarras:** moneda del mercader.
- **Días:** el tiempo avanza por nodo (1 día ≈ 3–4 nodos); alimentan progresión de infección y hambre.
- **Infección:** si un zombi golpea, **15% de infección** en el participante (estado médico; curable con antibióticos o HOSPITAL, §4.3; si no se trata en X días el participante queda DOWNED permanentemente — X días: PENDIENTE).

### 9.3 Actos (LOCKED en estructura, tuning PENDIENTE)

- **Acto 1** — zona residencial/farmacia (tutorial): desbloquea el primer bloque del roster; la run empieza con 1 participante (§1.1) y crece por reclutamientos.
- **Acto 2** — zona comercial / presión media: desbloquea el segundo bloque.
- **Acto 3** — final: desbloquea el tercer bloque; equipo completo posible; defensa final y evacuación (§11).
- **Tuning exacto de la progresión del acto (tamaño de roster por acto, longitud en nodos, escalado de enemigos): PENDIENTE.**
- **Nombres de zonas del draft antiguo (Rosalind Creek / Muldraugh / Base Militar–Knox Inlet):** referencia no aprobada por este update; el nombre final de los actos queda **PENDIENTE** bajo "tuning de la progresión de actos".

### 9.4 Encuentros mayores

- Cada acto tiene un **encuentro mayor** (defensa mayor). El **contenido exacto** de cada uno (fases, enemigo, recompensa): **PENDIENTE** (§18). El draft antiguo proponía (pernoche de horda · banda de bandidos multi-etapa · base militar/heliporto) como referencia no aprobada.

---

## 10. Reliquias, hitos, eventos y encuentros mayores (PENDIENTE)

- **Reliquias:** existirá un sistema de pasivas/reliquias por run en el diseño definitivo; **definición exacta, lista y límites: PENDIENTE.** El draft antiguo proponía (kit quirúrgico, radio, filtro de agua, etc., máx. 3) como referencia no aprobada.
- **Hito:** sistema de logros de acto (1 por acto; 3 hitos desbloquean la defensa final); **detalles exactos: PENDIENTE.**
- **Eventos y encuentros mayores:** ver §9.1 y §9.4 (PENDIENTE).

---

## 11. Condiciones de fin de run

**Derrota (LOCKED):**
- **6/6 DOWNED → fin de la partida** (regla firmada 11).
- **Infección sin tratar** que lleva a un participante a DOWNED permanente, si eso completa los 6 DOWNED → game over (ver §9.2).
- **Hambre:** sin comida el equipo baja HP cada día; si 6/6 caen → game over.

**Victoria (estructura LOCKED, detalles PENDIENTE):**
- La victoria consiste en **sobrevivir a la defensa final del Acto 3 y completar la evacuación** con **al menos 1 participante en pie**.
- **Detalles exactos de la final (escenario, fases, condición precisa de la evacuación, pantalla de victoria): PENDIENTE** (§18).
- Al terminar (victoria o derrota), la run se registra en la **historia local** (§13).

---

## 12. Botín (loot)

- Entrypoints de loot: nodo BÚSQUEDA (objetos + chatarras), victoria de combate (XP + botín + chatarras), MERCADER (intercambio), EVENTOS y subidas de nivel (§8).
- El botín de armas **progresa con el acto** (§7): no hay armas finales al principio.
- **Probabilidades exactas de loot y composición de botín por nodo/acto: PENDIENTE** (§18).
- Los objetos entran al **inventario compartido** (§5).

---

## 13. Save / Resume + Historia local

- **Guardado automático en `localStorage`** (estado de la run: nodos visitados, roster, HP, DOWNED, inventario, ruido, días, XP/nivel). **Detalles exactos (cuándo se guarda, formato, migración): PENDIENTE.**
- **Continuar** desde el menú principal si hay run guardada.
- **Historia local (Hall of Fame):** última N runs (fecha, resultado, días, participantes en pie). Hojear/borrar desde el menú. (N exacto: PENDIENTE.)
- Claves de `localStorage` propias del juego, sin chocar con las de la web padre.

---

## 14. Rejugabilidad

- **Mismo roster (nombres reales) + stats/arquetipos derivados de forma determinista por id** → mismos nombres, distinta mezcla según bloqueo de acto y reclutamiento.
- **Seed de run:** los reclutamientos y eventos aleatorios se derivan del seed de la run → cada run tiene un roster distinto.
- **Nodos con 2–3 opciones** → rutas distintas.
- **Recursos y economía** (chatarras, mercader) → decisiones económicas distintas.

---

## 15. Integración con la web de Proyecto C (aislamiento técnico)

- ProyectoLike se integra como **pestaña nueva e aislada** (navegación por hash) en la web existente. Solo cambia `index.html` (ancla `data-tab="proyectolike"` + sección + enlaces CSS/JS).
- **Archivos propios:** `proyectolike/proyectolike.js` (IIFE, `'use strict'`, sin globales) y `proyectolike/proyectolike.css` (todo bajo el scope del tab).
- **Ids/clases con prefijo `pl-`** (las clases generadas por JS y los selectores del CSS usan el mismo prefijo).
- **NO se modifica:** `app.js`, `server.js`, `styles.css`, `package.json`, `live-channels.json`, `README.md` (salvo instrucción expresa), ni las tabs lógicas existentes.
- **Sin backend** (nada de API de Twitch), **sin dependencias externas** (vanilla JS), **UI en español**, **sin animaciones ni sonido** en el prototipo, estilo card/botón con texto y números claros (sin sprites).

---

## 16. Alcance del primer prototipo

**Incluye:**
- Roster de hasta 6 (nombres reales de Proyecto C): **inicio 1 de 3 candidatos** (§1.1); crecimiento por nodos de RECLUTAMIENTO (§1.2, 6/6 → despedida permanente).
- Stats HP/ATK/DEF/VEL + **13 arquetipos** con pasivas automáticas (§2).
- Combate **6v6, totalmente automático** (formación FRONT/MIDDLE/REAR ×2, bloqueo de formación, sin reservas, DOWNED persiste, §3).
- Nodos: BÚSQUEDA, ENCUENTRO, RECLUTAMIENTO, REST, HOSPITAL (raro), MERCADER, EVENTOS (§9).
- Ruido como propiedad del equipamiento (§6); comida, chatarras, días, infección (§9.2).
- Armas I/II/III + catálogo temático (§7); inventario compartido, 1 equipado/participante, sin munición/peso/durabilidad (§5).
- XP compartida + niveles 1–8 + mejora 1 de 3 (§8; curva PENDIENTE).
- **3 actos + 3 defensas mayores** (estructura LOCKED, contenido PENDIENTE).
- Game over 6/6 DOWNED; victoria en la evacuación del Acto 3 (detalles PENDIENTE).
- Save/resume + historia local (localStorage).
- UI en español, sin animaciones/sonido.

**NO incluye en el prototipo:** moda diario/challenges/infinito; vehículos, crafting, mapa por tiles, animación, sprites, sonido; multijugador/backend/API; edición del roster desde el juego; más de 3 actos; sistema "shiny"; botones de combate (prohibidos por reglas firmadas 1–3).

---

## 17. Estado de las decisiones

- **LOCKED:** todo lo marcado LOCKED o contenido en reglas firmadas §0.1. `PROYECTOLIKE_DESIGN_UPDATE.md` es la capa más reciente y **prevalece**.
- **PENDIENTE:** §18 (lista consolidada).

---

## 18. PENDIENTE (lista consolidada)

Puntos **no definidos**: no se implementen ni se infieran valores hasta un update explícito.

1. **Curva exacta de XP/nivel** e interacción de XP compartida con participantes DOWNED.
2. **Fórmula exacta del nivel de entrada** de un participante reclutado.
3. **Mapeo exacto profesión → arquetipo** (asignación inicial aproximada por profesión está aprobada; el mapeo exacto no).
4. **Varianza estadística exacta por participante** dentro de cada arquetipo (la derivación determinista por id sí es LOCKED).
5. **Probabilidades exactas de loot** y composición del botín por nodo/acto.
6. **Generación exacta de nodos** (probabilidades, frecuencia, por acto).
7. **Tuning de la progresión del acto** (tamaño de roster por acto, longitud, escalado de enemigos, nombres finales de actos/zonas).
8. **Balances exactos numéricos por arma/versión** (incluye NOISE y crítico de cada arma).
9. **Consecuencias exactas del ruido de run** (escala, umbrales, efecto en encuentros) y magnitud de reducción de REST.
10. **Reliquias** (lista, límites, interacción con HOSPITAL).
11. **Hitos** (definición y recompensas).
12. **Eventos** (catálogo y efectos).
13. **Encuentros mayores** (contenido por acto, fases, recompensa).
14. **Detalles de la victoria final** (escenario, fase, pantalla de victoria); duración exacta X días de infección.
15. **Detalles de save/resume** (frecuencia de guardado, formato, N de historia).
16. **Capacidad exacta del inventario compartido** y regla de reemplazo de botín.
17. Bonos de arquetipo en mercader/descanso (el INGENIERO reemplaza el antiguo bono de FORJA; magnitud PENDIENTE).

---

## 19. Conceptos suplantados (ya no válidos)

Los siguientes conceptos del draft original quedaron **eliminados** (en su lugar: el diseño vigente de esta spec):

- ❌ Sistema de 3 en despliegue + 3 en reserva. → **6v6 con posiciones FRONT/MIDDLE/REAR ×2, sin reservas** (§3.1).
- ❌ Inicio eligiendo 6 (o 3 de un pool de 8). → **3 candidatos al azar → elegir 1** (§1.1).
- ❌ Reclutamiento sin límite de roster (recapitulando con "% de éxito"). → **3 candidatos / máx. 1 / sin duplicados / 6-6 → despedida permanente** (§1.2).
- ❌ Control manual de combate / "continuar turno". → **Combate totalmente automático** (§3).
- ❌ Munición, recarga, durabilidad, peso/sobrecarga. → **Eliminados** (§5).
- ❌ Ruido por arma ("Noise Maker") / acumulación por disparo. → **Ruido = propiedad del loadout** (§6).
- ❌ Stats pequeños del draft (HP 45–70, etc.). → **Rangos nuevos del design update** (§2).
- ❌ 5 roles arquetípicos antiguos (Combate/Guardia/Medicina/Forja/Vigor). → **13 arquetipos** (§2.1).
- ❌ Objeto botiquín "cura 15 HP a un DOWNED en pie" (contradicción: DOWNED se define como caído; la cura fuera de combate la da REST/HOSPITAL con reglas propias). → **REST +30% en pie; HOSPITAL revive al 40%** (§4).
