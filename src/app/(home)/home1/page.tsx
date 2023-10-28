/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { NextPage } from 'next';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { Heading } from '@stn-ui/heading';
import { TBody, THead, Table, Td } from '@stn-ui/table';
import styles from '../home.module.scss';
import { ChatsList } from './chats-list';
import { HomeActions } from './home-actions';
import { getCategories, getChats } from '@/services/chats';

export const dynamic = 'auto';

const Home: NextPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['chats'],
    queryFn: getChats,
  });
  await queryClient.prefetchQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={styles.toolbar}>
        <Heading variant="h5">Chats list</Heading>
        <HomeActions />
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
          <ChatsList />
        </TBody>
      </Table>
    </HydrationBoundary>
  );
};

export default Home;
