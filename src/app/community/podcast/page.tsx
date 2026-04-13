'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Radio, Code, ArrowRight, Play, Mic, FileText, GraduationCap } from 'lucide-react';
import { PodcastRecentHighlights } from '@/components/features/PodcastRecentHighlights';

const PODCAST_LINKS = [
  { name: 'Spotify', href: 'https://open.spotify.com/show/7dgxKMkSyy3HWtQW7OfqXA', color: '#000000' },
  { name: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/ech-institute-podcast/id1620565121', color: '#f5a51d' },
  { name: 'Pocket Casts', href: 'https://pocketcasts.com/podcast/ech-institute-podcast/07681030-5a48-013a-d70a-0acc26574db2', color: '#000000' },
  { name: 'Castbox', href: 'https://castbox.fm/channel/7004180?country=gb', color: '#f5a51d' },
];

function SpotifyIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color || '#1DB954'} aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}
function ApplePodcastsIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color || '#9933FF'} aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm0 2.4c5.28 0 9.6 4.32 9.6 9.6s-4.32 9.6-9.6 9.6S2.4 17.28 2.4 12 6.72 2.4 12 2.4zm0 3.6a6 6 0 0 0-6 6c0 2.76 1.92 5.16 4.56 5.88.6.12 1.2-.24 1.32-.84.12-.6-.24-1.2-.84-1.32a3.6 3.6 0 0 1 2.52-3.36.96.96 0 0 0 .72-.96V7.2a.96.96 0 0 0-1.08-.96 6 6 0 0 0-.48 0zm0 3.12a2.88 2.88 0 0 0-2.88 2.88v.24c0 .66.54 1.2 1.2 1.2s1.2-.54 1.2-1.2v-.24a.48.48 0 0 1 .96 0v.24c0 .12-.12.24-.24.24a.48.48 0 0 1-.48-.48v-.24a1.92 1.92 0 0 1 3.84 0v2.64a1.92 1.92 0 0 1-3.84 0 .96.96 0 1 1 1.92 0 .48.48 0 1 0 .96 0v-2.64a2.88 2.88 0 0 0-2.88-2.88z" />
    </svg>
  );
}
function PocketCastsIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color || '#F43E37'} aria-hidden>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.2c-3.96 0-7.2-3.24-7.2-7.2S8.04 4.8 12 4.8s7.2 3.24 7.2 7.2-3.24 7.2-7.2 7.2zm0-12.48a5.28 5.28 0 0 0-5.28 5.28c0 .66.54 1.2 1.2 1.2s1.2-.54 1.2-1.2a2.88 2.88 0 0 1 5.76 0c0 .66.54 1.2 1.2 1.2s1.2-.54 1.2-1.2a5.28 5.28 0 0 0-5.28-5.28z" />
    </svg>
  );
}
function CastboxIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color || 'currentColor'} aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
    </svg>
  );
}

const PODCAST_ICONS: Record<string, React.ComponentType<{ className?: string; color?: string }>> = {
  'Spotify': SpotifyIcon,
  'Apple Podcasts': ApplePodcastsIcon,
  'Pocket Casts': PocketCastsIcon,
  'Castbox': CastboxIcon,
};

