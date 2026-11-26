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

// Current side projects. Add another by dropping a markdown file in
// src/content/projects — the menu and /projects/ pick it up from here.
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    audience: z.string(),
    problem: z.string(),
    features: z.array(z.string()).min(1),
    stack: z.array(z.string()).min(1),
    url: z.url().optional(),
    repo: z.url().optional(),
    // Lower comes first.
    order: z.number().optional(),
  }),
});

export const collections = { posts, projects };
