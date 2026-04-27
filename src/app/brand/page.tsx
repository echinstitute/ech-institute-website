'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, ExternalLink, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { StickySideNav } from '@/components/ui/StickySideNav';

// ─── Constants ───────────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: 'logo', label: 'Identity' },
  { id: 'color', label: 'Color System' },
  { id: 'typography', label: 'Typography' },
  { id: 'assets', label: 'Icons & Marks' },
  { id: 'ui', label: 'Buttons & Badges' },
];

const BRAND_PALETTE = [
  {
    swatchClass: 'brand-swatch-color--light-neutral',
    name: 'Light Neutral',
    hex: '#FBFBFB',
    role: 'Page background',
    detail: 'Default canvas for light theme sections and spacious layouts.',
  },
  {
    swatchClass: 'brand-swatch-color--ink',
    name: 'Dark Ink',
    hex: '#151419',
    role: 'Primary text',
    detail: 'Use for headings, body text, icons, and high-contrast UI details.',
  },
  {
    swatchClass: 'brand-swatch-color--surface',
    name: 'Deep Surface',
    hex: '#1B1B1E',
    role: 'Dark sections',
    detail: 'Use for nav, hero accents, footer, and high-emphasis dark blocks.',
  },
  {
    swatchClass: 'brand-swatch-color--panel',
    name: 'Panel Neutral',
    hex: '#262626',
    role: 'Cards and dividers',
    detail: 'Use for cards, form shells, borders, and layered dark panels.',
  },
  {
    swatchClass: 'brand-swatch-color--muted',
    name: 'Muted Gray',
    hex: '#878787',
    role: 'Secondary content',
    detail: 'Use for supporting text, metadata, helper copy, and quiet icons.',
  },
  {
    swatchClass: 'brand-swatch-color--accent',
    name: 'ECH Yellow',
    hex: '#F5A51D',
    role: 'Accent only',
    detail: 'Reserve for CTAs, active states, highlights, and key visual moments.',
  },
] as const;

const DARK_STACK_BREAKDOWN = [
  { label: '#151419 for primary text', toneClass: 'brand-tone-chip--ink' },
  { label: '#1B1B1E for deep surfaces', toneClass: 'brand-tone-chip--surface' },
  { label: '#262626 for panels and borders', toneClass: 'brand-tone-chip--panel' },
  { label: '#FBFBFB for secondary copy', toneClass: 'brand-tone-chip--muted' },
] as const;

const THEME_APPLICATIONS = [
  {
    title: 'Light Theme',
    previewClass: 'brand-theme-preview--light',
    description:
      'Use #FBFBFB as the page background, keep #151419 for strong readable text, and bring in #1B1B1E plus #262626 only where the layout needs extra depth.',
    chips: [
      { label: 'Canvas #FBFBFB', toneClass: 'brand-tone-chip--light' },
      { label: 'Text #151419', toneClass: 'brand-tone-chip--ink' },
      { label: 'Accent #F5A51D', toneClass: 'brand-tone-chip--accent' },
    ],
  },
  {
    title: 'Dark Theme',
    previewClass: 'brand-theme-preview--dark',
    description:
      'Keep the same six colors in dark mode: #151419 as the page base, #1B1B1E and #262626 for depth, #FBFBFB for readable text, and #F5A51D only for emphasis.',
    chips: [
      { label: 'Base #151419', toneClass: 'brand-tone-chip--ink' },
      { label: 'Type #FBFBFB', toneClass: 'brand-tone-chip--light' },
      { label: 'Muted #878787', toneClass: 'brand-tone-chip--muted' },
    ],
  },
] as const;

