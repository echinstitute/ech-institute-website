'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES, EXTERNAL_LINKS } from '@/config/routes';
import {
  Users, CheckCircle2, Building2, Target, Heart, Sparkles,
  Video, Shield, Globe, Eye, Compass
} from 'lucide-react';

const BOARD_MEMBERS = [
  {
    id: '1',
    name: 'Pooja Ranjan',
    position: 'President',
    image: '/assets/profiles Images/Pooja Ranjan.png',
    bio: 'Leads ECH Institute coordination and hosts PEEPanEIP. Focuses on EIP education and community consensus.',
  },
  {
    id: '2',
    name: 'George Hervey',
    position: 'Vice President',
    image: '/assets/profiles Images/George Hervey.png',
    bio: 'Board member supporting ECH Institute governance and ecosystem coordination.',
  },
  {
    id: '3',
    name: 'Hudson Jameson',
    position: 'Treasurer',
    image: '/assets/profiles Images/Hudson Jameson.jpg',
    bio: 'Veteran Ethereum contributor. Supports protocol governance and institutional transparency.',
  },
  {
    id: '4',
    name: 'Meenakshi Singh',
    position: 'Secretary',
    image: '/assets/profiles Images/Meenakshi Singh.jpg',
    bio: 'Board member contributing to ECH Institute strategy and community initiatives.',
  },
];

const PEOPLE_CARDS = [
  { icon: Sparkles, title: 'Core Contributors', desc: 'Manage major initiatives and the EIP process.' },
  { icon: Users, title: 'Community Coordinators', desc: 'Organize meetings and ensure documentation is archived in the ethereum/pm repository.' },
  { icon: Target, title: 'Technical Writers', desc: 'Create documentation and translate complex technical protocol information into accessible resources.' },
  { icon: Video, title: 'Multimedia Producers', desc: 'Responsible for recording, editing, and livestreaming educational content and animated shorts.' },
  { icon: Heart, title: 'Outreach Specialists', desc: 'Engage with the community and manage partnerships for events like Devcon and EthDenver.' },
];

const OPERATIONS = [
  { title: 'Educational Content Production', desc: 'Producing technical content via PEEPanEIP, animated shorts, and Learn2earn to expand community knowledge.' },
  { title: 'Technical Onboarding (WiEP)', desc: 'Facilitating the Women in Ethereum Protocol study groups to onboard and train underrepresented developers.' },
  { title: 'EIP Coordination', desc: 'Managing the lifecycle of Ethereum Improvement Proposals from initial drafts to finalization.' },
  { title: 'Network Upgrade Communication', desc: 'Facilitating pre- and post-deployment communication for successful hard forks such as Pectra and Fusaka.' },
  { title: 'Community Consensus Gathering', desc: 'Building consensus across a decentralized community on critical protocol decisions through meetings and forums.' },
  { title: 'Information Dissemination', desc: 'Sharing technical updates on governance and protocol changes, including hosting and documenting All Core Devs meetings.' },
  { title: 'Community Funding & Public Goods', desc: 'Managing funding initiatives and promoting open-source tooling through the Ecosystem Project Demo series.' },
  { title: 'Decentralized Project Management', desc: 'Providing the coordination layer for diverse Ethereum ecosystem initiatives the "operating system" for organizational tasks.' },
];

