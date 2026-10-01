<template>
  <form class="demo-tag-group-form" @submit.prevent="handleSubmit">
    <TagGroup
      v-model:selected-keys="selectedKeys"
      label="Choose at least one topic"
      selection-mode="multiple"
      :is-invalid="showError"
    >
      <Tag value="news">News</Tag>
      <Tag value="travel">Travel</Tag>
      <Tag value="gaming">Gaming</Tag>
      <Tag value="shopping">Shopping</Tag>
    </TagGroup>
    <FieldError v-if="showError">Select at least one topic.</FieldError>
    <Button type="submit">Submit</Button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Button, FieldError, Tag, TagGroup } from '@misaki-mei/heroui-vue'

const selectedKeys = ref<Array<string | number>>([])
const showError = ref(false)

const handleSubmit = () => {
  showError.value = selectedKeys.value.length === 0
}

watch(selectedKeys, (keys) => {
  if (keys.length > 0) {
    showError.value = false
  }
})
</script>

<style lang="less">
.demo-tag-group-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}
</style>
