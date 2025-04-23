// src/components/Card.tsx
import type { CollectionEntry } from 'astro:content';

type Props = {
  post: CollectionEntry<'blog'>;
};

export default function Card({ post }: Props) {
  const { title, pubDate, heroImage } = post.data;

  return (
    <a
            href={`/blog/${post.id}`}
      className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
    >
      {heroImage && (
        <img
          src={heroImage}
          alt={title}
          className="w-full h-48 object-cover"
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