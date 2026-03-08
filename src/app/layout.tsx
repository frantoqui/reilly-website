import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import ThemeRegistry from '../lib/ThemeRegistry';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Reilly Thomson — Project & Marketing Coordinator',
  description:
    'Portfolio of Reilly Thomson, Project & Marketing Coordinator specializing in art world social media, content strategy, and digital campaigns for David Zwirner, Casa MB, M+B, and Domo Damo.',
  keywords: ['Reilly Thomson', 'art marketing', 'social media', 'content strategy', 'David Zwirner', 'gallery marketing'],
  openGraph: {
    title: 'Reilly Thomson',
    description: 'Project & Marketing Coordinator — Art World Social Media & Content',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#000', colorScheme: 'dark' }}>
      <body className={`${geist.variable} ${spaceGrotesk.variable}`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}