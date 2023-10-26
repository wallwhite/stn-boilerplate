import React from 'react';
import { NextPage } from 'next';
import { ChatLayout } from '@stn-ui/layout';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

const Layout: NextPage<LayoutProps> = async ({ children }) => (
  <ChatLayout title="my chat">{children}</ChatLayout>
);

export default Layout;
