'use client';

import { useEffect, useState } from 'react';
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
    name: 'Ornella',
    handle: '@OrnellaWeb3',
    image: 'https://unavatar.io/twitter/OrnellaWeb3',
    message: "The future is bright and it’s built on @ethereum. What a lovely way to commemorate International Women’s Day - sharing great tips and good vibes with amazing women builders 🌼 Thank you @ECHInstitute for the fun invitation 🙏",
    twitter: 'https://x.com/OrnellaWeb3/status/2030681215657787522?s=20',
  },
  {
    id: 2,
    name: 'The DAO Fund',
    handle: '@thedaofund',
    image: 'https://unavatar.io/twitter/thedaofund',
    message: "Ethereum governance only works because people continuously coordinate, educate, and keep the process moving forward. @ECHInstitute supports the EIP process, network upgrade coordination, protocol education, and Women in Ethereum Protocol (WiEP), helping more people participate",
    twitter: 'https://x.com/thedaofund/status/2054871341946339450?s=20',
  },
  {
    id: 3,
    name: 'Kaan Uzdoğan',
    handle: '@kaanuzdogan',
    image: 'https://unavatar.io/twitter/kaanuzdogan',
    message: "Enjoyed jumping on the @ECHInstitute podcast and talk about @SourcifyEth! Chime in to learn how we foster open source in Ethereum contract verification and open up the contract datasets. Don't miss the small AI playground demo at the end of the presentation 🤓",
    twitter: 'https://x.com/kaanuzdogan/status/2042536162959527942?s=20',
  },
  {
    id: 4,
    name: 'Simona',
    handle: '@SimonaSerban_',
    image: 'https://unavatar.io/twitter/SimonaSerban_',
    message: "Ethereum is one of the most inclusive & supportive environments I’ve ever worked in. I'm grateful to everyone contributing and making it special🫰 Huge thanks to @poojaranjan19 for her wonderful work, @ECHInstitute for hosting me and all the women out there making a difference💪",
    twitter: 'https://x.com/SimonaSerban_/status/2030695704931282985?s=20',
  },
  {
    id: 5,
    name: 'Hudson Jameson',
    handle: '@hudsonjameson',
    image: 'https://unavatar.io/twitter/hudsonjameson',
    message: "I am excited to announce I have joined the ECH Institute Board! Looking forward to what the future brings for ECH :) Special thanks to @poojaranjan19 who has been stewarding ECH for many years. Thank you for your hard work and I look forward to working with you...",
    twitter: 'https://x.com/hudsonjameson/status/2026008607582523407?s=20',
  },
  {
    id: 6,
    name: 'Ben Edgington',
    handle: '@benjaminion_xyz',
    image: 'https://unavatar.io/twitter/benjaminion_xyz',
    message: "I'm another long-time fan of PEEPanEIP. It's a vastly underrated resource imo.",
    twitter: 'https://x.com/benjaminion_xyz/status/2048790694160982369?s=20',
  },
  {
    id: 7,
    name: 'Ariutokintumi',
    handle: '@ariutokintumi',
    image: 'https://unavatar.io/twitter/ariutokintumi',
    message: "If you wonder why WE NEED to support @ECHInstitute, they do EE Rounds = Exponential Exposure Rounds benefiting projects bulding on @ethereum As an ecosystem, this initiatives, with clear objectives, high quality delivery and right audience are core componentes. 100% aligned ☑️",
    twitter: 'https://x.com/ariutokintumi/status/2048799765844901963?s=20',
  },
];



export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const total = cards.length;

  useEffect(() => { setIsMounted(true); }, []);

  const goTo = (i: number) => setCurrentIndex((i + total) % total);
  const next = () => setCurrentIndex(prev => (prev + 1) % total);
  const prev = () => setCurrentIndex(prev => (prev - 1 + total) % total);

  useEffect(() => {
    if (!isMounted || isHovered) return;
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
  }, [isMounted, isHovered, total]);

  // currentIndex = the CENTER card on desktop
  const indices = [
    (currentIndex - 1 + total) % total, // left
    currentIndex,                        // center (featured)
    (currentIndex + 1) % total,          // right
  ];

  const navBtnStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 44, height: 44, borderRadius: 12,
    border: '2px solid var(--border-strong)',
    background: 'var(--surface-card-theme)',
    cursor: 'pointer', transition: 'all 0.25s ease',
    flexShrink: 0, padding: 0,
  };

  const TestimonialCard = ({ card, featured }: { card: Card; featured: boolean }) => (
    <a
      href={card.twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="global-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: '28px 28px 24px',
        borderRadius: 20,
        border: featured ? '2px solid var(--accent-brand)' : '2px solid var(--border-soft)',
        background: 'var(--surface-card-theme)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all 0.3s ease',
        minHeight: 260,
        boxShadow: featured ? '0 8px 32px -4px rgba(245,165,29,0.15)' : 'none',
        flex: 1,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-brand)';
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 20px 48px -8px rgba(245,165,29,0.2)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = featured ? 'var(--accent-brand)' : 'var(--border-soft)';
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = featured ? '0 8px 32px -4px rgba(245,165,29,0.15)' : 'none';
      }}
    >
      {/* Quote */}
      <p style={{
        fontSize: '0.9375rem', lineHeight: 1.7,
        color: 'var(--text-soft)', margin: 0, flex: 1,
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
            (e.target as HTMLImageElement).style.background = 'var(--surface-card-muted)';
          }}
        />
        <div>
          <div style={{
            fontFamily: 'var(--font-family-heading)',
            fontWeight: 700, fontSize: '0.9375rem',
            color: 'var(--text-primary)', lineHeight: 1.2,
          }}>{card.name}</div>
          <div style={{
            fontSize: '0.8125rem', color: 'var(--accent-brand)',
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className={`${i !== 1 ? 'hidden md:flex' : 'flex'} animate-pulse`}
                style={{
                  minHeight: 260,
                  borderRadius: 20,
                  border: '2px solid var(--border-soft)',
                  background: 'var(--surface-card-theme)',
                  opacity: 0.4
                }}
              />
            ))}
          </div>
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
              onMouseEnter={e => { const b = e.currentTarget; b.style.background='#F5A51D'; b.style.borderColor='#F5A51D'; (b.querySelector('svg') as any).style.color='#151419'; }}
              onMouseLeave={e => { const b = e.currentTarget; b.style.background='var(--surface-card-theme)'; b.style.borderColor='var(--border-strong)'; (b.querySelector('svg') as any).style.color='var(--text-primary)'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
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
              onMouseEnter={e => { const b = e.currentTarget; b.style.background='#F5A51D'; b.style.borderColor='#F5A51D'; (b.querySelector('svg') as any).style.color='#151419'; }}
              onMouseLeave={e => { const b = e.currentTarget; b.style.background='var(--surface-card-theme)'; b.style.borderColor='var(--border-strong)'; (b.querySelector('svg') as any).style.color='var(--text-primary)'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
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
                background: i === currentIndex ? 'var(--accent-brand)' : 'var(--border-soft)',
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
