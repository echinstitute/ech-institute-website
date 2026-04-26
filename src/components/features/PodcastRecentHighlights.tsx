'use client';

import { useEffect, useState } from 'react';
import {
  PodcastVideoShowcase,
  type FeedVideo,
} from '@/components/features/PodcastVideoShowcase';

const CHANNEL_VIDEOS_URL = 'https://www.youtube.com/@echinstitute/videos';

export function PodcastRecentHighlights() {
  const [videos, setVideos] = useState<FeedVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/youtube/latest?limit=5&excludeShorts=true');
        const data = await res.json();
        if (cancelled) return;
        if (!res.ok) {
          setFetchError(data.error ?? 'Could not load latest videos');
          setVideos([]);
        } else {
          setFetchError(null);
          setVideos(Array.isArray(data.videos) ? data.videos : []);
        }
      } catch {
        if (!cancelled) {
          setFetchError('Could not load latest videos');
          setVideos([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="bg-[#151419] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 rounded-full bg-[#F5A51D]" />
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F5A51D]">New Releases</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2 text-[#FBFBFB]">
          Recent <em className="not-italic text-[#F5A51D]">Highlights</em>
        </h2>
        <p className="text-sm max-w-2xl text-[#FBFBFB]/50">
          Latest long-form uploads from{' '}
          <a
            href={CHANNEL_VIDEOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#F5A51D] hover:underline"
          >
            @echinstitute on YouTube
          </a>
          .
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <PodcastVideoShowcase
          videos={videos}
          loading={loading}
          fetchError={fetchError}
          channelBrowseUrl={CHANNEL_VIDEOS_URL}
        />
      </div>
    </section>
  );
}
