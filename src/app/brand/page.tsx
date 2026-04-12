'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, ExternalLink, Copy, Check, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// ─── Constants ───────────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: 'logo', label: 'Identity' },
  { id: 'color', label: 'Color System' },
  { id: 'typography', label: 'Typography' },
  { id: 'assets', label: 'Icons & Marks' },
  { id: 'ui', label: 'Buttons & Badges' },
];

// ─── Color Swatch ─────────────────────────────────────────────────────────────
function ColorSwatch({
  color,
  name,
  hex,
  textDark = true,
}: {
  color: string;
  name: string;
  hex: string;
  textDark?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="brand-swatch" onClick={handleCopy} title="Click to copy hex">
      <div
        className="brand-swatch-color"
        style={{ background: color, border: color === '#ffffff' || color === '#FFFFFF' ? '1px solid #e5e7eb' : 'none' }}
      />
      <div className="brand-swatch-info">
        <span className="brand-swatch-name">{name}</span>
        <span className="brand-swatch-hex">
          {copied ? (
            <span className="brand-copied"><Check size={11} /> Copied</span>
          ) : (
            <><Copy size={11} /> {hex}</>
          )}
        </span>
      </div>
    </div>
  );
}

// ─── Logo Variant Card ────────────────────────────────────────────────────────
function LogoCard({
  src,
  label,
  dark = false,
  isHorizontal = false,
}: {
  src: string;
  label: string;
  dark?: boolean;
  isHorizontal?: boolean;
}) {
  return (
    <div
      className={`brand-logo-card ${dark ? 'brand-logo-card-dark' : ''}`}
    >
      <div className={`brand-logo-preview ${isHorizontal ? 'brand-logo-preview-wide' : ''}`}>
        <Image
          src={src}
          alt={label}
          width={isHorizontal ? 240 : 80}
          height={isHorizontal ? 80 : 80}
          className="object-contain"
          style={{ maxWidth: '100%', maxHeight: '80px' }}
        />
      </div>
      <div className={`flex items-center justify-between w-full px-4 py-3 ${dark ? 'text-white' : ''}`}>
        <p className="brand-logo-label" style={{ padding: 0, margin: 0, color: dark ? '#ffffff' : undefined }}>{label}</p>
        <a href={src} download className={`transition-colors ${dark ? 'text-white hover:opacity-80' : 'text-gray-400 hover:text-black'}`} title={`Download ${label}`}>
          <Download size={16} color={dark ? "#ffffff" : "currentColor"} />
        </a>
      </div>
    </div>
  );
}

