<template>
  <UCard>
    <template #header>
      <span class="text-lg text-primary">{{ author }}</span>
    </template>

    <div class="border-b border-primary">
      {{ quote }}
    </div>
  </UCard>
</template>

<script lang="ts" setup>
defineProps<{
  quote: string;
  author: string;
}>();
</script>

<style></style>
