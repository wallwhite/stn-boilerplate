import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { ChatListLayout, DashboardLayout } from '@stn-ui/layout';
import { Sidebar } from '@/modules/sidebar/components';

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

const RootLayout: FC<RootLayout> = ({ children }) => (
  <DashboardLayout sidebar={<Sidebar />}>
    <ChatListLayout>{children}</ChatListLayout>
  </DashboardLayout>
);

export default RootLayout;
