<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      color="neutral"
      variant="outline"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      size="sm"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <USkeleton class="size-8 rounded-full" />
    </template>
  </ClientOnly>
</template>
