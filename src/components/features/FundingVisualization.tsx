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
  { epoch: 'Epoch 10', period: 'Oct 2025 – Jan 2026', amount: 13.642, impact: 'Technical coordination for the Pectra upgrade and devnet-6 syncing.' },
  { epoch: 'Epoch 6', period: 'Jan 2025 – Mar 2025', amount: 19.225, impact: 'Ecosystem Impact Milestone; peak production of technical content.' },
  { epoch: 'Epoch 5', period: 'Oct 2024 – Jan 2025', amount: 15.732, impact: 'Shapella & Cancun testing support; Dencun spec coordination.' },
  { epoch: 'Epoch 4', period: 'Jul 2024 – Oct 2024', amount: 8.314, impact: 'Critical support for EOF (EVM Object Format) research.' }
];

const totalOctantAmount = octantData.reduce((sum, e) => sum + e.amount, 0);

const pieColors = [
  '#F5A51D',          // 100%
  'rgba(245, 165, 29, 0.75)', // 75%
  'rgba(245, 165, 29, 0.5)',  // 50%
  'rgba(245, 165, 29, 0.25)', // 25%
];

const calculatePieSegments = () => {
  let currentAngle = -90;
  return octantData.map((epoch, index) => {
    const percentage = (epoch.amount / totalOctantAmount) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

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
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(0);
  const pieSegments = calculatePieSegments();

  const currentSegment = hoveredSegment !== null && hoveredSegment >= 0 && hoveredSegment < pieSegments.length
    ? pieSegments[hoveredSegment]
    : null;

  return (
    <div className="mx-auto max-w-6xl space-y-6 md:space-y-8 lg:space-y-10 px-1">
      {/* Funding pillars — 2-col on mobile, 4-col on desktop */}
      <div className="grid min-w-0 grid-cols-2 gap-3 lg:grid-cols-4">
        {fundingPillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <article
              key={index}
              className="proplay-dynamic-card group flex min-w-0 flex-col rounded-2xl bg-[#1B1B1E] p-5 transition-all duration-300 border-[#262626] hover:border-[#F5A51D] hover:bg-[#262626]/50 overflow-hidden"
            >
              <div className="mb-4 flex items-center gap-3 min-w-0">
                <div className="proplay-icon-container h-10 w-10 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-lg font-bold text-[#FBFBFB] leading-tight min-w-0 break-words">
                  {pillar.title}
                </div>
              </div>
              <p className="global-body mt-auto text-[#FBFBFB]/70 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </article>
          );
        })}
      </div>

      {/* Divider */}
      <div className="border-t border-[#262626] pt-6 md:pt-8" role="separator" aria-hidden />

      {/* Octant — detailed breakdown */}
      <div className="space-y-5 md:space-y-6">
        <div>
          <h3 className="global-card-title mb-2 flex flex-wrap items-center gap-2 sm:gap-3 text-[#FBFBFB]">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#262626] sm:h-10 sm:w-10">
              <TrendingUp className="global-icon-yellow h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
            </span>
            <span className="text-balance leading-snug">
              Octant staking rewards (Golem Foundation)
            </span>
          </h3>
          <p className="global-body-lg max-w-3xl text-[#FBFBFB]/70">
            Octant provides funding in 90-day &quot;epochs&quot; derived from rewards on 100,000 staked ETH. ECH has been a consistent participant since the program&apos;s inception.
          </p>
        </div>

        <h4 className="global-body text-base font-semibold text-[#FBFBFB] sm:text-lg">
          Audited Octant funding history (from Epoch 4)
        </h4>

        {/* Pie Chart and Info Card Layout */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
          {/* Pie Chart */}
          <div className="flex flex-col items-center rounded-[12px] border bg-[#1B1B1E] p-4 md:p-5 border-[#262626]">
            <h5 className="global-body mb-3 text-base font-semibold text-[#FBFBFB] md:text-lg">
              Funding distribution
            </h5>
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] mx-auto flex-shrink-0">
              <svg width="240" height="240" viewBox="0 0 240 240" className="transform -rotate-90 w-full h-full">
                {pieSegments.map((segment, index) => (
                  <g key={index}>
                    <path
                      d={segment.path}
                      fill={segment.color}
                      stroke="#151419"
                      strokeWidth="2"
                      className={`cursor-pointer transition-opacity duration-200 ${
                        hoveredSegment === index || hoveredSegment === null ? 'opacity-100' : 'opacity-40'
                      }`}
                      onMouseEnter={() => setHoveredSegment(index)}
                    />
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-3 text-center">
              <p className="text-xl md:text-2xl font-bold text-[#FBFBFB] inline">
                {totalOctantAmount.toFixed(3)} <span className="text-base md:text-lg font-semibold text-[#FBFBFB]/60">Total ETH</span>
              </p>
            </div>

            {/* Legend */}
            <div className="mt-3 grid w-full grid-cols-1 sm:grid-cols-2 gap-2">
              {pieSegments.map((segment, index) => (
                <div
                  key={index}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg p-1.5 text-sm transition-colors md:p-2 md:text-base ${
                    hoveredSegment === index ? "bg-[#262626]" : ""
                  }`}
                  onMouseEnter={() => setHoveredSegment(index)}
                >
                  <div
                    className="w-4 h-4 md:w-5 md:h-5 rounded flex-shrink-0"
                    style={{ backgroundColor: segment.color }}
                  />
                  <span className="font-semibold text-[#FBFBFB]">{segment.epoch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info Card */}
          <div className="flex flex-col justify-center rounded-[12px] border bg-[#1B1B1E] p-6 md:p-8 border-[#262626]">
            {currentSegment ? (
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-[#FBFBFB] md:mb-3 sm:text-2xl md:text-3xl break-words">
                    {currentSegment.epoch}
                  </h5>
                  <p className="mb-4 text-xs font-medium text-[#FBFBFB]/50 sm:text-sm md:text-base">
                    {currentSegment.period}
                  </p>
                </div>
                <div className="rounded-[12px] border bg-[#262626] p-4 sm:p-5 md:p-6 border-[#3a3a3a] overflow-hidden">
                  <p className="mb-3 text-2xl font-bold text-[#F5A51D] sm:text-3xl md:text-4xl break-all">
                    {currentSegment.amount} ETH
                  </p>
                  <p className="global-body text-sm font-medium text-[#FBFBFB]/70 md:text-base">
                    <span className="font-semibold text-[#FBFBFB]">Percentage:</span>{" "}
                    {currentSegment.percentage.toFixed(2)}%
                  </p>
                </div>
                <div className="border-t pt-4 border-[#262626]">
                  <p className="global-body text-xs sm:text-sm leading-relaxed text-[#FBFBFB]/70 md:text-base break-words">
                    <span className="font-semibold text-[#FBFBFB]">Impact:</span> {currentSegment.impact}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-[#FBFBFB]/40">Select an epoch to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
