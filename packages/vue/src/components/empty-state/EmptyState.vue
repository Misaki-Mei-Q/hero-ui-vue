<script setup lang="ts">
import { computed } from 'vue'
import { emptyStateVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface EmptyStateProps {
  class?: string
}

const props = defineProps<EmptyStateProps>()

const emptyStateClass = computed(() => composeTwClasses(props.class, emptyStateVariants()))
</script>

<template>
  <div :class="emptyStateClass" data-slot="empty-state">
    <slot>No results found</slot>
  </div>
</template>
