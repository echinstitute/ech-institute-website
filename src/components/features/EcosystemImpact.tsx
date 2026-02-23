"use client";

import React from 'react';
import { Users, Video, Calendar, BookOpen, Heart } from 'lucide-react';

interface ImpactMetric {
  category: string;
  metric: string;
  context: string;
  icon: React.ReactNode;
  color: string;
}

const impactData: ImpactMetric[] = [
  {
    category: 'Protocol Coordination',
    metric: '120+ EIPIP Meetings',
    context: 'Facilitated for Ethereum governance and ACD implementer sessions.',
    icon: <Users className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    category: 'Education & Media',
    metric: '150+ PEEPanEIP Videos',
    context: 'Technical deep-dives explaining critical network upgrades to the community.',
    icon: <Video className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    category: 'Annual Media Surge',
    metric: '99+ Videos (2024)',
    context: 'A focused output year covering the Dencun and Pectra transitions.',
    icon: <Calendar className="w-8 h-8" />,
    color: 'from-green-500 to-green-600'
  },
  {
    category: 'Onboarding',
    metric: '90+ EIP Office Hours',
    context: 'Providing direct guidance and technical review for EIP authors.',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-orange-500 to-orange-600'
  },
  {
    category: 'Diversity',
    metric: '4+ WiEP Cohorts',
    context: 'Advancing gender diversity in protocol engineering via specialized study groups.',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-pink-500 to-pink-600'
  }
];

export function EcosystemImpact() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 lg:p-12">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-antonio font-bold mb-3 md:mb-4">
          I. Our Ecosystem Impact (By the Numbers)
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          As of February 2026, the ECH Institute has established a proven track record of coordinating the &quot;social layer&quot; of the protocol through technical facilitation and media production.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {impactData.map((item, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-yellow-400"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-gray-600">
                {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6 text-gray-700' })}
              </div>
              <h3 className="text-xl font-antonio font-bold text-gray-900">
                {item.category}
              </h3>
            </div>
            
            <div className="mb-3">
              <p className="text-3xl font-bold text-gray-900">
                {item.metric}
              </p>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.context}
            </p>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      {/* <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {impactData.map((item, index) => (
          <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-4 text-center">
            <div className="flex justify-center mb-2 text-gray-600">
              {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5 md:w-6 md:h-6' })}
            </div>
            <p className="text-sm md:text-lg font-bold text-gray-900 break-words">{item.metric}</p>
            <p className="text-xs text-gray-600 mt-1">{item.category}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
