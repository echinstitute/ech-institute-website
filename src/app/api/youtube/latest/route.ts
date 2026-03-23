import { NextResponse } from 'next/server';
import { ECH_INSTITUTE_CHANNEL_ID } from '@/lib/podcast-youtube';

export const revalidate = 900; // 15 minutes

function decodeXmlEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

/** Parse every <entry> in the Atom feed (channel or playlist; typically ~15 per response). */
function parseAllFromRss(xml: string) {
  const chunks = xml.split('<entry>');
  const videos: { id: string; title: string; published: string }[] = [];

  for (let i = 1; i < chunks.length; i++) {
    const block = chunks[i];
    const id = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const titleRaw = block.match(/<title>([^<]*)<\/title>/)?.[1];
    const published = block.match(/<published>([^<]+)<\/published>/)?.[1] ?? '';
    if (id && titleRaw) {
      videos.push({
        id,
        title: decodeXmlEntities(titleRaw),
        published,
      });
    }
  }

  return videos;
}

function applyTitleFilter(
  videos: { id: string; title: string; published: string }[],
  filterParam: string | null
) {
  if (!filterParam?.trim()) return videos;
  const terms = filterParam
    .split('|')
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);
  if (terms.length === 0) return videos;

  const filtered = videos.filter((v) => {
    const t = v.title.toLowerCase();
    return terms.some((term) => t.includes(term));
  });

  return filtered.length > 0 ? filtered : videos;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const playlistIdParam = searchParams.get('playlistId')?.trim();

  const limitRaw = parseInt(searchParams.get('limit') || '4', 10);
  const limit = Math.min(Math.max(Number.isFinite(limitRaw) ? limitRaw : 4, 1), 15);

  const filterRaw = searchParams.get('filter');

  const channelIdParam = searchParams.get('channelId')?.trim();
  const channelId =
    channelIdParam ||
    process.env.ECH_YOUTUBE_CHANNEL_ID?.trim() ||
    ECH_INSTITUTE_CHANNEL_ID;

  const feedUrl = playlistIdParam
    ? `https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(playlistIdParam)}`
    : `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`;

  try {
    const res = await fetch(feedUrl, {
      next: { revalidate: 900 },
      headers: {
        'User-Agent': 'ECH-Institute-Website/1.0 (+https://echinstitute.org)',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'YouTube feed unavailable', videos: [] as const },
        { status: 502 }
      );
    }

    const xml = await res.text();
    const all = parseAllFromRss(xml);
    const afterFilter = playlistIdParam
      ? all
      : applyTitleFilter(all, filterRaw);
    const videos = afterFilter.slice(0, limit);

    return NextResponse.json({
      videos,
      channelId: playlistIdParam ? null : channelId,
      playlistId: playlistIdParam || null,
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to load videos', videos: [] as const },
      { status: 502 }
    );
  }
}
