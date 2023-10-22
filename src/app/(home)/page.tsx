import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { ChatRow } from '@stn-ui/chat-row';
import { Heading } from '@stn-ui/heading';
import { TBody, THead, Table, Td } from '@stn-ui/table';
import styles from './home.module.scss';
import { CHATS_LIST } from '@/lib/api/api.constants';
import { ChatListActions } from '@/modules/chat/components';

const Home: NextPage = async () => (
  <>
    <div className={styles.toolbar}>
      <Heading variant="h5">Chats list</Heading>
      <ChatListActions />
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
        {CHATS_LIST.map(
          ({ id, title, lastMessage = 'default', icon, color = '#FF0000', tag = 'Default', counter, createdAt }) => (
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

export default Home;
