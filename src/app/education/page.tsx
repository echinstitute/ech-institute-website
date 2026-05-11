'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import {
  Play, FileText, BookOpen,
  ArrowRight, Users, Zap, Award, Globe,
  BookMarked, MessageSquare,
  Calendar, TrendingUp, Shield, Lightbulb, Target, CheckCircle2,
  ChevronDown, Video, GitBranch, AlertCircle,
  Clock, Layers, Network as NetworkIcon, Cpu, Building2, GitPullRequest, GraduationCap
} from 'lucide-react';
import { ROUTES, EXTERNAL_LINKS } from '@/config/routes';
import { cn } from '@/lib/utils';
import { StickySideNav } from '@/components/ui/StickySideNav';

// ─── Sections for sticky nav ─────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'formats', label: 'Content Formats' },
  { id: 'featured', label: 'Featured Guides' },
  { id: 'eip-lifecycle', label: 'EIP Lifecycle' },
  { id: 'timeline', label: 'ECH Timeline' },
  { id: 'next-steps', label: 'Next Steps' },
];

// ─── Content Formats first 3 link to podcast pages ─────────────────────────
const formats = [
  {
    icon: Play,
    title: 'PEEPanEIP',
    subtitle: 'Video Series',
    tag: 'Podcast Page',
    link: ROUTES.peepaneip,
    isInternal: true,
    description: 'In-depth video walkthroughs of Ethereum Improvement Proposals with EIP authors and core contributors.',
    longDescription: 'PEEPanEIP (Peering into EIPs) is a long-running ECH Institute video series that features deep-dive conversations with the actual authors of Ethereum Improvement Proposals. Each episode breaks down a specific EIP its motivation, technical specification, and expected on-chain impact. With 100+ episodes, it covers everything from EIP-1559 (fee market reform) to proto-danksharding and beyond. The series is a primary educational resource for anyone wanting to understand exactly what changes are coming to Ethereum and why.',
    highlights: ['100+ episodes', 'EIP authors featured', 'Technical deep-dives', 'Free to watch'],
  },
  {
    icon: Users,
    title: 'WiEP Classrooms',
    subtitle: 'Women in Ethereum Protocol',
    tag: 'Podcast Page',
    link: ROUTES.wiep,
    isInternal: true,
    description: 'Structured classroom-style learning for onboarding women into Ethereum protocol development.',
    longDescription: 'Women in Ethereum Protocol (WiEP) is a dedicated ECH Institute initiative providing structured classroom sessions, peer mentorship, and study groups for women wanting to contribute at the Ethereum core protocol level. Sessions cover EIPs, client architecture, execution/consensus layers, and governance processes in an accessible, supportive format. WiEP exists to lower barriers and diversify the contributor base of Ethereum\'s most critical infrastructure.',
    highlights: ['Live classroom format', 'Peer mentorship', 'Protocol-level content', 'Open enrollment'],
  },
  {
    icon: Zap,
    title: 'Ecosystem Project Demo',
    subtitle: 'Project Showcases',
    tag: 'Podcast Page',
    link: ROUTES.epd,
    isInternal: true,
    description: 'Live demonstrations showcasing public goods and infrastructure tools building the Ethereum ecosystem.',
    longDescription: 'The Ecosystem Project Demo (EPD) series features live walkthroughs and conversations with teams building Ethereum public goods, developer tooling, Layer 2 infrastructure, and community initiatives. It was created to give visibility to projects that may not get mainstream coverage but are essential to the health of the Ethereum ecosystem. Each episode invites a project team to demonstrate their work and explain how it fits into the broader protocol landscape.',
    highlights: ['Public goods focus', 'Live demos', 'Ecosystem discovery', 'Builder interviews'],
  },
  {
    icon: FileText,
    title: 'Blogs & Articles',
    subtitle: 'Written Content',
    tag: 'Blog',
    link: EXTERNAL_LINKS.blog,
    isInternal: false,
    description: 'Curated technical breakdowns, governance analysis, and upgrade guides by ecosystem experts.',
    longDescription: 'The ECH Institute blog publishes curated technical breakdowns, governance analysis, upgrade communication posts, and original research written by ecosystem experts and contributors. Posts range from beginner-friendly "what is an EIP" explainers to detailed technical analyses of upcoming network upgrades. It serves as the written record of Ethereum\'s governance evolution from ECH Institute\'s neutral perspective.',
    highlights: ['Technical breakdowns', 'Upgrade guides', 'Governance analysis', 'Original research'],
  },
];

