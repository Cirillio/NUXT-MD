<template>
  <UApp>
    <LayoutHeader />

    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>

    <LayoutFooter />
  </UApp>
</template>

<script lang="ts" setup>
const { fetchAndBuildTree } = useCategories();

await useAsyncData("init-categories", () => fetchAndBuildTree());
</script>
