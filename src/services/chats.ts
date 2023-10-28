import { Category, Chat } from '@prisma/client';
import axios from 'axios';
import { getBaseURL } from './services.utils';

export const getChats = async (): Promise<Chat[]> => {
  const { data } = await axios.get(`${getBaseURL()}/chats`);

  return data;
};

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get(`${getBaseURL()}/categories`);

  return data;
};

export const getChatsFetch = async (): Promise<Chat[]> => {
  const chats = await fetch(`${getBaseURL()}/chats`, {
    next: {
      revalidate: 10,
    },
  }).then((res) => res.json());

  return chats;
};
