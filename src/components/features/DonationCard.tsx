"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const DONATION_ADDRESS = '0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC';

const networks = [
  {
    name: 'Ethereum',
    logo: '/assets/chains/ethereum.png',
    alt: 'Ethereum'
  },
  {
    name: 'Optimism',
    logo: '/assets/chains/optimism.png',
    alt: 'Optimism'
  },
  {
    name: 'Polygon',
    logo: '/assets/chains/polygon.png',
    alt: 'Polygon'
  }
];

export function DonationCard() {
  const [currentNetworkIndex, setCurrentNetworkIndex] = useState(0);

  // Auto-slide networks
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNetworkIndex((prev) => (prev + 1) % networks.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className='text-center'>
        <CardTitle className="text-2xl font-antonio font-bold">Make a Donation</CardTitle>
        <CardDescription className="text-base mt-3">
          Donate to ECH Institute at:
        </CardDescription>
        <p className="text-xs font-mono text-gray-600 mt-2 break-all px-2">
          {DONATION_ADDRESS}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Connect Wallet Button */}
        <div className="flex justify-center">
          <ConnectButton showBalance={false} accountStatus={'avatar'} />
        </div>

        {/* Supported Networks Slider */}
        <div className="relative w-full">
          <p className="text-sm font-medium text-gray-600 mb-2 text-center">Supported Networks:</p>
          <div className="relative w-full overflow-hidden rounded-lg bg-gray-50 border-2 border-gray-200" style={{ height: '56px' }}>
            <div 
              className="flex h-full items-center"
              style={{ 
                transform: `translateX(-${(currentNetworkIndex * 100) / networks.length}%)`,
                transition: 'transform 0.8s ease-in-out',
                width: `${networks.length * 100}%`,
                height: '100%'
              }}
            >
              {networks.map((network, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center gap-3 h-full px-4"
                  style={{ 
                    width: `calc(100% / ${networks.length})`,
                    minWidth: `calc(100% / ${networks.length})`,
                    height: '100%'
                  }}
                >
                  <div className="flex items-center justify-center flex-shrink-0" style={{ width: '36px', height: '36px', minWidth: '36px' }}>
                    <img
                      src={network.logo}
                      alt={network.alt}
                      style={{ 
                        width: '36px', 
                        height: '36px', 
                        objectFit: 'contain',
                        display: 'block',
                        visibility: 'visible'
                      }}
                      onError={(e) => {
                        console.error('Failed to load image:', network.logo);
                      }}
                    />
                  </div>
                  <span 
                    className="text-base font-semibold whitespace-nowrap flex-shrink-0"
                    style={{ 
                      lineHeight: '1.2',
                      color: '#111827',
                      display: 'inline-block',
                      visibility: 'visible'
                    }}
                  >
                    {network.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
