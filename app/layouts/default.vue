<template>
  <UHeader title="NuxtMD">
    <template #title>
      <span class="text-primary">
        <Icon name="mynaui:ampersand-square" class="size-8" />
      </span>
    </template>
    <UButton>Button</UButton>
    <UButton>Button</UButton>
    <UButton>Button</UButton>
    <ColorModeButton />

    <slot />
  </UHeader>
</template>

<script lang="ts" setup></script>

<style></style>
