import { PrismaClient, Category, User } from '@prisma/client';

const prisma = new PrismaClient();

// Queries

export const getMockUser = async (): Promise<User> =>
  prisma.user.findUnique({
    where: {
      email: process.env.SEED_USER_EMAIL,
    },
  }) as Promise<User>;

export const getMockUserId = async (): Promise<string> =>
  getMockUser().then((user) => user?.id ?? '');

export const getChatsList = async (): Promise<void> => {};

export const getCategoriesList = async (userId: string): Promise<Category[]> =>
  prisma.category.findMany({
    where: {
      users: {
        some: {
          userId,
        },
      },
    },
    include: {
      users: true,
    },
  });

export const getCategoryById = async (): Promise<void> => {};

export const getChatById = async (): Promise<void> => {};

export const getMessagesByChatId = async (): Promise<void> => {};

// Mutations
export const createCategory = async (
  data: Pick<Category, 'name' | 'color'>,
  userId: string,
): Promise<Category> => {
  const category = await prisma.category.create({
    data: {
      name: data.name,
      color: data.color,
    },
  });

  await prisma.userCategory.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      category: {
        connect: {
          id: category.id,
        },
      },
    },
  });

  return category;
};

export const createMessage = async (): Promise<void> => {};

export const createChat = async (): Promise<void> => {};

export const deleteChats = async (): Promise<void> => {};

export const deleteChatById = async (): Promise<void> => {};
