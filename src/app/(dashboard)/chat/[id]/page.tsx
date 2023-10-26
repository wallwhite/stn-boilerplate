import React from 'react';
import { NextPage } from 'next';
import { Chat } from '@/modules/chat/components';

interface Props {
  params: {
    id: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const chat = await fetch(`${process.env.APP_HOST}/api/chats/${params.id}`, {
    cache: 'no-store',
  }).then((res) => res.json());

  return <Chat messages={chat.messages} />;
};

export default Page;
