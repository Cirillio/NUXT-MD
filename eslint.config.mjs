// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Ваши кастомные правила ESLint
  {
    rules: {
      // Настраиваем правило для самозакрывающихся тегов в Vue-шаблонах
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always", // Требовать самозакрывающийся тег для void-элементов (например, <img />)
          },
        },
      ],
    },
  }
);
