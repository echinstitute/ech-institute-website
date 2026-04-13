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
        const res = await fetch('/api/youtube/latest?limit=4');
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
    <section className="bg-white py-5 px-0 sm:py-8 sm:px-6 md:py-10 md:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-0">
        <h2 className="global-section-title mb-2">Recent Highlights</h2>
        <p className="global-body-lg mb-4 max-w-2xl text-gray-600 sm:mb-6">
          Latest uploads from{' '}
          <a
            href={CHANNEL_VIDEOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-800 underline-offset-2 hover:underline"
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
