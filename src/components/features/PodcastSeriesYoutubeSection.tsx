'use client';

import { useEffect, useState } from 'react';
import {
  PodcastVideoShowcase,
  type FeedVideo,
} from '@/components/features/PodcastVideoShowcase';

type PodcastSeriesYoutubeSectionProps = {
  /** Full YouTube playlist URL (or channel videos URL) for “Browse” / empty state. */
  browseUrl: string;
  title: string;
  description: React.ReactNode;
  limit?: number;
  sideRailLabel?: string;
  featuredBadge?: string;
  className?: string;
} & (
  | { playlistId: string; channelId?: never; titleFilter?: never }
  | { channelId: string; playlistId?: never; titleFilter?: string }
);

export function PodcastSeriesYoutubeSection({
  browseUrl,
  title,
  description,
  limit = 4,
  sideRailLabel,
  featuredBadge,
  className = '',
  ...source
}: PodcastSeriesYoutubeSectionProps) {
  const [videos, setVideos] = useState<FeedVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const playlistId = 'playlistId' in source ? source.playlistId : undefined;
  const channelId = 'channelId' in source ? source.channelId : undefined;
  const titleFilter = 'titleFilter' in source ? source.titleFilter : undefined;

  useEffect(() => {
    let cancelled = false;
    const params = new URLSearchParams({ limit: String(limit) });
    if (playlistId) {
      params.set('playlistId', playlistId);
    } else if (channelId) {
      params.set('channelId', channelId);
      if (titleFilter) params.set('filter', titleFilter);
    }

    (async () => {
      try {
        const res = await fetch(`/api/youtube/latest?${params.toString()}`);
        const data = await res.json();
        if (cancelled) return;
        if (!res.ok) {
          setFetchError(data.error ?? 'Could not load videos');
          setVideos([]);
        } else {
          setFetchError(null);
          setVideos(Array.isArray(data.videos) ? data.videos : []);
        }
      } catch {
        if (!cancelled) {
          setFetchError('Could not load videos');
          setVideos([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [playlistId, channelId, titleFilter, limit]);

  return (
    <section
      className={`border-y border-gray-100 bg-white py-6 sm:py-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-4 sm:mb-6">
          <h2 className="global-section-title mb-2 text-zinc-900">{title}</h2>
          <div className="global-body-lg max-w-3xl text-gray-600">{description}</div>
        </div>
        <PodcastVideoShowcase
          videos={videos}
          loading={loading}
          fetchError={fetchError}
          channelBrowseUrl={browseUrl}
          sideRailLabel={sideRailLabel}
          featuredBadge={featuredBadge}
        />
      </div>
    </section>
  );
}
