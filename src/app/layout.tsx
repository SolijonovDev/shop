'use client';
import ThemeRegistry from '@/theme/theme';
import Footer from '@/components/footer';
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import { styled } from '@mui/material/styles';

const StyledMain = styled('div')(({ theme }) => ({
  flexGrow: 1,
  background: 'blue',
}));

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
}));

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <ThemeRegistry>
          <Wrapper>
            <Navbar />
            <StyledMain>{children}</StyledMain>
            <Footer />
          </Wrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
