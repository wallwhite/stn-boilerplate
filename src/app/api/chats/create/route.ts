import { NextRequest, NextResponse } from 'next/server';
import { createChat, getCategoryById, getMockUserId } from '@/lib/api/db';

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const body = await req.json();

    const currentUserId = await getMockUserId();

    const category = await getCategoryById(body?.categoryId);

    const chat = await createChat(
      {
        title: body?.name ?? 'New Chat',
        icon: body?.icon ?? '🤖',
        creativity: body?.creativity ?? 'medium',
        content:
          body?.content ??
          'Act like my best friend, with jokes advices and support. I will do the same for you. We can talk about anything. Be yourself.',
      },
      currentUserId,
      category?.id,
    );

    return NextResponse.json(chat, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
};
