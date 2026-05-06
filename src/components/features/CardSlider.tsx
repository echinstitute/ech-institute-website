'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


interface Card {
  id: number;
  name: string;
  handle: string;
  image: string;
  message: string;
  twitter: string;
}

const cards: Card[] = [
  {
    id: 1,
    name: 'Ben Edgington',
    handle: '@benjaminion_xyz',
    image: 'https://unavatar.io/twitter/benjaminion_xyz',
    message: "The ECH Institute continues to be the bedrock of Ethereum's decentralized governance. Their work on the EIP Summit in 2025 was masterclass.",
    twitter: 'https://x.com/benjaminion_xyz/status/2048790694160982369',
  },
  {
    id: 2,
    name: 'Ariutokintumi',
    handle: '@ariutokintumi',
    image: 'https://unavatar.io/twitter/ariutokintumi',
    message: 'Incredible to see how ECH Institute has scaled its educational resources. The ACD transcripts are still the most valuable resource for protocol researchers in 2026.',
    twitter: 'https://x.com/ariutokintumi/status/2048799765844901963',
  },
  {
    id: 3,
    name: 'Anthony Sassano',
    handle: '@sassal0x',
    image: 'https://unavatar.io/twitter/sassal0x',
    message: "If you want to understand what's actually happening at the core level of Ethereum, ECH Institute is where you go. Absolute legends.",
    twitter: 'https://x.com/sassal0x/status/1848790694160982370',
  },
  {
    id: 4,
    name: 'Hudson Jameson',
    handle: '@hudsonjameson',
    image: 'https://unavatar.io/twitter/hudsonjameson',
    message: 'The ECH Institute has evolved so much. Proud to see them leading the charge on community engagement and EIP education.',
    twitter: 'https://x.com/hudsonjameson/status/1848790694160982371',
  },
  {
    id: 5,
    name: 'Tim Beiko',
    handle: '@TimBeiko',
    image: 'https://unavatar.io/twitter/TimBeiko',
    message: 'Always a pleasure working with the ECH team. Their efforts in making Ethereum development transparent and accessible are unparalleled.',
    twitter: 'https://x.com/TimBeiko/status/1848790694160982369',
  },
  {
    id: 6,
    name: 'Christine Kim',
    handle: '@christine_dkim',
    image: 'https://unavatar.io/twitter/christine_dkim',
    message: "ECH Institute's coverage of the ACD calls is essential. They bring clarity to complex technical discussions for the broader community.",
    twitter: 'https://x.com/christine_dkim/status/1848790694160982372',
  },
  {
    id: 7,
    name: 'Pooja Ranjan',
    handle: '@poojaranjan_',
    image: 'https://unavatar.io/twitter/poojaranjan_',
    message: "We are so grateful for the community's support as we expand our educational programs and technical documentation in 2026.",
    twitter: 'https://x.com/poojaranjan_/status/1848790694160982373',
  },
  {
    id: 8,
    name: 'Trent Van Epps',
    handle: '@trent_vanepps',
    image: 'https://unavatar.io/twitter/trent_vanepps',
    message: "ECH Institute's dedication to the public good is inspiring. Their contribution to the Ethereum ecosystem is foundational.",
    twitter: 'https://x.com/trent_vanepps/status/1848790694160982374',
  },
  {
    id: 9,
    name: 'Preston Van Loon',
    handle: '@preston_vanloon',
    image: 'https://unavatar.io/twitter/preston_vanloon',
    message: 'The documentation and summaries provided by ECH Institute save us so much time. A vital part of the Ethereum stack.',
    twitter: 'https://x.com/preston_vanloon/status/1848790694160982375',
  },
  {
    id: 10,
    name: 'Terence Tsao',
    handle: '@terencechain',
    image: 'https://unavatar.io/twitter/terencechain',
    message: 'Huge shoutout to ECH Institute for their tireless work in documenting the consensus layer evolution. 2025 was a big year for us!',
    twitter: 'https://x.com/terencechain/status/1848790694160982376',
  },
  {
    id: 11,
    name: 'DCBuilder',
    handle: '@dcbuild3r',
    image: 'https://unavatar.io/twitter/dcbuild3r',
    message: 'ECH Institute is the gold standard for protocol-level education. Their impact on new developers entering the space is massive.',
    twitter: 'https://x.com/dcbuild3r/status/1848790694160982377',
  },
  {
    id: 12,
    name: 'Jose Schwein',
    handle: '@josephschwein',
    image: 'https://unavatar.io/twitter/josephschwein',
    message: 'The workshops organized by ECH Institute in 2025 were a game changer for our team. Looking forward to more in 2026!',
    twitter: 'https://x.com/josephschwein/status/1848790694160982378',
  },
  {
    id: 13,
    name: 'Lightclients',
    handle: '@lightclients',
    image: 'https://unavatar.io/twitter/lightclients',
    message: "Grateful for the ECH team's help in navigating the EIP process. Their guidance is invaluable for protocol contributors.",
    twitter: 'https://x.com/lightclients/status/1848790694160982379',
  },
  {
    id: 14,
    name: 'Sam Richard',
    handle: '@samonchain',
    image: 'https://unavatar.io/twitter/samonchain',
    message: 'Ethereum.org ❤️ ECH Institute. Their technical deep-dives are the perfect complement to our documentation.',
    twitter: 'https://x.com/samonchain/status/1848790694160982380',
  },
  {
    id: 15,
    name: 'Griff Green',
    handle: '@thegrifft',
    image: 'https://unavatar.io/twitter/thegrifft',
    message: "True decentralization requires transparency, and that's exactly what ECH Institute provides. Keep up the amazing work!",
    twitter: 'https://x.com/thegrifft/status/1848790694160982381',
  },
];



