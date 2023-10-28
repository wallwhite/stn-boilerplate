'use client';

import React, { FC, PropsWithChildren, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { revalidate } from '@/lib/api/actions';

export const NoCacheForPage: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    revalidate(pathname);
  }, []);

  return <>{children}</>;
};
