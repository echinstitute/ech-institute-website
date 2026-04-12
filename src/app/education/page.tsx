'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import {
  GraduationCap, Play, FileText, BookOpen,
  ArrowRight, Users, Zap, Star, Award, Globe,
  ChevronRight, ExternalLink, BookMarked, MessageSquare,
  Calendar, TrendingUp, Shield, Lightbulb, Target, CheckCircle2,
  ChevronDown, Video, GitBranch, AlertCircle,
  Clock, Layers, Network, Cpu, Building2
} from 'lucide-react';
import { ROUTES, EXTERNAL_LINKS } from '@/config/routes';

// ─── Sections for sticky nav ─────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'formats', label: 'Content Formats' },
  { id: 'featured', label: 'Featured Guides' },
  { id: 'eip-lifecycle', label: 'EIP Lifecycle' },
  { id: 'tracks', label: 'Learning Tracks' },
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
    summary: 'How the biweekly ACD calls work, who participates, and how decisions are documented and acted upon.',
    detail: 'All Core Devs (ACD) calls are the primary coordination mechanism for Ethereum protocol development. They happen biweekly alternating between Execution Layer (ACDE) and Consensus Layer (ACDC) calls. ECH Institute documents these calls, archives the notes in the ethereum/pm repository, and publishes summaries for the broader community. ACD calls are open to observe but participation is by invitation from client teams.',
    steps: ['Agenda published 1 week before call', 'Client teams present updates', 'EIP discussions and decisions', 'Action items captured by ECH Institute', 'Notes published to ethereum/pm', 'Summary shared with community'],
  },
  {
    icon: Network,
    title: 'Protocol Coordination',
    tag: 'ECH Institute',
    link: EXTERNAL_LINKS.blog,
    summary: 'Behind the scenes of ECH Institute\'s coordination role from upgrade planning to post-deployment communication.',
    detail: 'ECH Institute serves as the "operating system" of Ethereum protocol coordination. This means organizing and documenting ACD calls, running EIPIP office hours, managing EIP editor coordination, producing educational content around upgrades, and maintaining community consensus channels. As a neutral 501(c)(3) nonprofit, ECH Institute holds no protocol authority its value is in enabling the coordination that allows Ethereum to evolve responsibly.',
    steps: ['EIPIP calls for EIP coordination', 'ACD call documentation', 'Upgrade communication planning', 'Educational content production', 'Community consensus gathering', 'Post-deployment reporting'],
  },
];

// ─── EIP Lifecycle Stages ─────────────────────────────────────────────────────
const eipStages = [
  {
    stage: 'Idea', icon: Lightbulb, color: '#6b7280', bg: '#f9fafb', border: '#e5e7eb',
    description: 'A concept is proposed informally via Ethereum Magicians or Discord. The community discusses feasibility and alignment with Ethereum\'s values.',
    actions: ['Post on Ethereum Magicians', 'Gather early feedback', 'Assess community interest'],
  },
  {
    stage: 'Draft', icon: FileText, color: '#3b82f6', bg: '#eff6ff', border: '#bfdbfe',
    description: 'A formal EIP document is written following EIP-1 standards. It defines motivation, specification, rationale, and backwards compatibility.',
    actions: ['Write EIP using template', 'Submit PR to ethereum/EIPs', 'Assigned an EIP number'],
  },
  {
    stage: 'Review', icon: AlertCircle, color: '#f59e0b', bg: '#fffbeb', border: '#fde68a',
    description: 'EIP editors and the core developer community review the proposal for technical soundness, clarity, and compatibility with the protocol.',
    actions: ['EIP editor review', 'Core dev discussion', 'Technical revisions'],
  },
  {
    stage: 'Last Call', icon: Clock, color: '#8b5cf6', bg: '#f5f3ff', border: '#ddd6fe',
    description: 'A final 2-week review window open to all stakeholders. The EIP is considered stable unless critical issues are raised.',
    actions: ['14-day public review', 'Stakeholder feedback', 'Final technical audit'],
  },
  {
    stage: 'Final', icon: CheckCircle2, color: '#10b981', bg: '#f0fdf4', border: '#a7f3d0',
    description: 'The EIP is accepted as a standard. It may be included in a future network upgrade or used as a reference specification.',
    actions: ['Included in upgrade discussion', 'Client team implementation', 'Testnet deployment'],
  },
  {
    stage: 'Deployed', icon: Cpu, color: '#d97706', bg: '#fffbeb', border: '#fde68a',
    description: 'The EIP is live on Ethereum mainnet following a successful network upgrade. It is now enforced at the protocol level across all clients.',
    actions: ['Mainnet activation', 'Post-upgrade monitoring', 'Documentation finalized'],
  },
];

