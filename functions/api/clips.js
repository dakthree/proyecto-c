import { candidates, twitchClips, getClipStartDate, getClipCache, setClipCache, jsonResponse } from '../_lib/helpers.js';

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const CLIP_START_DATE = getClipStartDate(env);
  const clipCache = getClipCache();

  if (Date.now() < clipCache.expiresAt) {
    return jsonResponse({
      clips: clipCache.data,
      checkedAt: new Date().toISOString(),
      startDate: CLIP_START_DATE,
      twitchPlayers: candidates.filter(x => x.twitch).map(x => x.player)
    });
  }

  try {
    const clips = await twitchClips(env);
    const sorted = [...clips].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    setClipCache({ expiresAt: Date.now() + 30000, data: sorted });
    return jsonResponse({
      clips: sorted,
      twitchPlayers: candidates.filter(x => x.twitch).map(x => x.player),
      checkedAt: new Date().toISOString(),
      startDate: CLIP_START_DATE,
      errors: []
    });
  } catch (e) {
    return jsonResponse({
      clips: [],
      twitchPlayers: candidates.filter(x => x.twitch).map(x => x.player),
      error: e.message,
      startDate: CLIP_START_DATE
    }, 500);
  }
}
