import { FC, ReactNode } from 'react';
import { DashboardLayout } from '@stn-ui/layout';
import { Sidebar } from '@/modules/sidebar/components';

interface RootLayout {
  children: ReactNode;
}

const RootLayout: FC<RootLayout> = ({ children }) => (
  <DashboardLayout sidebar={<Sidebar />}>{children}</DashboardLayout>
);

export default RootLayout;
