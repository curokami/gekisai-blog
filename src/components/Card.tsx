// src/components/Card.tsx
import type { CollectionEntry } from 'astro:content';

type Props = {
  post: CollectionEntry<'blog'>;
  large?: boolean;
};

export default function Card({ post, large = false }: Props) {
  const { title, pubDate, heroImage } = post.data;

  return (
    <a
      href={`/blog/${post.id}`}
      className={`block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white ${
        large ? 'md:col-span-2 h-auto' : ''
      }`}
    >
      {heroImage && (
        <img
          src={heroImage}
          alt={title}
          className={`w-full ${large ? 'h-64' : 'h-48'} object-cover`}
        />
      )}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">
          {new Date(pubDate).toLocaleDateString('ja-JP')}
        </p>
        <h3 className="text-xl font-semibold text-gray-800 leading-tight">
          {title}
        </h3>
      </div>
    </a>
  );
}