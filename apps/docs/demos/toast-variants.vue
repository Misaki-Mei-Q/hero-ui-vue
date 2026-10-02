<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { ToastProvider, Button, useToast } from '@misaki-mei/heroui-vue'

const ToastTriggers = defineComponent({
  name: 'ToastTriggers',
  setup() {
    const toast = useToast()
    return () =>
      h('div', { class: 'flex gap-2' }, [
        h(
          Button,
          { onClick: () => toast?.show({ title: 'Saved', variant: 'success' }) },
          () => 'Success',
        ),
        h(
          Button,
          { onClick: () => toast?.show({ title: 'Heads up', variant: 'warning' }) },
          () => 'Warning',
        ),
        h(
          Button,
          {
            variant: 'danger',
            onClick: () =>
              toast?.show({ title: 'Failed', description: 'Please retry', variant: 'danger' }),
          },
          () => 'Error',
        ),
      ])
  },
})
</script>

<template>
  <ToastProvider placement="top">
    <ToastTriggers />
  </ToastProvider>
</template>
