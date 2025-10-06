<script lang="ts" setup>
import type { ArticlesCollectionItem } from "@nuxt/content";

defineProps<{
  article: ArticlesCollectionItem;
}>();
</script>

<template>
  <UCard
    :ui="{
      root: 'ring-0 light:ring hover:dark:shadow-primary/5 shadow-xs hover:light:shadow-lg  dark:shadow-xl bg-elevated/25 backdrop-blur-sm relative transition-all group duration-300',
      body: 'flex flex-col gap-3',
    }"
  >
    <picture
      class="aspect-square ring-2 ring-transparent transition-all duration-300 max-h-60 h-full flex items-center justify-center overflow-hidden rounded-sm"
    >
      <img
        :src="article.image"
        :alt="article.title"
        class="min-w-full min-h-full group-hover:scale-115 group-hover:rotate-5 object-cover transition-all duration-300 object-center"
      />
    </picture>

    <div class="flex flex-col gap-2.5 w-full">
      <NuxtLink
        :to="'/articles/' + article.slug"
        class="line-clamp-2 w-full font-bold text-default hover:text-primary transition-all duration-75"
        >{{ article.title }}</NuxtLink
      >

      <div class="flex w-full">
        <span class="text-dimmed text-xs">{{ article.date }}</span>
      </div>
    </div>
  </UCard>
</template>
