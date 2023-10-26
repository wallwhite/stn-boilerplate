import { NextResponse } from 'next/server';
import { deleteChats, getMockUserId } from '@/lib/api/prisma.api';

export const POST = async (): Promise<NextResponse> => {
  try {
    const currentUserId = await getMockUserId();

    await deleteChats(currentUserId);

    return NextResponse.json({ status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
};
