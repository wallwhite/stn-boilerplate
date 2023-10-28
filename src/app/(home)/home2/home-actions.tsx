'use client';

import React, { FC } from 'react';
import { Category } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { ChatListActions } from '@/modules/chat/components';
import { getCategories } from '@/services/chats';

export const HomeActions: FC = () => {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    networkMode: 'always',
  });

  return <ChatListActions categories={data as Category[]} />;
};
