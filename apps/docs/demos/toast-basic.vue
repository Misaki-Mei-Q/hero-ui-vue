<script setup lang="ts">
import { ToastProvider, Button, useToast } from '@misaki-mei/heroui-vue'

const toast = useToast()
</script>

<template>
  <ToastProvider>
    <Button @click="toast?.show({ title: 'Hello', description: 'Standard toast message.' })">
      Show default toast
    </Button>
  </ToastProvider>
</template>