import React, { FC } from 'react';
import Link from 'next/link';
import { Button } from '@stn-ui/button';
import { Heading } from '@stn-ui/heading';
import styles from './chat-list-unauthorized.module.scss';

export const ChatListUnauthorized: FC = () => (
  <div className={styles.unauthorized}>
    <Heading variant="h4">You should be logged in to see the chat list</Heading>
    <div className={styles.buttons}>
      <Button type="link" className="mb-8" as={Link} to="/login" isWide>
        Login
      </Button>
      <Button type="link" as={Link} to="/register" variant="secondary" isWide>
        Register
      </Button>
    </div>
  </div>
);
