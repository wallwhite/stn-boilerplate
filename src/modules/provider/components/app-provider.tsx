'use client';

import React, { ComponentProps, FC, PropsWithChildren } from 'react';
import { ModalProvider } from '@stn-ui/modal';
import { UIProvider } from '@stn-ui/provider';
import { ToastProvider } from '@stn-ui/toasts';
import { modals } from '@/modules/modals/components';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => (
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
);
