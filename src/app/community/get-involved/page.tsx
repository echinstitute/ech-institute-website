'use client';

import React, { useState } from "react";
import {
  MessageSquare, ExternalLink, Users, Code, Shield,
  Heart, Github, ArrowRight, Zap, BookOpen, Globe,
  Calendar, GitBranch, CheckCircle2, Star
} from "lucide-react";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  { key: "all", label: "All" },
  { key: "Community", label: "Community" },
  { key: "Consensus Client", label: "Consensus" },
  { key: "Execution Client", label: "Execution" },
];

const communityLinks = [
  {
    title: "Ethereum Foundation",
    category: "Community",
    description: "The core organization behind Ethereum's development and ecosystem grants. Join to help shape the future of open-source web3 infrastructure.",
    cta: "Get Involved",
    href: "https://ethereum.org/en/community/get-involved/#ethereum-jobs/",
    icon: Users,
    accent: '#3b82f6',
    iconBg: '#eff6ff',
  },
  {
    title: "Ethereum Magicians",
    category: "Community",
    description: "The primary forum for technical EIP discussions. Any community member can participate in governance proposals and technical conversations.",
    cta: "Join Forum",
    href: "https://ethereum-magicians.org/faq",
    icon: BookOpen,
    accent: '#8b5cf6',
    iconBg: '#f5f3ff',
  },
  {
    title: "Ethereum Testing Suite",
    category: "Community",
    description: "Open-source tools critical to validating Ethereum client behavior. Contribute to testing infrastructure that keeps the network secure.",
    cta: "View Issues",
    href: "https://github.com/ethereum/eth-tester/issues",
    icon: Code,
    accent: '#10b981',
    iconBg: '#f0fdf4',
  },
  {
    title: "Lighthouse",
    category: "Consensus Client",
    description: "A high-performance Rust-based consensus layer client by Sigma Prime. One of the most widely deployed clients on the Ethereum network.",
    cta: "Contribute",
    href: "https://lighthouse.sigmaprime.io/",
    icon: Shield,
    accent: '#3b82f6',
    iconBg: '#eff6ff',
  },
  {
    title: "Lodestar",
    category: "Consensus Client",
    description: "A TypeScript consensus client by ChainSafe. Excellent for JavaScript developers entering Ethereum protocol development.",
    cta: "Contribute",
    href: "https://lodestar.chainsafe.io/",
    icon: Shield,
    accent: '#8b5cf6',
    iconBg: '#f5f3ff',
  },
  {
    title: "Nimbus",
    category: "Consensus Client",
    description: "A lightweight Nim-based client by Status. Designed to run on resource-constrained devices, including mobile and embedded systems.",
    cta: "Contribute",
    href: "https://nimbus.team/",
    icon: Shield,
    accent: '#10b981',
    iconBg: '#f0fdf4',
  },
  {
    title: "Prysm",
    category: "Consensus Client",
    description: "A Go-based consensus client by Prysmatic Labs. One of the most utilized clients on the Ethereum beacon chain since the Merge.",
    cta: "Contribute",
    href: "https://docs.prylabs.network/docs/getting-started",
    icon: Shield,
    accent: '#3b82f6',
    iconBg: '#eff6ff',
  },
  {
    title: "Teku",
    category: "Consensus Client",
    description: "A Java-based enterprise-grade consensus client by ConsenSys. Built for reliability, security, and institutional-grade deployments.",
    cta: "Contribute",
    href: "https://consensys.io/teku",
    icon: Shield,
    accent: '#8b5cf6',
    iconBg: '#f5f3ff',
  },
  {
    title: "Besu",
    category: "Execution Client",
    description: "An enterprise-focused Java execution client under the Hyperledger umbrella. Supports both public and private Ethereum networks.",
    cta: "Contribute",
    href: "https://www.hyperledger.org/projects/besu",
    icon: Code,
    accent: '#10b981',
    iconBg: '#f0fdf4',
  },
  {
    title: "Erigon",
    category: "Execution Client",
    description: "A Go-based execution client optimized for sync speed and disk efficiency. Designed for archival nodes and infrastructure-heavy use cases.",
    cta: "Contribute",
    href: "https://erigon.tech/",
    icon: Code,
    accent: '#3b82f6',
    iconBg: '#eff6ff',
  },
  {
    title: "Go Ethereum (Geth)",
    category: "Execution Client",
    description: "The most widely used Ethereum execution client, written in Go. The reference implementation powering the majority of Ethereum nodes.",
    cta: "Contribute",
    href: "https://geth.ethereum.org/docs/developers/geth-developer/contributing",
    icon: Code,
    accent: '#8b5cf6',
    iconBg: '#f5f3ff',
  },
  {
    title: "Nethermind",
    category: "Execution Client",
    description: "A high-performance .NET execution client focused on speed and developer tooling. Popular among enterprises and staking operators.",
    cta: "Contribute",
    href: "https://www.nethermind.io/",
    icon: Code,
    accent: '#10b981',
    iconBg: '#f0fdf4',
  },
];

