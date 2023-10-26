import React from 'react';
import { NextPage } from 'next';
import { Chat } from '@/modules/chat/components';

interface Props {
  params: {
    id: string;
  };
}

const Page: NextPage<Props> = async () => <Chat messages={[]} />;

export default Page;
