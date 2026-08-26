import { twitchLive, jsonResponse } from '../_lib/helpers.js';

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  try {
    const live = await twitchLive(env);
    return jsonResponse({
      live,
      checkedAt: new Date().toISOString(),
      configured: {
        twitch: Boolean(env.TWITCH_CLIENT_ID && env.TWITCH_CLIENT_SECRET)
      },
      errors: []
    });
  } catch (error) {
    return jsonResponse({
      live: [],
      configured: {
        twitch: Boolean(env.TWITCH_CLIENT_ID && env.TWITCH_CLIENT_SECRET)
      },
      errors: [error.message]
    }, 500);
  }
}
