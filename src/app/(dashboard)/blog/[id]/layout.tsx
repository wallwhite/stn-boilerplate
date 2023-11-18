import { PropsWithChildren } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { ArticleLayout } from '@stn-ui/layout';
import { getPostById } from '@/lib/api/blog';

const Layout: NextPage<PropsWithChildren & { params: { id: string } }> = async ({
  children,
  params,
}) => {
  const { title, description, author, tag = 'Default', date } = await getPostById(params.id);

  return (
    <ArticleLayout
      title={title}
      author={author}
      tag={tag}
      date={date}
      subtitle={description}
      linkAs={Link}
      linkHref="/blog"
    >
      {children}
    </ArticleLayout>
  );
};

export default Layout;
