import { FC, PropsWithChildren } from 'react';
import { StaticLayout } from '@stn-ui/layout';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <StaticLayout title="Blog" subtitle="Check out our blog">
    {children}
  </StaticLayout>
);

export default Layout;
