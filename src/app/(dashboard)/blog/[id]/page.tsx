import { NextPage } from 'next';
import Image from 'next/image';
import { PostArticle } from '@stn-ui/blog';
import { getAllPosts, getPostById } from '@/lib/api/blog';

const Post: NextPage<{ params: { id: string } }> = async ({ params: { id } }) => {
  const { html, image, title } = await getPostById(id);

  return <PostArticle image={<Image src={image} fill alt={title} />} content={html} />;
};

export const generateStaticParams = async (): Promise<{ id: string }[]> => {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.slug,
  }));
};

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}): Promise<{ title: string }> => {
  const { title } = await getPostById(id);
  return {
    title: `Blog | ${title}`,
  };
};

export default Post;
