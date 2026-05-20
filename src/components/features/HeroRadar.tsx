'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroRadarSphere {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface HeroRadarProps {
  spheres: HeroRadarSphere[];
  accentColor?: string;
  className?: string;
}

export function HeroRadar({ spheres, accentColor = 'var(--accent-brand)', className = '' }: HeroRadarProps) {
  return (
    <div className={`relative h-[400px] w-full hidden lg:flex items-center justify-center group/radar ${className}`}>
      {/* Radar Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-3xl">
        <div className="absolute w-[180px] h-[180px] border border-[var(--border-soft)] rounded-full opacity-20 animate-[ping_4s_linear_infinite]" />
        <div className="absolute w-[300px] h-[300px] border border-[var(--border-soft)] rounded-full opacity-10 animate-[ping_6s_linear_infinite]" />
        <div className="absolute w-full h-[1px] bg-[var(--border-soft)] opacity-10" />
        <div className="absolute h-full w-[1px] bg-[var(--border-soft)] opacity-10" />
      </div>

      {/* Central Core */}
      <div 
        className="absolute z-10 h-3 w-3 rounded-full opacity-20" 
        style={{ backgroundColor: accentColor }}
      />

      {/* The 4 Role Spheres */}
      <div className="absolute inset-0">
        {spheres.map(({ icon: Icon, title, desc }, index) => {
          const positions = [
            'top-[10%] left-1/2 -translate-x-1/2',
            'right-[10%] top-1/2 -translate-y-1/2',
            'bottom-[10%] left-1/2 -translate-x-1/2',
            'left-[10%] top-1/2 -translate-y-1/2',
          ];
          const isRightSide = index === 1;
          
          return (
            <div key={title} className={`absolute ${positions[index % positions.length]} group/sphere z-20 hover:z-50`}>
              <div className="relative flex flex-col items-center">
                <div className="proplay-icon-container h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-[var(--border-soft)] bg-[var(--surface-card-theme)] shadow-2xl group-hover/sphere:border-[var(--accent-brand)] group-hover/sphere:scale-110 transition-all duration-500 cursor-default">
                  <Icon className="h-8 w-8 md:h-10 md:w-10 group-hover/sphere:text-[var(--accent-brand)] transition-colors" />
                  <div className="absolute inset-0 rounded-full border border-[var(--accent-brand)] opacity-0 group-hover/sphere:opacity-100 group-hover/sphere:animate-ping pointer-events-none" />
                </div>
                <div className="mt-3 px-3 py-1 rounded-full border border-[var(--border-soft)] bg-[var(--surface-card-theme)] opacity-80 group-hover/sphere:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-base)]">{title}</span>
                </div>
                {/* Tooltip */}
                <div className={`absolute top-1/2 ${isRightSide ? 'right-full mr-4 sm:mr-6 translate-x-4' : 'left-full ml-4 sm:ml-6 -translate-x-4'} w-48 sm:w-56 pointer-events-none opacity-0 group-hover/sphere:opacity-100 bg-[var(--surface-card-theme)] border border-[var(--accent-brand)] p-4 rounded-xl shadow-2xl transition-all duration-300 group-hover/sphere:translate-x-0 z-[100] -translate-y-1/2`}>
                  <div className={`absolute top-1/2 ${isRightSide ? '-right-2 border-r border-t' : '-left-2 border-l border-b'} w-4 h-4 bg-[var(--surface-card-theme)] border-[var(--accent-brand)] rotate-45 -translate-y-1/2`} />
                  <p className="text-[11px] font-black uppercase tracking-widest text-[var(--accent-brand)] mb-1">Focus Area</p>
                  <p className="text-[12px] text-[var(--text-base)] font-medium leading-[1.4]">{desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
