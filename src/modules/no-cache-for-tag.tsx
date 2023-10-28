'use client';

import React, { FC, PropsWithChildren, useEffect } from 'react';
import { revalidateByTag } from '@/lib/api/actions';

interface Props {
  tag: string;
}

export const NoCacheForTag: FC<PropsWithChildren<Props>> = ({ children, tag }) => {
  useEffect(() => {
    revalidateByTag(tag);
  }, []);

  return <>{children}</>;
};
