<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        {{ app.APP_NAME }} © {{ app.APP_AUTHOR }} |
        {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        :to="app.APP_GH_REP"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>

<script lang="ts" setup>
import * as app from "@/constants/app-base";
</script>
