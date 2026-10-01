<template>
  <TagGroup
    v-model:selected-keys="selectedKeys"
    label="Removable tags"
    selection-mode="multiple"
    @remove="handleRemove"
  >
    <Tag v-for="tag in tags" :key="tag.id" :value="tag.id">
      {{ tag.label }}
      <TagRemoveButton />
    </Tag>
  </TagGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tag, TagGroup, TagRemoveButton } from '@misaki-mei-q/heroui-vue'

const tags = ref([
  { id: 'news', label: 'News' },
  { id: 'travel', label: 'Travel' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'shopping', label: 'Shopping' },
])
const selectedKeys = ref<Array<string | number>>(tags.value.map((tag) => tag.id))

const handleRemove = (key: string | number) => {
  tags.value = tags.value.filter((tag) => tag.id !== key)
}
</script>
