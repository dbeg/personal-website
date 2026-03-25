import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Temporary set for unique validation of post IDs.
const ids = new Set();

const posts = defineCollection({
  loader: glob({
    base: './src/posts',
    pattern: '**/*.md',
    generateId: ({ entry }) => {
      // Strip the date prefix and .md extension to get the post ID.
      // This allows for contextual filenames, supporting helpful date-based sorting of files.
      // After stripping the prefix, we then have very clean URLs.
      // e.g. YYYYMMDD-my-post.md -> my-post
      const id = entry.replace(/^\d{8}-/, '').replace(/\.md$/, '');
      if (ids.has(id)) {
        throw new Error(`Duplicate post ID: ${id} (${entry})`);
      }
      ids.add(id);
      return id;
    },
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.coerce.date(),
    dateUpdated: z.coerce.date().optional(),
  }),
});

export const collections = { posts };
