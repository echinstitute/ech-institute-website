'use client';

import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/providers/ThemeProvider';

export function ThemeToggle() {
  const { isDark, mounted, toggleTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="theme-toggle theme-toggle--loading" aria-hidden="true">
        <span className="theme-toggle__thumb" />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn('theme-toggle', isDark && 'theme-toggle--dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__icon theme-toggle__icon--light" aria-hidden="true">
        <Sun className="h-4 w-4" />
      </span>
      <span className="theme-toggle__icon theme-toggle__icon--dark" aria-hidden="true">
        <Moon className="h-4 w-4" />
      </span>
      <span className="theme-toggle__thumb" aria-hidden="true">
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
    </button>
  );
}
