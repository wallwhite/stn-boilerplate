import { NextRequest, NextResponse } from 'next/server';
import { Session } from 'next-auth';
import { User } from '@prisma/client';
import { auth } from '../client';
import { getUserByEmail } from '@/lib/api/db';

export interface NextRequestContext<P extends Record<string, string>> {
  params: P;
}

export interface NextApiHandlerOptions<P extends Record<string, string>> {
  req: NextRequest;
  session: Session;
  currentUser: User;
  context?: NextRequestContext<P>;
}

export type WrappedHandler = <P extends Record<string, string>>(
  options: NextApiHandlerOptions<P>,
) => Promise<NextResponse>;

export const withSessionHandler =
  <P extends Record<string, string>>(handler: WrappedHandler) =>
  async (req: NextRequest, context?: NextRequestContext<P>): Promise<NextResponse> => {
    try {
      const session = await auth();
      const currentUser = await getUserByEmail(session?.user?.email ?? '');

      if (!currentUser || !session) {
        return NextResponse.redirect(`${process.env.APP_HOST}/login`);
      }

      return handler({ req, session, context, currentUser });
    } catch (e) {
      return NextResponse.json({ error: 'Session error' }, { status: 400 });
    }
  };
