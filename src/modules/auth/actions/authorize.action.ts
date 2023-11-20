'use server';

import { signIn } from '../client';
import { AuthorizeData } from '../types';

export const authorizeAction = async ({ data, type }: AuthorizeData): Promise<string | null> => {
  try {
    await signIn('credentials', {
      type,
      email: data.email,
      password: data.password,
    });

    return null;
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }

    throw error;
  }
};
