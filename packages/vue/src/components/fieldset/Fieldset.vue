<script setup lang="ts">
import { computed, provide } from 'vue'
import { fieldsetVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import { FIELDSET_CONTEXT_KEY } from './context'

interface FieldsetProps {
  class?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<FieldsetProps>(), {
  disabled: undefined,
})

const slots = computed(() => fieldsetVariants())

provide(FIELDSET_CONTEXT_KEY, {
  slots: slots.value,
})

const fieldsetClass = computed(() => composeTwClasses(props.class, slots.value.base()))
</script>

<template>
  <fieldset :class="fieldsetClass" :disabled="props.disabled" data-slot="fieldset">
    <slot />
  </fieldset>
</template>
