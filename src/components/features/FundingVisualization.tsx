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

      {/* ── Funding Pillars ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fundingPillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <article
              key={index}
              className="funding-pillar-card group relative flex flex-col rounded-2xl border border-[#262626] bg-[#1B1B1E] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5A51D] hover:shadow-[0_8px_32px_rgba(245,165,29,0.12)]"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5A51D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col gap-4 p-5 md:p-6 h-full">
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5A51D] shrink-0 shadow-[0_2px_8px_rgba(245,165,29,0.2)]">
                  <Icon className="h-5 w-5 !text-[#FBFBFB]" />
                </div>

                {/* Title — wraps freely */}
                <h4 className="text-base font-bold text-[#FBFBFB] leading-snug break-words group-hover:text-[#F5A51D] transition-colors duration-300">
                  {pillar.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-[#878787] leading-relaxed mt-auto">
                  {pillar.description}
                </p>

                {/* Bottom accent line */}
                <div className="h-[1px] w-0 group-hover:w-full bg-[#F5A51D]/30 transition-all duration-500 rounded-full" />
              </div>
            </article>
          );
        })}
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-6 md:pt-8" role="separator" aria-hidden />

      {/* Octant — detailed breakdown */}
      <div className="space-y-5 md:space-y-6">
        <div>
          <h3 className="global-card-title mb-2 flex flex-wrap items-center gap-2 sm:gap-3 text-white">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-darkGray sm:h-10 sm:w-10">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 !text-[#FBFBFB]" aria-hidden />
            </span>
            <span className="text-balance leading-snug">
              Public Goods Funding
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--accent-brand)] px-2 py-0.5 rounded-full border border-[var(--accent-brand)]/30 bg-[var(--accent-brand)]/10">
              Octant · Golem Foundation
            </span>
          </h3>
          <p className="global-body-lg max-w-3xl text-white/70">
            Octant provides funding in 90-day &quot;epochs&quot; derived from rewards on 100,000 staked ETH. ECH has been a consistent participant since the program&apos;s inception.
          </p>
        </div>

        <h4 className="global-body text-base font-semibold text-white sm:text-lg">
          Audited Octant funding history (from Epoch 4)
        </h4>

        {/* Pie Chart and Info Card Layout */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
          {/* Pie Chart */}
          <div className="funding-pillar-card flex flex-col items-center rounded-3xl border !bg-[#1B1B1E] p-6 md:p-8 border-[#262626] shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-brand)] opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            
            <h5 className="global-body mb-6 text-base font-black uppercase tracking-widest text-[#878787] text-center">
              Funding distribution
            </h5>
            
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] mx-auto flex-shrink-0">
              <svg width="240" height="240" viewBox="0 0 240 240" className="transform -rotate-90 w-full h-full">
                {pieSegments.map((segment, index) => (
                  <g key={index}>
                    <path
                      d={segment.path}
                      fill={segment.color}
                      className={`cursor-pointer transition-all duration-500 hover:scale-[1.02] origin-center ${
                        hoveredSegment === index || hoveredSegment === null ? 'opacity-100' : 'opacity-20'
                      }`}
                      onMouseEnter={() => setHoveredSegment(index)}
                    />
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-8 text-center">
              <p className="text-2xl md:text-3xl font-black text-[#FBFBFB] inline tracking-tighter">
                {totalOctantAmount.toFixed(3)} <span className="text-sm md:text-base font-black text-[#F5A51D] ml-1">ETH TOTAL</span>
              </p>
            </div>

            {/* Legend */}
            <div className="mt-8 grid w-full grid-cols-1 sm:grid-cols-2 gap-3">
              {pieSegments.map((segment, index) => (
                <div
                  key={index}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl p-2.5 transition-all duration-300 border ${
                    hoveredSegment === index 
                      ? "!bg-[#262626] border-[#F5A51D] shadow-lg -translate-y-0.5" 
                      : "!bg-[#1B1B1E] border-transparent hover:border-[#262626]"
                  }`}
                  onMouseEnter={() => setHoveredSegment(index)}
                >
                  <div
                    className="w-4 h-4 md:w-5 md:h-5 rounded-md flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: segment.color }}
                  />
                  <span className="text-xs font-black uppercase tracking-widest text-[#FBFBFB]">{segment.epoch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info Card */}
          <div className="funding-pillar-card flex flex-col justify-center rounded-3xl border !bg-[#1B1B1E] p-8 md:p-10 border-[#262626] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#F5A51D] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {currentSegment ? (
              <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <h5 className="mb-2 text-3xl md:text-4xl font-black font-syne tracking-tighter text-[#FBFBFB] break-words">
                    {currentSegment.epoch}
                  </h5>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-8 bg-[#F5A51D] rounded-full" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#F5A51D]">
                      {currentSegment.period}
                    </p>
                  </div>
                </div>
                
                <div className="p-0 border-none bg-transparent">
                  <p className="mb-2 text-4xl md:text-5xl font-black text-[#F5A51D] tracking-tight break-all leading-none">
                    {currentSegment.amount} <span className="text-xl">ETH</span>
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#F5A51D]" />
                    <p className="text-[11px] font-black uppercase tracking-widest text-[#878787]">
                      Allocation: {currentSegment.percentage.toFixed(2)}%
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-[#262626]">
                  <p className="text-sm md:text-base leading-relaxed text-gray-300 font-medium italic break-words">
                    &ldquo;{currentSegment.impact}&rdquo;
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-center text-white/40">Select an epoch to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