export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const total = cards.length;

  useEffect(() => { setIsMounted(true); }, []);

  const goTo = (i: number) => setCurrentIndex((i + total) % total);
  const next = () => goTo(currentIndex + 1);
  const prev = () => goTo(currentIndex - 1);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isHovered && isMounted) {
      timerRef.current = setInterval(next, 4500);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, currentIndex, isMounted]);

  // currentIndex = the CENTER card on desktop
  const indices = [
    (currentIndex - 1 + total) % total, // left
    currentIndex,                        // center (featured)
    (currentIndex + 1) % total,          // right
  ];

  const navBtnStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 44, height: 44, borderRadius: 12,
    border: '2px solid #3a3a3a',
    background: '#262626',
    cursor: 'pointer', transition: 'all 0.25s ease',
    flexShrink: 0, padding: 0,
  };

  const TestimonialCard = ({ card, featured }: { card: Card; featured: boolean }) => (
    <a
      href={card.twitter}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: '28px 28px 24px',
        borderRadius: 20,
        border: featured ? '2px solid #F5A51D' : '2px solid var(--border-soft)',
        background: 'var(--surface-card-theme)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all 0.3s ease',
        minHeight: 260,
        boxShadow: featured ? '0 8px 32px -4px rgba(245,165,29,0.15)' : 'none',
        flex: 1,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = '#F5A51D';
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 20px 48px -8px rgba(245,165,29,0.2)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = featured ? '#F5A51D' : 'var(--border-soft)';
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = featured ? '0 8px 32px -4px rgba(245,165,29,0.15)' : 'none';
      }}
    >
      {/* Quote */}
      <p style={{
        fontSize: '0.9375rem', lineHeight: 1.7,
        color: 'var(--text-secondary)', margin: 0, flex: 1,
        fontFamily: 'var(--font-family-base)',
      }}>
        &ldquo;{card.message}&rdquo;
      </p>

      {/* Author */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        paddingTop: 16, borderTop: '1px solid var(--border-soft)',
        marginTop: 'auto',
      }}>
        <img
          src={card.image}
          alt={card.name}
          width={44}
          height={44}
          style={{
            width: 44, height: 44, borderRadius: '50%',
            objectFit: 'cover', flexShrink: 0,
            border: featured ? '2px solid #F5A51D' : '2px solid var(--border-soft)',
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/logo/ECH Institute Logo - White.png';
            (e.target as HTMLImageElement).style.objectFit = 'contain';
            (e.target as HTMLImageElement).style.padding = '6px';
            (e.target as HTMLImageElement).style.background = '#262626';
          }}
        />
        <div>
          <div style={{
            fontFamily: 'var(--font-family-heading)',
            fontWeight: 700, fontSize: '0.9375rem',
            color: 'var(--text-primary)', lineHeight: 1.2,
          }}>{card.name}</div>
          <div style={{
            fontSize: '0.8125rem', color: '#F5A51D',
            fontWeight: 500, marginTop: 2,
          }}>{card.handle}</div>
        </div>
      </div>
    </a>
  );

  // Skeleton loader before mount
  if (!isMounted) {
    return (
      <section className="proplay-section bg-background overflow-hidden" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="global-section-tag justify-start mb-4">COMMUNITY VOICES</div>
          <h2 className="global-section-title mb-16">What people <em>say.</em></h2>
        </div>
      </section>
    );
  }

  return (
    <section
      className="proplay-section bg-background overflow-hidden"
      id="testimonials"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start lg:items-end mb-16">
          <div className="lg:w-1/2">
            <div className="global-section-tag justify-start mb-4">COMMUNITY VOICES</div>
            <h2 className="global-section-title mb-0">What people <em>say.</em></h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={navBtnStyle}
              onMouseEnter={e => { const b = e.currentTarget; b.style.background='#F5A51D'; b.style.borderColor='#F5A51D'; }}
              onMouseLeave={e => { const b = e.currentTarget; b.style.background='#262626'; b.style.borderColor='#3a3a3a'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FBFBFB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <span style={{
              fontFamily: 'var(--font-family-heading)',
              fontSize: '0.8125rem', fontWeight: 700,
              color: 'var(--text-soft)', minWidth: 64, textAlign: 'center', letterSpacing: '0.1em',
            }}>
              {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              onClick={next}
              aria-label="Next testimonial"
              style={navBtnStyle}
              onMouseEnter={e => { const b = e.currentTarget; b.style.background='#F5A51D'; b.style.borderColor='#F5A51D'; }}
              onMouseLeave={e => { const b = e.currentTarget; b.style.background='#262626'; b.style.borderColor='#3a3a3a'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FBFBFB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Cards: 3-column desktop, 1-column mobile ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* i===0 = left, i===1 = center, i===2 = right; show only center on mobile */}
          {indices.map((cardIdx, i) => (
            <div key={`${cardIdx}-${i}`} className={i !== 1 ? 'hidden md:flex' : 'flex'}>
              <TestimonialCard card={cards[cardIdx]} featured={i === 1} />
            </div>
          ))}
        </div>

        {/* ── Dot navigation ── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                height: 8,
                width: i === currentIndex ? 28 : 8,
                borderRadius: i === currentIndex ? 4 : '50%',
                background: i === currentIndex ? '#F5A51D' : 'var(--border-soft)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flexShrink: 0,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
