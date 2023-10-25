'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navigation } from '@stn-ui/navigation';
import { useSidebarContext } from '@stn-ui/provider';
import { SIDEBAR_NAVIGATION } from '@/modules/sidebar/constants';

export const SidebarNavigation: FC = () => {
  const pathname = usePathname();
  const { isExpanded } = useSidebarContext();

  return (
    <Navigation
      items={SIDEBAR_NAVIGATION}
      isExpanded={isExpanded}
      pathname={pathname ?? ''}
      linkAs={Link}
    />
  );
};
