'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

export function ThemeToggle() {
  const { isDark, mounted, toggleTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="theme-toggle-shell" aria-hidden="true">
        <span className="theme-toggle-thumb" />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-shell${isDark ? ' is-dark' : ''}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sun icon — left side */}
      <span className="theme-toggle-icon theme-toggle-icon--sun" aria-hidden="true">
        <Sun strokeWidth={2.5} />
      </span>

      {/* Sliding thumb */}
      <span className="theme-toggle-thumb" aria-hidden="true">
        {isDark
          ? <Moon strokeWidth={2.5} />
          : <Sun strokeWidth={2.5} />
        }
      </span>

      {/* Moon icon — right side */}
      <span className="theme-toggle-icon theme-toggle-icon--moon" aria-hidden="true">
        <Moon strokeWidth={2.5} />
      </span>
    </button>
  );
}
