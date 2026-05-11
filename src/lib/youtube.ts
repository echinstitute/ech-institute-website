/**
 * Shared YouTube URL helpers (watch URLs, thumbnails, hover embeds).
 */

export function getYouTubeVideoId(url: string): string | null {
  const trimmed = url.trim();
  // Raw video id (11 chars)
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

  const youtuBeMatch = url.match(/youtu\.be\/([^?&#]+)/);
  if (youtuBeMatch) return youtuBeMatch[1];

  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watchMatch) return watchMatch[1];

  const embedMatch = url.match(/youtube\.com\/embed\/([^?&#]+)/);
  if (embedMatch) return embedMatch[1];

  const liveMatch = url.match(/youtube\.com\/live\/([^?&#]+)/);
  if (liveMatch) return liveMatch[1];

  return null;
}

export function getYouTubeThumbnailUrl(url: string): string {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return '';
  // hqdefault.jpg is more reliable than maxresdefault.jpg as not all videos have maxres
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

/** Embed used for muted autoplay preview on hover (same pattern as events page). */
export function getYouTubeEmbedUrl(url: string): string {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return url;
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&loop=1&playlist=${videoId}`;
}

export function getYouTubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}
