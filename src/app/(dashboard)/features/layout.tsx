import { FC, PropsWithChildren } from 'react';
import { StaticLayout } from '@stn-ui/layout';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <StaticLayout title="Features" subtitle="Check out all the features">
    {children}
  </StaticLayout>
);

export default RootLayout;
