import { NextResponse } from 'next/server';
import dayjs from 'dayjs';
import { getChatById } from '@/lib/api/db';
import { withSessionHandler } from '@/modules/auth/server/with-session-handler';

export const dynamic = 'force-dynamic';

export const GET = withSessionHandler<Record<'id', string>>(
  async ({ context }): Promise<NextResponse> => {
    try {
      const chat = await getChatById(context?.params.id ?? '', {
        messages: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      });

      if (!chat) return NextResponse.json({ error: 'Chat not found' }, { status: 404 });

      const { messages = [], ...chatData } = chat;

      const normalizedChat = {
        ...chatData,
        messages: messages
          .map((message) => ({
            ...message,
            createdAt: dayjs(message.createdAt).format('DD MMM YYYY, HH:mm'),
          }))
          .sort((a, b) => dayjs(a.createdAt).unix() - dayjs(b.createdAt).unix()),
      };

      return NextResponse.json(normalizedChat);
    } catch (e) {
      return NextResponse.json({ error: e });
    }
  },
);
