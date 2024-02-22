import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Edot Test schdn',
  description: 'Basic dashboard with Next.js and Shadcn',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
        <Toaster />
        <>
          <Header />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="w-full pt-16">{children}</main>
          </div>
        </>
      </body>
    </html>
  );
}
