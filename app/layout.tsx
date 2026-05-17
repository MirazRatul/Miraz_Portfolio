import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const geistSans = Geist({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mirajul Islam | React Native Developer',
  description: 'React Native Developer with 2.5+ years of experience building production-ready mobile applications for iOS and Android.',
  keywords: 'React Native, Mobile Developer, iOS, Android, TypeScript, Firebase, Full-Stack Developer',
  openGraph: {
    title: 'Mirajul Islam - React Native Developer',
    description: 'Building high-performance mobile applications with React Native',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${geistSans.className} antialiased text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}

