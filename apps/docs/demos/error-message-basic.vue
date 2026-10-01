<template>
  <div class="demo-error-message-basic">
    <TagGroup
      v-model:selected-keys="selectedKeys"
      label="Required Categories"
      selection-mode="multiple"
      :is-invalid="isInvalid"
    >
      <Tag value="news">News</Tag>
      <Tag value="travel">Travel</Tag>
      <Tag value="gaming">Gaming</Tag>
      <Tag value="shopping">Shopping</Tag>
    </TagGroup>
    <Description>Select at least one category</Description>
    <ErrorMessage v-if="isInvalid">Please select at least one category</ErrorMessage>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Description, ErrorMessage, Tag, TagGroup } from '@misaki-mei/heroui-vue'

const selectedKeys = ref<Array<string | number>>([])
const isInvalid = computed(() => selectedKeys.value.length === 0)
</script>

<style lang="less">
.demo-error-message-basic {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}
</style>
