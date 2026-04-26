import { NextResponse } from 'next/server';
import { ECH_INSTITUTE_CHANNEL_ID } from '@/lib/podcast-youtube';

export const revalidate = 900; // 15 minutes

// ── Hardcoded fallback from last known RSS pull (2026-04-25) ──────────────────
// Used when the server cannot reach YouTube (network timeout).
const FALLBACK_VIDEOS: Record<string, { id: string; title: string; published: string }[]> = {
  PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F: [
    { id: 'CswFnsZTXmI', title: 'EIP-7904: How Ethereum is Fixing Compute Gas Costs for Scalability with Jacek & Maria | PEEPanEIP159', published: '2026-03-25T13:00:19+00:00' },
    { id: 'Vl9su1ZOi-Q', title: 'ERC-7936: Versioned Proxy Contract Interface with Martin, Monica & Raphina | PEEPanEIP#158', published: '2025-12-22T15:01:08+00:00' },
    { id: 'rnAWvLQ4uag', title: 'EIP-7823: Set upper bounds for MODEXP with Alex Beregszaszi & Radoslaw Zagorowicz | PEEPanEIP#157', published: '2025-11-05T15:36:20+00:00' },
    { id: 'pCu4WuMaAPo', title: 'EIP-7594: PeerDAS - Peer Data Availability Sampling with Francesco D\'Amato | PEEPanEIP#156', published: '2025-10-28T15:01:44+00:00' },
    { id: 'o0K10L6u0l0', title: 'EIP-7935: Set default gas limit to 60M with Sophia Gold, Parithosh and Kamil Chodoła | PEEPanEIP#155', published: '2025-10-06T16:15:06+00:00' },
  ],
};

const FALLBACK_CHANNEL: { id: string; title: string; published: string }[] = [
  { id: 'CswFnsZTXmI', title: 'EIP-7904: How Ethereum is Fixing Compute Gas Costs for Scalability | PEEPanEIP159', published: '2026-03-25T13:00:19+00:00' },
  { id: 'Vl9su1ZOi-Q', title: 'ERC-7936: Versioned Proxy Contract Interface | PEEPanEIP#158', published: '2025-12-22T15:01:08+00:00' },
  { id: 'rnAWvLQ4uag', title: 'EIP-7823: Set upper bounds for MODEXP | PEEPanEIP#157', published: '2025-11-05T15:36:20+00:00' },
  { id: 'pCu4WuMaAPo', title: 'EIP-7594: PeerDAS - Peer Data Availability Sampling | PEEPanEIP#156', published: '2025-10-28T15:01:44+00:00' },
];

function decodeXmlEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function parseAllFromRss(xml: string) {
  const chunks = xml.split('<entry>');
  const videos: { id: string; title: string; published: string }[] = [];

  for (let i = 1; i < chunks.length; i++) {
    const block = chunks[i];
    const id = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const titleRaw = block.match(/<title>([^<]*)<\/title>/)?.[1];
    const published = block.match(/<published>([^<]+)<\/published>/)?.[1] ?? '';
    if (id && titleRaw) {
      videos.push({ id, title: decodeXmlEntities(titleRaw), published });
    }
  }

  return videos;
}

function applyTitleFilter(
  videos: { id: string; title: string; published: string }[],
  filterParam: string | null,
  excludeShorts: boolean
) {
  let filtered = videos;

  if (excludeShorts) {
    filtered = filtered.filter((v) => {
      const t = v.title.toLowerCase();
      return !t.includes('#shorts') && !t.includes('#short') && !t.includes('meet evvm') && !t.includes('stop overpaying');
    });
  }

  if (!filterParam?.trim()) return filtered;
  
  const terms = filterParam.split('|').map((t) => t.trim().toLowerCase()).filter(Boolean);
  if (terms.length === 0) return filtered;
  
  const searchFiltered = filtered.filter((v) => {
    const t = v.title.toLowerCase();
    return terms.some((term) => t.includes(term));
  });

  return searchFiltered.length > 0 ? searchFiltered : filtered;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const playlistIdParam = searchParams.get('playlistId')?.trim();
  const limitRaw = parseInt(searchParams.get('limit') || '4', 10);
  const limit = Math.min(Math.max(Number.isFinite(limitRaw) ? limitRaw : 4, 1), 15);
  const filterRaw = searchParams.get('filter');
  const channelIdParam = searchParams.get('channelId')?.trim();
  const channelId = channelIdParam || process.env.ECH_YOUTUBE_CHANNEL_ID?.trim() || ECH_INSTITUTE_CHANNEL_ID;

  const feedUrl = playlistIdParam
    ? `https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(playlistIdParam)}`
    : `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`;

  try {
    const res = await fetch(feedUrl, {
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(6000), // 6s timeout — fail fast, use fallback
      headers: {
        'User-Agent': 'ECH-Institute-Website/1.0 (+https://echinstitute.org)',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    if (!res.ok) throw new Error('Feed not ok');

    const xml = await res.text();
    const all = parseAllFromRss(xml);
    const excludeShorts = searchParams.get('excludeShorts') === 'true';
    
    // Apply filters
    let afterFilter = all;
    if (playlistIdParam) {
      if (excludeShorts) afterFilter = applyTitleFilter(all, null, true);
    } else {
      afterFilter = applyTitleFilter(all, filterRaw, excludeShorts);
    }
    
    const videos = afterFilter.slice(0, limit);

    return NextResponse.json({ videos, channelId: playlistIdParam ? null : channelId, playlistId: playlistIdParam || null });
  } catch {
    // ── Fallback: return hardcoded data so the UI never shows an error ────────
    const fallback = playlistIdParam
      ? (FALLBACK_VIDEOS[playlistIdParam] ?? FALLBACK_CHANNEL)
      : FALLBACK_CHANNEL;
    const videos = fallback.slice(0, limit);
    return NextResponse.json({ videos, channelId: playlistIdParam ? null : channelId, playlistId: playlistIdParam || null });
  }
}
