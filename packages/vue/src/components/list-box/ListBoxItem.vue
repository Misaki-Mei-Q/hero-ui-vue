<script setup lang="ts">
import { computed, inject, provide } from 'vue'
import { listboxItemVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'
import { LIST_BOX_CONTEXT_KEY, LIST_BOX_ITEM_CONTEXT_KEY } from './context'
import type { ListBoxKey } from './context'

interface ListBoxItemProps {
  class?: string
  disabled?: boolean
  id?: ListBoxKey
  isDisabled?: boolean
  textValue?: string
  value?: ListBoxKey
  variant?: 'default' | 'danger'
}

const props = withDefaults(defineProps<ListBoxItemProps>(), {
  disabled: undefined,
  isDisabled: undefined,
})

const listBoxContext = inject(LIST_BOX_CONTEXT_KEY, null)
const itemKey = computed(() => props.value ?? props.id)
const finalVariant = computed(() => props.variant ?? listBoxContext?.variant.value ?? 'default')
const finalIsDisabled = computed(() => {
  const ownDisabled = props.disabled ?? props.isDisabled
  const groupDisabled = listBoxContext?.isDisabled.value
  const keyDisabled = itemKey.value != null && listBoxContext?.disabledKeySet.value.has(itemKey.value)

  return ownDisabled || groupDisabled || keyDisabled
})
const finalIsSelected = computed(() => {
  if (itemKey.value == null || !listBoxContext || listBoxContext.selectionMode.value === 'none') {
    return undefined
  }

  return listBoxContext.selectedKeySet.value.has(itemKey.value)
})
const slots = computed(() => listboxItemVariants({ variant: finalVariant.value }))
const itemClass = computed(() => composeTwClasses(props.class, slots.value.item()))
const { interactionAttrs, interactionHandlers } = useInteractionStates(() => finalIsDisabled.value)

const handleAction = () => {
  if (finalIsDisabled.value || itemKey.value == null) return

  listBoxContext?.toggleKey(itemKey.value)
  listBoxContext?.actionKey(itemKey.value)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (finalIsDisabled.value) return
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleAction()
  }
}

provide(LIST_BOX_ITEM_CONTEXT_KEY, {
  isDisabled: finalIsDisabled,
  isSelected: finalIsSelected,
})
</script>

<template>
  <div
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-label="props.textValue"
    :aria-selected="finalIsSelected == null ? undefined : dataAttr(finalIsSelected)"
    :class="itemClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-selected="dataAttr(finalIsSelected)"
    data-slot="list-box-item"
    role="option"
    :tabindex="finalIsDisabled ? undefined : 0"
    @click="handleAction"
    @keydown="handleKeydown"
    v-bind="interactionAttrs"
    v-on="interactionHandlers"
  >
    <slot :is-disabled="finalIsDisabled" :is-selected="finalIsSelected" />
  </div>
</template>
