<script setup lang="ts">
import { computed, inject } from 'vue'
import { listboxItemVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { LIST_BOX_ITEM_CONTEXT_KEY } from './context'

interface ListBoxItemIndicatorProps {
  class?: string
}

const props = defineProps<ListBoxItemIndicatorProps>()
const itemContext = inject(LIST_BOX_ITEM_CONTEXT_KEY, null)
const slots = computed(() => listboxItemVariants())
const indicatorClass = computed(() => composeTwClasses(props.class, slots.value.indicator()))
const isSelected = computed(() => itemContext?.isSelected.value)
</script>

<template>
  <span
    :class="indicatorClass"
    :data-visible="dataAttr(isSelected)"
    data-slot="list-box-item-indicator"
  >
    <slot :is-selected="isSelected">
      <svg
        aria-hidden="true"
        data-slot="list-box-item-indicator--checkmark"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.5 8.5 6.5 11.5 12.5 4.5"
          pathLength="1"
          stroke="currentColor"
          stroke-dasharray="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          :style="{ strokeDashoffset: isSelected ? 0 : 1 }"
        />
      </svg>
    </slot>
  </span>
</template>
