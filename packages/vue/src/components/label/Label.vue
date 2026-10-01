<script setup lang="ts">
import { computed } from 'vue'
import { labelVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface LabelProps {
  for?: string
  class?: string
  isRequired?: boolean
  required?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
}

const props = withDefaults(defineProps<LabelProps>(), {
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
  required: undefined,
})

const labelClass = computed(() => {
  const styles = labelVariants({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isRequired: props.isRequired ?? props.required,
  })

  return composeTwClasses(props.class, styles)
})
</script>

<template>
  <label :class="labelClass" :for="props.for" data-slot="label">
    <slot />
  </label>
</template>
