/**
 * Google Cloud Text-to-Speech service using Chirp 3: HD voices.
 * Requests are proxied through our backend (/api/tts) so the API key
 * stays server-side and is never exposed to the browser.
 */

// In-memory cache: "text|gender" -> base64 audio
const audioCache = new Map<string, string>();

export type Gender = 'female' | 'male' | 'neutral';

/**
 * Synthesise Czech speech via the backend TTS proxy.
 * Returns a base64-encoded MP3 string, or null on failure.
 */
export async function synthesizeSpeech(
  text: string,
  gender: Gender,
): Promise<string | null> {
  const cacheKey = `${text}|${gender}`;
  const cached = audioCache.get(cacheKey);
  if (cached) return cached;

  try {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, gender }),
    });

    if (!res.ok) {
      console.warn('TTS request failed:', res.status);
      return null;
    }

    const data = await res.json();
    const audioContent: string = data.audioContent;

    audioCache.set(cacheKey, audioContent);
    return audioContent;
  } catch (err) {
    console.warn('TTS error:', err);
    return null;
  }
}

/** Play a base64-encoded MP3 string. Returns an Audio element for control. */
export function playBase64Audio(base64: string): HTMLAudioElement {
  const audio = new Audio(`data:audio/mp3;base64,${base64}`);
  audio.play();
  return audio;
}
