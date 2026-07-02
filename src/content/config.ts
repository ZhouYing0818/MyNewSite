import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    layout: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { blog };
