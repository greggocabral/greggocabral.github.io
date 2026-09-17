import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    subCategory: z.string(),
    // Tie-breaker for posts published at the same moment (lower comes first).
    order: z.number().optional(),
  }),
});

export const collections = { posts };
