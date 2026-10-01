<script setup lang="ts">
import { computed } from 'vue'
import { tableVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface TableRowProps {
  class?: string
  isSelected?: boolean
  isDisabled?: boolean
}

const props = withDefaults(defineProps<TableRowProps>(), {
  isSelected: false,
  isDisabled: false,
})

const slots = computed(() => tableVariants())
const rowClass = computed(() => composeTwClasses(props.class, (slots.value as unknown as { row: () => string }).row()))
const cellClass = computed(() => (slots.value as unknown as { cell: () => string }).cell())
</script>

<template>
  <tr
    :class="rowClass"
    :data-selected="props.isSelected"
    :data-disabled="props.isDisabled"
    data-slot="table-row"
  >
    <td v-for="(cell, idx) in $slots.default?.()" :key="idx" :class="cellClass" data-slot="table-cell">
      <component :is="cell" />
    </td>
    <slot />
  </tr>
</template>