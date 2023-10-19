'use client';

import ThemeRegistry from '@/theme/theme';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/Header';
import { styled } from '@mui/material/styles';

const StyledLayout = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '50px',
  '@media (min-width: 600px)': {
    paddingTop: '60px',
  },
});

const StyledMain = styled('main')({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <ThemeRegistry>
          <StyledLayout>
            <Header />
            <StyledMain>{children}</StyledMain>
            <Footer />
          </StyledLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
