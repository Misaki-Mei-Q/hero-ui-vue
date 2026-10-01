<template>
  <Button :is-pending="isLoading" @click="handlePress">
    <Spinner v-if="isLoading" color="current" size="sm" />
    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="m21.4 11.6-9.5 9.5a6 6 0 0 1-8.5-8.5l9.5-9.5a4 4 0 0 1 5.7 5.7l-9.6 9.5a2 2 0 0 1-2.8-2.8l8.8-8.8" />
    </svg>
    {{ isLoading ? 'Uploading...' : 'Upload File' }}
  </Button>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Spinner } from '@misaki-mei/heroui-vue'

const isLoading = ref(false)

const handlePress = () => {
  isLoading.value = true
  window.setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>
