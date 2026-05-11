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
      {/* Funding pillars — 1-col on mobile, 2-col on tablet, 4-col on desktop */}
      <div className="grid min-w-0 grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-4">
        {fundingPillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <article
              key={index}
              className="proplay-dynamic-card group flex min-w-0 flex-col rounded-2xl bg-[#1B1B1E] p-5 transition-all duration-300 border-border hover:border-accent hover:bg-darkGray/50 overflow-hidden"
            >
              <div className="mb-4 flex items-center gap-3 min-w-0">
                <div className="proplay-icon-container h-10 w-10 shrink-0">
                  <Icon className="h-5 w-5 !text-[#FBFBFB]" />
                </div>
                <div className="text-lg font-bold text-white leading-tight min-w-0 break-words">
                  {pillar.title}
                </div>
              </div>
              <p className="global-body mt-auto text-white/70 text-sm leading-relaxed">
                {pillar.description}
              </p>
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
              Octant staking rewards (Golem Foundation)
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
          <div className="flex flex-col items-center rounded-3xl border bg-[var(--background)] p-6 md:p-8 border-[var(--border-soft)] shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-brand)] opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            
            <h5 className="global-body mb-6 text-base font-black uppercase tracking-widest text-[var(--text-soft)] text-center">
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
              <p className="text-2xl md:text-3xl font-black text-[var(--text-base)] inline tracking-tighter">
                {totalOctantAmount.toFixed(3)} <span className="text-sm md:text-base font-black text-[var(--accent-brand)] ml-1">ETH TOTAL</span>
              </p>
            </div>

            {/* Legend */}
            <div className="mt-8 grid w-full grid-cols-1 sm:grid-cols-2 gap-3">
              {pieSegments.map((segment, index) => (
                <div
                  key={index}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl p-2.5 transition-all duration-300 border ${
                    hoveredSegment === index 
                      ? "bg-[var(--surface-card-theme)] border-[var(--accent-brand)] shadow-lg -translate-y-0.5" 
                      : "bg-transparent border-transparent hover:border-[var(--border-soft)]"
                  }`}
                  onMouseEnter={() => setHoveredSegment(index)}
                >
                  <div
                    className="w-4 h-4 md:w-5 md:h-5 rounded-md flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: segment.color }}
                  />
                  <span className="text-xs font-black uppercase tracking-widest text-[var(--text-base)]">{segment.epoch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info Card */}
          <div className="flex flex-col justify-center rounded-3xl border bg-[var(--background)] p-8 md:p-10 border-[var(--border-soft)] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-brand)] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {currentSegment ? (
              <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <h5 className="mb-2 text-3xl md:text-4xl font-black font-syne tracking-tighter text-[var(--text-base)] break-words">
                    {currentSegment.epoch}
                  </h5>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-8 bg-[var(--accent-brand)] rounded-full" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-[var(--accent-brand)]">
                      {currentSegment.period}
                    </p>
                  </div>
                </div>
                
                <div className="p-0 border-none bg-transparent">
                  <p className="mb-2 text-4xl md:text-5xl font-black text-[var(--accent-brand)] tracking-tight break-all leading-none">
                    {currentSegment.amount} <span className="text-xl">ETH</span>
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent-brand)]" />
                    <p className="text-[11px] font-black uppercase tracking-widest text-[var(--text-soft)]">
                      Allocation: {currentSegment.percentage.toFixed(2)}%
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-[var(--border-soft)]">
                  <p className="text-sm md:text-base leading-relaxed text-[var(--text-soft)] font-medium italic break-words">
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
