"use client";

import { useState } from 'react';
import { Heart, Award, Building2, TrendingUp } from 'lucide-react';

const fundingPillars = [
  {
    icon: Heart,
    title: "Donations",
    description: "Individual and organizational gifts fuel our education, coordination, and community work.",
  },
  {
    icon: Award,
    title: "Grants",
    description: "Targeted support from the Ethereum Foundation and others for specific technical initiatives.",
  },
  {
    icon: Building2,
    title: "Stewardship Programs",
    description: "Long-term partnerships with DAOs and foundations for core protocol maintenance.",
  },
  {
    icon: TrendingUp,
    title: "Staking Rewards",
    description: "Octant (Golem Foundation) distributes rewards from 100K staked ETH to public goods.",
  },
];

const octantData = [
  { epoch: 'Epoch 10', period: 'Oct 2025 – Jan 2026', amount: 13.642, impact: 'Pectra upgrade coordination' },
  { epoch: 'Epoch 6', period: 'Jan 2025 – Mar 2025', amount: 19.225, impact: 'Peak content production' },
  { epoch: 'Epoch 5', period: 'Oct 2024 – Jan 2025', amount: 15.732, impact: 'Dencun spec coordination' },
  { epoch: 'Epoch 4', period: 'Jul 2024 – Oct 2024', amount: 8.314, impact: 'EOF research support' }
];

const maxOctantAmount = Math.max(...octantData.map(d => d.amount));
const totalOctantAmount = octantData.reduce((sum, e) => sum + e.amount, 0);

// Pie chart colors
const pieColors = [
  '#fbbf24', // yellow-400
  '#f59e0b', // yellow-500
  '#d97706', // yellow-600
  '#92400e', // yellow-800
];

// Calculate pie chart segments
const calculatePieSegments = () => {
  let currentAngle = -90; // Start from top
  return octantData.map((epoch, index) => {
    const percentage = (epoch.amount / totalOctantAmount) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;
    
    // Calculate path for SVG arc with rounded coordinates to avoid hydration issues
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const radius = 100;
    const x1 = Math.round((120 + radius * Math.cos(startRad)) * 1000) / 1000;
    const y1 = Math.round((120 + radius * Math.sin(startRad)) * 1000) / 1000;
    const x2 = Math.round((120 + radius * Math.cos(endRad)) * 1000) / 1000;
    const y2 = Math.round((120 + radius * Math.sin(endRad)) * 1000) / 1000;
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    return {
      ...epoch,
      index,
      percentage,
      path: `M 120 120 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`,
      color: pieColors[index % pieColors.length],
      startAngle,
      endAngle,
    };
  });
};

