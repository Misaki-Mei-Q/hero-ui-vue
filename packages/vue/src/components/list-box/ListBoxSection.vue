<script setup lang="ts">
import { computed } from 'vue'
import { listboxSectionVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface ListBoxSectionProps {
  class?: string
  title?: string
}

const props = defineProps<ListBoxSectionProps>()
const sectionClass = computed(() => composeTwClasses(props.class, listboxSectionVariants()))
</script>

<template>
  <div
    :aria-label="props.title"
    :class="sectionClass"
    data-slot="list-box-section"
    role="group"
  >
    <div
      v-if="props.title || $slots.title"
      data-slot="list-box-section-title"
      role="presentation"
    >
      <slot name="title">{{ props.title }}</slot>
    </div>
    <slot />
  </div>
</template>
