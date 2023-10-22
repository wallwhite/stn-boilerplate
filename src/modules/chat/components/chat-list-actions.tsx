'use client';

import React, { FC } from 'react';
import { Button } from '@stn-ui/button';
import { useCreateChatCategory, useCreateChat } from '../hooks';
import styles from './chat-list-actions.module.scss';

export const ChatListActions: FC = () => {
  const createChat = useCreateChat({});
  const createCategory = useCreateChatCategory();

  return (
    <div className={styles.actions}>
      <Button size="m" onClick={createChat}>
        Create chat
      </Button>
      <Button size="m" variant="secondary" onClick={createCategory}>
        Create category
      </Button>
    </div>
  );
};
