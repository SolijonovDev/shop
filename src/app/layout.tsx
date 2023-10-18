'use client';
import ThemeRegistry from '@/theme/theme';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/Navbar';
import { styled } from '@mui/material/styles';

const Wrapper = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});

const StyledMain = styled('main')({
  flexGrow: 1,
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
