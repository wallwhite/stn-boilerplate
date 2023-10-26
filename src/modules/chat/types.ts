import { Message } from '@prisma/client';

export interface ChatMessage extends Omit<Message, 'createdAt'> {
  createdAt: string;
  author?: {
    name?: string;
  };
  isLoading?: boolean;
}
