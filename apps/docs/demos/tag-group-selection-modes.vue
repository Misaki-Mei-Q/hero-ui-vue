<template>
  <div class="demo-tag-group-stack">
    <TagGroup label="Single selection" selection-mode="single" :default-selected-keys="['travel']">
      <Tag value="news">News</Tag>
      <Tag value="travel">Travel</Tag>
      <Tag value="gaming">Gaming</Tag>
      <Tag value="shopping">Shopping</Tag>
    </TagGroup>

    <TagGroup label="Multiple selection" selection-mode="multiple" :default-selected-keys="['news', 'gaming']">
      <Tag value="news">News</Tag>
      <Tag value="travel">Travel</Tag>
      <Tag value="gaming">Gaming</Tag>
      <Tag value="shopping">Shopping</Tag>
    </TagGroup>
  </div>
</template>

<script setup lang="ts">
import { Tag, TagGroup } from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-tag-group-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}
</style>
