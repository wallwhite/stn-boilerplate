import { NextRequest, NextResponse } from 'next/server';
import { createMessage, getChatById, getMockUserId } from '@/lib/api/db';

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const body = await req.json();

  const userId = await getMockUserId();
  const chat = await getChatById(body?.chatId);

  const message = await createMessage(
    {
      content: body?.content,
      role: 'user',
    },
    chat?.id,
    userId,
  );

  return NextResponse.json(message);
};