const mediaPillars = [
  {
    title: 'PEEPanEIP',
    blurb: 'Deep dives into Ethereum Improvement Proposals (EIPs). A comprehensive technical library for developers and client implementers.',
    episodes: '150+ archived',
    href: '/podcast/peepaneip',
    icon: BookOpen,
  },
  {
    title: 'The Fusaka Files',
    blurb: 'Strategic transition toward the Fusaka upgrade. Predictable engineering delivery and the road to 2026.',
    episodes: 'Limited series',
    href: '/podcast/fusaka-files',
    icon: Radio,
  },
  {
    title: 'Ecosystem Project Demo (EPD)',
    blurb: 'Showcasing Web3 public goods and infrastructure. Open-sourced tools and developer experience.',
    episodes: 'Ongoing',
    href: '/podcast/epd',
    icon: Code,
  },
  {
    title: 'Women in Ethereum Protocol (WiEP)',
    blurb: 'Study groups and community support for women contributing to Ethereum\'s core protocol. Peer support, mentorship, and structured learning.',
    episodes: 'Study groups',
    href: '/podcast/wiep',
    icon: GraduationCap,
  },
  {
    title: 'Technical Coordination',
    blurb: 'Raw All Core Devs (ACD) meeting archives and summaries. ACDE, ACDC, and breakout rooms.',
    episodes: 'Archive',
    href: '#acd-archive',
    icon: Mic,
  },
];

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-white pt-16 lg:pt-24">
      {/* Hero + Listen cards */}
      <section className="py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 border-b border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="global-hero-title mb-3 sm:mb-4 lg:text-5xl">
            ECH Institute Podcast
          </h1>
          <p className="global-hero-subtitle text-black mb-2 sm:mb-4 max-w-3xl mx-auto">
            Deep-dives, strategic transitions, and ecosystem demos. One place for protocol education and coordination.
          </p>
          <p className="global-body text-black mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Exploring PEEPanEIP, Fusaka Files, and more with core developers and researchers.
          </p>
          <h2 className="text-sm font-semibold text-black uppercase tracking-wide mb-3 mt-4">
            Listen on
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {PODCAST_LINKS.map(({ name, href, color }) => {
              const Icon = PODCAST_ICONS[name];
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white border border-black shadow-md hover:shadow-lg hover:border-amber-200 transition-all no-underline text-black min-h-[100px] sm:min-h-[110px]"
                >
                  {Icon ? (
                    <span className="w-10 h-10 shrink-0 flex items-center justify-center" aria-hidden>
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9" color={color} />
                    </span>
                  ) : null}
                  <span className="text-sm font-semibold text-center leading-tight">{name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Pillars */}
      <section className="py-5 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 bg-[#f5a51d]">
        <div className="max-w-7xl mx-auto">
          <h2 className="global-section-title mb-2 text-center">The Media Pillars</h2>
          <p className="global-body-lg text-center text-black max-w-2xl mx-auto mb-5 sm:mb-6 px-0 sm:px-4">
            Interactive cards linking to specialized series. Each displays the series name, a short blurb, and archived episode count.
          </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            {mediaPillars.map(({ title, blurb, episodes, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="global-card group p-5 sm:p-6 flex flex-col no-underline text-inherit min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] min-w-0"
              >
                <Icon className="global-icon-yellow w-9 h-9 sm:w-10 sm:h-10 mb-3 sm:mb-4 shrink-0" />
                <h3 className="global-card-title mb-2 line-clamp-2">{title}</h3>
                <p className="global-body text-sm flex-1 line-clamp-4 sm:line-clamp-none">{blurb}</p>
                <div className="mt-4 pt-4 border-t border-black flex items-center justify-between shrink-0">
                  <span className="text-xs font-medium text-black">{episodes}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-black group-hover:text-black transition-colors">
                    Explore <ArrowRight className="w-4 h-4 shrink-0" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PodcastRecentHighlights />

      {/* ACD Archive */}
      <section id="acd-archive" className="py-5 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 bg-[#f5a51d] scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="global-section-title mb-3 sm:mb-4">All Core Devs (ACD) Archive</h2>
          <p className="global-body-lg text-black mb-4 sm:mb-6 max-w-3xl">
            The hub archives raw All Core Devs meetings (ACDE, ACDC). Each entry provides:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="global-card p-5 sm:p-6 h-full flex flex-col">
              <div className="proplay-icon-container w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0">
                <Play className="w-5 h-5" />
              </div>
              <h3 className="global-card-title mb-2">Multimedia Integration</h3>
              <p className="global-body text-sm">Embedded YouTube recording with timestamped chapters for easy navigation.</p>
            </div>
            <div className="global-card p-5 sm:p-6 h-full flex flex-col">
              <div className="proplay-icon-container w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="global-card-title mb-2">Technical Summaries</h3>
              <p className="global-body text-sm">AI-generated highlights and action items for client teams.</p>
            </div>
            <div className="global-card p-5 sm:p-6 h-full flex flex-col">
              <div className="proplay-icon-container w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="global-card-title mb-2">Repository Links</h3>
              <p className="global-body text-sm">Access supporting references and full meeting notes for protocol coordination.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
