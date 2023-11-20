'use client';

import { useRouter } from 'next/navigation';
import { ToastTypes, useToasts } from '@stn-ui/toasts';
import { authorizeAction } from '../actions/authorize.action';
import { AuthorizeData } from '../types';

interface UseAuthorize {
  handleFormSubmit: (data: AuthorizeData['data']) => Promise<void>;
}

export const useAuthorize = (authType: AuthorizeData['type']): UseAuthorize => {
  const { notify } = useToasts();
  const router = useRouter();

  const handleFormSubmit = async (data: AuthorizeData['data']): Promise<void> => {
    const code = await authorizeAction({
      type: authType,
      data,
    } as AuthorizeData);

    if (code === 'CredentialSignin') {
      notify({
        type: ToastTypes.Danger,
        message: 'Invalid credentials',
      });
    }

    router.push('/');
  };

  return {
    handleFormSubmit,
  };
};
