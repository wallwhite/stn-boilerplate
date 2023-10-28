/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { ChatRow } from '@stn-ui/chat-row';
import { Td, Tr } from '@stn-ui/table';
import { getChats } from '@/services/chats';

export const ChatsList: FC = () => {
  const { data = [] } = useQuery({
    queryKey: ['chats'],
    queryFn: getChats,
    networkMode: 'always',
  });

  return (
    <>
      {!data?.length && (
        <Tr>
          <Td colSpan={12}>No chats yet</Td>
          <Td />
        </Tr>
      )}
      {(data as any[]).map(
        ({
          id,
          title,
          lastMessage = 'default',
          icon,
          color = '#FF0000',
          tag = 'Default',
          counter,
          createdAt,
        }) => (
          <ChatRow
            key={id}
            title={title}
            lastMessage={lastMessage}
            icon={icon}
            color={color}
            tag={tag}
            counter={counter}
            createdAt={createdAt}
            linkAs={Link}
            href={`/chat/${id}`}
          />
        ),
      )}
    </>
  );
};
