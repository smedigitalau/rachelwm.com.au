import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const speakers = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/speakers" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      bio: z.string().optional(),
      image: image(),
      links: z
        .object({
          website: z.string().url().optional(),
          linkedin: z.string().url().optional(),
        })
        .optional(),
      featured: z.boolean().optional().default(false),
      role: z.string().optional(),
      order: z.number().optional(),
    }),
});

export const collections = {
  speakers,
};
