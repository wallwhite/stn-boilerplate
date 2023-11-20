import { NextResponse } from 'next/server';
import { getChatsList } from '@/lib/api/db';
import { withSessionHandler } from '@/modules/auth/server/with-session-handler';

export const dynamic = 'force-dynamic';

export const GET = withSessionHandler(async ({ currentUser }) => {
  try {
    const chats = await getChatsList(currentUser?.id);

    return NextResponse.json(chats);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
});
