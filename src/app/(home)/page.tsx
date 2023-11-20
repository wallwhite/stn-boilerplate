/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { NextPage } from 'next';
import { auth } from '@/modules/auth/client';
import { ChatList, ChatListUnauthorized } from '@/modules/chat/components';

export const dynamic = 'force-dynamic';

const Home: NextPage = async () => {
  const session = await auth();

  return <>{session ? <ChatList /> : <ChatListUnauthorized />}</>;
};

export default Home;
