<script setup lang="ts">
import { computed } from 'vue'
import { alertDialogVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import type { AlertDialogStatus } from './context'

interface AlertDialogIconProps {
  class?: string
  status?: AlertDialogStatus
}

const props = withDefaults(defineProps<AlertDialogIconProps>(), {
  status: 'danger',
})

const slots = computed(() => alertDialogVariants({ status: props.status }))
const iconClass = computed(() => composeTwClasses(props.class, slots.value.icon()))
const iconPath = computed(() => {
  if (props.status === 'success') return 'M20 6 9 17l-5-5'
  if (props.status === 'warning') return 'M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z'
  if (props.status === 'danger') return 'M12 8v5m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
  return 'M12 16v-4m0-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
})
</script>

<template>
  <div :class="iconClass" data-slot="alert-dialog-icon">
    <slot>
      <svg
        aria-hidden="true"
        data-slot="alert-dialog-default-icon"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path :d="iconPath" />
      </svg>
    </slot>
  </div>
</template>
