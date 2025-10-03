import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  typescript: {
    typeCheck: true,
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/base.css"],

  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});
