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
      className={`relative overflow-hidden bg-gray-200 cursor-pointer ${className}`}
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
      <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        <div className="animate-pulse overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white shadow-lg lg:col-span-7">
          <div className="aspect-video bg-gray-200" />
          <div className="space-y-3 p-6">
            <div className="h-3 w-24 rounded bg-gray-200" />
            <div className="h-5 w-full rounded bg-gray-200" />
            <div className="h-5 w-4/5 rounded bg-gray-200" />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex animate-pulse gap-4 overflow-hidden rounded-xl border border-[var(--border-soft)] bg-white p-3 shadow-md"
            >
              <div className="aspect-video w-36 shrink-0 rounded-lg bg-gray-200 sm:w-40" />
              <div className="flex flex-1 flex-col justify-center space-y-2 py-1">
                <div className="h-2.5 w-16 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-3/4 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (fetchError || videos.length === 0) {
    return (
      <div className="rounded-2xl border border-[var(--border-soft)] bg-white p-8 text-center text-gray-600 shadow-md">
        <p className="mb-4">{fetchError ?? 'No videos returned from the feed.'}</p>
        <Link
          href={channelBrowseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Browse on YouTube
          <ExternalLink className="h-4 w-4 opacity-80" />
        </Link>
      </div>
    );
  }

  const [featured, ...side] = videos;

  return (
    <div className="grid min-w-0 gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-6">
      <article className="group/card flex flex-col overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white shadow-none transition duration-300 hover:border-amber-200/80 hover:shadow-none lg:col-span-7">
        <div className="relative">
          <div className="absolute left-4 top-4 z-20 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-zinc-900/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md">
              {featuredBadge}
            </span>
            {formatPublishedDate(featured.published) ? (
              <span className="rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-zinc-700 shadow-sm backdrop-blur-md">
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
            className="aspect-video w-full"
          />
        </div>
        <div className="flex flex-1 flex-col border-t border-[var(--border-soft)] bg-white p-5 sm:p-6">
          <h3 className="mb-4 text-lg font-bold leading-snug tracking-tight text-zinc-900 sm:text-xl">
            {featured.title}
          </h3>
          <a
            href={getYouTubeWatchUrl(featured.id)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-amber-300 hover:bg-amber-50/50 hover:text-amber-950"
          >
            Watch on YouTube
            <ExternalLink className="h-4 w-4 text-amber-700/80" />
          </a>
        </div>
      </article>

      <div className="flex flex-col gap-4 lg:col-span-5">
        <p className="hidden text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 lg:block">
          {sideRailLabel}
        </p>
        {side.map((video) => {
          const dateLabel = formatPublishedDate(video.published);
          return (
            <article
              key={video.id}
              className="group/row flex gap-3 overflow-hidden rounded-xl border border-[var(--border-soft)] bg-white p-3 shadow-md transition duration-300 hover:border-amber-200/70 hover:shadow-lg sm:gap-4 sm:p-3.5"
            >
              <div className="relative w-[42%] max-w-[200px] shrink-0 sm:w-40">
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
                  className="aspect-video w-full rounded-lg"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 py-0.5">
                {dateLabel ? (
                  <time
                    dateTime={video.published}
                    className="text-[10px] font-bold uppercase tracking-wider text-amber-700/90"
                  >
                    {dateLabel}
                  </time>
                ) : null}
                <h3 className="line-clamp-3 text-xs font-bold leading-snug text-zinc-900 sm:text-sm">
                  <a
                    href={getYouTubeWatchUrl(video.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-amber-900"
                  >
                    {video.title}
                  </a>
                </h3>
                <a
                  href={getYouTubeWatchUrl(video.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1 text-xs font-semibold text-zinc-500 transition group-hover/row:text-amber-800"
                >
                  YouTube
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

