/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { headers } from 'next/headers';
import Link from 'next/link';
import { ChatRow } from '@stn-ui/chat-row';
import { Heading } from '@stn-ui/heading';
import { TBody, THead, Table, Td, Tr } from '@stn-ui/table';
import { ChatListActions } from './chat-list-actions';
import styles from './chat-list.module.scss';

export const ChatList: FC = async () => {
  const chatsPromise = await fetch(`${process.env.APP_HOST}/api/chats`, {
    headers: headers(),
  }).then((res) => res.json() ?? []);
  const categoriesPromise = await fetch(`${process.env.APP_HOST}/api/categories`, {
    headers: headers(),
  }).then((res) => res.json());

  const [chats, categories] = await Promise.all([chatsPromise, categoriesPromise]);

  return (
    <>
      <div className={styles.toolbar}>
        <Heading variant="h5">Chats list</Heading>
        <ChatListActions categories={categories} />
      </div>
      <Table>
        <THead>
          <Td colSpan={6}>Chat</Td>
          <Td colSpan={2} hidden="tablet">
            Created At
          </Td>
          <Td colSpan={2} hidden="mobile">
            Category
          </Td>
          <Td colSpan={2}>Messages</Td>
        </THead>
        <TBody>
          {!chats?.length && (
            <Tr>
              <Td colSpan={12}>No chats yet</Td>
              <Td />
            </Tr>
          )}
          {((chats ?? []) as any[]).map(
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
        </TBody>
      </Table>
    </>
  );
};