// ─── Featured Guides accordion with rich details ────────────────────────────
const featuredGuides = [
  {
    icon: BookMarked,
    title: 'EIP Process Explained',
    tag: 'Core Process',
    link: EXTERNAL_LINKS.blog,
    summary: 'A complete walk-through of the Ethereum Improvement Proposal process from idea to finalization on mainnet.',
    detail: 'Every change to Ethereum starts as an idea discussed informally in forums or Discord. It then becomes a draft EIP following the EIP-1 standard template, goes through an editor review, enters public review under "Last Call," and is finalized as a standard before being included in a network upgrade. ECH Institute\'s PEEPanEIP series covers individual EIPs in depth, and this guide walks through the entire lifecycle with real examples.',
    steps: ['Idea → Community discussion on Ethereum Magicians', 'Draft → Formal EIP document submitted to ethereum/EIPs', 'Review → EIP editors + core dev feedback', 'Last Call → 14-day public comment window', 'Final → Accepted as official standard', 'Deployed → Activated on Ethereum mainnet'],
  },
  {
    icon: TrendingUp,
    title: 'Ethereum Upgrades Guide',
    tag: 'Network Upgrades',
    link: '/events',
    summary: 'Understand the history and mechanics of Ethereum network upgrades, including Pectra, Fusaka, and beyond.',
    detail: 'Ethereum upgrades are coordinated hard forks that activate a set of finalized EIPs simultaneously across all clients. They require months of coordinated testing, client implementation, and community communication. ECH Institute plays a central role in coordinating upgrade communication from ACD calls to post-deployment monitoring. This guide covers how upgrades are named, scheduled, and executed.',
    steps: ['EIPs selected for inclusion in upgrade', 'Client teams implement changes', 'Devnet → Testnet deployment', 'Community testing & bug reporting', 'Mainnet activation block set', 'Post-deployment monitoring & communication'],
  },
  {
    icon: Layers,
    title: 'All Core Devs Meetings',
    tag: 'Governance',
    link: 'https://github.com/ethereum/pm',
    summary: 'Organizing and publishing the biweekly ACD calls, where core developers coordinate Ethereum\'s future.',
    detail: 'ECH Institute takes a lead role in organizing All Core Devs (ACD) calls, which alternate biweekly between Execution (ACDE) and Consensus (ACDC) layers. We manage agendas, facilitate the sessions, and publish comprehensive technical summaries for the ecosystem. These calls are the heartbeat of Ethereum\'s protocol evolution, and ECH ensures they remain transparent and well-documented.',
    steps: ['Organize agenda with client teams', 'Facilitate biweekly technical calls', 'Capture detailed technical decisions', 'Publish all core dev videos publicly', 'Archive notes in ethereum/pm', 'Share executive summaries'],
  },
  {
    icon: NetworkIcon,
    title: 'Protocol Coordination',
    tag: 'ECH Institute',
    link: EXTERNAL_LINKS.blog,
    summary: 'Coordinating weekly EIP meetings and author workshops to drive technical consensus.',
    detail: 'Beyond ACD calls, ECH Institute organizes weekly EIP-focused meetings (EIPIP) and author workshops. These sessions help EIP authors navigate the technical requirements and social coordination needed for protocol inclusion. As a neutral 501(c)(3), ECH serves as the operational layer that allows researchers and developers to focus on engineering while we manage the coordination overhead.',
    steps: ['Weekly EIPIP coordination calls', 'EIP author technical workshops', 'Cross-client consensus facilitation', 'Upgrade communication strategy', 'Maintaining community dev channels', 'EIP editor liaison support'],
  },
];

