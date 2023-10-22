import React from 'react';
import { NextPage } from 'next';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

const Layout: NextPage<LayoutProps> = async ({ children }) => <>{children}</>;

export default Layout;
