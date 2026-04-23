"use client";

import { useState, useEffect, useRef } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Heart, Wallet, Shield, BookOpen, Globe, Users,
  ArrowRight, CheckCircle2, ExternalLink, ChevronDown,
  TrendingUp, FileText, GitBranch, Award, Target,
  DollarSign, Gift, Building2, Star, Lock, Eye,
  BarChart3, Calendar, MessageSquare, Network,
} from "lucide-react";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/config/routes";
import { FundingVisualization } from "@/components/features/FundingVisualization";
import { EcosystemImpact } from "@/components/features/EcosystemImpact";
import { cn } from "@/lib/utils";
import { StickySideNav } from "@/components/ui/StickySideNav";

// ─── Sticky Nav ───────────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: "donate", label: "Make a Donation" },
  { id: "why-support", label: "Why Support" },
  { id: "what-enables", label: "What You Enable" },
  { id: "ways-to-support", label: "Ways to Support" },
  { id: "funding-model", label: "Funding Model" },
  { id: "transparency", label: "Transparency" },
  { id: "disclaimer", label: "Disclaimer" },
];

// ─── Why Support — pillars ────────────────────────────────────────────────────
const whySupportPillars = [
  {
    icon: Shield,
    title: "Ethereum Governance is a Public Good",
    tag: "Core Mission",
    tone: "info",
    summary:
      "The processes that enable Ethereum to evolve are critical infrastructure — but they are systematically underfunded.",
    detail:
      "Ethereum has no central authority. Protocol decisions are made through open, community-driven governance processes: EIP discussions, All Core Devs calls, EIPIP coordination, and network upgrade communication. These processes are foundational to everything built on Ethereum — yet they receive a tiny fraction of the funding flowing into the ecosystem. ECH Institute ensures these critical coordination mechanisms remain operational, neutral, and accessible to all participants. Without sustained support, the very infrastructure that makes Ethereum's decentralized governance possible may degrade.",
    highlights: [
      "No central authority — governance is a shared responsibility",
      "EIP process underpins every Ethereum upgrade",
      "Public goods require independent funding",
      "501(c)(3) nonprofit — no token, no VC alignment",
    ],
  },
  {
    icon: Lock,
    title: "Keeping the Process Open",
    tag: "Openness",
    tone: "success",
    summary:
      "ECH Institute maintains neutral, open-access governance infrastructure that no single entity controls.",
    detail:
      "Open governance means that anyone — regardless of background, nationality, or technical expertise — can observe, participate in, and contribute to Ethereum protocol decisions. ECH Institute's role is to maintain the scaffolding that makes this possible: documenting All Core Devs calls, running EIP editor office hours, hosting open EIPIP coordination meetings, and keeping historical records publicly accessible. As a neutral 501(c)(3), ECH Institute holds no protocol authority and advocates for no specific agenda. Its only mandate is to support the process itself.",
    highlights: [
      "Open EIPIP calls — anyone can join",
      "ACD notes published in full on GitHub",
      "No private governance channels",
      "Neutral facilitation — no protocol agenda",
    ],
  },
  {
    icon: Eye,
    title: "Transparency at Every Level",
    tag: "Accountability",
    tone: "violet",
    summary:
      "ECH Institute publishes detailed reports on activities, use of funds, and program outcomes.",
    detail:
      "Transparency is not just a commitment — it is a structural feature of how ECH Institute operates. Every major program, funding source, and operational expenditure is documented and disclosed. Annual reports cover not only financial information but also specific outputs: the number of meetings coordinated, EIPs shepherded, educational resources produced, and communities reached. This level of accountability is rare in the crypto ecosystem and reflects ECH Institute's commitment to operating as a genuinely public-serving institution.",
    highlights: [
      "Annual report with financials and outputs",
      "Meeting notes publicly archived on GitHub",
      "Open source tooling and documentation",
      "All coordination calls open to observe",
    ],
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    tag: "Accessibility",
    tone: "warning",
    summary:
      "Ethereum's governance should be understandable and accessible to contributors worldwide, not just insiders.",
    detail:
      "ECH Institute produces educational content, structured learning programs, and coordination resources specifically designed to lower the barrier to entry for global participants. The WiEP (Women in Ethereum Protocol) program, the PEEPanEIP video series, and the Ecosystem Project Demo series are all built with accessibility as a design constraint. Protocol governance has historically been opaque to those without deep technical backgrounds. ECH Institute systematically translates complex governance decisions into accessible formats for the broadest possible audience.",
    highlights: [
      "PEEPanEIP: 100+ accessible video episodes",
      "WiEP: Structured onboarding for women",
      "Written guides for beginners to enterprises",
      "Meeting summaries for non-technical audiences",
    ],
  },
];

