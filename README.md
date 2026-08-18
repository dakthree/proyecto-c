# Proyecto C v12 — clip player fix

Basado en v11. Corrige el reproductor de clips: cada tarjeta identifica su clip y al seleccionarla se carga un iframe Twitch/YouTube nuevo con cache-buster. Los refrescos periódicos de la API no reemplazan el iframe mientras el clip seleccionado siga disponible.

El filtro de prueba de clips sigue siendo desde 11/08/2026 12:00 hora española y acepta cualquier juego en esta versión.


## Clip player v15
The Twitch clip player is recreated as a fresh iframe on every selection, using the embed_url returned by Twitch and a unique cache-busting parameter.


### Descubrimiento de Twitch
Para participantes que no tengan una URL de Twitch registrada, el backend intenta encontrar un canal cuyo login o nombre visible coincida exactamente con el nombre del participante. Si no hay coincidencia fuerte, no se muestra como directo. Para cuentas con nombres distintos, añade el enlace de Twitch en `live-channels.json`.
