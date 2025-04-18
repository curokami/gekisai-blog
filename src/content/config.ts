import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string().optional(),
    pubDate: z.string(), 
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    cover: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog, 
};