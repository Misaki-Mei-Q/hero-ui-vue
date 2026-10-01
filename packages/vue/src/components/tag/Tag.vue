<script setup lang="ts">
import { computed, inject, provide } from 'vue'
import { tagVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'
import { TAG_CONTEXT_KEY } from './context'
import { TAG_GROUP_CONTEXT_KEY } from '../tag-group/context'
import type { TagGroupKey } from '../tag-group/context'

interface TagProps {
  class?: string
  disabled?: boolean
  id?: TagGroupKey
  isDisabled?: boolean
  selected?: boolean
  size?: 'sm' | 'md' | 'lg'
  value?: TagGroupKey
  variant?: 'default' | 'surface'
}

const props = withDefaults(defineProps<TagProps>(), {
  disabled: undefined,
  isDisabled: undefined,
})

const tagGroupContext = inject(TAG_GROUP_CONTEXT_KEY, null)
const tagKey = computed(() => props.value ?? props.id)
const finalSize = computed(() => props.size ?? tagGroupContext?.size.value)
const finalVariant = computed(() => props.variant ?? tagGroupContext?.variant.value)
const isGroupInteractive = computed(() => Boolean(tagGroupContext && tagGroupContext.selectionMode.value !== 'none' && tagKey.value != null))
const finalIsDisabled = computed(() => {
  const ownDisabled = props.disabled ?? props.isDisabled
  const groupDisabled = tagGroupContext?.isDisabled.value
  const keyDisabled = tagKey.value != null && tagGroupContext?.disabledKeySet.value.has(tagKey.value)

  return ownDisabled || groupDisabled || keyDisabled
})
const finalIsSelected = computed(() => {
  if (tagKey.value == null || !tagGroupContext || tagGroupContext.selectionMode.value === 'none') {
    return props.selected
  }

  return tagGroupContext.selectedKeySet.value.has(tagKey.value)
})
const slots = computed(() => tagVariants({ size: finalSize.value, variant: finalVariant.value }))
const { interactionAttrs, interactionHandlers } = useInteractionStates(() => finalIsDisabled.value)

provide(TAG_CONTEXT_KEY, {
  remove: () => {
    if (tagKey.value != null) {
      tagGroupContext?.removeKey(tagKey.value)
    }
  },
  slots: slots.value,
})

const tagClass = computed(() => composeTwClasses(props.class, slots.value.base()))

const handlePress = () => {
  if (!isGroupInteractive.value || finalIsDisabled.value || tagKey.value == null) return
  tagGroupContext?.toggleKey(tagKey.value)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!isGroupInteractive.value || finalIsDisabled.value) return
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handlePress()
  }
}
</script>

<template>
  <span
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-selected="isGroupInteractive ? dataAttr(finalIsSelected) : undefined"
    :class="tagClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(tagGroupContext?.isInvalid.value)"
    :data-selected="dataAttr(finalIsSelected)"
    :role="isGroupInteractive ? 'option' : undefined"
    :tabindex="isGroupInteractive && !finalIsDisabled ? 0 : undefined"
    data-slot="tag"
    @click="handlePress"
    @keydown="handleKeydown"
    v-bind="interactionAttrs"
    v-on="interactionHandlers"
  >
    <slot />
  </span>
</template>