// ─── What Your Support Enables ────────────────────────────────────────────────
const enablesItems = [
  {
    icon: GitBranch,
    title: "Structured EIP Process Support",
    description:
      "Every Ethereum Improvement Proposal needs review, coordination, and editorial support to progress from idea to mainnet. ECH Institute runs EIPIP (EIP Improvement Process) calls, maintains EIP editor coordination, and documents the lifecycle of EIPs from initial submission through Last Call and finalization. Your support keeps these coordination mechanisms staffed and operational.",
    impact: "Multiple active EIPs shepherded per month",
    tone: "info",
  },
  {
    icon: Network,
    title: "Upgrade Coordination & Documentation",
    description:
      "Ethereum network upgrades (Dencun, Pectra, Fusaka, Glamsterdam) require months of cross-team coordination. ECH Institute manages All Core Devs call documentation, upgrade communication planning, consensus layer and execution layer coordination, and post-deployment monitoring. Without neutral third-party coordination, upgrade timelines would be longer and more error-prone.",
    impact: "Every major Ethereum upgrade since Dencun coordinated",
    tone: "success",
  },
  {
    icon: BookOpen,
    title: "Educational Content for Global Audiences",
    description:
      "ECH Institute produces PEEPanEIP video deep-dives, written governance guides, structured learning tracks, and the Ecosystem Project Demo series. This content serves beginners learning about EIPs, contributors preparing to write proposals, and enterprises understanding protocol risk. Educational content is free, public, and permanently accessible.",
    impact: "100+ PEEPanEIP episodes | 3 learning tracks",
    tone: "violet",
  },
  {
    icon: Users,
    title: "Inclusion & Onboarding Programs",
    description:
      "WiEP (Women in Ethereum Protocol) provides structured classroom sessions, mentorship, and study groups for women entering Ethereum protocol development. Similar programs are planned for other underrepresented groups. These initiatives are not just equity work — they directly expand the contributor pool and improve the resilience of Ethereum's governance infrastructure.",
    impact: "WiEP active program with ongoing classroom cohorts",
    tone: "warning",
  },
  {
    icon: FileText,
    title: "Open Governance Records",
    description:
      "ECH Institute maintains the historical record of Ethereum's protocol governance: meeting notes in the ethereum/pm GitHub repository, EIP status tracking, upgrade timeline documentation, and community communication archives. These records are essential for researchers, builders, and newcomers to understand how Ethereum has evolved and where it is heading.",
    impact: "Years of governance records publicly archived",
    tone: "neutral",
  },
  {
    icon: Calendar,
    title: "Office Hours & Community Meetings",
    description:
      "Regular EIPIP office hours give community members direct access to EIP editors and core developers. These open calls allow anyone to raise questions, propose ideas, and engage with the governance process without needing institutional affiliation. ECH Institute organizes, facilitates, and documents these sessions consistently.",
    impact: "Regular open calls, published agendas and notes",
    tone: "pink",
  },
];

