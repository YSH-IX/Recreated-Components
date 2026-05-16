'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute={'class'}
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
