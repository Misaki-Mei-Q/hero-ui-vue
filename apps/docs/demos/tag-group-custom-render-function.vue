<template>
  <TagGroup
    v-model:selected-keys="selectedKeys"
    class="demo-tag-group-custom"
    label="Status"
    selection-mode="single"
    variant="surface"
  >
    <Tag v-for="status in statuses" :key="status.id" :value="status.id">
      <span class="demo-tag-group-custom__dot" :style="{ backgroundColor: status.color }" />
      {{ status.label }}
    </Tag>
  </TagGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tag, TagGroup } from '@misaki-mei/heroui-vue'

const selectedKeys = ref<Array<string | number>>(['online'])
const statuses = [
  { id: 'online', label: 'Online', color: '#17c964' },
  { id: 'away', label: 'Away', color: '#f5a524' },
  { id: 'busy', label: 'Busy', color: '#f31260' },
  { id: 'offline', label: 'Offline', color: '#71717a' },
]
</script>

<style lang="less">
.demo-tag-group-custom {
  align-items: flex-start;
}

.demo-tag-group-custom__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
}
</style>