// ─── Ways to Support ──────────────────────────────────────────────────────────
const wayItems = [
  {
    icon: Award,
    title: "Grants",
    subtitle: "Institutional Funding",
    tone: "info",
    description:
      "Grants from foundations, DAOs, and institutional funders provide ECH Institute with the stable, multi-year funding needed to operate coordination infrastructure reliably. Grant funding is especially valuable because it enables ECH Institute to commit to long-term programs like WiEP, upgrade coordination, and educational content without short-term revenue pressure.",
    process: [
      "Contact team@ethcatherders.com with grant interest",
      "Provide program focus and funding duration",
      "Review 501(c)(3) status documentation",
      "Receive quarterly impact reports",
    ],
    cta: "Send Grant Inquiry",
    href: EXTERNAL_LINKS.email,
    isEmail: true,
  },
  {
    icon: Building2,
    title: "Sponsorships",
    subtitle: "Program & Event Sponsorships",
    tone: "success",
    description:
      "Sponsors support specific programs, events, or content series in exchange for co-branding and acknowledgment. Sponsorship opportunities include PEEPanEIP episode sponsorship, WiEP classroom cohort sponsorship, EIPIP call support, and upgrade communication sponsorships. All sponsorships are disclosed publicly and structured to preserve ECH Institute's editorial independence.",
    process: [
      "Select a program or event to sponsor",
      "Confirm sponsorship is content-neutral",
      "Receive public acknowledgment in outputs",
      "Impact report provided post-program",
    ],
    cta: "Explore Sponsorships",
    href: EXTERNAL_LINKS.email,
    isEmail: true,
  },
  {
    icon: Gift,
    title: "Direct Donations",
    subtitle: "ETH & Cryptocurrency Gifts",
    tone: "violet",
    description:
      "Direct donations in ETH or other cryptocurrencies go directly to ECH Institute's operational treasury. As a 501(c)(3) charitable organization, donations may be tax-deductible under U.S. law (consult your tax advisor). All cryptocurrency gifts are used exclusively for charitable purposes and disclosed in ECH Institute's annual report.",
    process: [
      "Connect your wallet using the form below",
      "Send ETH to the treasury address",
      "Share donor details for a receipt",
      "Donation appears in annual transparency report",
    ],
    cta: "Make a Donation",
    href: "#donate",
    isEmail: false,
  },
];

// ─── Transparency Commitments ─────────────────────────────────────────────────
const transparencyItems = [
  {
    icon: BarChart3,
    title: "Activities & Impact Reports",
    description:
      "ECH Institute publishes comprehensive reports documenting every major activity: the number of EIPs coordinated, ACD calls documented, educational episodes produced, WiEP cohorts run, and upgrade milestones delivered. Impact is measured against stated program goals, not vanity metrics.",
  },
  {
    icon: DollarSign,
    title: "Use of Funds Disclosure",
    description:
      "All revenue sources — grants, sponsorships, donations, and staking rewards — are disclosed in ECH Institute's annual report. Expenditures by program area (coordination, education, inclusion, operations) are also published. There are no undisclosed conflicts of interest or private funding arrangements.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Initiatives Tracker",
    description:
      "Current active programs, their status, and their funding sources are published on GitHub and updated regularly. Community members can follow active initiatives, raise concerns, and contribute to program planning through public channels.",
  },
  {
    icon: Star,
    title: "Annual Report Publication",
    description:
      "ECH Institute's first annual report was published in 2024. Subsequent reports are published annually and cover financials, program outputs, board governance, and forward-looking priorities. Reports are freely available as PDFs.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const DONATION_ADDRESS = "0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC";

function ConnectButtonClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="h-10 min-w-[140px] rounded-lg bg-[#262626] animate-pulse" aria-hidden />
    );
  }
  return <ConnectButton showBalance={false} accountStatus={"avatar"} />;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#262626] bg-[#1B1B1E] text-amber-500 transition-all hover:bg-[#262626] active:scale-95"
      title="Copy address"
    >
      {copied ? <CheckCircle2 size={15} /> : <div className="text-[10px] font-bold">COPY</div>}
    </button>
  );
}

function EthereumLogo({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 879.4" aria-hidden>
      <path d="m269.9 325.2-269.9 122.7 269.9 159.6 270-159.6z" opacity=".6" />
      <path d="m0.1 447.8 269.9 159.6v-607.4z" opacity=".45" />
      <path d="m270 0v607.4l269.9-159.6z" opacity=".8" />
      <path d="m0 499 269.9 380.4v-220.9z" opacity=".45" />
      <path d="m269.9 658.5v220.9l270.1-380.4z" opacity=".8" />
    </svg>
  );
}

