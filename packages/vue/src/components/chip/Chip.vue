<script setup lang="ts">
import { Comment, computed, Fragment, provide, Text, useSlots, type VNode } from 'vue'
import { chipVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import { CHIP_CONTEXT_KEY } from './context'
import ChipLabel from './ChipLabel.vue'

interface ChipProps {
  class?: string
  color?: 'default' | 'accent' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'soft' | 'tertiary'
}

const props = defineProps<ChipProps>()
const vueSlots = useSlots()

const flattenSlotNodes = (nodes: VNode[]): VNode[] =>
  nodes.flatMap((node) => {
    if (node.type === Fragment && Array.isArray(node.children)) {
      return flattenSlotNodes(node.children as VNode[])
    }
    return [node]
  })

const shouldWrapDefaultSlot = computed(() => {
  const nodes = flattenSlotNodes(vueSlots.default?.() ?? []).filter((node) => {
    if (node.type === Comment) return false
    if (node.type !== Text) return true
    return String(node.children ?? '').trim().length > 0
  })

  return nodes.length === 1 && nodes[0]?.type === Text
})

const slots = computed(() =>
  chipVariants({
    color: props.color,
    size: props.size,
    variant: props.variant,
  }),
)

provide(CHIP_CONTEXT_KEY, {
  slots: slots.value,
})

const chipClass = computed(() => composeTwClasses(props.class, slots.value.base()))
</script>

<template>
  <span :class="chipClass" data-slot="chip">
    <ChipLabel v-if="shouldWrapDefaultSlot">
      <slot />
    </ChipLabel>
    <slot v-else />
  </span>
</template>
