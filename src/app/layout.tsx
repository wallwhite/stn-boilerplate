import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { auth } from '@/modules/auth/client';
import { AppProvider } from '@/modules/provider/components/app-provider';
import '@stn-ui/theme/stn-ui.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    absolute: 'PawsitiveAI',
    template: 'PawsitiveAI | %s',
  },
  description: 'STN - Sweat, Tears, Next.js. Complete guide to building a Next.js app.',
};

interface RootLayout {
  children: ReactNode;
}

const RootLayout: FC<RootLayout> = async ({ children }) => {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <div id="root">
          <AppProvider session={session}>{children}</AppProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
