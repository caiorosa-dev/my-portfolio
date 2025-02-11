"use client"

import * as React from "react"
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { createContext } from 'react';
import { Theme } from '@/types/theme';
import { getTheme } from '@/actions/get-theme';

interface ThemeProviderType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

interface ThemeProviderProps {
  children?: React.ReactNode;
  currentTheme: Theme;
};

const ThemeContext = createContext<ThemeProviderType | undefined>(undefined);

export function ThemeProvider({
  currentTheme,
  children,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(currentTheme);

  async function setTheme(theme: Theme) {
    setThemeState(theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const applicationTheme = await getTheme();
    await applicationTheme.saveTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size='icon'
      variant='ghost'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <MoonIcon className='size-6' /> : <SunIcon className='size-6' />}
    </Button>
  )
}