const ways = [
  { icon: Code, title: "Development", desc: "Write code, review PRs, fix bugs across Ethereum clients." },
  { icon: BookOpen, title: "Documentation", desc: "Write guides, translate content, create tutorials." },
  { icon: Globe, title: "Community Outreach", desc: "Grow the community through events and education." },
  { icon: Zap, title: "EIP Editing", desc: "Review and shepherd Ethereum Improvement Proposals." },
];

// Direct participation actions with the correct links
const participationActions = [
  {
    icon: Calendar,
    title: "Join Office Hours",
    desc: "Attend open ECH Institute office hours — connect directly with EIP editors and core devs in a live coordination call. Open to everyone.",
    href: "https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20office%20hour",
    cta: "View Schedule",
    highlight: true,
  },
  {
    icon: GitBranch,
    title: "Participate in Governance",
    desc: "Engage with active EIPIP governance discussions on GitHub. Follow EIP process calls, raise concerns, or support proposals you believe in.",
    href: "https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20eipip",
    cta: "View Discussions",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "Join our Discord",
    desc: "Real-time community conversations about Ethereum governance, ECH Institute programs, and ecosystem news.",
    href: "https://dsc.gg/ech",
    cta: "Open Discord",
    highlight: false,
  },
  {
    icon: Github,
    title: "Contribute on GitHub",
    desc: "Explore open issues, contribute to documentation, or help triage and shepherd EIPs in the ethereum/EIPs repository.",
    href: "https://github.com/echinstitute",
    cta: "ECH on GitHub",
    highlight: false,
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function GetInvolvedPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? communityLinks
    : communityLinks.filter((l) => l.category === activeCategory);

  return (
    <main className="min-h-screen bg-white pt-16 lg:pt-24">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-8 px-4 md:py-16 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left — copy */}
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-bold uppercase tracking-widest text-gray-500">
                <Zap className="h-3 w-3 global-icon-yellow" />
                Open to Everyone
              </div>
              <h1 className="global-hero-title">
                Get Involved
              </h1>
              <p className="global-body-lg max-w-xl">
                ECH Institute is trusted across the Ethereum ecosystem because we are neutral and nonprofit, deeply embedded in protocol processes, and focused on long-term public-good outcomes.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="https://dsc.gg/ech"
                  target="_blank"
                  className="btn btn-primary"
                >
                  <MessageSquare className="h-4 w-4" />
                  Join Discord
                </Link>
                <Link
                  href="https://github.com/echinstitute"
                  target="_blank"
                  className="btn btn-outline"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </div>
            </div>

            {/* Right — ways to contribute mini-grid */}
            <div className="grid grid-cols-2 gap-3">
              {ways.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="global-card flex flex-col gap-2 hover:border-amber-400 transition-all hover:-translate-y-1 hover:shadow-md group"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-amber-50 transition-colors">
                    <Icon className="h-5 w-5 global-icon-yellow" />
                  </span>
                  <p className="font-bold text-sm text-black">{title}</p>
                  <p className="text-xs text-gray-500 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ── Participation Actions + Quote — side by side ──────────────── */}
      <section className="py-10 px-4 md:py-14 md:px-8 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-start">

            {/* Left — Quote Banner */}
            <div className="flex flex-col justify-between h-full">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Direct Participation</p>
                <h2 className="global-section-title">How To Get Involved</h2>
              </div>
              <div className="global-card global-border-yellow bg-gradient-to-br from-white to-amber-50 flex flex-col gap-4 flex-1">
                <div className="text-5xl font-black leading-none" style={{ color: 'var(--color-yellow)', opacity: 0.4 }}>&ldquo;</div>
                <blockquote className="text-lg sm:text-xl font-extrabold text-black leading-snug -mt-4">
                  ECH is not just an organization.
                  <br />
                  It is the home, school, and gathering place for Ethereum governance.
                </blockquote>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mt-1">ECH Institute Mission</p>
                <div className="mt-auto pt-4 border-t border-amber-100">
                  <p className="global-body text-sm">Start participating in Ethereum governance today with these direct entry points curated by ECH Institute.</p>
                </div>
              </div>
            </div>

            {/* Right — 2×2 uniform card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {participationActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={i}
                    href={action.href}
                    target="_blank"
                    className="global-card flex flex-col gap-3 no-underline text-inherit bg-white hover:border-amber-400 transition-all hover:-translate-y-1 hover:shadow-md group"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 group-hover:bg-amber-50 transition-colors shrink-0">
                      <Icon className="h-5 w-5 global-icon-yellow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="global-card-title mb-1">{action.title}</h3>
                      <p className="global-body text-sm">{action.desc}</p>
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-sm font-bold pt-3 border-t border-gray-100 group-hover:gap-2 transition-all"
                      style={{ color: 'var(--color-yellow)' }}
                    >
                      {action.cta} <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── Community Grid ────────────────────────────────────────────── */}
      <section className="py-10 px-4 md:py-14 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Ecosystem</p>
              <h2 className="global-section-title">The Ethereum Community</h2>
              <p className="global-body-lg mt-1">Opportunities for every background and skill-set.</p>
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={[
                    "px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border-2 transition-all duration-150",
                    activeCategory === key
                      ? "border-gray-800 bg-gray-800 text-white"
                      : "border-gray-200 bg-white text-gray-500 hover:border-gray-700 hover:text-gray-800",
                  ].join(" ")}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((link, i) => {
              const Icon = link.icon;
              return (
                <Link
                  key={i}
                  href={link.href}
                  target="_blank"
                  className="group relative flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden no-underline text-inherit hover:border-transparent hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-1"
                >
                  {/* Colored top accent bar */}
                  <div
                    className="h-1 w-full transition-all duration-200"
                    style={{ background: link.accent }}
                  />

                  <div className="flex flex-col flex-1 gap-3 p-5">
                    {/* Icon row */}
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
                        style={{ background: link.iconBg }}
                      >
                        <Icon className="h-5 w-5" style={{ color: link.accent }} />
                      </span>
                      <span
                        className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{ color: link.accent, background: link.iconBg }}
                      >
                        {link.category.replace(" Client", "")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-base text-black leading-snug group-hover:text-black">
                      {link.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">
                      {link.description}
                    </p>

                    {/* CTA row */}
                    <div
                      className="flex items-center gap-1.5 pt-3 border-t border-gray-100 text-sm font-bold transition-all duration-150 group-hover:gap-2"
                      style={{ color: link.accent }}
                    >
                      {link.cta} <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-16">No projects in this category.</p>
          )}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-gray-50 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="global-card global-border-yellow bg-gradient-to-br from-white to-amber-50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 border border-amber-200">
                  <Heart className="h-5 w-5 global-icon-yellow" />
                </span>
                <div>
                  <h3 className="global-card-title">Ready to shape the future?</h3>
                  <p className="global-body text-sm mt-1 max-w-md">
                    Every contribution, no matter how small, helps strengthen the Ethereum ecosystem. Join the ECH Institute community today.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20office%20hour"
                  target="_blank"
                  className="btn btn-primary-white"
                >
                  <Calendar className="h-4 w-4" />
                  Join Office Hours
                </Link>
                <Link
                  href="https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20eipip"
                  target="_blank"
                  className="btn btn-outline"
                >
                  <GitBranch className="h-4 w-4" />
                  Participate in Governance
                </Link>
              </div>
            </div>

            {/* Quick links row */}
            <div className="mt-6 pt-5 border-t border-amber-100 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Office Hours', href: 'https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20office%20hour' },
                { label: 'EIPIP Governance', href: 'https://github.com/ethereum/pm/issues?q=is%3Aissue%20state%3Aopen%20eipip' },
                { label: 'Discord Community', href: 'https://dsc.gg/ech' },
                { label: 'GitHub Organization', href: 'https://github.com/echinstitute' },
              ].map((item, i) => (
                <Link key={i} href={item.href} target="_blank"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-colors group"
                  style={{ color: 'var(--color-yellow)' }}>
                  <CheckCircle2 size={13} className="global-icon-yellow" />
                  <span className="group-hover:underline">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