// ─── Color Swatch ─────────────────────────────────────────────────────────────
function ColorSwatch({
  swatchClass,
  name,
  hex,
  role,
  detail,
}: {
  swatchClass: string;
  name: string;
  hex: string;
  role: string;
  detail: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="brand-swatch-card group">
      <div
        className={cn("brand-swatch-preview h-40 cursor-pointer overflow-hidden border border-[#262626] relative z-10 shadow-inner", swatchClass)}
        style={{ backgroundColor: hex || '#333' }}
        onClick={handleCopy}
        role="button"
        title="Click to copy HEX"
      >
        {/* High-contrast HEX label backdrop */}
        <div className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10">
          <span className="text-[11px] font-mono text-[#FBFBFB] font-bold tracking-tighter uppercase">{hex}</span>
        </div>

        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="p-3 bg-black/50 backdrop-blur-xl rounded-2xl scale-90 group-hover:scale-100 transition-all border border-white/20">
            {copied ? <Check size={18} className="text-[#F5A51D]" /> : <Copy size={18} className="text-white" />}
          </button>
        </div>
      </div>
      <div className="px-4 py-6 flex flex-col gap-1">
        <h4 className="text-[#FBFBFB] font-bold text-xl tracking-tight">{name}</h4>
        <div className="flex items-center gap-2">
          <span className="brand-swatch-role text-[10px] tracking-widest">{role}</span>
          {copied && <span className="text-[10px] text-[#F5A51D] font-bold uppercase">Copied!</span>}
        </div>
        <p className="brand-swatch-detail text-sm mt-4 text-[#FBFBFB] leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}

// ─── Logo Variant Card ────────────────────────────────────────────────────────
function LogoCard({ src, label, dark = false, isHorizontal = false }: { src: string; label: string; dark?: boolean; isHorizontal?: boolean }) {
  return (
    <div className="brand-asset-card flex flex-col">
      <div className={cn(
        "flex-1 flex items-center justify-center p-12 min-h-[260px] relative overflow-hidden bg-[#1B1B1E]"
      )}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FBFBFB 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <Image
          src={src}
          alt={label}
          width={isHorizontal ? 360 : 140}
          height={140}
          className="object-contain relative z-10"
        />
      </div>
      <div className="p-8 border-t border-[#262626] flex items-center justify-between bg-[#1B1B1E]">
        <div>
          <span className="brand-asset-label text-[10px] block mb-1">Asset Variation</span>
          <p className="text-[#FBFBFB] font-bold text-lg">{label}</p>
        </div>
        <a href={src} download className="p-4 bg-[#262626] rounded-2xl text-[#FBFBFB] hover:bg-[#F5A51D] hover:text-[#151419] transition-all">
          <Download size={22} />
        </a>
      </div>
    </div>
  );
}

// ─── Typography Sample ────────────────────────────────────────────────────────
function TypeSample({
  familyClass,
  fontName,
  label,
  weights,
  category,
}: {
  familyClass: string;
  fontName?: string;
  label: string;
  weights: { weight: number | string; name: string }[];
  category: 'heading' | 'body';
}) {
  return (
    <div className="brand-type-board group">
      {/* Background Blueprint Grid */}
      <div className="brand-type-blueprint" />

      {/* Background Glyph Backdrop */}
      <div className={cn("brand-glyph-backdrop", familyClass === 'brand-type-family--heading' ? 'font-syne' : 'font-sans')}>
        Aa
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
        {/* Left Specification Column */}
        <div className="w-full md:w-72 flex-shrink-0 flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-[1px] bg-[var(--accent-brand)]" />
              <span className="brand-type-label !mb-0">{label} Family</span>
            </div>

            <h3 className={cn('text-4xl font-extrabold text-[#FBFBFB] tracking-tight mb-2', familyClass)}>
              {fontName || familyClass.replace('brand-type-family--', '')}
            </h3>

            <p className="text-sm text-[#878787] mt-6 leading-relaxed max-w-[240px]">
              Institutional standard for {category === 'heading' ? 'high-impact statements and brand headings' : 'reading experiences, interface logic, and metadata'}.
            </p>
          </div>

          <div className="brand-type-spec-list">
            <div className="brand-type-spec-item">
              <span className="brand-type-spec-label">Range</span>
              <span className="brand-type-spec-value">{weights[weights.length - 1].weight} — {weights[0].weight}</span>
            </div>
            <div className="brand-type-spec-item">
              <span className="brand-type-spec-label">Role</span>
              <span className="brand-type-spec-value uppercase">{category}</span>
            </div>
          </div>
        </div>

        {/* Right Preview Column */}
        <div className="flex-1 w-full flex flex-col gap-12 py-4">
          {weights.map(({ weight, name }, idx) => (
            <div key={name} className="flex flex-col gap-5 group/weight relative">
              {/* Metric Line (Baseline) */}
              <div className="brand-metric-baseline bottom-0 scale-x-0 group-hover/weight:scale-x-100 transition-transform origin-left duration-700" />

              <div className="flex items-center justify-between">
                <span className={cn(
                  "brand-type-weight-name text-[9px] uppercase tracking-[0.4em] transition-colors",
                  idx === 0 ? "text-[var(--accent-brand)]" : "text-[#878787] group-hover/weight:text-[#FBFBFB]"
                )}>
                  {name}
                </span>
                <span className="text-[10px] font-mono text-[#262626] group-hover/weight:text-[#878787] transition-colors">
                  WGT: {weight}
                </span>
              </div>

              <p
                className={cn(
                  "text-4xl md:text-6xl tracking-tighter text-[#FBFBFB] leading-[0.85] transition-all duration-300",
                  category === 'heading' ? 'font-syne' : 'font-sans',
                  "group-hover/weight:pl-2"
                )}
                style={{
                  fontWeight: weight,
                  opacity: weight === 800 ? 1 : weight === 700 ? 0.9 : 0.8
                }}
              >
                Ethereum Community
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ label, title }: { label: string; title: React.ReactNode }) {
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
    <main className="brand-page">

      {/* ── Hero — "proplay" inner-page style ────────────────── */}
      <section className="page-hero">
        <div className="brand-hero-2col">
          <div className="flex flex-col items-start text-left">
            <div className="page-hero-tag animate-fade-in flex items-center gap-4">
              <span className="w-12 h-px bg-[#F5A51D]" /> Brand Guidelines
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#FBFBFB] mb-8 animate-fade-up leading-[0.9]">
              Built for <br />
              <span className="text-[#F5A51D] italic font-syne font-medium">Coordination.</span>
            </h1>
            <p className="text-xl text-[#FBFBFB] font-medium leading-relaxed mb-4 max-w-xl animate-fade-up delay-1">
              The ECH Institute brand system engineered for institutional trust,
              visual clarity, and technical excellence across the Ethereum ecosystem.
            </p>
            <div className="flex flex-wrap gap-5 animate-fade-up delay-2 ">
              <a href="/icon_pack.zip" download className="flex items-center gap-3 bg-[#F5A51D] text-[#151419] font-extrabold px-10 py-5 rounded-2xl transition-all transform hover:scale-105 active:scale-95">
                <Download size={24} /> Download Assets
              </a>
              <Link href="mailto:team@ethcatherders.com" className="flex items-center gap-3 bg-[#1B1B1E] border border-[#262626] text-[#FBFBFB] font-extrabold px-10 py-5 rounded-2xl transition-all transform hover:scale-105 active:scale-95">
                <ExternalLink size={24} /> Contact Us
              </Link>
            </div>
          </div>

          <div className="brand-hero-image-wrap relative flex justify-center items-center animate-fade-in py-10 lg:py-0">
            <div className="relative group">
              <Image
                src="/assets/logo/Cat with Laptop.svg"
                alt="ECH Institute Cat"
                width={900}
                height={900}
                className="relative z-10 w-full max-w-[900px] h-auto drop-shadow-2xl object-contain transform md:scale-[1.35] lg:scale-[1.4] origin-right"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Layout with Sticky Sidebar ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex gap-12 items-start">

        {/* Sticky Left Nav */}
        <StickySideNav
          sections={NAV_SECTIONS}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />

        {/* Content Area */}
        <div className="flex-1 min-w-0 flex flex-col gap-20">

          <section id="logo" className="scroll-mt-28">
            <SectionHeader label="01 — Identity" title={<>Logo <em>Marks</em></>} />
            <p className="global-body-lg mb-10 max-w-2xl text-[#FBFBFB]">
              Our identity is built around the ECH mark. Use these approved variations
              to ensure institutional consistency across all media.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <LogoCard src="/assets/logo/ECH Institute Logo - Black.png" label="Primary Logo (Dark)" />
              <LogoCard src="/assets/logo/ECH Institute Logo - White.png" label="Inverted Logo (Light)" dark />
              <LogoCard src="/assets/logo/ECH Ins Logo.png" label="Landscape Mark" isHorizontal />
            </div>
          </section>

          <div className="brand-divider" />

          <section id="color" className="scroll-mt-28">
            <SectionHeader label="02 — Color Palette" title={<>Institutional <em>Spectrum</em></>} />
            <p className="global-body-lg mb-12 max-w-3xl text-[#FBFBFB]">
              Consistent use of color is vital to the ECH brand. Our palette is built on a
              foundation of depth, institutional trust, and high-contrast accessibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BRAND_PALETTE.map((color) => (
                <ColorSwatch key={color.swatchClass} {...color} />
              ))}
            </div>

            <div className="bg-[#1B1B1E] border border-[#262626] rounded-3xl p-10 mt-12">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
                <div>
                  <h3 className="brand-subsection-title text-[#F5A51D]">Usage Balance</h3>
                  <p className="text-[#FBFBFB] text-sm max-w-md">Our color system is built on spacious neutrals with disciplined use of accents.</p>
                </div>
                <div className="flex gap-1">
                  <span className="text-2xl font-black text-[#FBFBFB]">100</span>
                  <span className="text-[10px] font-bold text-[#FBFBFB] uppercase pb-1">Total %</span>
                </div>
              </div>

              <div className="brand-proportion-bar h-16 rounded-2xl">
                <div className="brand-proportion-segment--light" style={{ flex: 60 }} />
                <div className="brand-proportion-segment--dark" style={{ flex: 30 }} />
                <div className="brand-proportion-segment--accent" style={{ flex: 10 }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 border-t border-[#262626] pt-10">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black text-[#FBFBFB] uppercase tracking-widest">Base Canvas — 60%</span>
                  <p className="text-[#FBFBFB] text-sm font-medium">Primarily Light Neutral (#FBFBFB) for clear, readable documentation.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black text-[#FBFBFB] uppercase tracking-widest">Structural — 30%</span>
                  <p className="text-[#FBFBFB] text-sm font-medium">Dark Ink and Deep Surface for institutional gravity and navigation.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black text-[#FBFBFB] uppercase tracking-widest">Emphasis — 10%</span>
                  <p className="text-[#F5A51D] text-sm font-bold uppercase italic">Reserve Accent Yellow for key actions and focus points.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 mt-20">
              <div className="flex flex-col gap-4">
                <h3 className="brand-subsection-title">Institutional Theme Strategy</h3>
                <p className="text-[#FBFBFB] text-sm max-w-2xl">We maintain a single institutional pallet that adapts role responsibility between Light and Dark canvases.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {THEME_APPLICATIONS.map(({ title, description, chips }) => (
                  <div key={title} className="theme-strategy-board flex flex-col gap-8 transition-all hover:border-[#F5A51D]/30">
                    <div className="flex items-center justify-between border-b border-[#262626] pb-6">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-4 h-4 rounded-full shadow-[0_0_15px_rgba(245,165,29,0.3)]", title === 'Light Theme' ? "bg-[#FBFBFB]" : "bg-[#151419] border border-[#262626]")} />
                        <h4 className="text-[#FBFBFB] font-bold uppercase tracking-[0.2em] text-xs">{title} Role</h4>
                      </div>
                      <span className="text-[10px] font-mono text-[#FBFBFB]">STRATEGY // 0{title === 'Light Theme' ? '1' : '2'}</span>
                    </div>

                    <p className="text-[#FBFBFB] text-sm leading-relaxed font-medium min-h-[60px]">{description}</p>

                    <div className="grid grid-cols-1 gap-2">
                      {chips.map(({ label }) => (
                        <div key={label} className="bg-[#151419] border border-[#262626] px-5 py-4 rounded-xl flex items-center justify-between group/chip hover:border-[#F5A51D]/50 transition-colors">
                          <span className="text-[10px] text-[#FBFBFB] font-black uppercase tracking-widest group-hover/chip:text-[#FBFBFB] transition-colors">{label.split(' ')[0]}</span>
                          <span className="text-xs font-mono text-[#F5A51D] font-bold">{label.split(' ')[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="brand-divider" />

          <section id="typography" className="scroll-mt-28">
            <SectionHeader label="03 — Typography" title={<>Institutional <em>Typefaces</em></>} />
            <p className="global-body-lg mb-10 max-w-2xl">
              Our typography reflects a balance between technical precision and
              human coordination. We use <strong>Syne</strong> for high-impact statements and
              <strong> DM Sans</strong> for all supporting communication.
            </p>

            <div className="flex flex-col gap-10">
              <TypeSample
                familyClass="brand-type-family--heading"
                fontName="Syne"
                label="Primary Header"
                category="heading"
                weights={[
                  { weight: 800, name: 'ExtraBold 800' },
                  { weight: 700, name: 'Bold 700' },
                  { weight: 600, name: 'SemiBold 600' },
                ]}
              />

              <TypeSample
                familyClass="brand-type-family--body"
                fontName="DM Sans"
                label="Supporting Body"
                category="body"
                weights={[
                  { weight: 700, name: 'Bold 700' },
                  { weight: 500, name: 'Medium 500' },
                  { weight: 400, name: 'Regular 400' },
                ]}
              />
            </div>

            <div className="mt-16 bg-[#151419] border border-[#262626] rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Construction Lines Decorative Overlay */}
              <div className="absolute top-0 bottom-0 left-[16.66%] w-[1px] bg-[#262626] pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-[41.66%] w-[1px] bg-[#262626] pointer-events-none" />

              <div className="grid grid-cols-12 gap-0 border-b border-[#262626] bg-black/40 relative z-10">
                <div className="col-span-2 p-6 text-[10px] font-mono text-[#878787] uppercase tracking-widest border-r border-[#262626]">Tag</div>
                <div className="col-span-3 p-6 text-[10px] font-mono text-[#878787] uppercase tracking-widest border-r border-[#262626]">Metric Details</div>
                <div className="col-span-7 p-6 text-[10px] font-mono text-[#878787] uppercase tracking-widest">Visual Specification</div>
              </div>

              {[
                { label: 'Display Large', size: '72/64px', tracking: '-0.04em', sample: 'Main Identity', className: 'text-[3.5rem] font-syne font-extrabold' },
                { label: 'H1 / Header', size: '48/44px', tracking: '-0.02em', sample: 'Educational Programs', className: 'text-[2.2rem] font-syne font-bold' },
                { label: 'H2 / Regular', size: '36/32px', tracking: '-0.01em', sample: 'Institutional Overview', className: 'text-[1.8rem] font-syne font-bold' },
                { label: 'Body Copy', size: '18/28px', tracking: '0.01em', sample: "Ethereum community homesteading since 2019.", className: 'text-[1.125rem] font-sans font-normal' },
                { label: 'Metadata', size: '12/16px', tracking: '0.05em', sample: "VERSION 4.2 // BUILD ID: ECH-2026", className: 'text-[0.75rem] font-mono font-bold uppercase tracking-widest' },
              ].map(({ label, size, tracking, sample, className }) => (
                <div key={label} className="grid grid-cols-12 gap-0 border-b border-[#262626] last:border-0 group hover:bg-[#1B1B1E] transition-colors relative z-10">
                  <div className="col-span-2 p-8 border-r border-[#262626] flex items-center">
                    <span className="text-sm font-mono text-[var(--accent-brand)] font-bold">{label.split(' ')[0]}</span>
                  </div>
                  <div className="col-span-3 p-8 border-r border-[#262626] flex flex-col justify-center gap-1">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[#878787]">SIZE/LH</span>
                      <span className="text-[#FBFBFB] font-mono font-bold">{size}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[#878787]">TRACKING</span>
                      <span className="text-[#FBFBFB] font-mono font-bold">{tracking}</span>
                    </div>
                  </div>
                  <div className="col-span-7 p-8 flex items-center overflow-hidden">
                    <p className={cn('whitespace-nowrap transition-transform group-hover:translate-x-1 duration-500 text-[#FBFBFB]', className)}>
                      {sample}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="brand-divider" />

          {/* 04 — Assets */}
          <section id="assets" className="scroll-mt-28">
            <SectionHeader label="04 — Assets" title={<>Icons &amp; <em>Marks</em></>} />
            <p className="global-body-lg mb-8 max-w-2xl">
              Supporting assets include the cat mascot, paw marks, and partner logos.
            </p>

            <h3 className="brand-subsection-title">Cat Mascots</h3>
            <div className="brand-asset-grid">
              {[
                { src: '/assets/logo/cat5.png', label: 'Cat Hero' },
                { src: '/assets/logo/cat_head.png', label: 'Cat Head' },
                { src: '/assets/logo/cat_laptop.png', label: 'Cat Laptop' },
                { src: '/assets/logo/cat_peek.png', label: 'Cat Peek' },
                { src: '/assets/logo/Cat with Laptop.svg', label: 'catty Laptop' },
              ].map(({ src, label }) => (
                <div key={label} className="brand-asset-card">
                  <div className="brand-asset-preview">
                    <Image
                      src={src}
                      alt={label}
                      width={120}
                      height={120}
                      className="brand-asset-image object-contain w-full h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-4 py-3">
                    <p className="brand-asset-label brand-asset-label-reset">{label}</p>
                    <a href={src} download className="text-black hover:text-black transition-colors" title={`Download ${label}`}>
                      <Download size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="brand-subsection-title mt-12">Secondary Marks & Elements</h3>
            <div className="brand-asset-grid">
              {[
                { src: '/assets/logo/about_no_pic.png', label: 'Cat Icon' },
                { src: '/assets/logo/cat_white.png', label: 'Cat White' },
                { src: '/assets/logo/icon-paw.png', label: 'Paw Icon' },
                { src: '/assets/logo/paw_yarn.png', label: 'Paw & Yarn' },
                { src: '/assets/logo/paw2.png', label: 'Paw Print 2' },
                { src: '/assets/logo/paw3.png', label: 'Paw Print 3' },
                { src: '/assets/logo/paw4.png', label: 'Paw Print 4' },
                { src: '/assets/logo/paws.png', label: 'Paws Group' },
                { src: '/assets/logo/retro_tv.png', label: 'Retro TV' },
                { src: '/assets/logo/yarn.png', label: 'Yarn Ball' },
              ].map(({ src, label }) => (
                <div key={label} className="brand-asset-card">
                  <div className="brand-asset-preview">
                    <Image src={src} alt={label} width={100} height={100} className="brand-asset-image-sm object-contain" />
                  </div>
                  <div className="flex items-center justify-between w-full px-4 py-3">
                    <p className="brand-asset-label brand-asset-label-reset">{label}</p>
                    <a href={src} download className="text-black hover:text-black transition-colors" title={`Download ${label}`}>
                      <Download size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </section>

          <div className="brand-divider" />

          <section id="ui" className="scroll-mt-28">
            <SectionHeader label="05 — UI Components" title={<>Buttons &amp; <em>Badges</em></>} />
            <p className="global-body-lg mb-10 max-w-2xl text-[var(--text-secondary)]">
              Our UI elements enforce brand consistency through semi-rounded surfaces,
              disciplined accent placement, and industrial-grade metrics that adapt to both light and dark themes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Proplay Button Strategy Board */}
              <div className="bg-[var(--surface-card)] border border-[var(--border-soft)] rounded-3xl p-10 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="w-16 h-16 border-r border-t border-[var(--text-primary)]" />
                </div>

                <span className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.3em] border-b border-[var(--border-soft)] pb-6 mb-8">Button Mechanics</span>
                <div className="flex flex-col gap-12">
                  <div className="flex flex-col gap-4">
                    <button className="global-btn global-btn-primary w-full md:w-auto shadow-xl shadow-[var(--accent-brand)]/10">
                      Primary Institutional CTA
                    </button>
                    <span className="text-[9px] font-mono text-[var(--text-secondary)] uppercase">Weight: 900 // Rounding: 16px // Accent: var(--accent-brand)</span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button className="global-btn global-btn-outline w-full md:w-auto">
                      Secondary Support
                    </button>
                    <span className="text-[9px] font-mono text-[var(--text-secondary)] uppercase">Stroke: 2px // Role: Passive / Navigation</span>
                  </div>
                </div>
              </div>

              {/* Proplay Badge Strategy Board */}
              <div className="bg-[var(--surface-card)] border border-[var(--border-soft)] rounded-3xl p-10 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="w-16 h-16 border-r border-t border-[var(--text-primary)]" />
                </div>

                <span className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.3em] border-b border-[var(--border-soft)] pb-6 mb-8">Metadata Badges</span>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-wrap gap-4">
                    <span className="proplay-badge proplay-badge-primary">Public Good</span>
                    <span className="proplay-badge proplay-badge-outline">Education</span>
                    <span className="proplay-badge proplay-badge-muted">Coordination</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-4">
                    Badges use fully rounded containers and high-contrast color shifts to categorize institutional initiatives within the Proplay framework.
                  </p>
                </div>
              </div>
            </div>
          </section>



        </div>
      </div>

      <div className="brand-divider" />

      <section className="brand-section bg-[#151419] py-24 lg:py-48 border-t border-[#262626] relative overflow-hidden">
        {/* Massive geometric background mark removed as requested */}

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="bg-[#1B1B1E] border-2 border-[#262626] rounded-[60px] p-12 md:p-32 overflow-hidden group transition-all hover:border-[#F5A51D]/20">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5A51D]/[0.02] to-transparent pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
              <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
                <div className="relative w-full h-full bg-[#F5A51D] rounded-[40px] p-8 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-700">
                  <Image src="/assets/logo/cat5.png" alt="ECH Cat" width={280} height={280} className="object-contain" />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left relative z-10">
                <div className="flex flex-col gap-8">
                  <div className="hidden md:flex items-center gap-4 animate-fade-in">
                    <span className="w-12 h-px bg-[#F5A51D]" />
                    <span className="text-[12px] font-black text-[#F5A51D] uppercase tracking-[0.4em]">Resource Expansion</span>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black tracking-tight text-[#FBFBFB] leading-[0.9]">
                    Ready to <br />
                    <span className="text-[#F5A51D] italic font-syne">Coordinate?</span>
                  </h2>
                  <p className="text-[#FBFBFB] text-xl md:text-2xl font-medium max-w-2xl leading-relaxed mt-4">
                    Access our high-fidelity asset library and join hundreds of Ethereum contributors building with the ECH brand system.
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10">
                    <a href="/ech_institute_logos.zip" download className="global-btn global-btn-primary px-12 py-7 transition-all group/btn">
                      <Download size={28} strokeWidth={3} className="group-hover/btn:animate-bounce mr-4" />
                      <span className="text-xl">Download Institutional Kit</span>
                    </a>
                    <a href="mailto:team@ethcatherders.com" className="global-btn global-btn-outline px-12 py-7">
                      <ExternalLink size={28} strokeWidth={3} className="mr-4" />
                      <span className="text-xl">Technical Support</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}



