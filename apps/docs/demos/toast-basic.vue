<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { ToastProvider, Button, useToast } from '@misaki-mei/heroui-vue'

const ToastTrigger = defineComponent({
  name: 'ToastTrigger',
  setup() {
    const toast = useToast()
    return () =>
      h(
        Button,
        {
          onClick: () =>
            toast?.show({ title: 'Hello', description: 'Standard toast message.' }),
        },
        () => 'Show default toast',
      )
  },
})
</script>

<template>
  <ToastProvider>
    <ToastTrigger />
  </ToastProvider>
</template>
