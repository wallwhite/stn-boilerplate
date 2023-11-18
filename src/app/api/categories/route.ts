import { NextRequest, NextResponse } from 'next/server';
import { createCategory, getCategoriesList, getMockUserId } from '@/lib/api/db';

export const dynamic = 'force-dynamic';

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const body = await req.json();

    const userId = await getMockUserId();

    const category = await createCategory(
      {
        name: body?.name ?? 'Undefined',
        color: body?.color ?? '#3F51B5',
      },
      userId,
    );

    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({ error });
  }
};

export const GET = async (): Promise<NextResponse> => {
  try {
    const userId = await getMockUserId();

    const categories = await getCategoriesList(userId);

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
