import React from 'react';
import { NextPage } from 'next';

interface Props {
  params: {
    id: string;
  };
}

const Page: NextPage<Props> = async () => <>chat page</>;

export default Page;
