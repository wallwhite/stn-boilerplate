/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { NextPage } from 'next';
import { ChatList } from '@/modules/chat/components';

export const dynamic = 'force-dynamic';

const Home: NextPage = async () => <ChatList />;

export default Home;
