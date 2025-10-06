<template>
  <u-page-hero
    :headline="app.APP_NAME"
    title="Welcome."
    description="this app helps you study vue ecosystem."
    :links="links"
    :ui="{
      title: 'text-secondary',
    }"
  >
    <u-modal fullscreen title="Template Image">
      <img
        class="size-80 cursor-pointer rounded-md mx-auto ring-3 ring-transparent hover:ring-primary transition-all duration-300"
        src="https://cdn.qwenlm.ai/output/011a5f67-6721-4c97-8b68-c4a7850d9731/t2i/c234c618-28c3-409d-8284-e666152ec7be/1759512734.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMDExYTVmNjctNjcyMS00Yzk3LThiNjgtYzRhNzg1MGQ5NzMxIiwicmVzb3VyY2VfaWQiOiIxNzU5NTEyNzM0IiwicmVzb3VyY2VfY2hhdF9pZCI6IjU0NWEzNGM4LTJjYzEtNGY5Ny04N2YzLTAxMzY4ZWE3ZWE2NyJ9.To3-NwXfFtNaqw8wEzcgLuLvx1oANLplQBOCPzH3LTo"
        alt="hero_image"
      />

      <template #body>
        <picture class="w-full h-full flex items-center justify-center">
          <img
            class="object-contain rounded-md object-center h-full"
            src="https://cdn.qwenlm.ai/output/011a5f67-6721-4c97-8b68-c4a7850d9731/t2i/c234c618-28c3-409d-8284-e666152ec7be/1759512734.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiMDExYTVmNjctNjcyMS00Yzk3LThiNjgtYzRhNzg1MGQ5NzMxIiwicmVzb3VyY2VfaWQiOiIxNzU5NTEyNzM0IiwicmVzb3VyY2VfY2hhdF9pZCI6IjU0NWEzNGM4LTJjYzEtNGY5Ny04N2YzLTAxMzY4ZWE3ZWE2NyJ9.To3-NwXfFtNaqw8wEzcgLuLvx1oANLplQBOCPzH3LTo"
            alt="hero_image"
          />
        </picture>
      </template>
    </u-modal>
  </u-page-hero>
</template>

<script lang="ts" setup>
import * as app from "@/constants/app-base";
import type { ButtonProps } from "@nuxt/ui";

definePageMeta({
  layout: "simple",
});

const links = ref<ButtonProps[]>([
  {
    label: "GitHub",
    to: "https://github.com/Cirillio/NUXT-MD",
    icon: "i-simple-icons-github",
    target: "_blank",
  },
  {
    label: "Start",
    to: "/articles",
    color: "secondary",
    variant: "subtle",
    icon: "i-lucide-play",
  },
]);
</script>

<style></style>
