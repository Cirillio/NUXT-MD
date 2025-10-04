import { z } from "@nuxt/content";

export const AuthorSchema = z.object({
  id: z.string(),
  name: z.string(),
  bio: z.string().optional(),
  avatar: z.string().optional(),
});

export const ArticleFrontMatterSchema = z.object({
  article_id: z.number(),
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()),

  author: AuthorSchema,

  image: z.string().optional(),
  draft: z.boolean().optional(),
  featured: z.boolean().optional(),
});
