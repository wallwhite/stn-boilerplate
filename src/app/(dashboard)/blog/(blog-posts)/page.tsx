import React from 'react';
import { Metadata, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PostList, PostListItem } from '@stn-ui/blog';
import { getAllPosts } from '@/lib/api/blog';

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: '%s | Blog',
  },
  description: 'Our latest blog news and updates',
};

const Blog: NextPage = async () => {
  const posts = await getAllPosts();

  return (
    <PostList>
      {posts.map(({ title, author, date, description, image, tag, slug }) => (
        <PostListItem
          key={slug}
          author={author}
          description={description}
          title={title}
          date={date}
          image={<Image src={image} alt={title} fill />}
          tag={tag || 'Default'}
          linkAs={Link}
          route={`/blog/${slug}`}
        />
      ))}
    </PostList>
  );
};

export default Blog;
