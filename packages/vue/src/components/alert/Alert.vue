<script setup lang="ts">
import { computed, provide } from 'vue'
import { alertVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import { ALERT_CONTEXT_KEY, type AlertStatus } from './context'

interface AlertProps {
  class?: string
  status?: AlertStatus
}

const props = defineProps<AlertProps>()
const slots = computed(() => alertVariants({ status: props.status }))

provide(ALERT_CONTEXT_KEY, {
  slots: slots.value,
  status: props.status,
})

const alertClass = computed(() => composeTwClasses(props.class, slots.value.base()))
</script>

<template>
  <div :class="alertClass" data-slot="alert-root" role="alert">
    <slot />
  </div>
</template>
