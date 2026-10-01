<script setup lang="ts">
import { computed } from 'vue'
import { kbdVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface KbdProps {
  class?: string
  variant?: 'default' | 'light'
  keys?: string[]
}

const props = defineProps<KbdProps>()

const slots = computed(() => {
  return kbdVariants({
    variant: props.variant,
  })
})

const baseClass = computed(() => composeTwClasses(props.class, slots.value.base()))
const contentClass = computed(() => slots.value.content())
const abbrClass = computed(() => slots.value.abbr())
</script>

<template>
  <kbd :class="baseClass" data-slot="kbd">
    <abbr v-if="props.keys && props.keys.length > 0" :class="abbrClass" title="">
      <span v-for="(key, index) in props.keys" :key="index">
        {{ key }}
      </span>
    </abbr>
    <span :class="contentClass">
      <slot />
    </span>
  </kbd>
</template>
