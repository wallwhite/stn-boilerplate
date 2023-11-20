import React, { FC } from 'react';
import { Sidebar as SidebarUI } from '@stn-ui/sidebar';
import { SidebarNavigation } from './sidebar-navigation';
import { SidebarUserMenu } from './sidebar-user-menu';

export const Sidebar: FC = () => (
  <SidebarUI footer={<SidebarUserMenu />}>
    <SidebarNavigation />
  </SidebarUI>
);
