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


## Correction
- Magikos uses the supplied `magikos(1).jpg` image.
- The `Obrero / Albañil, Peleón / Aprendiz lento, Duro de oído` assignment belongs to Fetodevaca.


## v36 updates
- Feto and Fetodevaca are treated as the same player; only Fetodevaca remains.
- Fetodevaca uses profession `Obrero`, positives `Albañil, Peleón`, negatives `Aprendiz lento, Duro de oído`.
- Cere Twitch URL corrected to `https://www.twitch.tv/cere____`.
- Clips layout updated to place the main player on the left and reserve a right-side column for the clip list.


## v37 Clips layout
- Main selected clip player is on the left.
- Available clip cards/list are in a dedicated right-hand column.
- Responsive layout collapses to one column on smaller screens.


## v38 updates
- Removed the duplicate Feto participant; Fetodevaca is the only player for that person.
- Replaced the blocked pzmap iframe with a themed external-link panel to pzmap.org.
- Renamed the Clips random button to `CLIP ALEATORIO` and restyled it to match the site.


## v39
- Removed the stale Feto participant entry. Fetodevaca remains the only entry for that player.
- MAP alternatives researched separately; no public map iframe is forced because current services block or are not designed for cross-origin embedding.


## v40
- Map section now embeds `https://projectzomboidmap.com/es/` directly via iframe, with an external-tab fallback.
- Random clip button is restyled to match the dark Project C aesthetic.


## v41
- Solcius moved to the first participant position and marked deceased with a red cross and `FALLECIDO` state.
- The completed `20 AGOSTO 2026 — REUNIÓN` lore event is crossed out diagonally in red and shown in a different color.

- Completed lore styling is applied during JS timeline rendering to the REUNIÓN entry.

- Enlarged Solcius' death mark into a full red X across the photo.
- Extended the completed REUNIÓN strike across the full timeline item from edge to edge.


## v43
- Updated meremiau profile with the supplied `meremiau.jpg` image.
- Meremiau assignment: Reparador; positivos Mañoso, Mecánico aficionado; negativos Asmático, Fumador.


## v44
- Added the supplied `zripht.jpg` image to the Zripht participant profile.


## v45
- Lore calendar entries are now clickable.
- Added a large classified-document detail panel on the right.
- Added the supplied YouTube video to PRÓLOGO with an embedded player.
- Other entries show a ready-to-fill classified lore placeholder.


## v46
- Restored the Characters tab/rendering to the v44 version so its silhouettes and layout are unchanged.
- Rebuilt the Lore click interactions with explicit event handlers.
- PRÓLOGO loads the supplied YouTube video; all other lore entries display `Falta información`.


## v47 — Dados
- Added a new top-level DADOS tab.
- Add/remove-free player management by name (add and use the player selector).
- Configure 1–100 die faces and custom text for every face.
- Roll locally in the browser with a visible result and recent-roll history.
- State is stored in localStorage; no server or shared synchronization is used.


## v48 — Dice animation
- Replaced the static dice result box with a CSS 3D rolling die animation.
- During the roll, face labels cycle rapidly before revealing the final configured result.
- Supports arbitrary custom face text while using the cube purely as the visual animation.


## v49 — Twitch roster sync
- Applied the user's newest Twitch list as the authoritative Twitch mapping.
- Cere corrected to `cere____`; Titohc corrected to `tit0hc`; Bertok set to `el_bertok`.
- Player display name changed from Tencachi to Tencachy.
- Removed the stale `Feto` live-channel record by rebuilding `live-channels.json` from the participant roster.
- Clips and Lives now derive their selectable Twitch player pool from the same current participant/Twitch mapping.


## v50
- Renamed participant `zigurath` to `zigurathz` in the participant roster, live-channels database, and Clips player naming.


## v51
- Corrected zigurathz Twitch URL in participant data and live-channels database to `https://www.twitch.tv/zigurathz`.
