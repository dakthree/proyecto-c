# Proyecto C v12 — clip player fix

Basado en v11. Corrige el reproductor de clips: cada tarjeta identifica su clip y al seleccionarla se carga un iframe Twitch/YouTube nuevo con cache-buster. Los refrescos periódicos de la API no reemplazan el iframe mientras el clip seleccionado siga disponible.

El filtro de prueba de clips sigue siendo desde 11/08/2026 12:00 hora española y acepta cualquier juego en esta versión.
