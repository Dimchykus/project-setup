'use client';

import {
  createTheme,
  CssBaseline,
  SxProps,
  Theme,
  ThemeProvider,
} from '@mui/material';
import { Inter } from 'next/font/google';
import './globals.css';
import React, { createContext, useCallback, useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Mode } from '@mui/system/cssVars/useCurrentColorScheme';
import { themeCreator } from '@/core/theme/themeCreator';
import LocalStore from '@/core/utils/localStorage';
import ErrorBoundary from '@/pages/errorBoundary';

const inter = Inter({ subsets: ['latin'] });

interface ColorModeContextType {
  toggleColorMode: () => void;
  colorMode: Mode;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  colorMode: 'dark',
});

const layout: SxProps<Theme> = (theme) => ({
  backgroundColor: 'background.default',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<Mode>(LocalStore.get('theme') || 'dark');
  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => {
      const mode = prevMode === 'light' ? 'dark' : 'light';
      LocalStore.set('theme', mode);
      return mode;
    });
  }, []);

  const theme = useMemo(() => createTheme(themeCreator(mode)), [mode]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <ColorModeContext.Provider
            value={{ colorMode: mode, toggleColorMode }}
          >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ErrorBoundary>{children}</ErrorBoundary>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
