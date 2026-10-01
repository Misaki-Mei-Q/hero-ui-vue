<script setup lang="ts">
import { computed } from 'vue'
import { tableVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface TableCellProps {
  class?: string
}

const props = defineProps<TableCellProps>()
const slots = computed(() => tableVariants())
const cellClass = computed(() => composeTwClasses(props.class, (slots.value as unknown as { cell: () => string }).cell()))
</script>

<template>
  <td :class="cellClass" data-slot="table-cell">
    <slot />
  </td>
</template>