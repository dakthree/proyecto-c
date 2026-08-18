# Proyecto C — Web completa

La web incluye la landing de horror/zombi, participantes, lore, personajes, mapa y clips.

## Directos online

La landing consulta un backend `/api/live` cada 60 segundos y muestra **solo los participantes que están realmente en directo**.

El desplegable de "ELEGIR DIRECTO" se rellena con todos los canales online encontrados y permite cambiar entre ellos sin recargar la página.

La comprobación usa:

- Twitch Helix `Get Streams`, autenticado con un app access token.
- YouTube Data API v3: resolución de canales y búsqueda de emisiones activas con `eventType=live`.

Necesitas ejecutar la web desde un servidor HTTP(S), no abriendo `index.html` con `file://`.

### 1. Instalar

```bash
npm install
```

### 2. Configurar claves

Copia `.env.example` a `.env` y rellena:

```env
TWITCH_CLIENT_ID=...
TWITCH_CLIENT_SECRET=...
YOUTUBE_API_KEY=...
```

**No pongas secretos en `app.js`:** solo deben existir en el servidor.

### 3. Arrancar

Con Node 18+:

```bash
npm start
```

Abre `http://localhost:3000`.

### 4. Publicación

Para que el reproductor de Twitch funcione embebido, la web debe estar publicada con un dominio/HTTPS válido. El código genera el parámetro `parent` automáticamente a partir del dominio actual.

Las APIs consultadas requieren autenticación: Twitch requiere un app access token para `Get Streams`; YouTube usa una API key y `eventType=live` para limitar la búsqueda a emisiones activas.


## Mapa
La pestaña Mapa usa un iframe del mapa interactivo oficial de Project Zomboid: https://map.projectzomboid.com/. Si el sitio remoto no permite ser embebido por políticas del navegador, el botón inferior abre el mapa completo en una pestaña nueva.


### Clips del evento
`/api/clips` filtra los clips de Twitch a los participantes del evento, Project Zomboid (game_id 31339) y `CLIP_START_DATE` (para esta prueba, 18/08/2026 12:00 en España peninsular; luego volver a cambiarlo al inicio real del evento). YouTube Data API no expone la función Clips como recurso consultable; se usan vídeos publicados desde esa fecha en los canales participantes que coincidan con `Project Zomboid`.
