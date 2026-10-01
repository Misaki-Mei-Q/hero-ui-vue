<script setup lang="ts">
import { computed } from 'vue'
import { fieldErrorVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface FieldErrorProps {
  class?: string
}

const props = defineProps<FieldErrorProps>()

const fieldErrorClass = computed(() => {
  const styles = fieldErrorVariants()
  return composeTwClasses(props.class, styles)
})
</script>

<template>
  <div :class="fieldErrorClass" data-slot="field-error" data-visible="true">
    <slot />
  </div>
</template>
