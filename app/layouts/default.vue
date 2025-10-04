<template>
  <UApp>
    <UHeader title="NuxtMD">
      <template #title>
        <span class="flex gap-2 items-center text-xl">
          <img class="size-8" src="/svg/nuxtmd-logo.svg" alt="applogo" />
          <span class="text-primary font-bold">nuxtmd</span>
        </span>
      </template>

      <template #right>
        <SharedColorModeButton />
      </template>
    </UHeader>
    <UMain>
      <UContainer v-auto-animate>
        <slot />
      </UContainer>
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          NUXT-MD © Cirillio | {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/Cirillio/NUXT-MD"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </UApp>
</template>

<script lang="ts" setup></script>

<style></style>
