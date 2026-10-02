<script setup lang="ts">
import { computed, inject } from 'vue'
import { TabsTrigger } from 'radix-vue'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'
import { TABS_CONTEXT_KEY } from './context'

interface TabProps {
  class?: string
  disabled?: boolean
  isDisabled?: boolean
  value: string
}

const props = withDefaults(defineProps<TabProps>(), {
  disabled: undefined,
  isDisabled: undefined,
})
const tabsContext = inject(TABS_CONTEXT_KEY, null)
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const isSelected = computed(() => tabsContext?.selectedValue.value === props.value)
const { interactionAttrs, interactionHandlers } = useInteractionStates(() => finalIsDisabled.value)
const tabClass = computed(() => composeTwClasses(props.class, tabsContext?.slots.tab()))
</script>

<template>
  <TabsTrigger
    :class="tabClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-selected="dataAttr(isSelected)"
    :disabled="finalIsDisabled"
    :value="props.value"
    data-slot="tab"
    v-bind="interactionAttrs"
    v-on="interactionHandlers"
  >
    <slot />
  </TabsTrigger>
</template>
