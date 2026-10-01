<script setup lang="ts">
import { computed, inject } from 'vue'
import { closeButtonVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'
import { SEARCH_FIELD_CONTEXT_KEY } from './context'

interface SearchFieldClearButtonProps {
  ariaLabel?: string
  class?: string
}

const props = withDefaults(defineProps<SearchFieldClearButtonProps>(), {
  ariaLabel: 'Clear search',
})
const searchFieldContext = inject(SEARCH_FIELD_CONTEXT_KEY, null)
const clearButtonClass = computed(() => {
  const classes = composeTwClasses(closeButtonVariants(), searchFieldContext?.slots.value.clearButton())
  return composeTwClasses(props.class, classes)
})
const isDisabled = computed(
  () => searchFieldContext?.isDisabled.value || !searchFieldContext || searchFieldContext.value.value.length === 0,
)
const { interactionAttrs, interactionHandlers } = useInteractionStates(() => isDisabled.value)
</script>

<template>
  <button
    :aria-disabled="dataAttr(isDisabled)"
    :aria-label="props.ariaLabel"
    :class="clearButtonClass"
    :data-disabled="dataAttr(isDisabled)"
    :disabled="isDisabled"
    data-slot="search-field-clear-button"
    type="button"
    @click="searchFieldContext?.clear()"
    v-bind="interactionAttrs"
    v-on="interactionHandlers"
  >
    <slot>
      <svg aria-hidden="true" data-slot="close-button-icon" fill="none" viewBox="0 0 16 16">
        <path d="m4.5 4.5 7 7M11.5 4.5l-7 7" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" />
      </svg>
    </slot>
  </button>
</template>
