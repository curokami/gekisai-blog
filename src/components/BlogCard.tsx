import React from 'react';
import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'blog'> & { slug: string };

const BlogCard = ({ post }: { post: Post }) => {
  const { title, pubDate, heroImage } = post.data;

  return (
    <a href={`/blog/${post.slug}`} className="block rounded overflow-hidden shadow hover:shadow-lg transition bg-white">
      {heroImage && (
        <img
          src={heroImage}
          alt={title}
          className="w-full aspect-video object-cover"
        />
      )}
      <div className="p-2">
        <p className="text-xs text-gray-500 mb-1">
          {new Date(pubDate).toLocaleDateString('ja-JP')}
        </p>
        <h3 className="text-base font-semibold text-gray-800">
          {title}
        </h3>
      </div>
    </a>
  );
};

export default BlogCard;