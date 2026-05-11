'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { getYouTubeEmbedUrl, getYouTubeWatchUrl } from '@/lib/youtube';

export const HOVER_PREVIEW_DELAY_MS = 1200;

export type FeedVideo = {
  id: string;
  title: string;
  published: string;
};

function YoutubeThumb({
  videoId,
  title,
  className = '',
}: {
  videoId: string;
  title: string;
  className?: string;
}) {
  const [tier, setTier] = useState(0);
  const qualities = ['maxresdefault', 'hqdefault', 'mqdefault'] as const;
  const q = qualities[Math.min(tier, qualities.length - 1)];
  const src = `https://img.youtube.com/vi/${videoId}/${q}.jpg`;

  return (
    <img
      src={src}
      alt={title}
      className={className}
      loading="lazy"
      onError={() => setTier((t) => Math.min(t + 1, qualities.length - 1))}
    />
  );
}

export function HoverPreviewMedia({
  video,
  isHovering,
  isTapped,
  onEnter,
  onLeave,
  onTap,
  className = '',
  thumbClassName = '',
}: {
  video: FeedVideo;
  isHovering: boolean;
  isTapped?: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onTap?: () => void;
  className?: string;
  thumbClassName?: string;
}) {
  const watchUrl = getYouTubeWatchUrl(video.id);
  const embedUrl = getYouTubeEmbedUrl(video.id);
  const showVideo = isHovering || isTapped;

  return (
    <div
      className={`relative overflow-hidden bg-[var(--surface-card-muted)] cursor-pointer ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={(e) => {
        if (onTap) {
          e.preventDefault();
          e.stopPropagation();
          onTap();
        }
      }}
      role={onTap ? 'button' : undefined}
      tabIndex={onTap ? 0 : undefined}
      onKeyDown={onTap ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onTap(); } } : undefined}
    >
      {showVideo ? (
        <iframe
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 z-10 h-full w-full border-0"
          title={video.title}
        />
      ) : (
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/thumb relative block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-brand)] focus-visible:ring-inset ${onTap ? 'pointer-events-none' : ''}`}
          tabIndex={onTap ? -1 : 0}
          aria-hidden={!!onTap}
        >
          <YoutubeThumb
            videoId={video.id}
            title={video.title}
            className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover/thumb:scale-[1.02] ${thumbClassName}`}
          />
        </a>
      )}
    </div>
  );
}

export function formatPublishedDate(iso: string): string {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '';
  }
}

type PodcastVideoShowcaseProps = {
  videos: FeedVideo[];
  loading: boolean;
  fetchError: string | null;
  channelBrowseUrl: string;
  sideRailLabel?: string;
  featuredBadge?: string;
};

export function PodcastVideoShowcase({
  videos,
  loading,
  fetchError,
  channelBrowseUrl,
  sideRailLabel = 'More from the channel',
  featuredBadge = 'Newest',
}: PodcastVideoShowcaseProps) {
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);
  const [tappedVideoId, setTappedVideoId] = useState<string | null>(null);
  const videoHoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const clearHoverTimer = useCallback(() => {
    if (videoHoverTimeoutRef.current) {
      clearTimeout(videoHoverTimeoutRef.current);
      videoHoverTimeoutRef.current = null;
    }
  }, []);

  const scheduleHover = useCallback(
    (id: string) => {
      clearHoverTimer();
      videoHoverTimeoutRef.current = setTimeout(() => {
        setHoveredVideoId(id);
      }, HOVER_PREVIEW_DELAY_MS);
    },
    [clearHoverTimer]
  );

  useEffect(() => () => clearHoverTimer(), [clearHoverTimer]);

  if (loading) {
    return (
      <div className="grid gap-5 lg:items-start lg:grid-cols-12 lg:gap-6">
        <div className="animate-pulse flex flex-col overflow-hidden rounded-2xl border border-border bg-[#1B1B1E] shadow-lg lg:col-span-7">
          <div className="aspect-video bg-darkGray" />
          <div className="space-y-3 p-6">
            <div className="h-3 w-24 rounded bg-darkGray" />
            <div className="h-5 w-full rounded bg-darkGray" />
            <div className="h-5 w-4/5 rounded bg-darkGray" />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex animate-pulse gap-4 overflow-hidden rounded-xl border border-border bg-[#1B1B1E] p-3 shadow-md"
            >
              <div className="aspect-video w-36 shrink-0 rounded-lg bg-darkGray sm:w-40" />
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

  if (fetchError || videos.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-[#1B1B1E] p-8 text-center text-white/60 shadow-md">
        <p className="mb-4">{fetchError ?? 'No videos returned from the feed.'}</p>
        <Link
          href={channelBrowseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-black transition hover:bg-accent/90"
        >
          Browse on YouTube
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const [featured, ...side] = videos;

  return (
    <div className="grid min-w-0 gap-5 lg:items-start lg:grid-cols-12 lg:gap-6">
      <article className="group/card flex flex-col overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-card-theme)] shadow-none transition duration-300 hover:border-accent/70 hover:shadow-[0_0_32px_rgba(var(--accent-brand-rgb),0.12)] lg:col-span-7">
        <div className="relative">
          <div className="absolute left-4 top-4 z-20 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-black/90 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-accent backdrop-blur-md">
              {featuredBadge}
            </span>
            {formatPublishedDate(featured.published) ? (
              <span className="rounded-md bg-[#1B1B1E]/90 border border-border px-2.5 py-1 text-[10px] font-bold text-white shadow-sm backdrop-blur-md">
                {formatPublishedDate(featured.published)}
              </span>
            ) : null}
          </div>
          <HoverPreviewMedia
            video={featured}
            isHovering={hoveredVideoId === featured.id}
            isTapped={tappedVideoId === featured.id}
            onEnter={() => scheduleHover(featured.id)}
            onLeave={() => {
              clearHoverTimer();
              setHoveredVideoId(null);
            }}
            onTap={() => setTappedVideoId((prev) => (prev === featured.id ? null : featured.id))}
            className="aspect-video w-full bg-black"
          />
        </div>
        <div className="flex flex-col border-t border-[var(--border-soft)] p-5 sm:p-6 bg-[var(--surface-card-theme)]">
          <p className="mb-4 text-lg font-bold leading-snug tracking-tight text-[var(--text-base)] sm:text-xl group-hover/card:text-accent transition-colors">
            {featured.title}
          </p>
          <a
            href={getYouTubeWatchUrl(featured.id)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex w-fit items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-black shadow-sm transition hover:bg-accent/90"
          >
            Watch on YouTube
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </article>

      <div className="flex flex-col gap-4 lg:col-span-5">
        <div className="hidden lg:flex items-center gap-3">
          <div className="w-1 h-4 rounded-full bg-accent" />
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-accent">
            {sideRailLabel}
          </p>
        </div>
        {side.map((video) => {
          const dateLabel = formatPublishedDate(video.published);
          return (
            <article
              key={video.id}
              className="group/row flex items-stretch gap-3 overflow-hidden rounded-xl border border-[var(--border-soft)] bg-[var(--surface-card-theme)] p-2 shadow-md transition duration-300 hover:border-accent/70 hover:shadow-[0_0_24px_rgba(var(--accent-brand-rgb),0.10)] sm:gap-4"
            >
              <div className="relative w-[42%] max-w-[200px] shrink-0 sm:w-40 border border-[var(--border-soft)] rounded-lg overflow-hidden bg-black">
                <HoverPreviewMedia
                  video={video}
                  isHovering={hoveredVideoId === video.id}
                  isTapped={tappedVideoId === video.id}
                  onEnter={() => scheduleHover(video.id)}
                  onLeave={() => {
                    clearHoverTimer();
                    setHoveredVideoId(null);
                  }}
                  onTap={() => setTappedVideoId((prev) => (prev === video.id ? null : video.id))}
                  className="aspect-video w-full bg-black"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 py-0.5">
                {dateLabel ? (
                  <time
                    dateTime={video.published}
                    className="text-[9px] font-black uppercase tracking-widest text-accent"
                  >
                    {dateLabel}
                  </time>
                ) : null}
                <p className="line-clamp-2 text-xs font-bold leading-tight text-[var(--text-base)] sm:text-sm group-hover/row:text-accent transition-colors">
                  <a
                    href={getYouTubeWatchUrl(video.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {video.title}
                  </a>
                </p>
                <a
                  href={getYouTubeWatchUrl(video.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1 text-xs font-bold text-lightGray transition group-hover/row:text-accent"
                >
                  YouTube
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

