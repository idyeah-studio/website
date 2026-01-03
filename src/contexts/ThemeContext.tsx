import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: {
    bg: string;
    text: string;
    textSecondary: string;
    textTertiary: string;
    border: string;
    borderStrong: string;
    cardBg: string;
    cardBgHover: string;
    divider: string;
    buttonBg: string;
    buttonText: string;
    buttonBgHover: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('website-theme') === 'dark';
  });

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('website-theme', newTheme ? 'dark' : 'light');
  };

  // Theme colors
  const theme = {
    bg: isDarkMode ? '#0d1117' : '#ffffff',
    text: isDarkMode ? '#e6e6e6' : '#222222',
    textSecondary: isDarkMode ? '#a0a0a0' : '#505050',
    textTertiary: isDarkMode ? '#707070' : '#8A8A8A',
    border: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)',
    borderStrong: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : '#000000',
    cardBg: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.01)',
    cardBgHover: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.02)',
    divider: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#E5E5E5',
    buttonBg: isDarkMode ? '#ffffff' : '#000000',
    buttonText: isDarkMode ? '#000000' : '#ffffff',
    buttonBgHover: isDarkMode ? '#e6e6e6' : '#111111'
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
