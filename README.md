# Proyecto C v21

Cambios principales:
- Filtro de jugadores de CLIPS rediseñado como combobox personalizado.
- Solo aparecen participantes que tienen Twitch asociado.
- La flecha abre siempre la lista completa, incluso cuando ya hay un jugador seleccionado.
- Buscador por escritura con filtro en tiempo real.
- Lista estilizada con la misma estética oscura/roja del selector de directos de la home.
- Altura máxima del desplegable limitada para que no ocupe media pantalla.


## Player images updated
Updated images were added for zigurath, Andreshouse, lordzacas, ElPonja92, xL𝑜K𝑜Vic, TyzenH and Z3TTII. The provided `tenkachy.webp` is also included under `assets/players/`, but no participant named Tenkachy exists in the current 56-player roster, so it was not assigned to another player automatically.


## Roster update
- Added **Tenkachy** as a new participant, using `assets/players/tenkachy.webp`.
- Removed **Garlic_Jr42** from the participant roster and live-channel list.
- Tenkachy currently has no Twitch/YouTube URL configured because none was provided yet.


## Latest update
- Added DONACIONES tab with a visual PayPal donation card.
- Renamed participant Tenkachy to Tencachi everywhere and renamed the player image accordingly.
- BasqueWanderer remains in the roster exactly once.


## Donations copy update
- Donations wording updated to explicitly welcome support from viewers/spectators as well as participants.
- Added non-financial ways to support the project such as watching, following and sharing.


## Mercado Negro
Added as a full top-level tab immediately before DONACIONES, with Farmacia, Rasgos, Armas, Coches and Objetos sections.

## Market Negro content update
Replaced provisional stim art with cropped artwork supplied by the project, one image per stim.
Expanded Rasgos with the supplied trait catalog and wiki links, and added the requested Weapons, Vehicles and Objects catalog entries.


## Latest Mercado Negro update
- Replaced Meldonin, AHF1-M, ETG-c and Obdolbos artwork with the individually supplied images.
- Left the RASGOS section empty for future content.


## Latest roster update
- Rebuilt the participant roster from the supplied screenshots, excluding all red-background entries.
- Total active roster: 58 unique participants.
- Explicit Twitch associations: 34.
- HOME LIVE and CLIPS now use Twitch participants only; YouTube is ignored for these two sections.
- The public Mercado Negro navigation tab is hidden; one future '?' label is shown as 'MN'.


## Latest fix
- Added the newly supplied participant photos to their matching profiles.
- Fixed Twitch clip discovery by ensuring every `started_at`/`ended_at` query stays within Twitch's maximum one-week range while still capturing clips created after the cutoff.


## Participant assignment data
- Profession, positive traits and negative traits were populated from the uploaded PROJECT CHLOE FINAL ASSIGNMENT REPORT.
- DATE fields from the report are intentionally not displayed.
- Current web roster entries without a matching report entry remain `PENDIENTE` rather than being invented.


## v34 maintenance fixes
- Garlic_Jr42 removed; Feto, Bertok and Fichi added; Solcius retained.
- Current participant roster: 60.
- HOME live uses only explicit Twitch URLs from `live-channels.json`.
- CLIPS uses the same Twitch-only list and valid <=7-day API windows.
- Interactive map updated to `https://pzmap.org/`.
- Participant images include an automatic fallback to `assets/silueta.png` if an image fails to load.
