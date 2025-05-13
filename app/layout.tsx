import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dwiki Prastyo - Fullstack Web Developer',
  description: 'Welcome to my page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
