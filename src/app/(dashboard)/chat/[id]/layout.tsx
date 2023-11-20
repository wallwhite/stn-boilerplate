import React from 'react';
import { Metadata, NextPage } from 'next';
import { headers } from 'next/headers';
import { ChatLayout } from '@stn-ui/layout';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const chat = await fetch(`${process.env.APP_HOST}/api/chats/${params.id}`, {
    headers: headers(),
  }).then((res) => res.json());

  return {
    title: `Chat: ${chat.title} `,
  };
};

const Layout: NextPage<LayoutProps> = async ({ children, params }) => {
  const chat = await fetch(`${process.env.APP_HOST}/api/chats/${params.id}`, {
    headers: headers(),
  }).then((res) => res.json());
  return <ChatLayout title={chat.title}>{children}</ChatLayout>;
};

export default Layout;
