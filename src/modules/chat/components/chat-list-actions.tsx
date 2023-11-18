'use client';

import React, { FC } from 'react';
import { Category } from '@prisma/client';
import { Button } from '@stn-ui/button';
import { useCreateChatCategory, useCreateChat } from '../hooks';
import styles from './chat-list-actions.module.scss';

interface Props {
  categories: Category[];
}

export const ChatListActions: FC<Props> = ({ categories }) => {
  const createChat = useCreateChat({ categories });
  const createCategory = useCreateChatCategory();

  return (
    <div className={styles.actions}>
      <Button size="m" onClick={createChat} isDisabled={!categories.length}>
        Create chat
      </Button>
      <Button size="m" variant="secondary" onClick={createCategory}>
        Create category
      </Button>
    </div>
  );
};
