'use client';

import React, { ComponentProps, FC, PropsWithChildren } from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ModalProvider } from '@stn-ui/modal';
import { UIProvider } from '@stn-ui/provider';
import { ToastProvider } from '@stn-ui/toasts';
import { modals } from '@/modules/modals/components';

interface Props {
  session: Session | null;
}

export const AppProvider: FC<PropsWithChildren<Props>> = ({ children }) => (
  <SessionProvider>
    <UIProvider>
      <ToastProvider>
        <ModalProvider
          modalComponents={
            modals as unknown as ComponentProps<typeof ModalProvider>['modalComponents']
          }
        >
          {children}
        </ModalProvider>
      </ToastProvider>
    </UIProvider>
  </SessionProvider>
);
