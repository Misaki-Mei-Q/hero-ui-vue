<script setup lang="ts">
import { computed, provide } from 'vue'
import { paginationVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import { PAGINATION_CONTEXT_KEY } from './context'

interface PaginationProps {
  ariaLabel?: string
  class?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<PaginationProps>(), {
  ariaLabel: 'Pagination',
  size: 'md',
})

const slots = computed(() => paginationVariants({ size: props.size }))
const paginationClass = computed(() => composeTwClasses(props.class, slots.value.base()))

provide(PAGINATION_CONTEXT_KEY, {
  slots,
})
</script>

<template>
  <nav :aria-label="props.ariaLabel" :class="paginationClass" data-slot="pagination">
    <slot />
  </nav>
</template>
