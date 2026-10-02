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
</script>

<template>
  <tr
    :class="rowClass"
    :data-selected="props.isSelected"
    :data-disabled="props.isDisabled"
    data-slot="table-row"
  >
    <slot />
  </tr>
</template>