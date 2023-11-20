import React, { PropsWithChildren } from 'react';
import { NextPage } from 'next';
import { AuthLayout } from '@stn-ui/layout';

const Layout: NextPage<PropsWithChildren> = ({ children }) => <AuthLayout>{children}</AuthLayout>;

export default Layout;
