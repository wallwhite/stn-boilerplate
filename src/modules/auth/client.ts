import NextAuth from 'next-auth';
import { User } from '@prisma/client';
import * as argon from 'argon2';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './config';
import { AuthCredentials } from './types';
import { getUserByEmail, createUser } from '@/lib/api/db';

const login = async (email: string, password: string): Promise<Omit<User, 'password'> | null> => {
  const user = await getUserByEmail(email);

  if (!user) return null;

  const { password: userPassword, ...restUser } = user;

  const passwordMatches = await argon.verify(userPassword ?? '', password, {
    secret: Buffer.from(process.env.AUTH_SECRET ?? ''),
  });

  if (!passwordMatches) return null;

  return restUser;
};

const register = async (
  email: string,
  password: string,
): Promise<Omit<User, 'password'> | null> => {
  const passwordHash = await argon.hash(password, {
    secret: Buffer.from(process.env.AUTH_SECRET ?? ''),
  });

  const user = await createUser({
    email,
    password: passwordHash,
  });

  return user;
};

const authorize = async ({
  email,
  password,
  type,
}: Partial<AuthCredentials>): Promise<Omit<User, 'password'> | null> => {
  if (!email || !password) return null;

  switch (type) {
    case 'login':
      return login(email, password);
    case 'register':
      return register(email, password);
    default:
      return null;
  }
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      authorize,
    }),
  ],
});
