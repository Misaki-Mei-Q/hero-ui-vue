<script setup lang="ts">
import { computed } from 'vue'
import { errorMessageVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface ErrorMessageProps {
  class?: string
}

const props = defineProps<ErrorMessageProps>()
const errorMessageClass = computed(() => composeTwClasses(props.class, errorMessageVariants()))
</script>

<template>
  <div :class="errorMessageClass" data-slot="error-message" slot="errorMessage">
    <slot />
  </div>
</template>
