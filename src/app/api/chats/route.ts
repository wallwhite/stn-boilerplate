import { NextResponse } from 'next/server';
import { getChatsList, getMockUserId } from '@/lib/api/db';

export const dynamic = 'force-dynamic';

export const GET = async (): Promise<NextResponse> => {
  try {
    const currentUserId = await getMockUserId();

    const chats = await getChatsList(currentUserId);

    return NextResponse.json(chats);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
};
