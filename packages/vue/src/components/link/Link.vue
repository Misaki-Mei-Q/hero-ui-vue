<script setup lang="ts">
import { computed, provide } from 'vue'
import { linkVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'
import { LINK_CONTEXT_KEY, type LinkContext } from './context'

interface LinkProps {
  as?: string
  href?: string
  target?: string
  rel?: string
  class?: string
  isDisabled?: boolean
}

const props = withDefaults(defineProps<LinkProps>(), {
  as: 'a',
  isDisabled: undefined,
})

const slots = computed(() => linkVariants())
const { interactionAttrs, interactionHandlers } = useInteractionStates(() => props.isDisabled)

provide<LinkContext>(LINK_CONTEXT_KEY, {
  slots: slots.value,
})

const linkClass = computed(() => {
  return composeTwClasses(props.class, slots.value?.base())
})
</script>

<template>
  <component
    :is="props.as"
    :class="linkClass"
    :href="props.href"
    :aria-disabled="dataAttr(props.isDisabled)"
    :data-disabled="dataAttr(props.isDisabled)"
    data-slot="link"
    :rel="props.rel"
    :target="props.target"
    v-bind="interactionAttrs"
    v-on="interactionHandlers"
  >
    <slot />
  </component>
</template>
