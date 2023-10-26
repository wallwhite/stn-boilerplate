import { NextResponse } from 'next/server';
// import { Message } from '@prisma/client';
// import OpenAI from 'openai';
// import { ChatCompletionMessageParam } from 'openai/resources/chat/index.mjs';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY || '',
// });

// const formatMessagesForAi = (messages: Message[]): ChatCompletionMessageParam[] =>
//   messages.map((message) => ({
//     role: message.role,
//     content: message.content,
//   }));

export const POST = async (): Promise<NextResponse> => NextResponse.json({});
