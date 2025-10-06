<template>
  <div class="flex gap-2 items-center text-xl">
    <img class="size-8" :src="app.APP_LOGO_SVG" :alt="app.APP_NAME" />
    <span class="text-primary font-bold">
      {{ app.APP_NAME }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import * as app from "@/constants/app-base";
</script>
