'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export const revalidate = (path: string): void => {
  revalidatePath(path);
};

export const revalidateByTag = (tag: string): void => {
  revalidateTag(tag);
};
