'use client';

import { Category } from '@prisma/client';
import { AddChatFormData } from '@stn-ui/forms';
import { useModals } from '@stn-ui/modal';
import { ToastTypes, useToasts } from '@stn-ui/toasts';
import { revalidate } from '@/lib/api/actions';
import { ModalNames } from '@/modules/modals/constants';

interface UseCreateChatInput {
  categories?: Category[];
  onComplete?: () => void | Promise<void>;
}

type UseCreateChatOutput = () => void;

export const useCreateChat = ({
  categories = [],
  onComplete,
}: UseCreateChatInput): UseCreateChatOutput => {
  const { openModal, closeModal } = useModals();
  const { notify } = useToasts();

  const createChat = async (data: AddChatFormData): Promise<void> => {
    const { name, prompt, creativity, category } = data;

    await fetch('/api/chats/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        content: prompt,
        creativity,
        categoryId: category?.value,
      }),
    });

    await onComplete?.();

    revalidate('/');

    notify({
      type: ToastTypes.Success,
      message: 'Chat created successfully',
    });

    closeModal();
  };

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
