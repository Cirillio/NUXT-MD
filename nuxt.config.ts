import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  typescript: {
    typeCheck: true,
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/base.css"],

  content: {
    database: {
      type: "sqlite",
      filename: "markdown",
    },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light",
            dark: "github-dark",
            sepia: "monokai",
          },
        },
        rehypePlugins: {
          "rehype-external-links": {
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
      },
    },
    experimental: {
      sqliteConnector: "native",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "@formkit/auto-animate",
  ],
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
