<script setup lang="ts">
import { computed } from 'vue'
import { listboxSectionVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface ListBoxSectionProps {
  class?: string
}

const props = defineProps<ListBoxSectionProps>()
const sectionClass = computed(() => composeTwClasses(props.class, listboxSectionVariants()))
</script>

<template>
  <div :class="sectionClass" data-slot="list-box-section" role="group">
    <slot />
  </div>
</template>