export function FundingVisualization() {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(0); // Default to first epoch
  const pieSegments = calculatePieSegments();
  
  // Safety check: ensure hoveredSegment is valid
  const currentSegment = hoveredSegment !== null && hoveredSegment >= 0 && hoveredSegment < pieSegments.length 
    ? pieSegments[hoveredSegment] 
    : null;
  return (
    <div className="mx-auto max-w-6xl space-y-6 md:space-y-8 lg:space-y-10">
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {fundingPillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <article
              key={index}
              className="group flex min-w-0 flex-col rounded-[12px] border-2 bg-white p-4 transition-all duration-200 [border-color:var(--card-border)] hover:[border-color:var(--card-border-hover)] hover:shadow-[var(--shadow-hover)] sm:p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 transition-colors group-hover:bg-gray-200/80">
                  <Icon className="global-icon-yellow h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                </div>
                <h3 className="global-body text-base font-semibold leading-snug text-zinc-900 sm:text-lg">
                  {pillar.title}
                </h3>
              </div>
              <p className="global-body mt-auto text-gray-600">{pillar.description}</p>
            </article>
          );
        })}
      </div>

      {/* Divider before Octant detail */}
      <div className="border-t-2 border-gray-200/80 pt-6 md:pt-8" role="separator" aria-hidden />

      {/* Institutional Grants Section - commented out */}
      {/* <div>
        <h3 className="text-xl md:text-2xl font-antonio font-semibold mb-4 md:mb-6 flex items-center gap-2">
          <Building2 className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
          Institutional Stewardship & DAO Grants
        </h3>
        <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-700 leading-relaxed">
          Direct support from foundational organizations provides the operational runway necessary for professionalized project management and protocol maintenance.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {fundingData.map((source, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-5 h-5 text-yellow-600" />
                  <h4 className="text-xl font-antonio font-semibold">{source.provider}</h4>
                </div>
                <div className="flex items-center gap-2 mb-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{source.date}</span>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-gray-900">{source.amount}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{source.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Octant — detailed breakdown */}
      <div className="space-y-5 md:space-y-6">
        <div>
          <h3 className="global-card-title mb-2 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 sm:h-10 sm:w-10">
              <TrendingUp className="global-icon-yellow h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
            </span>
            <span className="text-balance leading-snug">
              Octant staking rewards (Golem Foundation)
            </span>
          </h3>
          <p className="global-body-lg max-w-3xl">
            Octant provides funding in 90-day &quot;epochs&quot; derived from rewards on 100,000 staked ETH. ECH has been a consistent participant since the program&apos;s inception.
          </p>
        </div>

        <h4 className="global-body text-base font-semibold text-zinc-900 sm:text-lg">
          Audited Octant funding history (from Epoch 4)
        </h4>

        {/* Pie Chart and Info Card Layout */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
          {/* Pie Chart */}
          <div className="flex flex-col items-center rounded-[12px] border-2 bg-gray-50/90 p-4 md:p-5 [border-color:var(--card-border)]">
            <h5 className="global-body mb-3 text-base font-semibold text-zinc-900 md:text-lg">
              Funding distribution
            </h5>
            <div className="relative w-[200px] h-[200px] md:w-[220px] md:h-[220px] mx-auto flex-shrink-0">
              <svg width="240" height="240" viewBox="0 0 240 240" className="transform -rotate-90 w-full h-full">
                {pieSegments.map((segment, index) => (
                  <g key={index}>
                    <path
                      d={segment.path}
                      fill={segment.color}
                      stroke="white"
                      strokeWidth="2"
                      className="cursor-pointer transition-opacity duration-200"
                      style={{
                        opacity: hoveredSegment === index ? 1 : hoveredSegment === null ? 1 : 0.4,
                      }}
                      onMouseEnter={() => setHoveredSegment(index)}
                    />
                  </g>
                ))}
              </svg>
            </div>
            
            {/* Total ETH below pie chart - one line */}
            <div className="mt-3 text-center">
              <p className="text-xl md:text-2xl font-bold text-gray-900 inline">
                {totalOctantAmount.toFixed(3)} <span className="text-base md:text-lg font-semibold text-gray-700">Total ETH</span>
              </p>
            </div>
            
            {/* Legend */}
            <div className="mt-3 grid w-full grid-cols-2 gap-2">
              {pieSegments.map((segment, index) => (
                <div
                  key={index}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg p-1.5 text-sm transition-colors md:p-2 md:text-base ${
                    hoveredSegment === index ? "bg-gray-100" : ""
                  }`}
                  onMouseEnter={() => setHoveredSegment(index)}
                >
                  <div
                    className="w-4 h-4 md:w-5 md:h-5 rounded flex-shrink-0"
                    style={{ backgroundColor: segment.color }}
                  />
                  <span className="font-semibold text-gray-900">{segment.epoch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info Card - Shows selected epoch details */}
          <div className="flex flex-col justify-center rounded-[12px] border-2 bg-gray-50/90 p-6 md:p-8 [border-color:var(--card-border)]">
            {currentSegment ? (
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 md:mb-3 md:text-3xl">
                    {currentSegment.epoch}
                  </h5>
                  <p className="mb-4 text-sm font-medium text-gray-600 md:text-base">
                    {currentSegment.period}
                  </p>
                </div>
                <div className="rounded-[12px] border-2 bg-white p-5 md:p-6 [border-color:var(--card-border)]">
                  <p className="mb-3 text-3xl font-bold text-amber-600 md:text-4xl">
                    {currentSegment.amount} ETH
                  </p>
                  <p className="global-body text-sm font-medium text-gray-700 md:text-base">
                    <span className="font-semibold text-zinc-900">Percentage:</span>{" "}
                    {currentSegment.percentage.toFixed(2)}%
                  </p>
                </div>
                <div className="border-t-2 pt-4 [border-color:var(--card-border)]">
                  <p className="global-body text-sm leading-relaxed text-gray-700 md:text-base">
                    <span className="font-semibold text-zinc-900">Impact:</span> {currentSegment.impact}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-gray-500">Select an epoch to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Community Support Section */}
      {/* <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-antonio font-semibold mb-3 md:mb-4">Community Support (Gitcoin Grants)</h3>
        <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
          ECH has utilized Quadratic Funding (QF) since 2019 to amplify individual community donations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
            <div className="text-4xl font-bold text-yellow-600 mb-2">$500,000+</div>
            <p className="text-gray-700">Historical Community Support (2019–2025)</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
            <div className="text-4xl font-bold text-yellow-600 mb-2">$93,900+</div>
            <p className="text-gray-700">Round 14 Milestone - Highest Engagement</p>
          </div>
        </div>
        <div className="mt-6 space-y-2 text-sm text-gray-700">
          <p>• <strong>GG24 (Oct 2025):</strong> Inaugural participation in &quot;Gitcoin 3.0&quot; utilizing Open Source Observer (OSO).</p>
          <p>• <strong>Specialized Technical Grants:</strong> Ethereum Foundation individual grants in 2021 for EIP automation bots.</p>
        </div>
      </div> */}
    </div>
  );
}