export default function SupportPage() {
  const [activeSection, setActiveSection] = useState("donate");
  const [openPillars, setOpenPillars] = useState<Record<number, boolean>>({ 0: true });
  const [openWays, setOpenWays] = useState<Record<number, boolean>>({ 2: true });
  const observerRef = useRef<IntersectionObserver | null>(null);

  const togglePillar = (i: number) => setOpenPillars(prev => ({ ...prev, [i]: !prev[i] }));
  const toggleWay = (i: number) => setOpenWays(prev => ({ ...prev, [i]: !prev[i] }));

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    NAV_SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#151419] pt-16 lg:pt-24 text-[#FBFBFB]">

      {/* ── Hero — "proplay" inner-page style ──────────────── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          {/* Left Column: Text */}
          <div className="flex flex-col">
            <div className="page-hero-tag">
              <span className="page-hero-dot" />
              501(c)(3) Public Charity
            </div>
            <h1 className="page-hero-title">
              Support <em>ECH</em><br />Institute
            </h1>
            <p className="page-hero-desc">
              Ethereum governance is a public good. The processes that enable Ethereum to evolve are
              critical — but often underfunded. ECH Institute ensures these processes remain open,
              transparent, and accessible.
            </p>
            <div className="page-hero-actions">
              <button onClick={() => scrollToSection("donate")} className="btn btn-primary">
                <Heart className="h-4 w-4" /> Make a Donation
              </button>
              <button onClick={() => scrollToSection("why-support")} className="btn btn-outline">
                Learn Why It Matters
              </button>
            </div>
          </div>

          {/* Right Column: Icon Visualization */}
          <div className="hidden lg:flex justify-center items-center relative w-full h-[350px]">
            {/* Background glowing effects */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[200px] h-[200px] bg-[#F5A51D]/10 rounded-full blur-[80px]" />
              <div className="absolute w-[180px] h-[180px] border border-[#F5A51D]/20 rounded-full animate-[ping_4s_linear_infinite]" />
              <div className="absolute w-[300px] h-[300px] border border-[var(--border-soft)] rounded-full opacity-10 animate-[ping_6s_linear_infinite]" />
            </div>
            <div className="relative z-10 proplay-icon-container flex items-center justify-center h-48 w-48 rounded-full border-4 border-[#151419] bg-[#1B1B1E] shadow-2xl shadow-[#F5A51D]/20">
              <Heart className="h-24 w-24 text-brand-yellow drop-shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Stats ──────────────────────────────────────────────────── */}
      <section className="border-b border-[#262626] bg-[#1B1B1E] py-6 md:py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "2024", label: "Incorporated as 501(c)(3)" },
              { value: "100+", label: "PEEPanEIP Episodes" },
              { value: "124.23K", label: "OP Grant Received" },
              { value: "0%", label: "Private Conflicts of Interest" },
            ].map((s, i) => (
              <div key={i}>
                <div className="global-section-title text-brand-yellow">{s.value}</div>
                <div className="text-sm text-[#FBFBFB] font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-col layout: sticky nav + content ──────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex gap-8 items-start">

        {/* Sticky Left Nav */}
                <StickySideNav sections={NAV_SECTIONS} activeSection={activeSection} onSectionClick={scrollToSection} />

        {/* Main content */}
        <div className="flex-1 min-w-0 flex flex-col gap-10 md:gap-16">

          {/* ── Make a Donation ───────────────────────────────────────────── */}
          <section id="donate">
            <span className="global-section-tag">Direct Donation</span>
            <h2 className="global-section-title">Make a <em>Donation</em></h2>
            <p className="global-body-lg mb-5">
              Send ETH directly to the ECH Institute treasury address below. As a 501(c)(3) charitable
              organization, your contribution may be tax-deductible under U.S. law.
            </p>

            <div className="global-card p-0 overflow-hidden bg-[#1B1B1E] border-[#262626]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left — mission text */}
                <div className="lg:col-span-7 p-5 md:p-6">
                  <h3 className="global-card-title mb-3">Support Our Mission</h3>
                  <div className="space-y-3 text-[#FBFBFB]">
                    <p className="global-body">
                      Thank you for supporting ECH Institute. Your contribution directly funds EIP process
                      coordination, upgrade communication, educational content production, and inclusion
                      programs that make Ethereum governance accessible to everyone.
                    </p>
                    <p className="global-body">
                      ECH Institute is committed to ensuring that the Ethereum ecosystem remains
                      decentralized, well-coordinated, and accessible for all participants — not just
                      insiders.
                    </p>
                    <p className="global-body">
                      Your contribution fuels accessible resources, critical meeting coordination,
                      governance documentation, and inclusivity programs across the Ethereum ecosystem.
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "EIP coordination",
                      "Upgrade communication",
                      "PEEPanEIP series",
                      "WiEP program",
                      "ACD documentation",
                      "Open governance records",
                    ].map((tag, j) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 text-xs font-medium text-[#FBFBFB] bg-[#1B1B1E] border border-[#262626] rounded-full px-3 py-1"
                      >
                        <CheckCircle2 size={11} className="text-brand-yellow" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — wallet card */}
                <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#262626]">
                  <div className="h-full flex flex-col p-5 md:p-6">
                    <div className="mb-3 flex items-start gap-2.5">
                      <div className="proplay-icon-container h-10 w-10 shrink-0">
                        <Wallet className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="global-card-title mb-0.5">Treasury Address</p>
                        <p className="text-xs text-[#FBFBFB]/60">Ethereum Mainnet</p>
                      </div>
                    </div>

                    <div className="relative group mb-4">
                      <p className="global-body break-all font-mono text-xs sm:text-sm leading-snug text-[#FBFBFB] bg-[#151419] rounded-lg p-3 sm:p-4 border border-[#262626] [word-break:break-all]">
                        {DONATION_ADDRESS}
                      </p>
                      <div className="absolute top-2 right-2">
                        <CopyButton text={DONATION_ADDRESS} />
                      </div>
                    </div>

                    <div className="mb-4 flex justify-center">
                      <ConnectButtonClient />
                    </div>

                    <div className="mt-auto flex flex-wrap items-center justify-center gap-2 border-t border-[#262626] pt-3">
                      <span className="global-body text-xs text-[#FBFBFB]/60">Supported network</span>
                      <EthereumLogo className="h-5 w-5 shrink-0" />
                      <span className="global-body text-xs font-semibold text-[#FBFBFB]">Ethereum</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Why Support ECH Institute ────────────────────────────────── */}
          <section id="why-support">
            <span className="global-section-tag">The Case for Support</span>
            <h2 className="global-section-title">Why Support <em>ECH Institute</em></h2>
            <p className="global-body-lg mb-5">
              Ethereum governance is critical public infrastructure. ECH Institute is the neutral
              institution that keeps it operational, open, and accessible to everyone.
            </p>

            <div className="flex flex-col gap-3">
              {whySupportPillars.map((pillar, i) => {
                const isOpen = openPillars[i];
                return (
                  <div key={i} data-tone={pillar.tone} className="global-card p-0 overflow-hidden bg-[#1B1B1E] border-[#262626]">
                    <button
                      className="w-full flex items-center gap-4 p-4 text-left hover:bg-[#262626] transition-colors"
                      onClick={() => togglePillar(i)}
                    >
                      <div className="tone-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                        <pillar.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-bold text-base text-[#FBFBFB]">{pillar.title}</span>
                          <span className="tone-badge text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full hidden sm:inline">
                            {pillar.tag}
                          </span>
                        </div>
                        <p className="global-body text-sm text-[#FBFBFB]/80">{pillar.summary}</p>
                      </div>
                      <ChevronDown
                        size={16}
                        className={cn("text-[#FBFBFB]/40 shrink-0 transition-transform duration-200", isOpen && "is-open")}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#262626] px-4 pb-4 pt-4">
                        <p className="global-body text-sm mb-4 leading-relaxed text-[#FBFBFB]/90">{pillar.detail}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {pillar.highlights.map((h, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <div className="tone-icon flex h-5 w-5 !rounded-full shrink-0 items-center justify-center mt-0.5">
                                <CheckCircle2 size={11} />
                              </div>
                              <span className="text-sm text-[#FBFBFB]/70 leading-snug">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quote banner */}
            <div className="global-card global-border-yellow bg-[#1B1B1E] border-[#262626] mt-5">
              <div className="text-3xl sm:text-5xl font-black leading-none text-[#F5A51D] opacity-40">&ldquo;</div>
              <blockquote className="text-lg sm:text-xl font-extrabold text-[#FBFBFB] leading-snug -mt-4">
                Ethereum&apos;s governance infrastructure is just as important as its technical infrastructure —
                and it needs the same level of sustained, independent support.
              </blockquote>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#F5A51D] mt-4">ECH Institute Mission</p>
            </div>
          </section>

          {/* ── What Your Support Enables ────────────────────────────────── */}
          <section id="what-enables">
            <span className="global-section-tag">Your Impact</span>
            <h2 className="global-section-title">What Your Support <em>Enables</em></h2>
            <p className="global-body-lg mb-5">
              Every contribution directly funds one or more of these core program areas. Here is exactly
              what your support makes possible.
            </p>

            <div className="flex flex-col gap-4">
              {enablesItems.map((item, i) => (
                <div
                  key={i}
                  data-tone={item.tone}
                  className="global-card flex gap-4 hover:border-[#F5A51D]/50 transition-colors bg-[#1B1B1E] border-[#262626]"
                >
                  <div className="tone-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl mt-0.5">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="global-card-title mb-1 text-[#FBFBFB]">{item.title}</h3>
                    <p className="global-body text-sm mb-3 text-[#FBFBFB]/80">{item.description}</p>
                    <div className="tone-badge inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full">
                      <Target size={11} />
                      {item.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Ways to Support ──────────────────────────────────────────── */}
          <section id="ways-to-support">
            <span className="global-section-tag">Support Options</span>
            <h2 className="global-section-title">Ways to <em>Support</em></h2>
            <p className="global-body-lg mb-5">
              ECH Institute accepts support in multiple forms to make it easy for individuals,
              organizations, and institutions to contribute.
            </p>

            <div className="flex flex-col gap-3">
              {wayItems.map((way, i) => {
                const isOpen = openWays[i];
                return (
                  <div key={i} data-tone={way.tone} className="global-card p-0 overflow-hidden bg-[#1B1B1E] border-[#262626]">
                    <button
                      className="w-full flex items-center gap-4 p-4 text-left hover:bg-[#262626] transition-colors"
                      onClick={() => toggleWay(i)}
                    >
                      <div className="tone-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                        <way.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-bold text-base text-[#FBFBFB]">{way.title}</span>
                          <span className="tone-badge text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full hidden sm:inline">
                            {way.subtitle}
                          </span>
                        </div>
                        <p className="global-body text-sm text-[#FBFBFB]/60 line-clamp-1">{way.description.slice(0, 90)}…</p>
                      </div>
                      <ChevronDown
                        size={16}
                        className={cn("text-[#FBFBFB]/40 shrink-0 transition-transform duration-200", isOpen && "is-open")}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#262626] px-4 pb-4 pt-4">
                        <p className="global-body text-sm mb-4 leading-relaxed text-[#FBFBFB]/90">{way.description}</p>
                        <div className="flex flex-col gap-2.5 mb-4">
                          {way.process.map((step, j) => (
                            <div key={j} className="flex items-start gap-3">
                              <div className="tone-icon flex h-5 w-5 !rounded-full text-[10px] font-bold shrink-0 items-center justify-center mt-0.5">
                                {j + 1}
                              </div>
                              <span className="text-sm text-[#FBFBFB]/70 leading-snug">{step}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={way.isEmail ? `mailto:${EXTERNAL_LINKS.email.replace("mailto:", "")}` : way.href}
                          target={way.isEmail ? "_self" : "_self"}
                          className="tone-badge inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg border-2 transition-all hover:opacity-80"
                        >
                          {way.cta} <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Ecosystem Impact ──────────────────────────────────────────── */}
          <section id="ecosystem-impact">
            <EcosystemImpact />
          </section>

          {/* ── Funding Model ─────────────────────────────────────────────── */}
          <section id="funding-model">
            <span className="global-section-tag">Funding Model</span>
            <h2 className="global-section-title">Sustainable Funding for <em>Public Goods</em></h2>
            <p className="global-body-lg mb-5">
              ECH Institute diversifies revenue across four pillars — donations, grants, stewardship
              programs, and staking-based rewards — so we stay independent, transparent, and aligned with
              our nonprofit mission.
            </p>
            <div className="global-card p-0 overflow-hidden bg-[#1B1B1E] border-[#262626]">
              <div className="border-b border-[#262626] bg-[#151419]/60 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FBFBFB]/40">Revenue Breakdown</p>
              </div>
              <div className="px-5 py-5">
                <FundingVisualization />
              </div>
            </div>

            {/* OP Grant highlight card */}
            <div className="global-card mt-4 bg-[#1B1B1E] border-[#262626] relative overflow-hidden">
              {/* Top accent line — Optimism red-orange */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF0420] to-transparent" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* OP Logo pill */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF0420]/10 border border-[#FF0420]/30">
                    <span className="text-lg font-black text-[#FF0420]">OP</span>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF0420]">Optimism Grant</p>
                    <p className="text-[11px] text-[#FBFBFB]/50 font-medium">Retroactive Public Goods Funding</p>
                  </div>
                </div>
                {/* Divider */}
                <div className="hidden sm:block h-12 w-[1px] bg-[#262626]" />
                {/* Amount */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-black text-[#FBFBFB] tracking-tight">124.23K</span>
                    <span className="text-base font-black text-[#FF0420]">OP</span>
                  </div>
                  <p className="text-sm text-[#FBFBFB]/60 leading-relaxed">
                    Awarded by the Optimism Collective in recognition of ECH Institute&apos;s contributions to
                    Ethereum public goods — coordination infrastructure, governance documentation, and
                    open education programs.
                  </p>
                </div>
                {/* CTA */}
                <div className="shrink-0">
                  <Link
                    href="https://app.optimism.io/retropgf"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg border border-[#FF0420]/40 bg-[#FF0420]/8 text-[#FF0420] hover:bg-[#FF0420]/15 transition-all"
                  >
                    View on Optimism <ExternalLink size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── Transparency Commitment ───────────────────────────────────── */}
          <section id="transparency">
            <span className="global-section-tag">Accountability</span>
            <h2 className="global-section-title">Transparency <em>Commitment</em></h2>
            <p className="global-body-lg mb-5">
              We publish regular reports outlining our activities, use of funds, and ongoing initiatives.
              Here is exactly what we disclose and how.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {transparencyItems.map((item, i) => (
                <div key={i} className="global-card flex flex-col gap-3 hover:border-[#F5A51D]/50 transition-colors bg-[#1B1B1E] border-[#262626]">
                  <div className="proplay-icon-container h-10 w-10 flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="global-card-title text-[#FBFBFB]">{item.title}</h3>
                  <p className="global-body text-sm text-[#FBFBFB]/80">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="global-card global-border-yellow bg-[#1B1B1E] border-[#262626] mt-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div className="flex items-start gap-4">
                  <span className="proplay-icon-container h-11 w-11 flex-shrink-0">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="global-card-title text-[#FBFBFB]">Read the Annual Report</h3>
                    <p className="global-body text-sm mt-1 max-w-md text-[#FBFBFB]/70">
                      ECH Institute&apos;s annual report provides a full accounting of activities, funding,
                      and program outcomes. Published annually and freely available.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <Link
                    href={EXTERNAL_LINKS.annualReport}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Annual Report
                  </Link>
                  <Link
                    href={EXTERNAL_LINKS.github}
                    target="_blank"
                    className="btn btn-outline border-[#262626] text-[#FBFBFB]"
                  >
                    <MessageSquare className="h-4 w-4" />
                    GitHub Records
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── Disclaimer ────────────────────────────────────────────────── */}
          <section id="disclaimer" className="global-card bg-[#1B1B1E] border-[#262626] p-5 md:p-6">
            <h2 className="global-card-title mb-3 text-[#FBFBFB]">Disclaimer</h2>
            <div className="space-y-2.5">
              <p className="global-body text-[#FBFBFB]/80">
                ECH Institute Inc. is a non-partisan 501(c)(3) tax-exempt charitable organization and
                operates in accordance with federal, state, and local nonprofit law in the United States.
              </p>
              <p className="global-body text-[#FBFBFB]/80">
                Contributions are voluntary and non-refundable; tax treatment depends on your situation
                and U.S. law. Fiat and cryptocurrency gifts are used only for charitable purposes. For a
                receipt, share donor details when you give or soon after. IRC Section 170 may apply.
              </p>
              <p className="global-body text-[#FBFBFB]/80">
                Questions:{" "}
                <a
                  href={EXTERNAL_LINKS.email}
                  className="font-semibold text-[#F5A51D] underline-offset-2 hover:underline"
                >
                  team@ethcatherders.com
                </a>
                .
              </p>
              <p className="global-body text-[#FBFBFB]/60">
                Thank you for supporting ECH Institute and Ethereum&apos;s public-good coordination.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