// ─── EIP Lifecycle Stages ─────────────────────────────────────────────────────
const eipStages = [
  {
    stage: 'Idea', icon: Lightbulb, tone: 'neutral',
    description: 'A concept is proposed informally via Ethereum Magicians or Discord. The community discusses feasibility and alignment with Ethereum\'s values.',
    actions: ['Post on Ethereum Magicians', 'Gather early feedback', 'Assess community interest'],
  },
  {
    stage: 'Draft', icon: FileText, tone: 'info',
    description: 'A formal EIP document is written following EIP-1 standards. It defines motivation, specification, rationale, and backwards compatibility.',
    actions: ['Write EIP using template', 'Submit PR to ethereum/EIPs', 'Assigned an EIP number'],
  },
  {
    stage: 'Review', icon: AlertCircle, tone: 'brand',
    description: 'EIP editors and the core developer community review the proposal for technical soundness, clarity, and compatibility with the protocol.',
    actions: ['EIP editor review', 'Core dev discussion', 'Technical revisions'],
  },
  {
    stage: 'Last Call', icon: Clock, tone: 'violet',
    description: 'A final 2-week review window open to all stakeholders. The EIP is considered stable unless critical issues are raised.',
    actions: ['14-day public review', 'Stakeholder feedback', 'Final technical audit'],
  },
  {
    stage: 'Final', icon: CheckCircle2, tone: 'success',
    description: 'The EIP is accepted as a standard. It may be included in a future network upgrade or used as a reference specification.',
    actions: ['Included in upgrade discussion', 'Client team implementation', 'Testnet deployment'],
  },
  {
    stage: 'Stagnant', icon: Clock, tone: 'neutral',
    description: 'Any EIP in Draft or Review state that is inactive for a period of 6 months or greater is moved to Stagnant. It can be resurrected by authors later.',
    actions: ['Inactive for 6 months', 'Moved to Stagnant', 'Can be resurrected'],
  },
  {
    stage: 'Withdrawn', icon: AlertCircle, tone: 'warning',
    description: 'The EIP author has explicitly withdrawn the proposed EIP. This state has finality and can no longer be resurrected using this EIP number.',
    actions: ['Author withdraws EIP', 'Permanent state', 'Cannot be resurrected'],
  },
  {
    stage: 'Living', icon: Zap, tone: 'info',
    description: 'A special status for EIPs that are designed to be continually updated and not reach a state of finality (e.g., EIP-1).',
    actions: ['Continually updated', 'Never final', 'Core process documentation'],
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────
const timelineCards = [
  {
    year: '2024', quarter: 'Q1', icon: NetworkIcon, tone: 'neutral',
    badge: 'Inception', badgeTone: 'neutral',
    title: 'Early Coordination Begins',
    description: 'Initial community coordination efforts for the Dencun upgrade and proto-danksharding (EIP-4844) communication.',
    highlight: 'Established the foundation for neutral coordination between protocol researchers and client teams.',
  },
  {
    year: '2024', quarter: 'Q2', icon: Shield, tone: 'info',
    badge: 'Institutional Planning', badgeTone: 'info',
    title: 'Legal Framework Design',
    description: 'Planning and design of the ECH Institute as a neutral 501(c)(3) entity to serve the Ethereum ecosystem long-term.',
    highlight: 'Defining the operational boundaries and commitment to public good infrastructure.',
  },
  {
    year: '2024', quarter: 'Q3', icon: Award, tone: 'warning',
    badge: '501(c)(3) Founded', badgeTone: 'warning',
    title: 'ECH Institute Incorporated',
    description: 'On July 11, 2024, ECH Institute Inc. was formally registered as a nonprofit transitioning informal coordination into a structured institution.',
    highlight: 'First annual report published, establishing baseline transparency.',
  },
  {
    year: '2024', quarter: 'Q4', icon: Video, tone: 'neutral',
    badge: '100+ Episodes', badgeTone: 'neutral',
    title: 'PEEPanEIP Reaches Milestone',
    description: 'The PEEPanEIP video series crossed 100 episodes covering EIPs from EIP-1559 to the latest Pectra research.',
    highlight: 'Now a primary technical archive for Ethereum Improvement Proposals.',
  },
  {
    year: '2025', quarter: 'Q2', icon: Users, tone: 'success',
    badge: 'New Program', badgeTone: 'success',
    title: 'WiEP Study Group Cohort',
    description: 'Launching the inaugural Women in Ethereum Protocol (WiEP) study group cohort, a strategic initiative to onboard diverse talent into protocol engineering.',
    highlight: 'Providing structured mentorship and technical pathways for core protocol contribution.',
  },
  {
    year: '2025', quarter: 'Q3', icon: GitBranch, tone: 'warning',
    badge: 'Upgrade Coordination', badgeTone: 'warning',
    title: 'Pectra Upgrade Communication',
    description: 'Lead coordination for the Pectra network upgrade, managing consensus layer and execution layer communication.',
    highlight: 'Facilitating devnets, testnets, and community-wide readiness calls.',
  },
    {
    year: '2025', quarter: 'Q4', icon: GitPullRequest, tone: 'neutral',
    badge: 'Future Upgrade', badgeTone: 'neutral',
    title: 'Fusaka Upgrade Coordination',
    description: 'Pioneering early-stage coordination for the Fusaka upgrade, driving systemic improvements in data availability and protocol efficiency.',
    highlight: 'Laying the technical and social groundwork for Ethereum\'s next major scaling milestones.',
  },
  {
    year: '2026', quarter: 'Q1', icon: Building2, tone: 'info',
    badge: 'Governance', badgeTone: 'info',
    title: 'Board Maturity & Hudson Jameson',
    description: 'Veteran contributors joined the Board of Directors. Formalizing the "operating system" for Ethereum communication.',
    highlight: 'Ensuring predictable engineering delivery through neutral coordination.',
  },
  {
    year: '2026', quarter: 'Active', icon: Target, tone: 'success',
    badge: 'Active & Operational', badgeTone: 'success',
    title: 'Education Hub & 2026 Roadmap',
    description: 'Coordinating the transition to a biannual upgrade schedule (Glamsterdam & Hegotá) alongside the Education Hub.',
    highlight: 'Empowering the community through structured protocol education.',
  },
];

import { HeroRadar } from '@/components/features/HeroRadar';

const EDUCATION_SPHERES = [
  { icon: BookOpen, title: 'Structured Hub', desc: 'A learning resource for beginners, contributors, and enterprises.' },
  { icon: Play, title: 'Visual Learning', desc: 'Deep-dive video walkthroughs with EIP authors and researchers.' },
  { icon: FileText, title: 'Technical Guides', desc: 'Step-by-step documentation on Ethereum network upgrades.' },
  { icon: GraduationCap, title: 'Onboarding', desc: 'Community-led study groups for onboarding new protocol contributors.' },
];

export default function EducationPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [openGuides, setOpenGuides] = useState<Record<number, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  const toggleItem = (key: string) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  const toggleGuide = (i: number) => setOpenGuides(prev => ({ ...prev, [i]: !prev[i] }));

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    NAV_SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)] pt-16 lg:pt-24 text-[var(--text-base)]">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section id="overview" className="py-8 px-4 md:py-16 md:px-8 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left — copy */}
            <div className="flex flex-col gap-5">
              <div className="proplay-icon-container px-3 py-1 self-start !text-[#FBFBFB]">
                <BookOpen className="w-4 mx-2 !text-[#FBFBFB]" />
                Open Education Hub
              </div>
              <h1 className="global-hero-title">
                Education &amp;<br />Protocol Learning.
              </h1>
              <p className="global-body-lg max-w-xl">
                A structured learning hub for beginners, contributors, and enterprises — covering
                Ethereum Improvement Proposals, network upgrades, and governance coordination.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href={ROUTES.peepaneip} className="btn btn-primary gap-3">
                  <Play className="h-4 w-4" />
                  Explore Content
                </Link>
                <Link href={EXTERNAL_LINKS.blog} target="_blank" className="btn btn-outline gap-3">
                  <FileText className="h-4 w-4" />
                  Read the Blog
                </Link>
              </div>
            </div>

            {/* Right — Interactive Radar */}
            <HeroRadar spheres={EDUCATION_SPHERES} />

          </div>
        </div>
      </section>


      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border-soft)] bg-[var(--surface-card-theme)] py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '100+', label: 'PEEPanEIP Episodes' },
              { value: '50+', label: 'Technical Guides' },
              { value: '2024', label: 'Founded as Nonprofit' },
              { value: '1100+', label: 'PRs Reviewed During Office Hours' },
            ].map((s, i) => (
              <div key={i}>
                <div className="global-section-title text-[var(--accent-brand)]">{s.value}</div>
                <div className="text-sm text-[var(--text-soft)] font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-col layout: sticky nav + content ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex gap-8 items-start">

        {/* Sticky Left Nav */}
                <StickySideNav sections={NAV_SECTIONS} activeSection={activeSection} onSectionClick={scrollToSection} />

        {/* Main content */}
        <div className="flex-1 min-w-0 flex flex-col gap-16">

          {/* ── Content Formats ──────────────────────────────────────────── */}
          <section id="formats">
            <span className="global-section-tag">How We Teach</span>
            <h2 className="global-section-title">Content <em>Formats</em></h2>
            <p className="global-body-lg mb-5">We communicate complex governance concepts through multiple accessible formats for every learner type.</p>

            <div className="flex flex-col gap-3">
              {formats.map((f, i) => (
                <Link
                  key={i}
                  href={f.link}
                  target={f.isInternal ? '_self' : '_blank'}
                  className="global-card flex flex-col gap-3 no-underline text-inherit hover:border-[var(--accent-brand)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                >
                  <div className="flex items-center gap-4">
                    <div className="proplay-icon-container h-10 w-10 flex-shrink-0 relative overflow-hidden group-hover:border-[var(--accent-brand)] transition-all duration-500">
                      <f.icon className="h-5 w-5 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300" />
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-[var(--text-base)] opacity-0 group-hover:opacity-100 transition-all duration-300">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-[var(--text-base)]">{f.title}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-base)] bg-[var(--surface-card-muted)] px-2 py-0.5 rounded-full hidden sm:inline">{f.tag}</span>
                      </div>
                      <p className="text-xs text-amber-700 font-semibold">{f.subtitle}</p>
                    </div>
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-amber-500 transition-colors shrink-0" />
                  </div>

                  <div className="pl-14">
                    <p className="global-body text-sm mb-3">{f.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.highlights.map((h, j) => (
                        <span key={j} className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-base)] bg-[var(--surface-card-muted)] border border-border rounded-full px-3 py-1">
                          <CheckCircle2 size={11} className="text-brand-yellow" /> {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Featured Guides accordion with rich details ────────────── */}
          <section id="featured">
            <span className="global-section-tag">Deep Dives</span>
            <h2 className="global-section-title">Featured <em>Guides</em></h2>
            <p className="global-body-lg mb-5">Comprehensive resources on Ethereum&apos;s core processes — expand each guide to read a full explanation.</p>

            <div className="flex flex-col gap-3">
              {featuredGuides.map((g, i) => {
                const isOpen = openGuides[i];
                return (
                  <div key={i} className="global-card p-0 overflow-hidden">
                    <button
                      className="w-full flex items-center gap-4 p-4 text-left hover:bg-gray-50 transition-colors group"
                      onClick={() => toggleGuide(i)}
                    >
                      <div className="proplay-icon-container h-10 w-10 flex-shrink-0 relative overflow-hidden group-hover:border-[var(--accent-brand)] transition-all duration-500">
                        <g.icon className="h-5 w-5 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300" />
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-[var(--text-base)] opacity-0 group-hover:opacity-100 transition-all duration-300">
                          0{i + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-bold text-base text-[var(--text-base)]">{g.title}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full hidden sm:inline">{g.tag}</span>
                        </div>
                        <p className="global-body text-sm">{g.summary}</p>
                      </div>
                      <ChevronDown
                        size={16}
                        className={cn('text-gray-400 shrink-0 transition-transform duration-200', isOpen && 'is-open')}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-100 px-4 pb-4 pt-4">
                        <p className="global-body text-sm mb-4 leading-relaxed">{g.detail}</p>
                        <div className="flex flex-col gap-2.5">
                          {g.steps.map((step, j) => (
                            <div key={j} className="flex items-start gap-3">
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold shrink-0 mt-0.5">{j + 1}</div>
                              <span className="text-sm text-[var(--text-base)]/80 leading-snug">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── EIP Lifecycle ─────────────────────────────────────────────── */}
          <section id="eip-lifecycle">
            <span className="global-section-tag">How EIPs Work</span>
            <h2 className="global-section-title"><em>EIP Lifecycle</em>: From Idea to Mainnet</h2>
            <p className="global-body-lg mb-5">Every change to the Ethereum protocol starts as an idea and passes through a rigorous, community-driven review process before being deployed to mainnet.</p>

            <div className="relative flex flex-col gap-4">
              {/* Connector line */}
              <div className="absolute left-[21px] top-10 bottom-10 w-[2px] bg-[var(--border-soft)] rounded-full hidden sm:block" />
              {eipStages.map((s, i) => (
                <div key={s.stage} className="relative flex gap-4 items-start group">
                  {/* Proplay Icon */}
                  <div className="proplay-icon-container h-11 w-11 flex-shrink-0 relative overflow-hidden group-hover:border-[var(--accent-brand)] transition-all duration-500 z-10 bg-black">
                    <s.icon className="h-5 w-5 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300" />
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-[var(--text-base)] opacity-0 group-hover:opacity-100 transition-all duration-300">
                      0{i + 1}
                    </span>
                  </div>
                  {/* Card */}
                  <div className="flex-1 global-card mb-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--accent-brand)] group-hover:shadow-xl">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="global-card-title mb-0">{s.stage}</h3>
                    </div>
                    <p className="global-body text-sm mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.actions.map((a, j) => (
                        <span key={j} className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-soft)] bg-[var(--surface-card-muted)] border border-[var(--border-soft)] rounded-full px-3 py-1">
                          <CheckCircle2 size={11} className="text-[var(--accent-brand)] flex-shrink-0" /> {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* ECH Role banner — yellow accent */}
            <div className="global-card mt-4 bg-[var(--surface-card-muted)] border-accent/40 text-center relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5A51D] to-transparent" />
              <p className="global-body">
                <strong className="text-accent">ECH Institute&apos;s Role:</strong> We produce PEEPanEIP deep-dives for each significant EIP, host EIPIP calls that shepherd EIPs through review, and publish upgrade communication for each mainnet deployment.
              </p>
            </div>
          </section>

          {/* ── ECH Timeline ─────────────────────────────────────────────── */}
          <section id="timeline">
            <span className="global-section-tag">Our Journey</span>
            <h2 className="global-section-title">ECH Institute: <em>2024 to Today</em></h2>
            <p className="global-body-lg mb-5">From informal Ethereum coordination to a formalized 501(c)(3) nonprofit supporting open governance infrastructure.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {timelineCards.map((card, i) => (
                <div key={i} data-tone={card.tone} className="global-card flex flex-col gap-3 hover:border-[var(--accent-brand)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="proplay-icon-container h-10 w-10 flex-shrink-0 relative overflow-hidden group-hover:border-[var(--accent-brand)] transition-all duration-500 z-10">
                      <card.icon className="h-5 w-5 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300" />
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-[var(--text-base)] opacity-0 group-hover:opacity-100 transition-all duration-300">
                        0{i + 1}
                      </span>
                    </div>
                    <span data-tone={card.badgeTone} className="tone-badge text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shrink-0">
                      {card.badge}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-xs font-bold text-brand-yellow">{card.year}</span>
                      <span className="h-1 w-1 rounded-full bg-darkGray" />
                      <span className="text-xs font-bold text-[var(--text-base)]/50">{card.quarter}</span>
                    </div>
                    <h3 className="global-card-title text-base mb-1.5">{card.title}</h3>
                    <p className="global-body text-xs leading-relaxed mb-3">{card.description}</p>
                    <div className="mt-auto pt-3 border-t border-border flex items-start gap-2">
                      <Zap size={12} className="text-brand-yellow shrink-0 mt-0.5" />
                      <p className="text-[11px] font-medium text-[var(--text-soft)] leading-normal italic">{card.highlight}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section id="next-steps">
            <span className="global-section-tag">Take the Next Step</span>
            <h2 className="global-section-title">Get Involved in <em>Governance</em></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { icon: MessageSquare, title: 'Community Discussions', desc: 'Participate in EIP and governance conversations on Ethereum Magicians forums.', link: 'https://ethereum-magicians.org/', cta: 'Ethereum Magicians' },
                { icon: Calendar, title: 'Attend Office Hours', desc: 'Connect with core devs and EIP editors in open EIPIP coordination calls.', link: 'https://github.com/ethereum-cat-herders/EIPIP/issues', cta: 'View Agenda' },
                { icon: Globe, title: 'Governance in Practice', desc: 'Join EIPIP meetings to observe and engage with live Ethereum governance decisions.', link: 'https://github.com/ethereum-cat-herders/EIPIP', cta: 'EIPIP Meetings' },
              ].map((card, i) => (
                <Link key={i} href={card.link} target="_blank" className="global-card flex flex-col gap-3 no-underline text-inherit hover:border-[var(--accent-brand)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                  <div className="proplay-icon-container h-10 w-10 flex-shrink-0 relative overflow-hidden group-hover:border-[var(--accent-brand)] transition-all duration-500">
                    <card.icon className="h-5 w-5 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300" />
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-[var(--text-base)] opacity-0 group-hover:opacity-100 transition-all duration-300">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="global-card-title mb-1">{card.title}</h3>
                    <p className="global-body text-sm">{card.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold pt-2 border-t border-gray-100 text-brand-yellow">
                    {card.cta} <ArrowRight size={13} />
                  </div>
                </Link>
              ))}
            </div>

            <div className="global-card text-center bg-[var(--surface-card-muted)] border-accent/50">
              <p className="global-body-lg mb-2"><strong>Participation &amp; Ecosystem Contribution</strong></p>
              <p className="global-body-lg mb-6">You can contribute through documentation, content creation, community outreach, and taking part in governance discussions. ECH Institute is your starting point.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={EXTERNAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Join our Discord</Link>
                <Link href={EXTERNAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Follow on X</Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
