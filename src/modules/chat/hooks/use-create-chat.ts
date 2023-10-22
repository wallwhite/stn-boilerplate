'use client';

import { useModals } from '@stn-ui/modal';
import { ModalNames } from '@/modules/modals/constants';

interface UseCreateChatInput {
  categories?: { id: string; name: string; color: string }[]; // TODO: Replace with prisma type
  onComplete?: () => void | Promise<void>;
}

type UseCreateChatOutput = () => void;

export const useCreateChat = ({ categories = [] }: UseCreateChatInput): UseCreateChatOutput => {
  const { openModal } = useModals();

  const createChat = async (): Promise<void> => {};

  const openCreateChatModal = (): void => {
    const categoryOptions = categories.map((category) => ({
      id: category.id,
      title: category.name,
      value: category.id,
      color: category.color,
    }));

    openModal({
      name: ModalNames.AddChatModal,
      props: {
        categories: categoryOptions,
        onSubmit: createChat,
      },
    });
  };

  return openCreateChatModal;
};
