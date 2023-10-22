'use client';

import { useModals } from '@stn-ui/modal';
import { ModalNames } from '@/modules/modals/constants';

export interface UseCreateChatCategoryInput {
  onComplete?: () => void | Promise<void>;
}

export type UseCreateChatCategoryOutput = () => void;

export const useCreateChatCategory = (): UseCreateChatCategoryOutput => {
  const { openModal } = useModals();

  const createChatCategory = async (): Promise<void> => {};

  const openCreateChatCategoryModal = (): void => {
    openModal({
      name: ModalNames.AddCategoryModal,
      props: {
        onSubmit: createChatCategory,
      },
    });
  };

  return openCreateChatCategoryModal;
};
