import { defineCollection, defineContentConfig } from "@nuxt/content";
// import { asSitemapCollection } from "@nuxtjs/sitemap/content";
import {
  ArticleFrontMatterSchema,
  CategorySchema,
} from "./types/content.schemas";

export default defineContentConfig({
  collections: {
    categories: defineCollection({
      source: "articles/**/_category.md",
      type: "page",
      schema: CategorySchema,
    }),

    articles: defineCollection({
      source: {
        include: "articles/**/*.md",
        exclude: ["articles/**/_category.md"],
      },
      type: "page",
      schema: ArticleFrontMatterSchema,
    }),
  },
});
