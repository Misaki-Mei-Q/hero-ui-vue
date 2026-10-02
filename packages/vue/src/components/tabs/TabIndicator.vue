<script setup lang="ts">
import { computed, inject } from 'vue'
import { composeTwClasses } from '../../utils'
import { TAB_ITEM_KEY, TABS_CONTEXT_KEY } from './context'

interface TabIndicatorProps {
  class?: string
}

const props = defineProps<TabIndicatorProps>()
const tabsContext = inject(TABS_CONTEXT_KEY, null)
const tabItem = inject(TAB_ITEM_KEY, null)

const indicatorClass = computed(() =>
  composeTwClasses(props.class, tabsContext?.slots.tabIndicator()),
)
const isSelected = computed(() => tabItem?.isSelected.value ?? false)
</script>

<template>
  <span
    v-if="isSelected"
    :class="indicatorClass"
    data-slot="tabs-indicator"
    aria-hidden="true"
  />
</template>
