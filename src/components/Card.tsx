import React from 'react';
import type { CollectionEntry } from 'astro:content';

type Props = {
  post: CollectionEntry<'blog'>;
  size?: 'large' | 'normal';
};

const Card = ({ post, size = 'normal' }: Props) => {
  const { title, pubDate, heroImage } = post.data;
  const isLarge = size === 'large';

  return (
    <a
      href={`/blog/${post.id}`}
      className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
    >
      {heroImage && (
        <img
          src={heroImage}
          alt={title}
          className={`w-full object-cover ${
            isLarge ? 'h-64 md:h-96' : 'h-40'
          }`}
        />
      )}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">
          {new Date(pubDate).toLocaleDateString('ja-JP')}
        </p>
        <h3
          className={`font-semibold text-gray-800 leading-tight ${
            isLarge ? 'text-2xl' : 'text-xl'
          }`}
        >
          {title}
        </h3>
      </div>
    </a>
  );
};

export default Card;