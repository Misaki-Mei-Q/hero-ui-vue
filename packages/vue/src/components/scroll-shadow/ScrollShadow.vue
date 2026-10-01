<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { scrollShadowVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

type ScrollShadowVisibility = 'auto' | 'both' | 'top' | 'bottom' | 'left' | 'right' | 'none'

interface ScrollShadowProps {
  class?: string
  hideScrollBar?: boolean
  isEnabled?: boolean
  offset?: number
  orientation?: 'vertical' | 'horizontal'
  size?: number
  variant?: 'fade'
  visibility?: ScrollShadowVisibility
}

const props = withDefaults(defineProps<ScrollShadowProps>(), {
  hideScrollBar: false,
  isEnabled: true,
  offset: 0,
  orientation: 'vertical',
  size: 40,
  variant: 'fade',
  visibility: 'auto',
})

const rootRef = ref<HTMLDivElement | null>(null)
const currentVisibility = ref<ScrollShadowVisibility>('none')

const shadowClass = computed(() =>
  composeTwClasses(
    props.class,
    scrollShadowVariants({
      hideScrollBar: props.hideScrollBar,
      orientation: props.orientation,
      variant: props.variant,
    }).base(),
  ),
)

const controlledVisibility = computed(() =>
  props.visibility === 'auto' ? currentVisibility.value : props.visibility,
)

const updateVisibility = () => {
  const el = rootRef.value

  if (!el || !props.isEnabled) {
    currentVisibility.value = 'none'
    return
  }

  if (props.orientation === 'vertical') {
    const canScrollTop = el.scrollTop > props.offset
    const canScrollBottom = el.scrollTop + el.clientHeight < el.scrollHeight - props.offset

    currentVisibility.value =
      canScrollTop && canScrollBottom
        ? 'both'
        : canScrollTop
          ? 'top'
          : canScrollBottom
            ? 'bottom'
            : 'none'
    return
  }

  const canScrollLeft = el.scrollLeft > props.offset
  const canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth - props.offset

  currentVisibility.value =
    canScrollLeft && canScrollRight
      ? 'both'
      : canScrollLeft
        ? 'left'
        : canScrollRight
          ? 'right'
          : 'none'
}

onMounted(() => {
  void nextTick(updateVisibility)
})

watch(
  () => [props.isEnabled, props.offset, props.orientation, props.visibility],
  () => void nextTick(updateVisibility),
)
</script>

<template>
  <div
    ref="rootRef"
    :class="shadowClass"
    :data-bottom-scroll="
      props.orientation === 'vertical' &&
      (controlledVisibility === 'bottom' || controlledVisibility === 'both')
        ? 'true'
        : undefined
    "
    :data-left-scroll="
      props.orientation === 'horizontal' &&
      (controlledVisibility === 'left' || controlledVisibility === 'both')
        ? 'true'
        : undefined
    "
    :data-left-right-scroll="
      props.orientation === 'horizontal' && controlledVisibility === 'both' ? 'true' : undefined
    "
    :data-orientation="props.orientation"
    :data-right-scroll="
      props.orientation === 'horizontal' &&
      (controlledVisibility === 'right' || controlledVisibility === 'both')
        ? 'true'
        : undefined
    "
    :data-scroll-shadow-size="props.size"
    :data-top-bottom-scroll="
      props.orientation === 'vertical' && controlledVisibility === 'both' ? 'true' : undefined
    "
    :data-top-scroll="
      props.orientation === 'vertical' &&
      (controlledVisibility === 'top' || controlledVisibility === 'both')
        ? 'true'
        : undefined
    "
    :style="{ '--scroll-shadow-size': `${props.size}px` }"
    @scroll="updateVisibility"
  >
    <slot />
  </div>
</template>
