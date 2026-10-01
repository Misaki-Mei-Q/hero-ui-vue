<script setup lang="ts">
import { ToastProvider, Button, useToast } from '@misaki-mei/heroui-vue'

const toast = useToast()
</script>

<template>
  <ToastProvider placement="top">
    <div class="flex gap-2">
      <Button @click="toast?.show({ title: 'Saved', variant: 'success' })">
        Success
      </Button>
      <Button @click="toast?.show({ title: 'Heads up', variant: 'warning' })">
        Warning
      </Button>
      <Button
        variant="danger"
        @click="toast?.show({ title: 'Failed', description: 'Please retry', variant: 'danger' })"
      >
        Error
      </Button>
    </div>
  </ToastProvider>
</template>