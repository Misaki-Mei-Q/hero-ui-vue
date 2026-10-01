<script setup lang="ts">
import { computed, inject } from 'vue'
import { buttonGroupVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import { BUTTON_GROUP_CONTEXT_KEY } from './context'

interface ButtonGroupSeparatorProps {
  class?: string
}

const props = defineProps<ButtonGroupSeparatorProps>()
const context = inject(BUTTON_GROUP_CONTEXT_KEY, null)

const fallbackSlots = buttonGroupVariants()

const separatorClass = computed(() =>
  composeTwClasses(props.class, (context?.slots ?? fallbackSlots).separator()),
)
</script>

<template>
  <span
    aria-hidden="true"
    :class="separatorClass"
    data-slot="button-group-separator"
  />
</template>
