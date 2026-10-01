<script setup lang="ts">
import { computed } from 'vue'
import { tableVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface TableColumnProps {
  class?: string
}

const props = defineProps<TableColumnProps>()
const slots = computed(() => tableVariants())
const columnClass = computed(() =>
  composeTwClasses(props.class, (slots.value as unknown as { column: () => string }).column()),
)
const cellClass = computed(() => (slots.value as unknown as { cell: () => string }).cell())
</script>

<template>
  <th :class="[columnClass, cellClass]" data-slot="table-column">
    <slot />
  </th>
</template>