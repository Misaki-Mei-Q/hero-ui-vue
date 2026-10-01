<script setup lang="ts">
import { computed, provide } from 'vue'
import { cardVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import { CARD_CONTEXT_KEY } from './context'

interface CardProps {
  class?: string
  variant?: 'default' | 'secondary' | 'tertiary' | 'transparent'
}

const props = defineProps<CardProps>()
const slots = computed(() => cardVariants({ variant: props.variant }))

provide(CARD_CONTEXT_KEY, {
  slots: slots.value,
})

const cardClass = computed(() => composeTwClasses(props.class, slots.value.base()))
</script>

<template>
  <div :class="cardClass" data-slot="card">
    <slot />
  </div>
</template>
