<script setup lang="ts">
import { computed } from 'vue'
import { tableVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface TableProps {
  class?: string
  variant?: 'default' | 'secondary'
  fullWidth?: boolean
  hoverable?: boolean
  striped?: boolean
  density?: 'compact' | 'normal' | 'comfortable'
}

const props = withDefaults(defineProps<TableProps>(), {
  variant: 'default',
  fullWidth: true,
  hoverable: true,
  striped: false,
  density: 'normal',
})

const slots = computed(() => tableVariants({ variant: props.variant === 'default' ? 'primary' : props.variant }))
const baseClass = computed(() => composeTwClasses(props.class, (slots.value as unknown as { base: () => string }).base()))
const headerClass = computed(() => (slots.value as unknown as { header: () => string }).header())
const bodyClass = computed(() => (slots.value as unknown as { body: () => string }).body())
const rowClass = computed(() => (slots.value as unknown as { row: () => string }).row())
const cellClass = computed(() => (slots.value as unknown as { cell: () => string }).cell())
const columnClass = computed(() => (slots.value as unknown as { column: () => string }).column())
const scrollClass = computed(() => (slots.value as unknown as { scrollContainer: () => string }).scrollContainer())

const densityClass = computed(() => {
  if (props.density === 'compact') return 'text-xs'
  if (props.density === 'comfortable') return 'text-base py-3'
  return 'text-sm'
})

const widthClass = computed(() => (props.fullWidth ? 'w-full' : ''))

const tableClass = computed(() =>
  [widthClass.value, 'caption-bottom border-spacing-0'].filter(Boolean).join(' '),
)
</script>

<template>
  <div :class="[baseClass, scrollClass]" data-slot="table-root">
    <table :class="tableClass" data-slot="table">
      <thead :class="headerClass" data-slot="table-header">
        <slot name="header">
          <tr :class="rowClass" data-slot="table-row">
            <slot name="columns">
              <th :class="[columnClass, cellClass, densityClass]" data-slot="table-column">
                Column
              </th>
            </slot>
          </tr>
        </slot>
      </thead>
      <tbody :class="bodyClass" data-slot="table-body" :data-hoverable="props.hoverable" :data-striped="props.striped">
        <slot />
      </tbody>
      <tfoot v-if="$slots.footer" data-slot="table-footer">
        <slot name="footer" />
      </tfoot>
    </table>
  </div>
</template>