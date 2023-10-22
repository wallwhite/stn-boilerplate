import React, { FC } from 'react';
import { Sidebar as SidebarUI } from '@stn-ui/sidebar';
import { SidebarNavigation } from './sidebar-navigation';

export const Sidebar: FC = () => (
  <SidebarUI>
    <SidebarNavigation />
  </SidebarUI>
);
