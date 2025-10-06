<template>
  <div v-if="isLoading" class="flex gap-0.5 items-center">
    <USkeleton v-for="skelet in [1, 2, 3]" :key="skelet" class="h-7 w-24" />
  </div>
  <div v-else class="flex gap-0.5 items-center">
    <UPopover
      v-for="category in categoriesTree"
      :key="category.label"
      :open-delay="100"
      :close-delay="100"
      mode="hover"
    >
      <UButton
        :to="'/' + category.slug"
        :color="activeCategorySlug === category.slug ? 'secondary' : 'neutral'"
        :variant="activeCategorySlug === category.slug ? 'soft' : 'ghost'"
        :icon="category.icon"
        :aria-label="category.title"
        class="group"
        size="sm"
      >
        <template #default>
          <span class="line-clamp-2">
            {{ category.label }}
          </span>
        </template>

        <template #trailing>
          <UIcon
            :size="16"
            class="group-hover:rotate-180 transition-transform"
            name="mynaui:chevron-down"
          />
        </template>
      </UButton>

      <template #content>
        <div class="flex flex-col gap-2 p-2">
          <UButton
            v-for="sub in category.children"
            :key="sub.slug"
            variant="ghost"
            color="neutral"
            size="md"
            :icon="sub.icon"
            class="max-w-48"
            :to="'/' + sub.slug"
            :ui="{
              leadingIcon: 'text-secondary self-start mt-1 size-4.5',
            }"
          >
            <template #default>
              <div class="flex flex-col gap-0.5">
                <span class="break-words text-sm w-full text-left">
                  {{ sub.label }}
                </span>
                <span class="line-clamp-2 text-xs text-muted">{{
                  sub.desc
                }}</span>
              </div>
            </template>
          </UButton>
        </div>
      </template>
    </UPopover>
  </div>
</template>

<script lang="ts" setup>
const { categoriesTree, isLoading } = useCategories();
const route = useRoute();

const activeCategorySlug = computed(() => {
  return route.path.split("/").filter(Boolean)[0];
});
</script>
