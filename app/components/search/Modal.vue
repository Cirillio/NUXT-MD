<template>
  <UModal
    :ui="{
      overlay: 'bg-0 backdrop-blur-xs opacity-97',
      content: 'top-1/4 shadow-sm shadow-neutral-500/15 ring-0',
      body: '!p-1',
      header: '!p-1 !min-h-fit',
    }"
    @after:leave="clear"
  >
    <UButton icon="mynaui:search" variant="outline" size="sm" />

    <template #header>
      <UFieldGroup class="w-full">
        <UInput
          v-model="model"
          autofocus
          size="md"
          leading
          icon="mynaui:search-square"
          placeholder="Type here to search..."
          class="w-full"
          :ui="{
            base: 'focus-visible:ring bg-0 hover:bg-muted/25 focus-visible:bg-muted/75',
          }"
          variant="subtle"
          color="neutral"
        />
        <UButton
          icon="mynaui:x-solid"
          size="sm"
          color="neutral"
          variant="subtle"
          @click="clear"
        />
      </UFieldGroup>
    </template>

    <template #body>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </template>
  </UModal>
</template>

<script lang="ts" setup>
const { model, clear } = useSearch();
</script>

<style></style>
