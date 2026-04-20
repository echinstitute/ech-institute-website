import React from 'react';
import { cn } from '@/lib/utils';

interface NavSection {
  id: string;
  label: string;
}

interface StickySideNavProps {
  sections: NavSection[];
  activeSection: string;
  onSectionClick: (id: string) => void;
  title?: string;
}

export const StickySideNav: React.FC<StickySideNavProps> = ({
  sections,
  activeSection,
  onSectionClick,
  title = "On This Page"
}) => {
  return (
    <aside className="hidden lg:block w-60 xl:w-64 flex-shrink-0 sticky top-28 self-start z-20">
      <div className="bg-[#1B1B1E] border border-[#2D2D30] rounded-[24px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
        {/* Subtle decorative glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F5A51D] opacity-[0.05] blur-[50px] rounded-full" />
        
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#FBFBFB] mb-6 px-2 border-b border-[#2D2D30] pb-4">
          {title}
        </p>
        
        <nav className="flex flex-col gap-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onSectionClick(s.id)}
              className={cn(
                "group text-left px-4 py-3 rounded-xl text-[14px] font-bold transition-all duration-200 relative font-[family-name:var(--font-family-nav)]",
                activeSection === s.id
                  ? "text-[#F5A51D] bg-[#F5A51D]/[0.05]"
                  : "text-[#FBFBFB] hover:text-[#FFFFFF] hover:bg-[#FFFFFF]/[0.03]"
              )}
            >
              {/* Active Indicator Line */}
              <div 
                className={cn(
                  "absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-[#F5A51D] transition-all duration-300 rounded-full",
                  activeSection === s.id ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                )} 
              />
              
              <span className={cn(
                "relative z-10 block transition-transform duration-200",
                activeSection === s.id ? "translate-x-1" : "group-hover:translate-x-1"
              )}>
                {s.label}
              </span>
            </button>
          ))}
        </nav>
        
        {/* Bottom branding footer */}
        <div className="mt-8 pt-4 border-t border-[#2D2D30] flex items-center justify-between opacity-50">
          <div className="flex gap-1.5 items-center">
             <div className="h-1.5 w-1.5 rounded-full bg-[#F5A51D]" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-[#FBFBFB]">ECH</span>
          </div>
          <div className="h-1 flex-1 mx-3 bg-[#2D2D30] rounded-full overflow-hidden">
             <div 
               className="h-full bg-[#F5A51D] transition-all duration-500 ease-out" 
               style={{ width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` }}
             />
          </div>
        </div>
      </div>
    </aside>
  );
};
