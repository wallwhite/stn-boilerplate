/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import * as argon from 'argon2';

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  const password = await argon.hash(process.env.SEED_USER_PASSWORD ?? '', {
    secret: Buffer.from(process.env.AUTH_SECRET ?? ''),
  });
  const user = await prisma.user.upsert({
    where: { email: process.env.SEED_USER_EMAIL },
    update: {},
    create: {
      name: 'John Doe',
      email: process.env.SEED_USER_EMAIL,
      password,
    },
  });

  console.log({ user });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
