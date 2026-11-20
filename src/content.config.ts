import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const designs = defineCollection({
  // One Markdown file per design concept: src/content/collections/<slug>.md
  loader: glob({ pattern: '**/*.md', base: './src/content/collections' }),
  schema: z.object({
    title: z.string().min(10).max(70),
    description: z.string().min(50).max(160),
    lastUpdated: z.coerce.date(),
    summary: z.string(),
    palette: z.array(z.string().regex(/^#[0-9a-fA-F]{6}$/)).min(2).max(4),
    motif: z.enum(['sun', 'waves', 'peaks', 'grid']),
    products: z.array(z.enum(['T-shirts', 'Mugs', 'Posters', 'Stickers'])).min(1),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(2),
  }),
});
export const collections = { collections: designs };
