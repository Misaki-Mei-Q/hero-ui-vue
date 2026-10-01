<script setup lang="ts">
import { computed, provide, useSlots } from 'vue'
import { breadcrumbsVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { BREADCRUMBS_CONTEXT_KEY } from './context'

interface BreadcrumbsProps {
  class?: string
  disabled?: boolean
  isDisabled?: boolean
  separator?: 'chevron' | 'slash'
}

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  disabled: undefined,
  isDisabled: undefined,
  separator: 'chevron',
})

const slots = computed(() => breadcrumbsVariants())
const vueSlots = useSlots()
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const breadcrumbsClass = computed(() => composeTwClasses(props.class, slots.value.base()))

provide(BREADCRUMBS_CONTEXT_KEY, {
  isDisabled: finalIsDisabled,
  separator: computed(() => props.separator),
  separatorSlot: vueSlots.separator,
  slots: slots.value,
})
</script>

<template>
  <nav aria-label="Breadcrumbs">
    <ol :class="breadcrumbsClass" :data-disabled="dataAttr(finalIsDisabled)" data-slot="breadcrumbs">
      <slot />
    </ol>
  </nav>
</template>
