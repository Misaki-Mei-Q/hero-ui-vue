<template>
  <div class="demo-tag-group-stack">
    <TagGroup label="Default" selection-mode="multiple" :default-selected-keys="['vue']">
      <Tag value="vue">Vue</Tag>
      <Tag value="react">React</Tag>
      <Tag value="svelte">Svelte</Tag>
    </TagGroup>

    <TagGroup label="Surface" selection-mode="multiple" variant="surface" :default-selected-keys="['react']">
      <Tag value="vue">Vue</Tag>
      <Tag value="react">React</Tag>
      <Tag value="svelte">Svelte</Tag>
    </TagGroup>
  </div>
</template>

<script setup lang="ts">
import { Tag, TagGroup } from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-tag-group-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}
</style>
