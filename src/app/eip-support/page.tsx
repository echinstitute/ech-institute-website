import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/config/routes';

export const metadata = {
  title: 'EIP Support | ECH Institute',
  description: 'Strengthening the Ethereum Improvement Proposal process through structure and coordinated reviews.',
};

export default function EipSupportPage() {
  return (
    <div className="home-page">
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-tag">
            <span className="page-hero-dot" />
            Governance Program
          </div>
          <h1 className="page-hero-title">
            EIP <span className="accent">Support</span>
          </h1>
          <p className="page-hero-desc">
            Strengthening the Ethereum Improvement Proposal process through structured coordination, technical reviews, and ecosystem-wide communication.
          </p>
          <div className="page-hero-actions">
            <Link href={ROUTES.getInvolved} className="btn btn-primary">
              Contribute
            </Link>
          </div>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="py-12 md:py-16 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="global-section-tag justify-start">THE CHALLENGE</div>
              <h2 className="global-section-title mb-6">
                Guiding technical <br /><em>standards.</em>
              </h2>
              <p className="global-body-lg mb-6 text-gray-600">
                The Ethereum Improvement Proposal (EIP) process is the backbone of Ethereum&apos;s technical evolution. However, shepherding a proposal from draft to finalization requires significant structural oversight to prevent bottlenecks.
              </p>
              <p className="global-body-lg text-gray-600">
                ECH Institute provides dedicated EIP support, ensuring that authors have the resources, technical reviews, and community feedback necessary to advance critical protocols.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 shadow-sm relative overflow-hidden">
              <img src="/assets/IMG_355.webp" alt="EIP Support" className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-syne mb-6 text-gray-900">Program Pillars</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-xl">📋</span>
                    <div>
                      <strong className="block text-gray-900 mb-1">Process Documentation</strong>
                      <span className="text-gray-600 text-sm">Maintaining clear, accessible guidelines for EIP authors and reviewers.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-xl">🔍</span>
                    <div>
                      <strong className="block text-gray-900 mb-1">Technical Review Acceleration</strong>
                      <span className="text-gray-600 text-sm">Connecting proposals with qualified reviewers to reduce friction.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-xl">🎙️</span>
                    <div>
                      <strong className="block text-gray-900 mb-1">Peep an EIP</strong>
                      <span className="text-gray-600 text-sm">Hosting deep-dive interviews with authors to explain proposals to the broader community.</span>
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