// ─── Typography Sample ────────────────────────────────────────────────────────
function TypeSample({
  fontFamily,
  fontName,
  label,
  weights,
  category,
}: {
  fontFamily: string;
  fontName?: string;
  label: string;
  weights: { weight: number | string; name: string }[];
  category: 'heading' | 'body';
}) {
  return (
    <div className="brand-type-block">
      <div className="brand-type-meta">
        <span className="brand-type-label">{label}</span>
        <span className="brand-type-family" style={{ fontFamily }}>{fontName || fontFamily.split(',')[0]}</span>
      </div>
      <div className="brand-type-samples">
        {weights.map(({ weight, name }) => (
          <div key={name} className="brand-type-row">
            <span className="brand-type-weight-name">{name}</span>
            <p
              className={`brand-type-specimen ${category === 'heading' ? 'font-syne-specimen' : 'font-dmsans-specimen'}`}
              style={{ fontWeight: weight }}
            >
              Aa Bb Cc — Education Community Homesteading
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="brand-section-header">
      <span className="brand-section-label">{label}</span>
      <h2 className="brand-section-title">{title}</h2>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BrandPage() {
  const [activeSection, setActiveSection] = useState('logo');

  // Sticky nav interaction
  useEffect(() => {
    const handleScroll = () => {
      // Trigger update when section hits the upper middle of the screen
      const scrollPosition = window.scrollY + (window.innerHeight / 2.5);
      let currentSection = NAV_SECTIONS[0].id;

      for (const section of NAV_SECTIONS) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="brand-page bg-white">

      {/* ── Hero — "proplay" inner-page style ────────────────── */}
      <section className="page-hero" style={{ borderBottom: '1px solid #f0f0f0' }}>
        {/* override page-hero to be 2-col on desktop */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: '3rem', alignItems: 'center', position: 'relative', zIndex: 1 }}
          className="brand-hero-2col">
          {/* Left — copy */}
          <div className="page-hero-inner" style={{ maxWidth: '100%' }}>
            <div className="page-hero-tag brand-hero-badge animate-fade-in">
              Brand Guidelines
            </div>
            <h1 className="page-hero-title animate-fade-up">
              The <em>ECH</em><br />Brand Identity
            </h1>
            <p className="page-hero-desc animate-fade-up delay-1" style={{ maxWidth: '480px' }}>
              Everything you need to represent ECH Institute consistently logos,
              colors, typography, and usage rules for creators, partners, and community members.
            </p>
            <div className="page-hero-actions animate-fade-up delay-2">
              <a href="/icon_pack.zip" download className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Download size={18} style={{ flexShrink: 0 }} /> Download Logo Pack
              </a>
              <Link href="mailto:team@ethcatherders.com" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <ExternalLink size={18} style={{ flexShrink: 0 }} /> Contact Us
              </Link>
            </div>
          </div>

          {/* Right — mascot */}
          <div className="brand-hero-image-wrap animate-fade-in">
            <Image
              src="/assets/images/Catty.webp"
              alt="ECH Institute Cat"
              width={420}
              height={420}
              className="brand-hero-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Main Layout with Sticky Sidebar ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex gap-12 items-start">

        {/* Sticky Left Nav */}
        <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-28 self-start">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 px-3">On This Page</p>
          <nav className="flex flex-col gap-1">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 border-l-2 ${activeSection === s.id
                    ? 'bg-gray-50 text-black border-yellow-400'
                    : 'text-gray-400 hover:text-black hover:bg-gray-50 border-transparent'
                  }`}
                style={{ fontFamily: 'Antonio, sans-serif' }}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="flex-1 min-w-0 flex flex-col gap-20">

          {/* 01 — Logo */}
          <section id="logo" className="scroll-mt-28">
            <SectionHeader label="01 — Identity" title="Logo" />
            <p className="global-body-lg mb-8 max-w-2xl">
              Our logo is the foundation of our visual identity. Use these approved variations and
              always maintain clear space around the mark.
            </p>

            <div className="brand-logo-grid">
              <LogoCard src="/ech_full_logo.png" label="Primary Logo (Square)" />
              <LogoCard src="/ech_full_logo_inverted.png" label="Inverted Logo" dark />
              <LogoCard src="/ech_horizontal_logo.svg" label="Horizontal Logo" isHorizontal />
            </div>
          </section>

          <div className="brand-divider" />

          {/* 02 — Color */}
          <section id="color" className="scroll-mt-28">
            <SectionHeader label="02 — Color System" title="Color" />
            <p className="global-body-lg mb-8 max-w-2xl">
              Our palette follows a strict 60 / 30 / 10 rule: 60% white, 30% black, 10% yellow.
              This keeps the brand clean, high-contrast, and trustworthy.
            </p>

            <h3 className="brand-subsection-title">Primary Palette</h3>
            <div className="brand-swatches">
              <ColorSwatch color="#ffffff" name="White" hex="#FFFFFF" textDark />
              <ColorSwatch color="#000000" name="Black" hex="#000000" textDark={false} />
              <ColorSwatch color="#facc14" name="ECH Yellow" hex="#FACC14" textDark />
            </div>

            <h3 className="brand-subsection-title" style={{ marginTop: '3rem' }}>Extended Palette</h3>
            <div className="brand-swatches">
              <ColorSwatch color="#f9fafb" name="Off White" hex="#F9FAFB" textDark />
              <ColorSwatch color="#f7f9fa" name="Card BG" hex="#F7F9FA" textDark />
              <ColorSwatch color="#fefbd6" name="Yellow Light" hex="#FEFBD6" textDark />
              <ColorSwatch color="#4c5663" name="Text Secondary" hex="#4C5663" textDark={false} />
              <ColorSwatch color="#ced2d9" name="Border" hex="#CED2D9" textDark />
              <ColorSwatch color="#f9a825" name="Yellow Dark" hex="#F9A825" textDark />
            </div>

            <div className="brand-proportion-bar" style={{ marginTop: '3rem' }}>
              {/* Correct: 60% white, 30% black, 10% yellow */}
              <div style={{ flex: 6, background: '#fff', border: '1.5px solid var(--border-divider)', borderRadius: '8px 0 0 8px' }} />
              <div style={{ flex: 3, background: '#000', borderRadius: '0' }} />
              <div style={{ flex: 1, background: '#facc14', border: '1.5px solid #e6b800', borderRadius: '0 8px 8px 0' }} />
            </div>
            <div className="brand-proportion-labels">
              <span>White — 60%</span>
              <span>Black — 30%</span>
              <span>Yellow — 10%</span>
            </div>
          </section>

          <div className="brand-divider" />

          {/* 03 — Typography */}
          <section id="typography" className="scroll-mt-28">
            <SectionHeader label="03 — Typography" title="Typography" />
            <p className="global-body-lg mb-8 max-w-2xl">
              We use two typefaces <strong>Syne</strong> for headings, and <strong>DM Sans</strong> for body. Navigation and footer use <strong>Antonio</strong>.
            </p>

            <TypeSample
              fontFamily="var(--font-family-page-heading)"
              fontName="Syne"
              label="Headings — Syne"
              category="heading"
              weights={[
                { weight: 800, name: 'ExtraBold 800' },
                { weight: 700, name: 'Bold 700' },
                { weight: 600, name: 'SemiBold 600' },
              ]}
            />

            <TypeSample
              fontFamily="var(--font-family-page-body)"
              fontName="DM Sans"
              label="Body — DM Sans"
              category="body"
              weights={[
                { weight: 400, name: 'Regular 400' },
                { weight: 500, name: 'Medium 500' },
                { weight: 300, name: 'Light 300' },
              ]}
            />

            <div className="brand-type-scale" style={{ marginTop: '3rem' }}>
              <h3 className="brand-subsection-title">Type Scale</h3>
              {[
                { label: 'Display', size: '4.5rem', sample: 'ECH Institute' },
                { label: 'H1', size: '3rem', sample: 'Education, Community, Homesteading' },
                { label: 'H2', size: '2.25rem', sample: 'Our Mission & Programs' },
                { label: 'Body', size: '1.125rem', sample: "Supporting Ethereum's open governance since 2019." },
              ].map(({ label, size, sample }) => (
                <div key={label} className="brand-scale-row">
                  <span className="brand-scale-label">{label}</span>
                  <span className="brand-scale-size">{size}</span>
                  <p className="brand-scale-sample"
                    style={{
                      fontSize: label === 'Display' ? '2.5rem' : label === 'H1' ? '1.5rem' : '1.125rem',
                      fontFamily: label === 'Body' ? 'var(--font-family-page-body)' : 'var(--font-family-page-heading)',
                      fontWeight: label === 'Body' ? 400 : 700
                    }}>
                    {sample}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="brand-divider" />

          {/* 04 — Assets */}
          <section id="assets" className="scroll-mt-28">
            <SectionHeader label="04 — Assets" title="Icons & Marks" />
            <p className="global-body-lg mb-8 max-w-2xl">
              Supporting assets include the cat mascot, paw marks, and partner logos.
            </p>

            <h3 className="brand-subsection-title">Cat Mascots</h3>
            <div className="brand-asset-grid">
              {[
                { src: '/cat5.png', label: 'Cat Hero' },
                { src: '/cat_head.png', label: 'Cat Head' },
                { src: '/cat_laptop.png', label: 'Cat Laptop' },
                { src: '/assets/cat_peek.png', label: 'Cat Peek' },
              ].map(({ src, label }) => (
                <div key={label} className="brand-asset-card">
                  <div className="brand-asset-preview">
                    <Image src={src} alt={label} width={120} height={120} className="object-contain" style={{ maxHeight: '100px' }} />
                  </div>
                  <div className="flex items-center justify-between w-full px-4 py-3">
                    <p className="brand-asset-label" style={{ padding: 0, margin: 0 }}>{label}</p>
                    <a href={src} download className="text-gray-400 hover:text-black transition-colors" title={`Download ${label}`}>
                      <Download size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="brand-subsection-title" style={{ marginTop: '3rem' }}>Secondary Marks & Elements</h3>
            <div className="brand-asset-grid">
              {[
                { src: '/about_no_pic.png', label: 'Cat Icon' },
                { src: '/cat_white.png', label: 'Cat White' },
                { src: '/icon-paw.png', label: 'Paw Icon' },
                { src: '/paw_yarn.png', label: 'Paw & Yarn' },
                { src: '/paw2.png', label: 'Paw Print 2' },
                { src: '/paw3.png', label: 'Paw Print 3' },
                { src: '/paw4.png', label: 'Paw Print 4' },
                { src: '/paws.png', label: 'Paws Group' },
                { src: '/retro_tv.png', label: 'Retro TV' },
                { src: '/yarn.png', label: 'Yarn Ball' },
              ].map(({ src, label }) => (
                <div key={label} className="brand-asset-card">
                  <div className="brand-asset-preview" style={{ backgroundColor: src.includes('white') ? '#e5e7eb' : '#f9fafb' }}>
                    <Image src={src} alt={label} width={100} height={100} className="object-contain" style={{ maxHeight: '80px' }} />
                  </div>
                  <div className="flex items-center justify-between w-full px-4 py-3">
                    <p className="brand-asset-label" style={{ padding: 0, margin: 0 }}>{label}</p>
                    <a href={src} download className="text-gray-400 hover:text-black transition-colors" title={`Download ${label}`}>
                      <Download size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </section>

          <div className="brand-divider" />

          {/* 05 — UI */}
          <section id="ui" className="scroll-mt-28">
            <SectionHeader label="05 — UI Components" title="Buttons & Badges" />
            <p className="global-body-lg mb-8 max-w-2xl">
              Consistent button styles maintain visual hierarchy across the platform.
            </p>

            <div className="brand-ui-row">
              <div>
                <p className="brand-ui-label">Primary</p>
                <button className="btn btn-primary">Get Involved</button>
              </div>
              <div>
                <p className="brand-ui-label">Outline</p>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>

            <h3 className="brand-subsection-title" style={{ marginTop: '3rem' }}>Badges</h3>
            <div className="brand-badge-row">
              <span className="brand-badge brand-badge-yellow">Nonprofit</span>
              <span className="brand-badge brand-badge-outline">Education</span>
              <span className="brand-badge brand-badge-dark">Community</span>
              <span className="brand-badge brand-badge-light">Public Good</span>
            </div>
          </section>



        </div>
      </div>

      <div className="brand-divider" />

      {/* ── Download CTA ──────────────────────────────────────────────────── */}
      <section className="brand-section brand-cta-section bg-white border-t border-gray-100 py-12 md:py-16 flex justify-center items-center">
        <div className="w-full max-w-4xl mx-auto px-4 flex justify-center">
          <div className="brand-cta-inner flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="brand-cta-cat flex-shrink-0">
              <Image src="/cat5.png" alt="ECH Cat" width={140} height={140} className="object-contain" />
            </div>
            <div className="brand-cta-copy flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="brand-cta-title" style={{ fontSize: '2.5rem', fontWeight: 800 }}>Ready to build?</h2>
              <p className="brand-cta-subtitle text-gray-500 mt-2">
                All brand assets are available for use by partners and community members.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                <a href="/icon_pack.zip" download className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Download size={18} style={{ flexShrink: 0 }} /> Download Logos
                </a>
                <a href="mailto:team@ethcatherders.com" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ExternalLink size={18} style={{ flexShrink: 0 }} /> Contact Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
