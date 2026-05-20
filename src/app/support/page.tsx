"use client";

import { useState, useEffect, useRef } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Heart, Wallet, Shield, BookOpen, Globe, Users,
  ArrowRight, CheckCircle2, ExternalLink, ChevronDown,
  TrendingUp, FileText, GitBranch, Award, Target,
  DollarSign, Gift, Building2, Star, Lock, Eye,
  BarChart3, Calendar, MessageSquare, Network as NetworkIcon,
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
  { id: "questions", label: "Questions" },
];

// ─── Why Support pillars ────────────────────────────────────────────────────
const whySupportPillars = [
  {
    icon: Shield,
    title: "Ethereum Governance is a Public Good",
    tag: "Core Mission",
    tone: "info",
    summary:
      "The processes that enable Ethereum to evolve are critical infrastructure but they are systematically underfunded.",
    detail:
      "Ethereum has no central authority. Protocol decisions are made through open, community-driven governance processes: EIP discussions, All Core Devs calls, EIPIP coordination, and network upgrade communication. These processes are foundational to everything built on Ethereum yet they receive a tiny fraction of the funding flowing into the ecosystem. ECH Institute ensures these critical coordination mechanisms remain operational, neutral, and accessible to all participants. Without sustained support, the very infrastructure that makes Ethereum's decentralized governance possible may degrade.",
    highlights: [
      "No central authority governance is a shared responsibility",
      "EIP process underpins every Ethereum upgrade",
      "Public goods require independent funding",
      "501(c)(3) nonprofit no token, no VC alignment",
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
      "Open governance means that anyone regardless of background, nationality, or technical expertise can observe, participate in, and contribute to Ethereum protocol decisions. ECH Institute's role is to maintain the scaffolding that makes this possible: documenting All Core Devs calls, running EIP editor office hours, hosting open EIPIP coordination meetings, and keeping historical records publicly accessible. As a neutral 501(c)(3), ECH Institute holds no protocol authority and advocates for no specific agenda. Its only mandate is to support the process itself.",
    highlights: [
      "Open EIPIP calls anyone can join",
      "ACD notes published in full on GitHub",
      "No private governance channels",
      "Neutral facilitation no protocol agenda",
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
      "Transparency is not just a commitment it is a structural feature of how ECH Institute operates. Every major program, funding source, and operational expenditure is documented and disclosed. Annual reports cover not only financial information but also specific outputs: the number of meetings coordinated, EIPs shepherded, educational resources produced, and communities reached. This level of accountability is rare in the crypto ecosystem and reflects ECH Institute's commitment to operating as a genuinely public-serving institution.",
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
      "PEEPanEIP: 150+ accessible video episodes",
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
    icon: NetworkIcon,
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
    impact: "150+ PEEPanEIP episodes | 3 learning tracks",
    tone: "violet",
  },
  {
    icon: Users,
    title: "Inclusion & Onboarding Programs",
    description:
      "WiEP (Women in Ethereum Protocol) provides structured classroom sessions, mentorship, and study groups for women entering Ethereum protocol development. Similar programs are planned for other underrepresented groups. These initiatives are not just equity work they directly expand the contributor pool and improve the resilience of Ethereum's governance infrastructure.",
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
      "All revenue sources grants, sponsorships, donations, and staking rewards are disclosed in ECH Institute's annual report. Expenditures by program area (coordination, education, inclusion, operations) are also published. There are no undisclosed conflicts of interest or private funding arrangements.",
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
      <div className="h-10 min-w-[140px] rounded-lg bg-darkGray animate-pulse" aria-hidden />
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
      className="inline-flex h-8 px-3 items-center justify-center gap-1.5 rounded-md border border-accent/30 bg-accent/10 text-accent transition-all hover:bg-accent/20 active:scale-95"
      title="Copy address"
    >
      {copied ? (
        <CheckCircle2 size={14} className="shrink-0" />
      ) : (
        <span className="text-[10px] font-bold tracking-widest">COPY</span>
      )}
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
  const [openPillars, setOpenPillars] = useState<Record<number, boolean>>({});
  const [openWays, setOpenWays] = useState<Record<number, boolean>>({});
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
    <main className="support-page-dark min-h-screen bg-black pt-16 lg:pt-24 text-white">

      {/* ── Hero "proplay" inner-page style ──────────────── */}
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
              critical but often underfunded. ECH Institute ensures these processes remain open,
              transparent, and accessible.
            </p>
            <div className="page-hero-actions mt-4">
              <button onClick={() => scrollToSection("donate")} className="btn btn-primary !text-white gap-2.5">
                <Heart className="h-4 w-4" /> Make a Donation
              </button>
              <button onClick={() => scrollToSection("why-support")} className="btn btn-outline !text-white !border-white/40">
                Learn Why It Matters
              </button>
            </div>
          </div>

          {/* Right Column: Cat mascot */}
          <div className="hidden lg:flex justify-center items-end relative w-full h-[380px]">
            <img
              src="/assets/logo/cat5.png"
              alt="ECH Institute mascot"
              className="h-full w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      {/* ── Impact Stats ──────────────────────────────────────────────────── */}
      <section className="border-b border-border py-6 md:py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "501(c)", label: "Public Charity Status" },
              { value: "150+", label: "PEEPanEIP Videos" },
              { value: "120+", label: "EIPIP Meetings" },
              { value: "0%", label: "Private Interests" },
            ].map((s, i) => (
              <div key={i}>
                <div className="global-section-title text-brand-yellow">{s.value}</div>
                <div className="text-sm text-white font-medium mt-0.5">{s.label}</div>
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

            <div className="global-card p-0 overflow-hidden bg-[var(--surface-card-theme)] border-[var(--border-soft)] shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left mission text */}
                <div className="lg:col-span-7 p-6 md:p-8 lg:p-10">
                  <h3 className="global-card-title mb-4 text-[var(--text-base)]">Support Our Mission</h3>
                  <div className="space-y-4">
                    <p className="global-body text-[var(--text-soft)]">
                      Thank you for supporting ECH Institute. Your contribution directly funds EIP process
                      coordination, upgrade communication, educational content production, and inclusion
                      programs that make Ethereum governance accessible to everyone.
                    </p>
                    <p className="global-body text-[var(--text-soft)]">
                      ECH Institute is committed to ensuring that the Ethereum ecosystem remains
                      decentralized, well-coordinated, and accessible for all participants not just
                      insiders.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {[
                      "EIP coordination",
                      "Upgrade communication",
                      "PEEPanEIP series",
                      "WiEP program",
                      "ACD documentation",
                      "Open governance records",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--text-base)] bg-[var(--background)] border border-[var(--border-soft)] rounded-full px-4 py-2 hover:border-[var(--accent-brand)] transition-colors"
                      >
                        <CheckCircle2 size={12} className="!text-[#FBFBFB] shrink-0 p-0.5 rounded-full bg-[var(--accent-brand)]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right wallet card */}
                <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[var(--border-soft)] bg-[var(--background)]/30">
                  <div className="h-full flex flex-col p-6 md:p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="proplay-icon-container h-12 w-12 shrink-0 shadow-lg">
                        <Wallet className="h-6 w-6 !text-[#FBFBFB]" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="global-card-title mb-0.5 text-[var(--text-base)]">Treasury Address</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent-brand)]">Ethereum Mainnet</p>
                      </div>
                    </div>

                    <div className="relative mb-6 group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-brand)] to-orange-600 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
                      <p className="relative global-body break-all font-mono text-[13px] leading-relaxed text-[var(--text-base)] bg-[var(--surface-card-theme)] rounded-xl p-4 pr-14 border border-[var(--border-soft)] shadow-inner" style={{ wordBreak: 'break-all' }}>
                        {DONATION_ADDRESS}
                      </p>
                      <div className="absolute top-1/2 -translate-y-1/2 right-3">
                        <CopyButton text={DONATION_ADDRESS} />
                      </div>
                    </div>

                    <div className="mb-6 flex flex-col items-center gap-4 w-full">
                      <div className="w-full flex justify-center">
                        <ConnectButtonClient />
                      </div>
                      <p className="text-[10px] text-[var(--text-soft)] font-medium text-center italic">Connect your wallet to donate directly</p>
                    </div>

                    <div className="mt-auto flex flex-wrap items-center justify-center gap-3 border-t border-[var(--border-soft)] pt-6">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-soft)]">Network</span>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-card-theme)] border border-[var(--border-soft)]">
                        <EthereumLogo className="h-4 w-4 shrink-0 fill-[var(--accent-brand)]" />
                        <span className="text-xs font-black text-[var(--text-base)]">Ethereum</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="why-support">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-8 bg-accent" />
              <span className="global-section-tag mb-0">The Case for Support</span>
            </div>
            <h2 className="global-section-title mb-3">Why Support <em>ECH Institute</em></h2>
            <p className="global-body-lg mb-6">
              Ethereum governance is critical public infrastructure. ECH Institute is the neutral
              institution that keeps it operational, open, and accessible to everyone.
            </p>

            <div className="flex flex-col gap-3">
              {whySupportPillars.map((pillar, i) => {
                const isOpen = openPillars[i];
                return (
                  <div
                    key={i}
                    className={cn(
                      "rounded-xl overflow-hidden border transition-all duration-300",
                      isOpen
                        ? "border-accent  shadow-[0_0_20px_rgba(245,165,29,0.08)]"
                        : "border-border  hover:border-accent/60"
                    )}
                  >
                    {/* Yellow left accent bar when open */}
                    <div className={cn("flex", isOpen && "border-l-2 border-accent")}>
                      <button
                        className="w-full flex items-center gap-4 p-4 md:p-5 text-left transition-colors"
                        onClick={() => togglePillar(i)}
                      >
                        <div className="proplay-icon-container h-11 w-11 shrink-0">
                          <pillar.icon className="h-5 w-5 !text-[#FBFBFB]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-[15px] text-white">{pillar.title}</span>
                            <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 hidden sm:inline">
                              {pillar.tag}
                            </span>
                          </div>
                          <p className="global-body text-sm text-white/70">{pillar.summary}</p>
                        </div>
                        <ChevronDown
                          size={16}
                          className={cn(
                            "shrink-0 transition-transform duration-300",
                            isOpen ? "rotate-180 text-accent" : "!text-[#FBFBFB]/30"
                          )}
                        />
                      </button>
                    </div>

                    {isOpen && (
                      <div className="border-t border-accent/20 px-5 pb-5 pt-4">
                        <p className="global-body text-sm mb-4 leading-relaxed text-white/85">{pillar.detail}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {pillar.highlights.map((h, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <div className="proplay-icon-container h-5 w-5 !rounded-full shrink-0 mt-0.5">
                                <CheckCircle2 size={10} className="!text-[#FBFBFB]" />
                              </div>
                              <span className="text-sm text-white/75 leading-snug">{h}</span>
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
            <div className="mt-6 rounded-xl border border-accent/40 bg-accent/5 p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-xl" />
              <div className="pl-2">
                <div className="text-4xl sm:text-5xl font-black leading-none text-accent opacity-50">&ldquo;</div>
                <blockquote className="text-base sm:text-lg font-bold text-white leading-snug -mt-3">
                  Ethereum&apos;s governance infrastructure is just as important as its technical infrastructure
                  and it needs the same level of sustained, independent support.
                </blockquote>
                <p className="text-[10px] font-black uppercase tracking-widest text-accent mt-4">ECH Institute Mission</p>
              </div>
            </div>
          </section>

          {/* ── What Your Support Enables ────────────────────────────────── */}
          <section id="what-enables">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-8 bg-accent" />
              <span className="global-section-tag mb-0">Your Impact</span>
            </div>
            <h2 className="global-section-title mb-3">What Your Support <em>Enables</em></h2>
            <p className="global-body-lg mb-6">
              Every contribution directly funds one or more of these core program areas. Here is exactly
              what your support makes possible.
            </p>

            <div className="flex flex-col gap-3">
              {enablesItems.map((item, i) => (
                <div
                  key={i}
                  className="group flex gap-0 rounded-xl border border-border hover:border-accent/70 hover:shadow-[0_0_20px_rgba(245,165,29,0.07)] transition-all duration-300 overflow-hidden"
                >
                  {/* Yellow left bar on hover */}
                  <div className="w-1 shrink-0 bg-darkGray group-hover:bg-accent transition-colors duration-300" />
                  <div className="flex gap-4 p-4 md:p-5 flex-1 min-w-0">
                    <div className="proplay-icon-container h-11 w-11 shrink-0 mt-0.5">
                      <item.icon className="h-5 w-5 !text-[#FBFBFB]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-[15px] text-white mb-1">{item.title}</div>
                      <p className="global-body text-sm mb-3 text-white/70 leading-relaxed">{item.description}</p>
                      <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/30">
                        <Target size={11} className="!text-[#FBFBFB]" />
                        {item.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Ways to Support ──────────────────────────────────────────── */}
          <section id="ways-to-support">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-8 bg-accent" />
              <span className="global-section-tag mb-0">Support Options</span>
            </div>
            <h2 className="global-section-title mb-3">Ways to <em>Support</em></h2>
            <p className="global-body-lg mb-6">
              ECH Institute accepts support in multiple forms to make it easy for individuals,
              organizations, and institutions to contribute.
            </p>

            <div className="flex flex-col gap-3">
              {wayItems.map((way, i) => {
                const isOpen = openWays[i];
                return (
                  <div
                    key={i}
                    className={cn(
                      "rounded-xl overflow-hidden border transition-all duration-300",
                      isOpen
                        ? "border-accent shadow-[0_0_20px_rgba(245,165,29,0.08)]"
                        : "border-border hover:border-accent/60"
                    )}
                  >
                    <div className={cn("flex", isOpen && "border-l-2 border-accent")}>
                      <button
                        className="w-full flex items-center gap-4 p-4 md:p-5 text-left transition-colors hover:bg-[#222222]"
                        onClick={() => toggleWay(i)}
                      >
                        <div className="proplay-icon-container h-11 w-11 shrink-0">
                          <way.icon className="h-5 w-5 !text-[#FBFBFB]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-[15px] text-white">{way.title}</span>
                            <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 hidden sm:inline">
                              {way.subtitle}
                            </span>
                          </div>
                          <p className="global-body text-sm text-white/60 line-clamp-1">{way.description.slice(0, 90)}…</p>
                        </div>
                        <ChevronDown
                          size={16}
                          className={cn(
                            "shrink-0 transition-transform duration-300",
                            isOpen ? "rotate-180 text-accent" : "!text-[#FBFBFB]/30"
                          )}
                        />
                      </button>
                    </div>

                    {isOpen && (
                      <div className="border-t border-accent/20 px-5 pb-5 pt-4">
                        <p className="global-body text-sm mb-5 leading-relaxed text-white/85">{way.description}</p>
                        <div className="flex flex-col gap-3 mb-5">
                          {way.process.map((step, j) => (
                            <div key={j} className="flex items-start gap-3">
                              <div className="proplay-icon-container h-6 w-6 !rounded-full text-[11px] font-black shrink-0 mt-0.5">
                                {j + 1}
                              </div>
                              <span className="text-sm text-white/75 leading-snug pt-0.5">{step}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={way.isEmail ? `mailto:${EXTERNAL_LINKS.email.replace("mailto:", "")}` : way.href}
                          target={way.isEmail ? "_self" : "_self"}
                          className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg bg-accent text-white hover:bg-accent/90 transition-all"
                        >
                          {way.cta} <ArrowRight size={14} className="!text-[#FBFBFB]" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* EcosystemImpact section removed per design update */}

          {/* ── Funding Model ─────────────────────────────────────────────── */}
          <section id="funding-model">
            <span className="global-section-tag">Funding Model</span>
            <h2 className="global-section-title">Sustainable Funding for <em>Public Goods</em></h2>
            <p className="global-body-lg mb-5">
              ECH Institute diversifies revenue across four pillars donations, grants, stewardship
              programs, and staking-based rewards so we stay independent, transparent, and aligned with
              our nonprofit mission.
            </p>
            <div className="global-card p-0 overflow-hidden bg-[var(--surface-card-theme)] border-[var(--border-soft)] shadow-xl">
              <div className="border-b border-[var(--border-soft)] bg-[var(--background)]/40 px-6 py-4 flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-soft)]">Revenue Breakdown</p>
                <div className="flex gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-brand)] animate-pulse" />
                  <span className="text-[9px] font-black uppercase text-[var(--accent-brand)]">Live Allocation</span>
                </div>
              </div>
              <div className="px-6 py-8">
                <FundingVisualization />
              </div>
            </div>

            {/* OP Grant highlight card */}
            <div className="global-card mt-4 border-border relative overflow-hidden">
              {/* Top accent line Brand yellow */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5A51D] to-transparent" />
              <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                {/* OP Logo pill */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/30">
                    <span className="text-lg font-black text-accent">OP</span>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Optimism Grant</p>
                    <p className="text-[11px] text-white/50 font-medium">Retroactive Public Goods Funding</p>
                  </div>
                </div>
                {/* Divider */}
                <div className="hidden lg:block h-12 w-[1px] bg-darkGray" />
                {/* Amount */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-black text-white tracking-tight">124.23K</span>
                    <span className="text-base font-black text-accent">OP</span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Awarded by the Optimism Collective in recognition of ECH Institute&apos;s contributions to
                    Ethereum public goods coordination infrastructure, governance documentation, and
                    open education programs.
                  </p>
                </div>
                {/* CTA */}
                <div className="shrink-0">
                  <Link
                    href="https://app.optimism.io/retropgf"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg border border-accent/40 bg-accent/8 text-accent hover:bg-accent/15 transition-all"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {transparencyItems.map((item, i) => (
                <div key={i} className="global-card flex flex-col gap-3 hover:border-accent/50 transition-colors border-border">
                  <div className="proplay-icon-container h-10 w-10 flex-shrink-0">
                    <item.icon className="h-5 w-5 !text-[#FBFBFB]" />
                  </div>
                  <h3 className="global-card-title text-white">{item.title}</h3>
                  <p className="global-body text-sm text-white/80">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="global-card global-border-yellow border-border mt-5 p-6 md:p-8">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <span className="proplay-icon-container h-12 w-12 flex-shrink-0 shadow-lg">
                    <FileText className="h-6 w-6 !text-[#FBFBFB]" />
                  </span>
                  <div className="flex-1">
                    <h3 className="global-card-title text-white text-2xl !mb-2">Read the Annual Report</h3>
                    <p className="global-body text-sm md:text-base mt-1 max-w-3xl text-white/70 leading-relaxed">
                      ECH Institute&apos;s annual report provides a full accounting of activities, funding,
                      and program outcomes. Published annually and freely available.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 border-t border-white/5 pt-6">
                  <Link
                    href={EXTERNAL_LINKS.annualReport2026}
                    target="_blank"
                    className="btn btn-primary px-8 py-3 h-auto min-h-[50px] flex items-center justify-center gap-2 group"
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    Latest Annual Report
                  </Link>
                  <Link
                    href={EXTERNAL_LINKS.annualReport2024}
                    target="_blank"
                    className="btn btn-outline border-white/20 text-white px-8 py-3 h-auto min-h-[50px] flex items-center justify-center gap-2 hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Previous Report
                  </Link>
                  <Link
                    href={EXTERNAL_LINKS.github}
                    target="_blank"
                    className="btn btn-outline border-white/20 text-white px-8 py-3 h-auto min-h-[50px] flex items-center justify-center gap-2 hover:bg-white/10"
                  >
                    <MessageSquare className="h-4 w-4 !text-[#FBFBFB]" />
                    GitHub Records
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── Questions ─────────────────────────────────────────────────── */}
          <section id="questions" className="global-card border-border p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="proplay-icon-container h-10 w-10 shrink-0">
                <MessageSquare className="h-5 w-5 !text-[#FBFBFB]" />
              </div>
              <h2 className="global-card-title text-white mb-0">Questions</h2>
            </div>
            <div className="space-y-2.5">
              <p className="global-body text-white/80">
                ECH Institute Inc. is a non-partisan 501(c)(3) tax-exempt charitable organization and
                operates in accordance with federal, state, and local nonprofit law in the United States.
              </p>
              <p className="global-body text-white/80">
                Contributions are voluntary and non-refundable; tax treatment depends on your situation
                and U.S. law. Fiat and cryptocurrency gifts are used only for charitable purposes. For a
                receipt, share donor details when you give or soon after. IRC Section 170 may apply.
              </p>
              <p className="global-body text-white/80">
                ? : {" "}
                <a
                  href={EXTERNAL_LINKS.email}
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  team@ethcatherders.com
                </a>
                .
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-accent border border-accent/30 bg-accent/10 rounded-lg px-3 py-2">
                <Heart size={14} className="shrink-0" />
                Thank you for supporting ECH Institute and Ethereum&apos;s public-good coordination.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
