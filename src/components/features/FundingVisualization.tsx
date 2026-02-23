"use client";

import { useState } from 'react';
import { TrendingUp, DollarSign, Calendar, Building2 } from 'lucide-react';

interface FundingSource {
  provider: string;
  date: string;
  amount: string;
  focus: string;
  category: 'institutional' | 'community' | 'staking';
}

const fundingData: FundingSource[] = [
  {
    provider: 'Optimism (RPGF)',
    date: 'Round 3 (2024)',
    amount: '124,000 OP',
    focus: 'Protocol process improvement and multi-chain coordination',
    category: 'institutional'
  },
  {
    provider: 'ENS Public Goods',
    date: 'Q2 2023',
    amount: '50,000 USDC',
    focus: 'Foundational grant for ENS/EIP documentation and standards',
    category: 'institutional'
  },
  {
    provider: 'Ethereum Foundation',
    date: 'Q2 2021',
    amount: '$90,000',
    focus: '6-month operational support for London upgrade transition',
    category: 'institutional'
  }
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
    <div className="space-y-8 md:space-y-10 lg:space-y-12">
      {/* Institutional Grants Section */}
      <div>
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
      </div>

      {/* Octant Staking Rewards Section */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
        <div className="mb-6 md:mb-8">
          <h3 className="text-2xl md:text-3xl font-antonio font-bold mb-3 md:mb-4 flex items-center gap-2 md:gap-3 flex-wrap">
            <div className="p-2 bg-gray-100 rounded-lg">
              <TrendingUp className="w-5 h-5 md:w-7 md:h-7 text-yellow-600" />
            </div>
            <span className="text-xl md:text-3xl">Octant Staking Rewards (Golem Foundation)</span>
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Octant provides funding in 90-day &quot;epochs&quot; derived from rewards on 100,000 staked ETH. ECH has been a consistent participant since the program&apos;s inception.
          </p>
        </div>

        <div className="mb-6 md:mb-8">
          <h4 className="text-lg md:text-xl font-antonio font-semibold mb-4 md:mb-5 text-gray-800">Audited Octant Funding History (Starting from Epoch 4)</h4>
        </div>

        {/* Pie Chart and Info Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Pie Chart */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 md:p-5 flex flex-col items-center">
            <h5 className="text-lg md:text-xl font-antonio font-semibold mb-3 text-gray-900">Funding Distribution</h5>
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
            <div className="mt-3 grid grid-cols-2 gap-2 w-full">
              {pieSegments.map((segment, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-sm md:text-base p-1.5 md:p-2 rounded-lg cursor-pointer transition-colors ${
                    hoveredSegment === index ? 'bg-gray-200' : ''
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
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 md:p-8 flex flex-col justify-center">
            {currentSegment ? (
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h5 className="text-2xl md:text-3xl font-antonio font-bold text-gray-900 mb-2 md:mb-3">
                    {currentSegment.epoch}
                  </h5>
                  <p className="text-sm md:text-base font-medium text-gray-600 mb-4">
                    {currentSegment.period}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 md:p-6 border-2 border-gray-200">
                  <p className="text-3xl md:text-4xl font-bold text-yellow-600 mb-3">
                    {currentSegment.amount} ETH
                  </p>
                  <p className="text-sm md:text-base text-gray-700 font-medium">
                    <span className="text-gray-900 font-semibold">Percentage:</span> {currentSegment.percentage.toFixed(2)}%
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-gray-200">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Impact:</span> {currentSegment.impact}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500 text-center">Select an epoch to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Community Support Section */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8">
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
      </div>
    </div>
  );
}
