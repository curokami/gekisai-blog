// Card.tsx

import type { CollectionEntry } from 'astro:content';

type Props = {
  post: CollectionEntry<'blog'>;
  size?: 'large' | 'normal'; // ✅ ここを追加
};

export default function Card({ post, size = 'normal' }: Props) {
  const { title, pubDate, heroImage } = post.data;
  const isLarge = size === 'large';

  return (
    <a
      href={`/blog/${post.id}`}
      className={`block rounded-lg overflow-hidden bg-white transition-shadow shadow-md hover:shadow-xl ${
        isLarge ? 'col-span-full md:flex md:items-center md:gap-6 p-6' : 'p-4'
      }`}
    >
      {heroImage && (
        <img
          src={heroImage}
          alt={title}
          className={`${
            isLarge
              ? 'w-full md:w-1/2 h-64 object-cover rounded-lg'
              : 'w-full h-48 object-cover rounded-md'
          }`}
        />
      )}
      <div className={`${isLarge ? 'md:w-1/2 mt-4 md:mt-0' : ''}`}>
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
}