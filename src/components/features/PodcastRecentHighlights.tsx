'use client';

import { useEffect, useState } from 'react';
import { Youtube, Headphones, ExternalLink, Mic } from 'lucide-react';
import { PodcastVideoShowcase, type FeedVideo } from '@/components/features/PodcastVideoShowcase';

const CHANNEL_VIDEOS_URL = 'https://www.youtube.com/@echinstitute/videos';
const SPOTIFY_SHOW_ID   = '7dgxKMkSyy3HWtQW7OfqXA';
const SPOTIFY_SHOW_URL  = `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`;

type Tab = 'video' | 'audio';
type Episode = { id: string; title: string; published: string; duration: string; description: string; artworkUrl?: string };

function fmtDate(raw: string) {
  if (!raw) return '';
  try { return new Date(raw).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }); }
  catch { return ''; }
}

/* ── Branded audio thumbnail — always looks good, no broken images ── */
function AudioThumb({ index }: { index: number }) {
  const hues = [45, 38, 52, 35, 48];
  const hue = hues[index % hues.length];
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3"
      style={{ background: `linear-gradient(135deg, #0f0f0f 0%, hsl(${hue},60%,8%) 100%)` }}
    >
      {/* Waveform bars */}
      <div className="flex items-end gap-[3px] h-10">
        {[6, 10, 14, 8, 16, 12, 7, 15, 10, 6, 13, 9].map((h, i) => (
          <div
            key={i}
            className="w-[3px] rounded-full"
            style={{
              height: h * 2,
              background: `hsl(${hue},85%,55%)`,
              opacity: 0.5 + (i % 3) * 0.2,
              animation: `waveBar ${0.8 + i * 0.07}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>
      <Mic className="w-5 h-5 opacity-30" style={{ color: `hsl(${hue},85%,65%)` }} />
    </div>
  );
}

/* ── Featured card: Spotify SHOW embed (reliable, shows artwork + episodes) ── */
function FeaturedAudioCard({ episode }: { episode: Episode }) {
  const dateLabel = fmtDate(episode.published);
  return (
    <article className="group/card flex flex-col overflow-hidden rounded-2xl border border-border bg-[#1B1B1E] transition duration-300 hover:border-[#1DB954]/50 hover:shadow-[0_0_32px_rgba(29,185,84,0.10)] lg:col-span-7">
      {/* Spotify show embed — always works, shows artwork + episode list */}
      <div className="w-full" style={{ height: 352 }}>
        <iframe
          src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="ECH Institute Podcast"
          style={{ display: 'block' }}
        />
      </div>
      {/* Info footer */}
      <div className="flex flex-col border-t border-border p-5 bg-[#1B1B1E]">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0">
            {dateLabel && (
              <span className="text-[9px] font-black uppercase tracking-widest text-[#1DB954] block mb-1">{dateLabel}</span>
            )}
            <p className="text-lg font-bold leading-snug text-white group-hover/card:text-[#1DB954] transition-colors line-clamp-2 sm:text-xl">
              {episode.title}
            </p>
          </div>
          {episode.duration && (
            <span className="text-[10px] font-bold text-white/40 shrink-0 mt-1">{episode.duration}</span>
          )}
        </div>
        {episode.description && (
          <p className="text-sm text-white/50 leading-relaxed line-clamp-2 mb-4">{episode.description}</p>
        )}
        <a
          href={SPOTIFY_SHOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold shadow-sm transition hover:opacity-90"
          style={{ background: '#1DB954', color: '#000' }}
        >
          Open on Spotify <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

/* ── Side rail episode card — real artwork thumbnail with waveform fallback ── */
function EpisodeSideCard({ episode, index }: { episode: Episode; index: number }) {

  const dateLabel = fmtDate(episode.published);
  const [imgError, setImgError] = useState(false);
  const showRealThumb = episode.artworkUrl && !imgError;

  return (
    <article className="group/row flex gap-3 overflow-hidden rounded-xl border border-border bg-[#1B1B1E] p-3 shadow-md transition duration-300 hover:border-[#1DB954]/50 hover:shadow-[0_0_24px_rgba(29,185,84,0.08)] sm:gap-4 sm:p-3.5">
      {/* Thumbnail */}
      <div
        className="relative w-[42%] max-w-[200px] shrink-0 sm:w-40 border border-border rounded-lg overflow-hidden"
        style={{ aspectRatio: '16/9' }}
      >
        {showRealThumb ? (
          // Real episode cover art from iTunes
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={episode.artworkUrl}
            alt={episode.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/row:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          // Animated waveform fallback when no artwork
          <AudioThumb index={index} />
        )}
      </div>

      {/* Text */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 py-0.5">
        {dateLabel && (
          <time dateTime={episode.published} className="text-[9px] font-black uppercase tracking-widest text-accent">
            {dateLabel}
          </time>
        )}
        <p className="line-clamp-3 text-xs font-bold leading-snug text-white sm:text-sm group-hover/row:text-[#1DB954] transition-colors">
          <a href={SPOTIFY_SHOW_URL} target="_blank" rel="noopener noreferrer">{episode.title}</a>
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <a
            href={SPOTIFY_SHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full transition hover:opacity-80"
            style={{ background: '#1DB954', color: '#000' }}
          >
            ► Listen
          </a>
          {episode.duration && (
            <span className="text-[9px] text-white/40">{episode.duration}</span>
          )}
        </div>
      </div>
    </article>
  );
}



/* ── Skeleton — mirrors video skeleton ── */
function AudioSkeleton() {
  return (
    <div className="grid gap-5 lg:items-start lg:grid-cols-12 lg:gap-6">
      <div className="animate-pulse flex flex-col overflow-hidden rounded-2xl border border-border bg-[#1B1B1E] lg:col-span-7">
        <div className="bg-darkGray" style={{ height: 352 }} />
        <div className="space-y-3 p-6">
          <div className="h-3 w-24 rounded bg-darkGray" />
          <div className="h-5 w-full rounded bg-darkGray" />
          <div className="h-5 w-4/5 rounded bg-darkGray" />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex animate-pulse gap-4 overflow-hidden rounded-xl border border-border bg-[#1B1B1E] p-3">
            <div className="w-36 shrink-0 rounded-lg bg-darkGray sm:w-40" style={{ aspectRatio: '16/9' }} />
            <div className="flex flex-1 flex-col justify-center space-y-2 py-1">
              <div className="h-2.5 w-16 rounded bg-darkGray" />
              <div className="h-4 w-full rounded bg-darkGray" />
              <div className="h-4 w-3/4 rounded bg-darkGray" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Audio showcase — 1 featured + 4 side (identical grid to video) ── */
function AudioShowcase({ episodes, loading, fetchError }: { episodes: Episode[]; loading: boolean; fetchError: string | null }) {
  if (loading) return <AudioSkeleton />;
  if (fetchError || episodes.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-[#1B1B1E] p-8 text-center text-white/60">
        <p className="mb-4">{fetchError ?? 'No episodes found.'}</p>
        <a href={SPOTIFY_SHOW_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition hover:opacity-90"
          style={{ background: '#1DB954', color: '#000' }}>
          Open Spotify <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    );
  }

  const [featured, ...side] = episodes;
  return (
    <div className="grid min-w-0 gap-5 lg:items-start lg:grid-cols-12 lg:gap-6">
      <FeaturedAudioCard episode={featured} />
      <div className="flex flex-col gap-4 lg:col-span-5">
        <div className="hidden lg:flex items-center gap-3">
          <div className="w-1 h-4 rounded-full bg-[#1DB954]" />
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1DB954]">More episodes</p>
        </div>
        {side.slice(0, 4).map((ep, i) => (
          <EpisodeSideCard key={ep.id} episode={ep} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

/* ── Main component ── */
export function PodcastRecentHighlights() {
  // Video is always the default tab
  const [activeTab, setActiveTab] = useState<Tab>('video');
  const [videos, setVideos]           = useState<FeedVideo[]>([]);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError]   = useState<string | null>(null);
  const [episodes, setEpisodes]       = useState<Episode[]>([]);
  const [audioLoading, setAudioLoading] = useState(false);
  const [audioError, setAudioError]   = useState<string | null>(null);
  const [audioFetched, setAudioFetched] = useState(false);

  useEffect(() => {
    let c = false;
    (async () => {
      try {
        const res = await fetch('/api/youtube/latest?limit=5&excludeShorts=true');
        const d = await res.json();
        if (c) return;
        res.ok ? (setVideoError(null), setVideos(Array.isArray(d.videos) ? d.videos : []))
                : (setVideoError(d.error ?? 'Could not load videos'), setVideos([]));
      } catch { if (!c) { setVideoError('Could not load videos'); setVideos([]); } }
      finally  { if (!c) setVideoLoading(false); }
    })();
    return () => { c = true; };
  }, []);

  useEffect(() => {
    if (activeTab !== 'audio' || audioFetched) return;
    let c = false;
    setAudioLoading(true);
    (async () => {
      try {
        const res = await fetch('/api/spotify/latest?limit=5');
        const d = await res.json();
        if (c) return;
        res.ok ? (setAudioError(null), setEpisodes(Array.isArray(d.episodes) ? d.episodes : []))
                : (setAudioError('Could not load episodes'), setEpisodes([]));
      } catch { if (!c) { setAudioError('Could not load episodes'); setEpisodes([]); } }
      finally  { if (!c) { setAudioLoading(false); setAudioFetched(true); } }
    })();
    return () => { c = true; };
  }, [activeTab, audioFetched]);

  return (
    <>
      {/* Waveform bar animation */}
      <style>{`
        @keyframes waveBar {
          from { transform: scaleY(0.4); opacity: 0.4; }
          to   { transform: scaleY(1);   opacity: 0.85; }
        }
      `}</style>

      <section className="bg-black py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

          {/* Header + toggle */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 rounded-full bg-accent" />
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-accent">New Releases</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
                Recent <em className="not-italic text-accent">Highlights</em>
              </h2>
              <p className="text-sm mt-2 max-w-2xl text-white/50">
                {activeTab === 'video'
                  ? <>Latest uploads from <a href={CHANNEL_VIDEOS_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-accent hover:underline">@echinstitute on YouTube</a>.</>
                  : <>Latest episodes on the ECH Institute <a href={SPOTIFY_SHOW_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-[#1DB954] hover:underline">Spotify podcast</a>.</>
                }
              </p>
            </div>

            {/* Tab toggle — always white text */}
            <div className="flex items-center rounded-xl p-1 shrink-0 self-start sm:self-auto"
              style={{ background: '#1B1B1E', border: '1.5px solid #262626' }}>
              <button
                onClick={() => setActiveTab('video')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200"
                style={{ background: activeTab === 'video' ? '#F5A51D' : 'transparent', color: '#FBFBFB' }}
              >
                <Youtube className="w-4 h-4" /> Video
              </button>
              <button
                onClick={() => setActiveTab('audio')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200"
                style={{ background: activeTab === 'audio' ? '#F5A51D' : 'transparent', color: '#FBFBFB' }}
              >
                <Headphones className="w-4 h-4" /> Audio
              </button>
            </div>
          </div>

          {activeTab === 'video' && (
            <PodcastVideoShowcase videos={videos} loading={videoLoading} fetchError={videoError} channelBrowseUrl={CHANNEL_VIDEOS_URL} />
          )}
          {activeTab === 'audio' && (
            <AudioShowcase episodes={episodes} loading={audioLoading} fetchError={audioError} />
          )}

        </div>
      </section>
    </>
  );
}