export default function AboutPage() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e: Event) {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)] pt-16 lg:pt-24">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-inner !max-w-7xl">

          {/* Left — text */}
          <div>
            <div className="page-hero-tag">
              <span className="page-hero-dot" />
              501(c)(3) Nonprofit · Est. 2024
            </div>
            <h1 className="page-hero-title">
              About <em>ECH</em><br />Institute
            </h1>
            <p className="page-hero-desc">
              ECH Institute Inc. is a 501(c)(3) non-profit organization that transitioned to a
              formalized institutional steward on July 11, 2024 supporting the Ethereum ecosystem
              through decentralized project management, coordination, and technical education as a
              neutral public good.
            </p>
            <div className="page-hero-actions mt-4">
              <Link href="/support#donate" className="global-btn global-btn-primary">Support Our Mission</Link>
              <a href="#mission" className="global-btn global-btn-outline">Our Mission</a>
            </div>
          </div>

          {/* Right — Radar / sphere animation */}
          <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center">
            {/* Background rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[180px] h-[180px] border border-[var(--border-soft)] rounded-full opacity-20 animate-[ping_4s_linear_infinite]" />
              <div className="absolute w-[300px] h-[300px] border border-[var(--border-soft)] rounded-full opacity-10 animate-[ping_6s_linear_infinite]" />
              <div className="absolute w-full h-[1px] bg-[var(--border-soft)] opacity-10" />
              <div className="absolute h-full w-[1px] bg-[var(--border-soft)] opacity-10" />
            </div>
            {/* Centre dot */}
            <div className="absolute z-10 h-3 w-3 rounded-full bg-[var(--accent-brand)] opacity-40" />
            {/* Spheres */}
            <div className="absolute inset-0">
              {([
                { icon: Sparkles, title: 'Coordination', desc: 'Managing major initiatives and EIP processes.', pos: 'top-[8%] left-1/2 -translate-x-1/2' },
                { icon: Users,    title: 'Community',    desc: 'Ensuring documentation and meeting coordination.', pos: 'top-1/2 right-[8%] -translate-y-1/2' },
                { icon: Target,   title: 'Education',    desc: 'Creating technical resources and documentation.', pos: 'bottom-[8%] left-1/2 -translate-x-1/2' },
                { icon: Heart,    title: 'Outreach',     desc: 'Engaging with the global community and partners.', pos: 'top-1/2 left-[8%] -translate-y-1/2' },
              ] as const).map(({ icon: Icon, title, desc, pos }, idx) => (
                <div key={title} className={`absolute ${pos} group/sphere z-20`}>
                  <div className="relative flex flex-col items-center">
                    <div className="relative proplay-icon-container h-16 w-16 rounded-full border-2 border-[var(--border-soft)] shadow-xl group-hover/sphere:border-[var(--accent-brand)] group-hover/sphere:scale-110 transition-all duration-500 cursor-pointer">
                      <Icon className="h-8 w-8 transition-colors" />
                      <span className="absolute inset-0 rounded-full border border-[var(--accent-brand)] opacity-0 group-hover/sphere:opacity-60 group-hover/sphere:animate-ping pointer-events-none" />
                    </div>
                    <div className="mt-2 px-3 py-1 rounded-full border border-[var(--border-soft)] bg-[var(--background)] whitespace-nowrap">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">{String(idx + 1).padStart(2,'0')} {title}</span>
                    </div>
                    <div
                      className="absolute top-0 left-[calc(100%+1rem)] w-52 bg-[var(--background)] border border-[var(--accent-brand)] rounded-2xl p-4 shadow-2xl
                                 pointer-events-none opacity-0 -translate-x-2 transition-all duration-300
                                 group-hover/sphere:opacity-100 group-hover/sphere:translate-x-0 z-[100]"
                    >
                      <div className="absolute top-5 -left-[9px] w-4 h-4 bg-[var(--background)] border-l border-b border-[var(--accent-brand)] rotate-45" />
                      <p className="text-[10px] font-black uppercase tracking-widest text-[var(--accent-brand)] mb-2">Our Focus</p>
                      <p className="text-[12px] text-[var(--text-base)] font-medium leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── WHO WE ARE ────────────────────────────────────────── */}
      <section id="who-we-are" className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-[var(--background)] border-t border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[28%_72%] gap-8 lg:gap-12 items-center">
            {/* Image Column - Compact & Left-Aligned */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group max-w-[220px] lg:max-w-full">
                <div className="absolute -inset-4 bg-[var(--accent-brand)] opacity-[0.02] rounded-full blur-3xl group-hover:opacity-[0.05] transition-opacity duration-500" />
                <Image
                  src="/assets/logo/ECH Institute Logo - White.png"
                  alt="ECH Institute Logo"
                  width={280}
                  height={280}
                  className="relative w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Text Column - Maximized Width */}
            <div className="w-full">
              <div className="global-section-tag">Our Foundation</div>
              <h2 className="global-section-title mb-4">Who <em>We Are</em></h2>
              <div className="space-y-4 global-body-lg">
                <p className="leading-relaxed">
                  The evolution of decentralized protocol governance has necessitated structured, neutral entities capable of bridging core technical research and community-wide implementation. Since our beginnings in January 2024, we have helped coordinate EIPs for network upgrades, pre- and post-deployment communication for successful hard forks, community consensus gathering, community funding, and related coordination tasks.
                </p>
                <p className="leading-relaxed">
                  ECH Institute is uniquely positioned at the intersection of <strong>People, Process, and Protocol.</strong> It operates to support Ethereum&apos;s governance participation and protocol-coordination infrastructure. As a neutral public good, it ensures the protocol remains accessible and decentralized as it scales.
                </p>
              </div>
              
              {/* Stats - Compact & Theme-Aligned */}
              <div className="mt-6 hidden md:grid grid-cols-3 gap-3">
                {[
                  { label: 'Since', value: '2024' },
                  { label: 'Status', value: '501(c)(3)' },
                  { label: 'Network', value: 'Ethereum' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl border border-[var(--border-soft)] bg-[var(--surface-card-theme)] hover:border-[var(--accent-brand)] transition-all duration-300">
                    <div className="text-base sm:text-lg font-extrabold font-syne text-[var(--accent-brand)] leading-none">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-soft)] mt-1.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOARD MEMBERS ─────────────────────────────────────── */}
      <section id="board" className="proplay-section bg-[var(--background)] border-t border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="global-section-tag justify-center">Leadership</div>
            <h2 className="global-section-title">ECH Institute <em>Board</em></h2>
            <p className="global-body-lg mt-4 max-w-2xl mx-auto">Meet the dedicated individuals steering ECH Institute&apos;s mission of open, transparent Ethereum governance.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOARD_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-[var(--surface-card-theme)] rounded-2xl border border-[var(--border-soft)] overflow-hidden hover:border-[var(--accent-brand)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden bg-neutral-900">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700 z-0"
                    priority={member.id === '1'}
                  />
                  {/* Subtle Shadow Overlay - Bypasses global bg-gradient overrides */}
                  <div 
                    className="absolute inset-0 z-10 pointer-events-none" 
                    style={{ 
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)' 
                    }} 
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-[var(--accent-brand)] text-[var(--theme-on-accent)] shadow-lg">
                      {member.position}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-extrabold text-lg font-syne text-[var(--text-base)] mb-2 group-hover:text-[var(--accent-brand)] transition-colors">{member.name}</h3>
                  <p className="text-sm text-[var(--text-soft)] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── MISSION & VISION ──────────────────────────────────── */}
      <section id="mission" className="proplay-section bg-[var(--background)] border-t border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="global-section-tag justify-center">Purpose & Direction</div>
            <h2 className="global-section-title">Mission <em>&amp; Vision</em></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="relative bg-[var(--surface-card-theme)] rounded-3xl border border-[var(--border-soft)] p-10 lg:p-12 overflow-hidden hover:border-[var(--accent-brand)] hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-brand)] rounded-t-3xl" />
              <div className="proplay-icon-container h-14 w-14 rounded-2xl mb-8">
                <Compass className="h-7 w-7" />
              </div>
              <div className="global-section-tag mb-3">Our Mission</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-syne text-[var(--text-base)] leading-tight mb-6">
                Ethereum governance,<br /><em className="not-italic text-[var(--accent-brand)]">open for everyone.</em>
              </h3>
              <p className="global-body-lg text-[var(--text-soft)] leading-relaxed">
                ECH Institute supports Ethereum&apos;s protocol governance and coordination as a neutral public good. By strengthening processes, participation, and shared understanding, we help Ethereum scale responsibly, transparently, and sustainably as global public infrastructure.
              </p>
              <div className="mt-8 pt-6 border-t border-[var(--border-soft)] flex flex-col gap-3">
                {['Neutral & independent', 'Transparent by design', 'Community-first approach'].map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--accent-brand)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--text-base)]">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative bg-[var(--surface-card-theme)] rounded-3xl border border-[var(--border-soft)] p-10 lg:p-12 overflow-hidden hover:border-[var(--accent-brand)] hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-brand)] rounded-t-3xl" />
              <div className="proplay-icon-container h-14 w-14 rounded-2xl mb-8">
                <Eye className="h-7 w-7" />
              </div>
              <div className="global-section-tag mb-3">Our Vision</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-syne text-[var(--text-base)] leading-tight mb-6">
                A world where protocol<br /><em className="not-italic text-[var(--accent-brand)]">belongs to all.</em>
              </h3>
              <p className="global-body-lg text-[var(--text-soft)] leading-relaxed">
                We envision a future where Ethereum&apos;s governance is truly decentralized where anyone, regardless of background, can meaningfully participate in shaping the protocol. ECH Institute works to make that participation accessible, informed, and impactful for every community member worldwide.
              </p>
              <div className="mt-8 pt-6 border-t border-[var(--border-soft)] flex flex-col gap-3">
                {['Inclusive participation', 'Global accessibility', 'Long-term sustainability'].map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--accent-brand)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--text-base)]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── WHAT WE DO ────────────────────────────────────────── */}
      <section id="what-we-do" className="proplay-section bg-[var(--background)] border-t border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="global-section-tag">Operational Mandate</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <h2 className="global-section-title">Core <em>Operations</em></h2>
            <p className="global-body-lg max-w-md text-[var(--text-soft)]">Our programs span education, coordination, and community building across Ethereum&apos;s ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {OPERATIONS.map((item, i) => (
              <div 
                key={item.title} 
                className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-card-theme)] hover:border-[var(--accent-brand)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="proplay-icon-container h-14 w-14 rounded-2xl shrink-0 flex items-center justify-center text-xl font-black shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-extrabold text-xl lg:text-2xl font-syne text-[var(--accent-brand)] mb-3 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-[var(--text-soft)] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DON'T DO ──────────────────────────────────── */}
      <section id="what-we-dont-do" className="proplay-section-dense bg-[var(--background)] border-t border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--surface-card-theme)] rounded-3xl border border-[var(--border-soft)] p-8 lg:p-12">
            <div className="global-section-tag">Operational Boundaries</div>
            <h2 className="global-section-title mb-8">What We <em>Don&apos;t Do</em></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'No Protocol Authority', desc: 'We do not make protocol decisions or control Ethereum development; authority remains with the broader community of developers and researchers.' },
                { icon: Globe, title: 'Neutral Positioning', desc: 'We do not act as a central authority or endorse specific commercial projects, tokens, or entities.' },
                { icon: Building2, title: 'Non-Ownership', desc: 'We facilitate coordination but do not own or control any part of the Ethereum protocol.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-4 p-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--background)]">
                  <div className="proplay-icon-container h-12 w-12 rounded-xl">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg font-syne text-[var(--text-base)]">{title}</h3>
                  <p className="text-sm text-[var(--text-soft)] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PEOPLE ────────────────────────────────────────────── */}
      <section id="people" className="proplay-section bg-[var(--background)] border-t border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="global-section-tag">Our Community</div>
          <h2 className="global-section-title mb-4">People Behind <em>ECH Institute</em></h2>
          <p className="global-body-lg mb-12 max-w-2xl text-[var(--text-soft)]">ECH Institute is powered by a diverse group of dedicated individuals who contribute their time, expertise, and passion to support the Ethereum ecosystem.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {PEOPLE_CARDS.map((item) => (
              <div 
                key={item.title} 
                className="bg-[var(--surface-card-theme)] rounded-3xl border border-[var(--border-soft)] p-8 flex flex-col items-center text-center hover:border-[var(--accent-brand)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-full"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-brand)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="proplay-icon-container h-14 w-14 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-extrabold text-lg font-syne text-[var(--accent-brand)] mb-3 leading-tight uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-[var(--text-soft)] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Educational Series */}
          <div className="mt-20 pt-16 border-t border-[var(--border-soft)]">
            <div className="global-section-tag">Content & Programs</div>
            <h3 className="global-section-title mb-12">Multimedia & <em>Educational Series</em></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { href: ROUTES.peepaneip, title: 'PEEPanEIP', desc: 'Deep-dive interviews with EIP authors to explain technical changes intended for network upgrades.' },
                { href: ROUTES.fusakaFiles, title: 'The Fusaka Files', desc: 'A limited series documenting the technical transition toward the Fusaka upgrade and its scaling implications.' },
                { href: ROUTES.epd, title: 'EPD', desc: 'Ecosystem Project Demo showcasing public goods, infrastructure tools, and community initiatives.' },
                { href: ROUTES.wiep, title: 'WiEP', desc: 'Study groups and community support for women interested in contributing to Ethereum\'s core protocol.' },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="bg-[var(--surface-card-theme)] rounded-3xl border border-[var(--border-soft)] p-8 hover:border-[var(--accent-brand)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group block relative overflow-hidden h-full"
                >
                  <h4 className="font-extrabold text-xl font-syne text-[var(--accent-brand)] mb-4 leading-tight">{item.title}</h4>
                  <p className="text-sm lg:text-base text-[var(--text-soft)] leading-relaxed font-medium mb-6">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[var(--accent-brand)] group-hover:gap-4 transition-all">
                    Explore Program <span className="text-lg">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 p-8 lg:p-12 rounded-3xl border-2 border-[var(--accent-brand)] bg-[var(--background)] shadow-2xl relative overflow-hidden text-center">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-brand)] opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl font-extrabold font-syne text-[var(--text-base)] mb-4">
              Ready to <em className="not-italic text-[var(--accent-brand)]">contribute?</em>
            </h3>
            <p className="global-body-lg mb-8 max-w-xl mx-auto">
              ECH Institute is the social and organizational &ldquo;operating system&rdquo; for Ethereum. Join us through documentation, content creation, community outreach, and incentivized bounties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={EXTERNAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Join our Discord</Link>
              <Link href={EXTERNAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Follow on X</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
