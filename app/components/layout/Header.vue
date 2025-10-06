<template>
  <UHeader title="NuxtMD">
    <template #title>
      <SharedLogo />
    </template>

    <template #default>
      <CategoriesPopoverMenu />
    </template>

    <template #right>
      <SearchModal />
      <SharedColorModeButton />
    </template>
  </UHeader>
</template>

<script lang="ts" setup></script>
