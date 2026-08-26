import { jsonResponse } from '../_lib/helpers.js';

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  return jsonResponse({
    ok: true,
    twitchConfigured: Boolean(env.TWITCH_CLIENT_ID && env.TWITCH_CLIENT_SECRET),
    youtubeConfigured: Boolean(env.YOUTUBE_API_KEY)
  });
}
