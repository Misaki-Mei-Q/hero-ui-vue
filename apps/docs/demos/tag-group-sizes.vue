<template>
  <div class="demo-tag-group-stack">
    <TagGroup label="Small" selection-mode="multiple" size="sm" :default-selected-keys="['news']">
      <Tag value="news">News</Tag>
      <Tag value="travel">Travel</Tag>
      <Tag value="gaming">Gaming</Tag>
    </TagGroup>

    <TagGroup label="Medium" selection-mode="multiple" size="md" :default-selected-keys="['travel']">
      <Tag value="news">News</Tag>
      <Tag value="travel">Travel</Tag>
      <Tag value="gaming">Gaming</Tag>
    </TagGroup>

    <TagGroup label="Large" selection-mode="multiple" size="lg" :default-selected-keys="['gaming']">
      <Tag value="news">News</Tag>
      <Tag value="travel">Travel</Tag>
      <Tag value="gaming">Gaming</Tag>
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
