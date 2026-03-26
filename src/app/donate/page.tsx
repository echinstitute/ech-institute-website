"use client";

import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Heart, Wallet } from "lucide-react";
import { EXTERNAL_LINKS } from "@/config/routes";
import { FundingVisualization } from "@/components/features/FundingVisualization";
import { EcosystemImpact } from "@/components/features/EcosystemImpact";

const DONATION_ADDRESS = "0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC";

function ConnectButtonClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="h-10 min-w-[140px] rounded-lg bg-gray-100 animate-pulse" aria-hidden />
    );
  }
  return <ConnectButton showBalance={false} accountStatus={"avatar"} />;
}

function EthereumLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 540 879.4"
      aria-hidden
    >
      <path d="m269.9 325.2-269.9 122.7 269.9 159.6 270-159.6z" opacity=".6" />
      <path d="m0.1 447.8 269.9 159.6v-607.4z" opacity=".45" />
      <path d="m270 0v607.4l269.9-159.6z" opacity=".8" />
      <path d="m0 499 269.9 380.4v-220.9z" opacity=".45" />
      <path d="m269.9 658.5v220.9l270.1-380.4z" opacity=".8" />
    </svg>
  );
}

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white pt-16 lg:pt-24">
      {/* Compact hero */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 inline-flex items-center gap-2 rounded-full border-2 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-600 [border-color:var(--card-border)]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100">
                <Heart className="global-icon-yellow h-3.5 w-3.5" aria-hidden />
              </span>
              501(c)(3) public charity
            </p>
            <h1 className="mb-1 text-balance text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Donate to ECH Institute
            </h1>
            <p className="global-body mx-auto max-w-xl text-gray-600">
              Homesteading Ethereum support education, coordination, and an open protocol.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
        <section className="mb-5 md:mb-7" aria-labelledby="make-donation-heading">
          <div className="global-card p-4 sm:p-5 md:p-6">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-8 lg:items-stretch">
              <div className="text-left lg:col-span-7">
                <h2 id="make-donation-heading" className="global-section-title">
                  Make a Donation
                </h2>
                <div className="mt-3 space-y-3 text-gray-700">
                  <p className="global-body">
                    Thank you for your support in helping ECH Institute achieve our mission in
                    education, community building and homesteading the Ethereum ecosystem.
                  </p>
                  <p className="global-body">
                    We are committed to ensuring that the ecosystem remains decentralized and
                    accessible for all participants.
                  </p>
                  <p className="global-body">
                    Your contribution fuels our efforts to create accessible resources, coordinate
                    critical meetings and promote inclusivity in the ecosystem.
                  </p>
                </div>
              </div>

              <div className="min-w-0 lg:col-span-5">
                <div className="global-card flex h-full flex-col p-4 transition-all duration-200 hover:[border-color:var(--card-border-hover)] hover:shadow-[var(--shadow-hover)] sm:p-5">
                  <div className="mb-2.5 flex items-start gap-2.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                      <Wallet className="global-icon-yellow h-5 w-5" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <p className="global-card-title mb-0.5">Make a Donation</p>
                      <p className="global-section-subtitle !mb-0 !mt-0 max-w-none">
                        Donate to ECH Institute at:
                      </p>
                    </div>
                  </div>

                  <p className="global-body mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Treasury address · Ethereum
                  </p>
                  <p className="global-body mb-3 break-all font-mono text-sm leading-snug text-zinc-900 [word-break:break-word]">
                    {DONATION_ADDRESS}
                  </p>

                  <div className="mb-3 flex justify-center">
                    <ConnectButtonClient />
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-center gap-2 border-t border-gray-100 pt-3">
                    <span className="global-body text-xs text-gray-600">Supported network</span>
                    <EthereumLogo className="h-5 w-5 shrink-0 text-[#627EEA]" />
                    <span className="global-body text-xs font-semibold text-zinc-900">Ethereum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 md:mb-7">
          <EcosystemImpact />
        </section>

        <section className="mb-5 md:mb-7" aria-labelledby="donate-funding-heading">
          <div className="min-w-0 w-full overflow-hidden rounded-[12px] border-2 bg-white shadow-[var(--shadow-card)] [border-color:var(--card-border)]">
            <div className="border-b border-gray-100 bg-white px-4 py-4 sm:px-5 sm:py-5 md:px-6">
              <div className="mx-auto max-w-3xl text-center sm:text-left">
                <p className="mb-2 inline-flex items-center justify-center gap-2 global-body text-xs font-semibold uppercase tracking-wider text-gray-600 sm:justify-start">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                    <Wallet className="global-icon-yellow h-4 w-4 shrink-0" aria-hidden />
                  </span>
                  Funding model
                </p>
                <h2 id="donate-funding-heading" className="global-section-title">
                  Sustainable Funding for Public Goods
                </h2>
                <p className="global-section-subtitle max-w-2xl sm:mx-0">
                  ECH diversifies revenue across four pillars donations, grants, stewardship programs,
                  and staking-based rewards so we stay independent, transparent, and aligned with our
                  nonprofit mission.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-100 bg-gradient-to-b from-gray-50/80 to-white px-4 py-4 sm:px-5 sm:py-5 md:px-6">
              <FundingVisualization />
            </div>
          </div>
        </section>

        <section className="global-card bg-gray-50/80 p-4 text-left sm:p-5 md:p-6">
          <h2 className="global-card-title mb-3">Disclaimer</h2>
          <div className="space-y-2.5">
            <p className="global-body text-gray-700">
              ECH Institute Inc. is a non-partisan 501(c)(3) tax-exempt charitable organization and
              operates in accordance with federal, state, and local nonprofit law in the United
              States.
            </p>
            <p className="global-body text-gray-700">
              Donations are voluntary and non-refundable; tax treatment depends on your situation
              and U.S. law. Fiat and cryptocurrency gifts are used only for charitable purposes. For
              a receipt, share donor details when you give or soon after. IRC Section 170 may apply.
            </p>
            <p className="global-body text-gray-700">
              Questions:{" "}
              <a
                href={EXTERNAL_LINKS.email}
                className="font-semibold text-amber-800 underline-offset-2 hover:underline"
              >
                team@ethcatherders.com
              </a>
              .
            </p>
            <p className="global-body text-gray-600">
              Thank you for supporting ECH Institute and Ethereum&apos;s public-good coordination.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
