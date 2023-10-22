'use client';

import { useState } from 'react';
import { ChatMessage } from '../types';

interface UseChatsOutput {
  messages: ChatMessage[];
  sendMessage: ({ message }: { message: string }) => Promise<void>;
}

export const useChats = (initialMessages: ChatMessage[]): UseChatsOutput => {
  const [messages] = useState<ChatMessage[]>(initialMessages);

  const sendMessage = async (): Promise<void> => {};

  return {
    messages,
    sendMessage,
  };
};
