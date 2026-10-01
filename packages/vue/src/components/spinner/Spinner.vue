<script setup lang="ts">
import { computed, useId } from 'vue'
import { spinnerVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface SpinnerProps {
  label?: string
  class?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'current' | 'accent' | 'success' | 'warning' | 'danger'
}

const props = defineProps<SpinnerProps>()
const iconId = useId()

const spinnerClass = computed(() => {
  const styles = spinnerVariants({
    size: props.size,
    color: props.color,
  })

  return composeTwClasses(props.class, styles)
})
</script>

<template>
  <div :aria-label="props.label" :class="spinnerClass" data-slot="spinner" role="status">
    <svg
      aria-hidden="true"
      data-slot="spinner-icon"
      height="100%"
      role="presentation"
      viewBox="0 0 24 24"
      width="100%"
    >
      <defs>
        <linearGradient :id="`spinner-def-1-${iconId}`" x1="50%" x2="50%" y1="5.271%" y2="91.793%">
          <stop offset="0%" stop-color="currentColor" />
          <stop offset="100%" stop-color="currentColor" stop-opacity="0.55" />
        </linearGradient>
        <linearGradient :id="`spinner-def-2-${iconId}`" x1="50%" x2="50%" y1="15.24%" y2="87.15%">
          <stop offset="0%" stop-color="currentColor" stop-opacity="0" />
          <stop offset="100%" stop-color="currentColor" stop-opacity="0.55" />
        </linearGradient>
      </defs>
      <g fill="none">
        <path
          :fill="`url(#spinner-def-1-${iconId})`"
          d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.5 7.5 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021"
          transform="translate(1.5 1.625)"
        />
        <path
          :fill="`url(#spinner-def-2-${iconId})`"
          d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.48 10.48 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118"
          transform="translate(1.5 1.625)"
        />
      </g>
    </svg>
    <span v-if="props.label" class="sr-only">{{ props.label }}</span>
  </div>
</template>
