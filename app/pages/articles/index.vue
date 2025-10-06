<template>
  <div v-auto-animate class="flex py-6 flex-col gap-3">
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
}).then(({ data }) => {
  console.log(data);
  return { data };
});
</script>
