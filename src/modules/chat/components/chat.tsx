'use client';

import React, { FC } from 'react';
import { MessageForm } from '@stn-ui/forms';
import { MessageList, MessageItem } from '@stn-ui/messages';
import { useChats } from '../hooks';
import { ChatMessage } from '../types';

interface Props {
  messages: ChatMessage[];
}

export const Chat: FC<Props> = ({ messages }) => {
  const { messages: chatMessages, sendMessage } = useChats(messages);

  return (
    <>
      <MessageList>
        {chatMessages.map(({ id, role, createdAt, author, content, isLoading }) => {
          const type = role === 'assistant' ? 'received' : 'sent';

          return (
            <MessageItem
              key={id}
              time={createdAt}
              type={type}
              author={author?.name}
              isLoading={isLoading}
            >
              {content}
            </MessageItem>
          );
        })}
      </MessageList>
      <MessageForm onSubmit={sendMessage} />
    </>
  );
};
