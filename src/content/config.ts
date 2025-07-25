import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.string(), // ✅ stringとして受け取る
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    cover: z.string().optional(),
    date: z.string().optional(),
  }),
});

export const collections = {
  blog,
  posts,
};