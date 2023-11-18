import { NextRequest, NextResponse } from 'next/server';
import { Message } from '@prisma/client';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat/index.mjs';
import { createMessage, getChatById, getMessagesByChatId } from '@/lib/api/db';
import { CHATS_CREATIVITY } from '@/modules/chat/constants';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const formatMessagesForAi = (messages: Message[]): ChatCompletionMessageParam[] =>
  messages.map((message) => ({
    role: message.role,
    content: message.content,
  }));

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const body = await req.json();

  const chat = await getChatById(body?.chatId);

  const systemMessage = await getMessagesByChatId(chat?.id, 1, 'asc');
  const messages = (await getMessagesByChatId(chat?.id, 10)).reverse();

  const chatPreset = CHATS_CREATIVITY[chat?.creativity ?? 'medium'];

  const completion = await openai.chat.completions.create({
    ...chatPreset,
    messages: formatMessagesForAi([...systemMessage, ...messages] as Message[]),
  });

  const { role, content } = completion.choices[0].message;

  const message = await createMessage(
    { role, content } as Pick<Message, 'content' | 'role'>,
    chat?.id,
  );

  return NextResponse.json(message);
};
