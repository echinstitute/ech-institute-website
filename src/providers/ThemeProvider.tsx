'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  isDark: boolean;
  mounted: boolean;
  setTheme: (theme: Theme) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const STORAGE_KEY = 'ech-theme';

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  const body = document.body;
  const root = document.documentElement;

  body.classList.remove('theme-light', 'theme-dark', 'dark');
  body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  body.classList.toggle('dark', theme === 'dark');
  body.dataset.theme = theme;
  root.dataset.theme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    const initialTheme: Theme = storedTheme === 'light' ? 'light' : 'dark';

    setThemeState(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [mounted, theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      isDark: theme === 'dark',
      mounted,
      setTheme: setThemeState,
      theme,
      toggleTheme: () => {
        setThemeState((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
      },
    }),
    [mounted, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider.');
  }

  return context;
}
