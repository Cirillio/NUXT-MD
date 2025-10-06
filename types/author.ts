import { z as Zod } from "@nuxt/content";

export const AuthorSchema = Zod.object({
  id: Zod.string(),
  name: Zod.string(),
  bio: Zod.string().optional(),
  avatar: Zod.string().optional(),
});
