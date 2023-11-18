'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { nanoid } from 'nanoid';
import { ToastTypes, useToasts } from '@stn-ui/toasts';
import { ChatMessage } from '../types';

interface UseChatsOutput {
  messages: ChatMessage[];
  sendMessage: ({ message }: { message: string }) => Promise<void>;
}

export const useChats = (initialMessages: ChatMessage[]): UseChatsOutput => {
  const router = useRouter();
  const { notify } = useToasts();
  const { id: chatId } = useParams();

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const sendMessage = async ({ message }: Record<'message', string>): Promise<void> => {
    try {
      const nextMessage = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatId, content: message }),
      }).then((res) => res.json());

      setMessages((prevMessages) => [
        ...prevMessages,
        nextMessage,
        {
          id: nanoid(),
          role: 'assistant',
          isLoading: true,
        },
      ]);

      const completion = await fetch('/api/messages/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatId }),
      }).then((res) => res.json());

      setMessages((prevMessages) => [
        ...prevMessages.filter((prevMessage) => !prevMessage.isLoading),
        completion,
      ]);

      router.refresh();
    } catch {
      notify({
        type: ToastTypes.Danger,
        message: 'Something went wrong',
      });
    }
  };

  return {
    messages,
    sendMessage,
  };
};
