'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const themeOptions: ThemeOptions = {
  typography: {
    fontSize: 12,
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    background: {
      default: '#fafafa',
    },
    primary: {
      main: '#1976d2',
    },
    text: {
      primary: '#300000',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: [
        {
          '*': {
            margin: 0,
            padding: 0,
          },
          html: {
            height: '100%',
          },
          body: {
            minWidth: 320,
            height: '100%',
            position: 'relative',
            fontSize: 16,
            fontWeight: 400,
          },
          '::-webkit-scrollbar': {
            width: '0',
          },
          'ul,li': {
            listStyleType: 'none',
          },
        },
      ],
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
