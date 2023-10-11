import Footer from '@/components/footer';
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Developer by Solijonov Qodirjon',
  authors: [{ name: 'Solijonov Qodirjon', url: 'https://solijonov.vercel.app/' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
