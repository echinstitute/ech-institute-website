import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/config/routes';

export const metadata = {
  title: 'Community Partnerships | ECH Institute',
  description: 'Collaborating with ecosystem communities to expand participation in Ethereum governance.',
};

export default function CommunityPartnershipsPage() {
  return (
    <div className="home-page">
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-tag">
            <span className="page-hero-dot" />
            Community Focus
          </div>
          <h1 className="page-hero-title">
            Community <span className="accent">Partnerships</span>
          </h1>
          <p className="page-hero-desc">
            Building bridges between diverse ecosystem communities, developer DAOs, and the Ethereum governance structures to ensure broad representation.
          </p>
          <div className="page-hero-actions">
            <Link href={ROUTES.getInvolved} className="btn btn-primary">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="py-12 md:py-16 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-lg h-96">
              <img src="/assets/Who We Serve.webp" alt="Community Partnerships" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <h3 className="text-2xl font-bold font-syne text-white">United by purpose.</h3>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="global-section-tag justify-start">THE CHALLENGE</div>
              <h2 className="global-section-title mb-6">
                Decentralized <br /><em>collaboration.</em>
              </h2>
              <p className="global-body-lg mb-6 text-gray-600">
                Ethereum&apos;s strength lies in its vibrant, decentralized community. However, decentralized groups often operate in silos. Navigating network upgrades and sharing critical feedback requires coordinated effort across these micro-communities.
              </p>
              <p className="global-body-lg text-gray-600">
                Through targeted community partnerships, ECH Institute connects disparate groups—from developer collectives to regional Ethereum hubs—facilitating communication and ensuring diverse voices are heard in protocol discussions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
