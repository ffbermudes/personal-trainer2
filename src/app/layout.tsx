import type { Metadata } from 'next';
import './globals.css';
import { Rubik } from 'next/font/google';
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Fran Freitas',
  description: 'Personal Trainer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>{children}</body>
    </html>
  );
}
