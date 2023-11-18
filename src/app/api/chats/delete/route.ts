import { NextRequest, NextResponse } from 'next/server';
import { deleteChatById } from '@/lib/api/db';

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const body = await req.json();

    await deleteChatById(body?.chatId);

    return NextResponse.json({ status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
};
