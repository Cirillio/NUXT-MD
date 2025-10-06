// pages/articles/[slug].vue
<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

// Получить статью по slug
const {
  data: article,
  error,
  pending,
} = await useAsyncData(`article-${slug}`, () =>
  queryCollection("articles").where("slug", "=", slug).first()
);

// Если статья не найдена
if (!article.value) {
  throw createError({
    statusCode: 404,
    message: "Article not found",
  });
}
</script>

<template>
  <article v-if="article && !error && !pending">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <ContentRenderer :value="article" />
  </article>

  <div v-else-if="pending" class="flex justify-center items-center h-screen">
    <u-icon name="mynaui:circle-notch" class="animate-spin" />
  </div>

  <div v-else-if="error">
    <div class="flex flex-col gap-3">
      <div>
        {{ error }}
      </div>

      <u-button title="go back" to="/articles" />
    </div>
  </div>
</template>
