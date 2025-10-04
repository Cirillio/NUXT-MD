import { defineCollection, defineContentConfig } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";
import { ArticleFrontMatterSchema } from "./types/content.schemas";

export default defineContentConfig({
  collections: {
    articles: defineCollection(
      asSitemapCollection({
        source: "articles/**/*.md",
        type: "page",
        schema: ArticleFrontMatterSchema,
      })
    ),
  },
});
