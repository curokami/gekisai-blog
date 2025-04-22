// src/components/Card.tsx
import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'blog'>;

interface Props {
  post: Post;
}

export default function Card({ post }: Props) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
    >
      {post.data.heroImage && (
        <img
          src={post.data.heroImage}
          alt={post.data.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{post.data.title}</h3>
        <p className="text-gray-500 text-sm">{post.data.description}</p>
      </div>
    </a>
  );
}