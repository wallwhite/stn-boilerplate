import { PrismaClient, Category, User, Prisma, Message, Chat } from '@prisma/client';

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

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

export const gerUserIdByEmail = async (email: string): Promise<string | null> => {
  const user = await getUserByEmail(email);

  return user?.id ?? null;
};

export const getChatsList = async (userId: string): Promise<Chat[]> =>
  prisma.chat
    .findMany({
      where: {
        users: {
          some: {
            userId,
          },
        },
      },
      include: {
        _count: {
          select: { messages: true },
        },
        messages: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
        category: {
          select: {
            name: true,
            color: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    })
    .then((chats) =>
      chats.map((chat) => {
        const { messages, category, _count, ...rest } = chat;

        return {
          ...rest,
          lastMessage: messages[0].content,
          color: category.color,
          tag: category.name,
          counter: _count.messages,
        };
      }),
    );

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

export const getCategoryById = async (id: string): Promise<Category | null> =>
  prisma.category.findUnique({
    where: {
      id,
    },
  });

export const getChatById = async (
  id: string,
  include?: Prisma.ChatFindUniqueArgs['include'],
): Promise<(Chat & { messages?: Message[] }) | null> =>
  prisma.chat.findUnique({
    where: {
      id,
    },
    include,
  });

export const getMessagesByChatId = async (
  chatId: string | undefined,
  count = 20,
  orderBy: 'asc' | 'desc' = 'desc',
): Promise<Omit<Message, 'createdAt'>[]> =>
  prisma.message.findMany({
    where: {
      chatId,
    },
    take: count,
    orderBy: {
      createdAt: orderBy,
    },
  });

// Mutations
export const createUser = async (
  data: Pick<Prisma.UserCreateInput, 'email' | 'password'>,
): Promise<Omit<User, 'password'>> => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      email: true,
      chats: true,
      categories: true,
      messages: true,
      name: true,
      password: false,
    },
  });

  return user;
};

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

export const createMessage = async (
  data: Pick<Message, 'content' | 'role'>,
  chatId: string | undefined,
  authorId?: string,
): Promise<Message> => {
  const message = await prisma.message.create({
    data: {
      ...data,
      chat: {
        connect: {
          id: chatId,
        },
      },
      ...(authorId && {
        author: {
          connect: {
            id: authorId,
          },
        },
      }),
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  await prisma.chat.update({
    where: {
      id: chatId,
    },
    data: {
      updatedAt: new Date(),
    },
  });

  return message;
};

export const createChat = async (
  { content, ...data }: Omit<Prisma.ChatCreateInput, 'category'> & { content: string },
  currentUserId: string,
  categoryId: string | undefined,
): Promise<Chat> =>
  prisma.chat.create({
    data: {
      ...data,
      title: data?.title ?? 'New Chat',
      icon: data?.icon ?? '🤖',
      creativity: data?.creativity ?? 'medium',
      category: {
        connect: {
          id: categoryId,
        },
      },
      users: {
        create: {
          user: {
            connect: {
              id: currentUserId,
            },
          },
        },
      },
      messages: {
        create: {
          content:
            content ??
            'Act like my best friend, with jokes advices and support. I will do the same for you. We can talk about anything. Be yourself.',
          role: 'system',
          author: {
            connect: {
              id: currentUserId,
            },
          },
        },
      },
    },
  });

export const deleteChats = async (userId: string): Promise<Prisma.BatchPayload> =>
  prisma.chat.deleteMany({
    where: {
      users: {
        some: {
          userId,
        },
      },
    },
  });

export const deleteChatById = async (chatId: string): Promise<Chat> =>
  prisma.chat.delete({
    where: {
      id: chatId,
    },
  });
