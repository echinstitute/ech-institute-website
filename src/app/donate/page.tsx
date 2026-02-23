"use client";

import Image from "next/image";
import Link from "next/link";
import { DonationCard } from "@/components/features/DonationCard";
import { FundingVisualization } from "@/components/features/FundingVisualization";
import { EcosystemImpact } from "@/components/features/EcosystemImpact";
import './donate.css';

export default function DonatePage() {
  return (
    <main className="min-h-screen donate-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50  pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-5xl mx-auto">
            {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-antonio font-bold mb-4 md:mb-6 leading-tight text-gray-900">
              ECH Institute: Official Support and Grant Transparency Page
            </h1> */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-antonio font-semibold mb-6 md:mb-8 text-gray-700">
              Homesteading Ethereum: Support the Social Infrastructure of the Protocol
            </h2>
            <div className="space-y-4 md:space-y-5 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
              <p>
                The architectural integrity of the Ethereum protocol is fundamentally dependent on more than its cryptographic and algorithmic foundations; it requires a robust &quot;social layer&quot; capable of coordinating a global, decentralized network of developers, researchers, and stakeholders. ECH Institute Inc. acts as this vital &quot;social layer,&quot; making complex technical resources accessible to aspiring developers, EIP authors, and community contributors.
              </p>
              <p>
                As a <strong>501(c)(3) non-profit organization</strong> (ruling year 2025), our mission is dedicated to supporting education, community building, and onboarding protocol developers to ensure the protocol&apos;s anti-fragility and long-term neutrality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16">

      {/* Donation Section */}
      <div className="mb-8 md:mb-12 lg:mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-antonio font-bold mb-4 md:mb-6">Make a Donation</h2>
            <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                Thank you for your support in helping ECH Institute achieve our mission in education, community building and homesteading the Ethereum ecosystem.
              </p>
              <p>
                We are committed to ensuring that the ecosystem remains decentralized and accessible for all participants.
              </p>
              <p>
                Your contribution fuels our efforts to create accessible resources, coordinate critical meetings and promote inclusivity in the ecosystem.
              </p>
            </div>
          </div>

          {/* Right Content - Donation Card */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <DonationCard />
            </div>
          </div>
        </div>
      </div>

      {/* I. Our Ecosystem Impact Section */}
      <section className="mb-8 md:mb-12 lg:mb-16">
        <EcosystemImpact />
      </section>

      {/* II. Sustainable Funding Architecture Section */}
      <section className="mb-8 md:mb-12 lg:mb-16">
        <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-antonio font-bold mb-4 md:mb-6 lg:mb-8">II. Sustainable Funding Architecture</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed text-gray-700">
            The ECH Institute relies on a diversified funding model to maintain institutional neutrality. This model blends community-led quadratic funding, institutional stewardship, and innovative staking-based rewards.
          </p>

          {/* Funding Visualization - Includes Octant and Institutional Grants */}
          <FundingVisualization />
        </div>
      </section>

      {/* III. Transparency and Accountability Standards Section */}
      {/* <section className="mb-8 md:mb-12 lg:mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 md:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-antonio font-bold mb-4 md:mb-6">III. Transparency and Accountability Standards</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 leading-relaxed">
            The transition to ECH Institute Inc. reflects our commitment to professional non-profit governance.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white border-2 border-gray-300 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg md:text-xl font-antonio font-semibold mb-2 md:mb-3 text-gray-900">Financial Profile (FY 2024)</h3>
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">$98,144</p>
              <p className="text-xs md:text-sm text-gray-600">Total assets with 100% Program Services ratio<sup>7</sup></p>
            </div>
            
            <div className="bg-white border-2 border-gray-300 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg md:text-xl font-antonio font-semibold mb-2 md:mb-3 text-gray-900">Sustainable Baseline</h3>
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">10–15 ETH</p>
              <p className="text-xs md:text-sm text-gray-600">Per quarter via Octant staking</p>
            </div>
            
            <div className="bg-white border-2 border-gray-300 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg md:text-xl font-antonio font-semibold mb-2 md:mb-3 text-gray-900">Registered Address</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                964 High House Rd, Ste 3068<br />
                Cary, NC 27513
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-300 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg md:text-xl font-antonio font-semibold mb-2 md:mb-3 text-gray-900">Non-Profit Status</h3>
              <p className="text-xl md:text-2xl font-bold text-blue-600 mb-2">501(c)(3)</p>
              <p className="text-xs md:text-sm text-gray-600">Public Charity</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Disclaimer Section */}
      <div className="mb-6 md:mb-8 bg-gray-50 border-2 border-gray-200 p-5 md:p-6 lg:p-8 rounded-lg">
        <p className="text-base md:text-lg font-antonio font-semibold mb-3 md:mb-4">Disclaimer</p>
        <div className="space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed">
          <p>
            ECH Institute Inc. is a non-partisan 501(c)(3) tax-exempt charitable organization and operates in accordance with federal, state, and local laws regarding nonprofit activities in the United States of America.
          </p>
          <p>
            All donations to ECH Institute Inc. are voluntary, non-refundable, and tax-deductible to the extent permitted by U.S. state and federal law. Donations made in fiat or cryptocurrency will be used solely to further our nonprofit mission. If you require a tax receipt, please provide the necessary donor information at the time of your contribution or promptly thereafter. Donors can deduct contributions made to us under IRC Section 170.
          </p>
          <p>
            For any questions regarding donations, funding expenses, compliance, or tax deductibility, please contact us at <a href="mailto:team@ethcatherders.com" className="text-blue-600 hover:underline font-medium">team@ethcatherders.com</a>.
          </p>
          <p>
            Thank you for supporting ECH Institute and our mission to advance the Ethereum ecosystem! 🚀
          </p>
        </div>
      </div>

      {/* Footnotes */}
      {/* <div className="mb-8 md:mb-12 text-xs sm:text-sm text-gray-600 space-y-1 md:space-y-2">
        <p><sup>1</sup> Ongoing programs with continuous impact measurement.</p>
        <p><sup>2</sup> Peak content production period demonstrating institutional capacity.</p>
        <p><sup>6</sup> Transition to new Gitcoin funding model with enhanced transparency.</p>
        <p><sup>7</sup> Financial data from FY 2024 audit, demonstrating efficient resource allocation.</p>
      </div> */}
      </div>
    </main>
  );
}