// ─── Learning Tracks ─────────────────────────────────────────────────────────
const tracks = [
  {
    id: 'beginner', emoji: '👋', title: 'Beginner',
    subtitle: 'Start here to understand the fundamentals.',
    items: [
      { title: 'What is Ethereum?', description: 'A foundational overview of the Ethereum network, its purpose as programmable money and decentralized computing infrastructure.', link: 'https://ethereum.org/en/what-is-ethereum/', cta: 'ethereum.org' },
      { title: 'What is Blockchain?', description: 'Understanding the core data structure that makes decentralized networks possible, including blocks, hashes, and immutability.', link: 'https://ethereum.org/en/developers/docs/', cta: 'ETH Docs' },
      { title: 'What is Governance?', description: 'How decentralized decisions are made in the Ethereum ecosystem who has a voice, and how changes actually get implemented.', link: 'https://ethereum.org/en/governance/', cta: 'ethereum.org' },
      { title: 'What are EIPs?', description: 'Ethereum Improvement Proposals the formal mechanism for proposing changes to the Ethereum protocol. How they\'re structured and reviewed.', link: 'https://eips.ethereum.org/', cta: 'eips.ethereum.org' },
      { title: 'What are Hard Forks?', description: 'Understanding how Ethereum upgrades are activated, what coordination is required, and the difference between hard and soft forks.', link: EXTERNAL_LINKS.blog, cta: 'ECH Blog' },
      { title: 'Watch: PEEPanEIP Introduction', description: 'Start with an introductory episode of the PEEPanEIP series to see how EIP explanations work with real EIP authors.', link: ROUTES.peepaneip, cta: 'PEEPanEIP Page' },
    ],
  },
  {
    id: 'contributor', emoji: '🛠', title: 'Contributor',
    subtitle: 'Learn how to actively participate in the ecosystem.',
    items: [
      { title: 'How to Write an EIP', description: 'Step-by-step guide to drafting a formal Ethereum Improvement Proposal following EIP-1 standards, including templates and common mistakes to avoid.', link: 'https://eips.ethereum.org/EIPS/eip-1', cta: 'EIP-1 Reference' },
      { title: 'How to Join Discussions', description: 'Participate in active governance conversations on Ethereum Magicians forums, All Core Devs calls, and EIP-specific GitHub issues.', link: 'https://ethereum-magicians.org/', cta: 'Eth Magicians' },
      { title: 'Office Hours & Agendas', description: 'Attend open EIPIP office hours to connect with core devs and governance leads. Monthly calls open to all community members.', link: 'https://github.com/ethereum-cat-herders/EIPIP/issues', cta: 'GitHub Agenda' },
      { title: 'Contributing to ACD Notes', description: 'How to help document All Core Devs calls one of the most impactful contributions anyone can make to Ethereum governance.', link: 'https://github.com/ethereum/pm', cta: 'ethereum/pm repo' },
      { title: 'Becoming an EIP Editor', description: 'The role, responsibilities, and process for becoming an EIP editor one of the most important stewardship roles in the ecosystem.', link: 'https://eips.ethereum.org/EIPS/eip-5069', cta: 'EIP-5069' },
      { title: 'Join the WiEP Program', description: 'Women in Ethereum Protocol study groups provide structured learning and mentorship for those wanting to contribute at the protocol level.', link: ROUTES.wiep, cta: 'WiEP Page' },
    ],
  },
  {
    id: 'enterprise', emoji: '🏢', title: 'Enterprise',
    subtitle: 'Understand governance from a decision-making perspective.',
    items: [
      { title: 'Understanding Network Upgrades', description: 'What Ethereum network upgrades mean for businesses building on the protocol timelines, risks, and how to prepare.', link: EXTERNAL_LINKS.blog, cta: 'ECH Blog' },
      { title: 'Governance & Protocol Risk', description: 'How protocol governance uncertainty creates risk for enterprise deployments and how to monitor and manage exposure.', link: EXTERNAL_LINKS.blog, cta: 'ECH Blog' },
      { title: 'Why Process Clarity Matters', description: 'The case for transparent, well-documented protocol change processes and how ECH Institute provides that clarity as a public good.', link: EXTERNAL_LINKS.blog, cta: 'ECH Blog' },
      { title: 'Reading the Annual Report', description: 'ECH Institute\'s first annual report provides a window into how a neutral nonprofit operates in the Ethereum governance landscape.', link: EXTERNAL_LINKS.annualReport, cta: 'View Report (PDF)' },
      { title: "Ethereum's Upgrade Schedule", description: 'Understanding the biannual upgrade schedule adopted in 2026 and what Glamsterdam and Hegotá mean for infrastructure planning.', link: '/events', cta: 'Events Page' },
      { title: 'Engaging Without Influencing', description: 'How enterprises can engage with Ethereum governance responsibly without inadvertently applying undue influence on decentralized protocol decisions.', link: EXTERNAL_LINKS.blog, cta: 'ECH Blog' },
    ],
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────
const timelineCards = [
  {
    year: '2024', quarter: 'Q1', icon: Network, iconBg: '#f3f4f6', iconColor: '#4b5563',
    badge: 'Inception', badgeCls: '#4b5563',
    title: 'Early Coordination Begins',
    description: 'Initial community coordination efforts for the Dencun upgrade and proto-danksharding (EIP-4844) communication.',
    highlight: 'Established the foundation for neutral coordination between protocol researchers and client teams.',
  },
  {
    year: '2024', quarter: 'Q2', icon: Shield, iconBg: '#eff6ff', iconColor: '#1d4ed8',
    badge: 'Institutional Planning', badgeCls: '#1d4ed8',
    title: 'Legal Framework Design',
    description: 'Planning and design of the ECH Institute as a neutral 501(c)(3) entity to serve the Ethereum ecosystem long-term.',
    highlight: 'Defining the operational boundaries and commitment to public good infrastructure.',
  },
  {
    year: '2024', quarter: 'Q3', icon: Award, iconBg: '#fef9c3', iconColor: '#b45309',
    badge: '501(c)(3) Founded', badgeCls: '#d97706',
    title: 'ECH Institute Incorporated',
    description: 'On July 11, 2024, ECH Institute Inc. was formally registered as a nonprofit transitioning informal coordination into a structured institution.',
    highlight: 'First annual report published, establishing baseline transparency.',
  },
  {
    year: '2024', quarter: 'Q4', icon: Video, iconBg: '#f3f4f6', iconColor: '#374151',
    badge: '100+ Episodes', badgeCls: '#4b5563',
    title: 'PEEPanEIP Reaches Milestone',
    description: 'The PEEPanEIP video series crossed 100 episodes covering EIPs from EIP-1559 to the latest Pectra research.',
    highlight: 'Now a primary technical archive for Ethereum Improvement Proposals.',
  },
  {
    year: '2025', quarter: 'Q1', icon: Users, iconBg: '#f0fdf4', iconColor: '#15803d',
    badge: 'New Program', badgeCls: '#15803d',
    title: 'WiEP Classroom Series Launched',
    description: 'The Women in Ethereum Protocol (WiEP) structured classroom series launched to onboard women into protocol development.',
    highlight: 'Dedicated mentorship and study groups for core protocol contribution.',
  },
  {
    year: '2025', quarter: 'Q2', icon: Building2, iconBg: '#eff6ff', iconColor: '#1d4ed8',
    badge: 'Governance', badgeCls: '#1d4ed8',
    title: 'Board Maturity & Hudson Jameson',
    description: 'Veteran contributors joined the Board of Directors. Formalizing the "operating system" for Ethereum communication.',
    highlight: 'Ensuring predictable engineering delivery through neutral coordination.',
  },
  {
    year: '2025', quarter: 'Q3', icon: GitBranch, iconBg: '#fffbeb', iconColor: '#d97706',
    badge: 'Upgrade Coordination', badgeCls: '#d97706',
    title: 'Pectra Upgrade Communication',
    description: 'Lead coordination for the Pectra network upgrade, managing consensus layer and execution layer communication.',
    highlight: 'Facilitating devnets, testnets, and community-wide readiness calls.',
  },
  {
    year: '2026', quarter: 'Active', icon: Target, iconBg: '#f0fdf4', iconColor: '#059669',
    badge: 'Active & Operational', badgeCls: '#059669',
    title: 'Education Hub & 2026 Roadmap',
    description: 'Coordinating the transition to a biannual upgrade schedule (Glamsterdam & Hegotá) alongside the Education Hub.',
    highlight: 'Empowering the community through structured protocol education.',
  },
];

export default function EducationPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [openTracks, setOpenTracks] = useState<Record<string, boolean>>({ beginner: true });
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [openGuides, setOpenGuides] = useState<Record<number, boolean>>({});
  const [openFormats, setOpenFormats] = useState<Record<number, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  const toggleTrack = (id: string) => setOpenTracks(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleItem = (key: string) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  const toggleGuide = (i: number) => setOpenGuides(prev => ({ ...prev, [i]: !prev[i] }));
  const toggleFormat = (i: number) => setOpenFormats(prev => ({ ...prev, [i]: !prev[i] }));

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
    <main className="min-h-screen bg-white pt-16 lg:pt-24">

      {/* ── Hero — "proplay" inner-page style ──────────────── */}
      <section id="overview" className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-tag">
            <span className="page-hero-dot" />
            ECH Institute · Education Programs
          </div>
          <h1 className="page-hero-title">
            <em>Education.</em><br />Governance &amp;<br />Protocol Learning.
          </h1>
          <p className="page-hero-desc">
            A structured learning hub for beginners, contributors, and enterprises — covering
            Ethereum Improvement Proposals, network upgrades, and governance coordination.
          </p>
          <div className="page-hero-actions">
            <Link href={ROUTES.peepaneip} className="btn btn-primary">
              <BookOpen size={16} /> Explore Content
            </Link>
            <Link href={EXTERNAL_LINKS.blog} target="_blank" className="btn btn-outline">
              <FileText size={16} /> Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gray-50 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '100+', label: 'PEEPanEIP Episodes' },
              { value: '50+', label: 'Technical Guides' },
              { value: '2024', label: 'Founded as Nonprofit' },
              { value: '3', label: 'Learning Tracks' },
            ].map((s, i) => (
              <div key={i}>
                <div className="global-section-title" style={{ color: 'var(--color-yellow)' }}>{s.value}</div>
                <div className="text-sm text-gray-500 font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-col layout: sticky nav + content ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex gap-8 items-start">

        {/* Sticky Left Nav */}
        <aside className="hidden lg:block w-52 xl:w-60 flex-shrink-0 sticky top-28 self-start">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-2">On This Page</p>
          <nav className="flex flex-col gap-0.5">
            {NAV_SECTIONS.map(s => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 border-l-2 ${activeSection === s.id
                    ? 'bg-gray-100 text-black font-bold'
                    : 'text-gray-500 hover:text-black hover:bg-gray-50 border-transparent'
                  }`}
                style={activeSection === s.id ? { borderLeftColor: 'var(--color-yellow)' } : {}}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

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
                  className="global-card flex flex-col gap-3 no-underline text-inherit hover:border-amber-400 transition-all hover:shadow-md group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 shrink-0 group-hover:bg-amber-50 transition-colors">
                      <f.icon className="h-5 w-5 global-icon-yellow" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-black">{f.title}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full hidden sm:inline">{f.tag}</span>
                      </div>
                      <p className="text-xs text-amber-700 font-semibold">{f.subtitle}</p>
                    </div>
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-amber-500 transition-colors shrink-0" />
                  </div>

                  <div className="pl-14">
                    <p className="global-body text-sm mb-3">{f.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.highlights.map((h, j) => (
                        <span key={j} className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-3 py-1">
                          <CheckCircle2 size={11} className="global-icon-yellow" /> {h}
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
            <p className="global-body-lg mb-5">Comprehensive resources on Ethereum's core processes — expand each guide to read a full explanation.</p>

            <div className="flex flex-col gap-3">
              {featuredGuides.map((g, i) => {
                const isOpen = openGuides[i];
                return (
                  <div key={i} className="global-card p-0 overflow-hidden">
                    <button
                      className="w-full flex items-center gap-4 p-4 text-left hover:bg-gray-50 transition-colors"
                      onClick={() => toggleGuide(i)}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 shrink-0">
                        <g.icon className="h-5 w-5 global-icon-yellow" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-bold text-base text-black">{g.title}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full hidden sm:inline">{g.tag}</span>
                        </div>
                        <p className="global-body text-sm">{g.summary}</p>
                      </div>
                      <ChevronDown
                        size={16}
                        className="text-gray-400 shrink-0 transition-transform duration-200"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-100 px-4 pb-4 pt-4">
                        <p className="global-body text-sm mb-4 leading-relaxed">{g.detail}</p>
                        <div className="flex flex-col gap-2.5">
                          {g.steps.map((step, j) => (
                            <div key={j} className="flex items-start gap-3">
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold shrink-0 mt-0.5">{j + 1}</div>
                              <span className="text-sm text-gray-600 leading-snug">{step}</span>
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

            <div className="relative flex flex-col gap-3">
              <div className="absolute left-5 top-10 bottom-10 w-[2px] bg-gradient-to-b from-gray-200 via-amber-200 to-gray-200 rounded-full hidden sm:block" />
              {eipStages.map((s, i) => (
                <div key={s.stage} className="relative flex gap-4 items-start">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 mt-1"
                    style={{ background: s.bg, borderColor: s.border }}>
                    <s.icon size={17} style={{ color: s.color }} />
                  </div>
                  <div className="flex-1 global-card mb-0 hover:border-amber-400 transition-colors">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: s.color }}>Stage {i + 1}</span>
                      <h3 className="global-card-title mb-0">{s.stage}</h3>
                    </div>
                    <p className="global-body text-sm mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.actions.map((a, j) => (
                        <span key={j} className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                          <CheckCircle2 size={11} style={{ color: s.color }} /> {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="global-card mt-4 global-border-yellow bg-amber-50/30 text-center">
              <p className="global-body">
                <strong>ECH Institute&apos;s Role:</strong> We produce PEEPanEIP deep-dives for each significant EIP, host EIPIP calls that shepherd EIPs through review, and publish upgrade communication for each mainnet deployment.
              </p>
            </div>
          </section>

          {/* ── Learning Tracks ───────────────────────────────────────────── */}
          <section id="tracks">
            <span className="global-section-tag">Choose Your Path</span>
            <h2 className="global-section-title">Learning <em>Tracks</em></h2>
            <p className="global-body-lg mb-5">Whether you&apos;re just getting started, building your contributions, or governing at scale — we have a path for you.</p>

            <div className="flex flex-col gap-4">
              {tracks.map((track) => (
                <div key={track.id} className="global-card p-0 overflow-hidden">
                  <button
                    className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => toggleTrack(track.id)}
                  >
                    <span className="text-2xl">{track.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-black">{track.title}</h3>
                      <p className="text-sm text-gray-500">{track.subtitle}</p>
                    </div>
                    <ChevronDown size={18} className="text-gray-400 shrink-0 transition-transform duration-200"
                      style={{ transform: openTracks[track.id] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>

                  {openTracks[track.id] && (
                    <div className="border-t border-gray-100">
                      {track.items.map((item, j) => {
                        const key = `${track.id}-${j}`;
                        const isOpen = openItems[key];
                        return (
                          <div key={j} className="border-b border-gray-50 last:border-0">
                            <button
                              className="w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-gray-50 transition-colors"
                              onClick={() => toggleItem(key)}
                            >
                              <ChevronRight size={14} className="text-amber-400 shrink-0 transition-transform duration-150"
                                style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }} />
                              <span className="flex-1 font-semibold text-sm text-gray-900">{item.title}</span>
                              {isOpen && (
                                <Link href={item.link}
                                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                                  onClick={e => e.stopPropagation()}
                                  className="text-xs font-bold border border-gray-200 rounded-full px-3 py-1 hover:border-amber-400 transition-colors shrink-0 no-underline"
                                  style={{ color: 'var(--color-yellow)' }}>
                                  {item.cta} <ExternalLink size={10} className="inline ml-0.5" />
                                </Link>
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-5 pb-4 pt-0 ml-8">
                                <p className="global-body text-sm">{item.description}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── ECH Timeline ─────────────────────────────────────────────── */}
          <section id="timeline">
            <span className="global-section-tag">Our Journey</span>
            <h2 className="global-section-title">ECH Institute: <em>2024 to Today</em></h2>
            <p className="global-body-lg mb-5">From informal Ethereum coordination to a formalized 501(c)(3) nonprofit supporting open governance infrastructure.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {timelineCards.map((card, i) => (
                <div key={i} className="global-card flex flex-col gap-3 hover:border-amber-400 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0" style={{ background: card.iconBg }}>
                      <card.icon size={18} style={{ color: card.iconColor }} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shrink-0"
                      style={{ color: card.badgeCls, borderColor: `${card.badgeCls}40`, background: `${card.badgeCls}0f` }}>
                      {card.badge}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{card.year} · {card.quarter}</div>
                    <h3 className="global-card-title mb-1">{card.title}</h3>
                    <p className="global-body text-sm">{card.description}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-100 mt-auto">
                    <p className="text-xs text-gray-500 leading-relaxed">{card.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Next Steps ───────────────────────────────────────────────── */}
          <section id="next-steps">
            <span className="global-section-tag">Take the Next Step</span>
            <h2 className="global-section-title">Get Involved in <em>Governance</em></h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: MessageSquare, title: 'Community Discussions', desc: 'Participate in EIP and governance conversations on Ethereum Magicians forums.', link: 'https://ethereum-magicians.org/', cta: 'Ethereum Magicians' },
                { icon: Calendar, title: 'Attend Office Hours', desc: 'Connect with core devs and EIP editors in open EIPIP coordination calls.', link: 'https://github.com/ethereum-cat-herders/EIPIP/issues', cta: 'View Agenda' },
                { icon: Globe, title: 'Governance in Practice', desc: 'Join EIPIP meetings to observe and engage with live Ethereum governance decisions.', link: 'https://github.com/ethereum-cat-herders/EIPIP', cta: 'EIPIP Meetings' },
              ].map((card, i) => (
                <Link key={i} href={card.link} target="_blank" className="global-card flex flex-col gap-3 no-underline text-inherit hover:border-amber-400 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 shrink-0">
                    <card.icon className="h-5 w-5 global-icon-yellow" />
                  </div>
                  <div className="flex-1">
                    <h3 className="global-card-title mb-1">{card.title}</h3>
                    <p className="global-body text-sm">{card.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold pt-2 border-t border-gray-100" style={{ color: 'var(--color-yellow)' }}>
                    {card.cta} <ArrowRight size={13} />
                  </div>
                </Link>
              ))}
            </div>

            <div className="global-card global-border-yellow text-center bg-gradient-to-br from-white to-amber-50">
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
