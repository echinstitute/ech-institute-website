import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/config/routes';

export const metadata = {
  title: 'Institutional Bridging | ECH Institute',
  description: 'Bridging Ethereum governance with enterprise stakeholders through education and dialogue.',
};

export default function InstitutionalBridgingPage() {
  return (
    <div className="home-page">
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-tag">
            <span className="page-hero-dot" />
            Institutional Focus
          </div>
          <h1 className="page-hero-title">
            Institutional <span className="accent">Bridging</span>
          </h1>
          <p className="page-hero-desc">
            Equipping enterprise stakeholders with the knowledge and context needed to understand Ethereum governance, enabling confident network engagement.
          </p>
          <div className="page-hero-actions">
            <Link href={ROUTES.getInvolved} className="btn btn-primary">
              Connect With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="py-24 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="global-section-tag justify-start">THE CHALLENGE</div>
              <h2 className="global-section-title mb-6">
                Connecting <br /><em>traditional enterprise.</em>
              </h2>
              <p className="global-body-lg mb-6 text-gray-600">
                As Ethereum adoption grows, institutions and traditional enterprises increasingly rely on the network. However, the decentralized nature of Ethereum governance can appear opaque and unpredictable to organizations accustomed to centralized planning.
              </p>
              <p className="global-body-lg text-gray-600">
                ECH Institute acts as a reliable informational bridge, providing clear translation of technical roadmaps, governance processes, and network upgrades to non-technical enterprise stakeholders.
              </p>
            </div>
            <div className="bg-[#1a1a2e] rounded-2xl p-10 border border-[#2a2a3e] shadow-xl relative overflow-hidden">
              <img src="/assets/Enterprise & Institutional View.webp" alt="Institutional Bridging" className="absolute inset-0 w-full h-full object-cover opacity-20" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-syne mb-6 text-yellow-400">Key Offerings</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-xl">📊</span>
                    <div>
                      <strong className="block text-white mb-1">Impact Reports</strong>
                      <span className="text-gray-400 text-sm">Professional analyses detailing the implications of upcoming hard forks on enterprise operations.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-xl">🏛️</span>
                    <div>
                      <strong className="block text-white mb-1">Corporate Readiness</strong>
                      <span className="text-gray-400 text-sm">Briefings and materials establishing clear timelines for protocol upgrades.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-xl">🤝</span>
                    <div>
                      <strong className="block text-white mb-1">Direct Dialogue</strong>
                      <span className="text-gray-400 text-sm">Facilitating constructive communication between protocol core developers and major institutional users.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
