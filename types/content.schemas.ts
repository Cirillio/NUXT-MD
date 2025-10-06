import { z } from "@nuxt/content";

export const CategorySchema = z.object({
  label: z.string(),
  title: z.string(),
  desc: z.string(),
  slug: z.string(),
  order: z.number().optional(),
  icon: z.string().optional(),
});

export const ArticleFrontMatterSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()),

  category: z.string().optional(),
  categorySlug: z.string().optional(),

  subCategory: z.string().optional(),
  subCategorySlug: z.string().optional(),

  image: z.string().optional(),
  draft: z.boolean().optional(),
  featured: z.boolean().optional(),
});
