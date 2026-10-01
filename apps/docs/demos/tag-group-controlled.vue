<template>
  <div class="demo-tag-group-controlled">
    <TagGroup v-model:selected-keys="selectedKeys" label="Interests" selection-mode="multiple">
      <Tag value="news">News</Tag>
      <Tag value="travel">Travel</Tag>
      <Tag value="gaming">Gaming</Tag>
      <Tag value="shopping">Shopping</Tag>
    </TagGroup>
    <Description>Selected: {{ selectedLabel }}</Description>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Description, Tag, TagGroup } from '@misaki-mei-q/heroui-vue'

const selectedKeys = ref<Array<string | number>>(['travel', 'gaming'])
const selectedLabel = computed(() => selectedKeys.value.length ? selectedKeys.value.join(', ') : 'none')
</script>

<style lang="less">
.demo-tag-group-controlled {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}
</style>
