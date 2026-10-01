<template>
  <div class="demo-tag-group-stack">
    <TagGroup
      label="Disabled keys"
      selection-mode="multiple"
      :default-selected-keys="['news']"
      :disabled-keys="['gaming', 'shopping']"
    >
      <Tag value="news">News</Tag>
      <Tag value="travel">Travel</Tag>
      <Tag value="gaming">Gaming</Tag>
      <Tag value="shopping">Shopping</Tag>
    </TagGroup>

    <TagGroup label="Disabled group" selection-mode="multiple" disabled :default-selected-keys="['travel']">
      <Tag value="news">News</Tag>
      <Tag value="travel">Travel</Tag>
      <Tag value="gaming">Gaming</Tag>
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
