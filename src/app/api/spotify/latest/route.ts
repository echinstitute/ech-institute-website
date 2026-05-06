import { NextResponse } from 'next/server';

export const revalidate = 1800;

const APPLE_PODCAST_ID = '1620565121';
// Known ECH Institute podcast show artwork (from Apple Podcasts / iTunes CDN)
// Used as guaranteed fallback so all cards always show a real thumbnail
const SHOW_ARTWORK_FALLBACK = `https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/63/8e/4e/638e4e41-0f7e-9a81-e8ff-3dfab8fbd7c3/mza_4906900986312735614.jpg/600x600bb.jpg`;

function formatDuration(ms: number): string {
  if (!ms) return '';
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h}h ${m % 60}m`;
  return `${m}m`;
}

const FALLBACK = [
  { id: '1', title: 'EIP-7904: Compute Gas Cost Increase | PEEPanEIP #159', published: '2026-03-25T13:00:00Z', duration: '45m', description: 'How Ethereum is fixing compute gas costs for scalability.', artworkUrl: SHOW_ARTWORK_FALLBACK },
  { id: '2', title: 'ERC-7936: Versioned Proxy Contract Interface | PEEPanEIP #158', published: '2025-12-22T15:00:00Z', duration: '38m', description: 'Versioned proxy contract interfaces explained with Martin, Monica & Raphina.', artworkUrl: SHOW_ARTWORK_FALLBACK },
  { id: '3', title: 'EIP-7823: Set Upper Bounds for MODEXP | PEEPanEIP #157', published: '2025-11-05T15:00:00Z', duration: '41m', description: 'Setting upper bounds for MODEXP with Alex Beregszaszi & Radoslaw.', artworkUrl: SHOW_ARTWORK_FALLBACK },
  { id: '4', title: 'EIP-7594: PeerDAS — Peer Data Availability Sampling | PEEPanEIP #156', published: '2025-10-28T15:00:00Z', duration: '52m', description: 'PeerDAS deep-dive with Francesco D\'Amato.', artworkUrl: SHOW_ARTWORK_FALLBACK },
  { id: '5', title: 'EIP-7935: Set Default Gas Limit to 60M | PEEPanEIP #155', published: '2025-10-06T16:00:00Z', duration: '36m', description: 'Setting default gas limit with Sophia Gold, Parithosh and Kamil.', artworkUrl: SHOW_ARTWORK_FALLBACK },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(parseInt(searchParams.get('limit') || '5', 10), 10);

  try {
    // Fetch show + episodes together (first result = show with artwork)
    const url = `https://itunes.apple.com/lookup?id=${APPLE_PODCAST_ID}&entity=podcastEpisode&limit=${limit + 2}&country=us`;
    const res = await fetch(url, { next: { revalidate: 1800 }, signal: AbortSignal.timeout(6000) });
    if (!res.ok) throw new Error('iTunes API error');
    const data = await res.json();

    // Extract show artwork from the first result (the show itself)
    const showResult = (data.results as any[]).find((r: any) => r.kind === 'podcast' || r.wrapperType === 'track');
    const showArtwork: string = showResult?.artworkUrl600 ?? showResult?.artworkUrl100 ?? SHOW_ARTWORK_FALLBACK;

    const episodes = (data.results as any[])
      .filter((r: any) => r.kind === 'podcastEpisode')
      .slice(0, limit)
      .map((ep: any) => ({
        id: String(ep.trackId),
        title: ep.trackName ?? '',
        published: ep.releaseDate ?? '',
        duration: formatDuration(ep.trackTimeMillis),
        description: (ep.description ?? '').replace(/<[^>]+>/g, '').trim().slice(0, 160),
        // Use episode artwork if available, else the show artwork (always a real image)
        artworkUrl: (ep.artworkUrl600 ?? ep.artworkUrl100 ?? showArtwork) as string,
      }));

    if (episodes.length === 0) throw new Error('No episodes');
    return NextResponse.json({ episodes, showArtwork });
  } catch {
    return NextResponse.json({ episodes: FALLBACK.slice(0, limit), showArtwork: SHOW_ARTWORK_FALLBACK });
  }
}
