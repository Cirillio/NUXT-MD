<template>
  <div v-auto-animate class="flex py-6 flex-col gap-3">
    <UFieldGroup>
      <u-input class="w-full" />
      <u-button icon="mynaui:search-diamond">Find</u-button>
      <u-button icon="mynaui:x-diamond" variant="subtle" />
    </UFieldGroup>

    <div class="grid grid-cols-4 gap-6">
      <ArticleCard
        v-for="article in articles"
        :key="article.title"
        :article="article"
      />
    </div>
  </div>
</template>

//
<script lang="ts" setup>
const route = useRoute();

const {
  data: articles,
  // pending,
  // error,
} = await useAsyncData(route.path, () => {
  return queryCollection("articles").all();
});
</script>
