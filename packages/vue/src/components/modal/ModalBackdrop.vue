<script lang="ts">
/* global document, Element, EventTarget, HTMLElement, KeyboardEvent, MouseEvent, TouchEvent, WheelEvent, window */
let modalScrollLockCount = 0
let restoreScrollLock: (() => void) | undefined
let lockedScrollPosition: { x: number; y: number } | undefined

const setDocumentStyle = (
  element: HTMLElement,
  style: 'overflow' | 'paddingRight' | 'scrollbarGutter',
  value: string,
) => {
  const previousValue = element.style[style]
  element.style[style] = value

  return () => {
    element.style[style] = previousValue
  }
}

const lockPageScroll = () => {
  if (typeof document === 'undefined' || typeof window === 'undefined') return

  if (modalScrollLockCount === 0) {
    const { documentElement } = document
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth
    const restoreFns: Array<() => void> = []
    lockedScrollPosition = { x: window.scrollX, y: window.scrollY }

    // Match React Aria's standard preventScroll strategy used by HeroUI React.
    // scrollbar-gutter preserves the viewport gutter for fixed and sticky elements.
    if (scrollbarWidth > 0) {
      restoreFns.push(
        'scrollbarGutter' in documentElement.style
          ? setDocumentStyle(documentElement, 'scrollbarGutter', 'stable')
          : setDocumentStyle(documentElement, 'paddingRight', `${scrollbarWidth}px`),
      )
    }

    restoreFns.push(setDocumentStyle(documentElement, 'overflow', 'hidden'))
    restoreScrollLock = () => {
      for (const restore of restoreFns.reverse()) restore()
      restoreScrollLock = undefined
    }
  }

  modalScrollLockCount += 1
}

const restoreLockedScrollPosition = () => {
  if (typeof window === 'undefined' || !lockedScrollPosition) return

  const { x, y } = lockedScrollPosition
  const scrollTo = window.scrollTo.bind(window)
  const restorePosition = () => {
    if (window.scrollX === x && window.scrollY === y) return

    try {
      scrollTo(x, y)
    } catch {
      // Some non-browser test environments expose scrollTo but do not implement it.
    }
  }

  restorePosition()
  if (typeof window.requestAnimationFrame !== 'function') return

  window.requestAnimationFrame(() => {
    restorePosition()
    window.requestAnimationFrame(restorePosition)
  })
  window.setTimeout(restorePosition, 120)
  window.setTimeout(restorePosition, 300)
}

const unlockPageScroll = (options: { restorePosition?: boolean } = {}) => {
  if (typeof document === 'undefined') return

  modalScrollLockCount = Math.max(0, modalScrollLockCount - 1)
  if (modalScrollLockCount > 0) return

  restoreScrollLock?.()
  if (options.restorePosition) restoreLockedScrollPosition()
  lockedScrollPosition = undefined
}

const getRunningAnimations = (element: HTMLElement) => {
  if (typeof element.getAnimations !== 'function') return []

  return element.getAnimations().filter((animation) => {
    return animation.playState !== 'finished' && animation.playState !== 'idle'
  })
}

const waitForAnimationFrame = () => {
  return new Promise<void>((resolve) => {
    if (typeof window === 'undefined' || typeof window.requestAnimationFrame !== 'function') {
      resolve()
      return
    }

    window.requestAnimationFrame(() => resolve())
  })
}

const getFocusableElements = (root: HTMLElement): HTMLElement[] => {
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',')

  return Array.from(root.querySelectorAll<HTMLElement>(selectors)).filter((element) => {
    if (element.hasAttribute('disabled')) return false
    if (element.getAttribute('aria-hidden') === 'true') return false

    return element.offsetParent !== null || element === document.activeElement
  })
}

const canScroll = (element: HTMLElement, deltaX: number, deltaY: number) => {
  const styles = window.getComputedStyle(element)
  const canScrollY =
    /(auto|scroll|overlay)/.test(styles.overflowY) && element.scrollHeight > element.clientHeight
  const canScrollX =
    /(auto|scroll|overlay)/.test(styles.overflowX) && element.scrollWidth > element.clientWidth

  if (deltaY < 0 && canScrollY && element.scrollTop > 0) return true
  if (
    deltaY > 0 &&
    canScrollY &&
    element.scrollTop + element.clientHeight < element.scrollHeight - 1
  ) {
    return true
  }

  if (deltaX < 0 && canScrollX && element.scrollLeft > 0) return true
  if (
    deltaX > 0 &&
    canScrollX &&
    element.scrollLeft + element.clientWidth < element.scrollWidth - 1
  ) {
    return true
  }

  return false
}

const canScrollWithinOverlay = (
  target: EventTarget | null,
  overlay: HTMLElement,
  deltaX: number,
  deltaY: number,
) => {
  if (!(target instanceof Element)) return false

  let element: Element | null = target
  while (element && element !== overlay) {
    if (element instanceof HTMLElement && canScroll(element, deltaX, deltaY)) return true
    element = element.parentElement
  }

  return false
}
</script>

<script setup lang="ts">
import { computed, inject, nextTick, onBeforeUnmount, provide, ref, watch } from 'vue'
import { modalVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { MODAL_CONTEXT_KEY, type ModalBackdropVariant, type ModalPlacement } from './context'

export interface ModalBackdropProps {
  class?: string
  defaultOpen?: boolean
  isDismissable?: boolean
  isKeyboardDismissDisabled?: boolean
  isOpen?: boolean
  modelValue?: boolean
  portalContainer?: HTMLElement | string | null
  unstablePortalContainer?: HTMLElement | null
  variant?: ModalBackdropVariant
}

const props = withDefaults(defineProps<ModalBackdropProps>(), {
  defaultOpen: false,
  isDismissable: true,
  isKeyboardDismissDisabled: false,
  isOpen: undefined,
  modelValue: undefined,
  portalContainer: null,
  unstablePortalContainer: null,
  variant: 'opaque',
})

const emit = defineEmits<{
  'update:isOpen': [value: boolean]
  'update:modelValue': [value: boolean]
  openChange: [value: boolean]
}>()

const rootContext = inject(MODAL_CONTEXT_KEY, null)
const internalOpen = ref(props.defaultOpen)
const isEntering = ref(false)
const isRendered = ref(false)
const isExiting = ref(false)
const overlayRef = ref<HTMLElement>()
const isControlled = computed(() => props.modelValue !== undefined || props.isOpen !== undefined)
const isOpen = computed(() =>
  props.modelValue ?? props.isOpen ?? rootContext?.isOpen.value ?? internalOpen.value,
)
const slots = computed(() => modalVariants({ variant: props.variant }))
const backdropClass = computed(() => composeTwClasses(props.class, slots.value.backdrop()))
const portalTarget = computed(() => props.unstablePortalContainer ?? props.portalContainer ?? 'body')
let isScrollLocked = false
let animationRunId = 0
let lastTouchY: number | undefined

watch(
  () => props.defaultOpen,
  (value) => {
    if (!isControlled.value && !rootContext) internalOpen.value = value
  },
)

const setOpen = (value: boolean) => {
  internalOpen.value = value
  emit('update:modelValue', value)
  emit('update:isOpen', value)
  emit('openChange', value)
  if (!isControlled.value) rootContext?.setOpen(value)
}

const close = () => {
  if (typeof document === 'undefined') {
    setOpen(false)
    return
  }

  const activeElement = document.activeElement

  if (activeElement instanceof HTMLElement) {
    activeElement.blur()
  }

  setOpen(false)
}

const focusDialog = async () => {
  await nextTick()

  const overlay = overlayRef.value
  const dialog = overlay?.querySelector<HTMLElement>('[data-slot="modal-dialog"]')

  dialog?.focus({ preventScroll: true })
}

const trapFocus = (event: KeyboardEvent) => {
  if (event.key !== 'Tab' || !overlayRef.value) return

  const focusableElements = getFocusableElements(overlayRef.value)
  const fallback = overlayRef.value.querySelector<HTMLElement>('[data-slot="modal-dialog"]')

  if (focusableElements.length === 0) {
    event.preventDefault()
    fallback?.focus({ preventScroll: true })
    return
  }

  const first = focusableElements[0]!
  const last = focusableElements[focusableElements.length - 1]!

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus({ preventScroll: true })
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus({ preventScroll: true })
  }
}

const onKeydown = (event: KeyboardEvent) => {
  trapFocus(event)

  if (event.key !== 'Escape' || props.isKeyboardDismissDisabled) return
  close()
}

const waitForActiveAnimations = async (runId: number) => {
  await nextTick()

  if (runId !== animationRunId) return false

  const overlay = overlayRef.value
  if (!overlay) return true

  if (typeof overlay.getAnimations === 'function') {
    await waitForAnimationFrame()
    await waitForAnimationFrame()
  }
  if (runId !== animationRunId) return false

  const container = overlay.querySelector<HTMLElement>('[data-slot="modal-container"]')
  const animations = [
    ...getRunningAnimations(overlay),
    ...(container ? getRunningAnimations(container) : []),
  ]
  if (animations.length === 0) return true

  await Promise.allSettled(animations.map((animation) => animation.finished))

  return runId === animationRunId
}

const finishEnterAnimation = async (runId: number) => {
  const shouldFinish = await waitForActiveAnimations(runId)

  if (shouldFinish) isEntering.value = false
}

const finishExitAnimation = async (runId: number) => {
  const shouldFinish = await waitForActiveAnimations(runId)

  if (!shouldFinish) return

  isRendered.value = false
  isExiting.value = false
  if (isScrollLocked) {
    unlockPageScroll({ restorePosition: true })
    isScrollLocked = false
  }
}

watch(
  isOpen,
  (open) => {
    if (typeof document === 'undefined') return
    animationRunId += 1
    const runId = animationRunId

    document.removeEventListener('keydown', onKeydown)

    if (open) {
      isRendered.value = true
      isEntering.value = true
      isExiting.value = false
      document.addEventListener('keydown', onKeydown)
      if (!isScrollLocked) {
        lockPageScroll()
        isScrollLocked = true
      }
      void focusDialog()
      void finishEnterAnimation(runId)
      return
    }

    if (isRendered.value) {
      isEntering.value = false
      isExiting.value = true
      void finishExitAnimation(runId)
    }
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') document.removeEventListener('keydown', onKeydown)
  animationRunId += 1
  if (isScrollLocked) {
    unlockPageScroll({ restorePosition: true })
    isScrollLocked = false
  }
})

const handleBackdropClick = (event: MouseEvent) => {
  event.stopPropagation()
  if (!props.isDismissable || event.target !== event.currentTarget) return
  close()
}

const preventBackgroundScroll = (event: WheelEvent | TouchEvent, deltaX: number, deltaY: number) => {
  const overlay = overlayRef.value
  if (!overlay) return
  if (canScrollWithinOverlay(event.target, overlay, deltaX, deltaY)) return

  event.preventDefault()
  event.stopPropagation()
}

const handleWheel = (event: WheelEvent) => {
  preventBackgroundScroll(event, event.deltaX, event.deltaY)
}

const handleTouchStart = (event: TouchEvent) => {
  lastTouchY = event.touches[0]?.clientY
}

const handleTouchMove = (event: TouchEvent) => {
  const currentY = event.touches[0]?.clientY
  if (currentY === undefined || lastTouchY === undefined) return

  preventBackgroundScroll(event, 0, lastTouchY - currentY)
  lastTouchY = currentY
}

provide(MODAL_CONTEXT_KEY, {
  close,
  isEntering: computed(() => isEntering.value),
  isExiting: computed(() => isExiting.value),
  isOpen,
  open: () => setOpen(true),
  placement: computed<ModalPlacement>(() => rootContext?.placement.value ?? 'auto'),
  setOpen,
  setPlacement: (placement) => {
    rootContext?.setPlacement(placement)
  },
  slots,
})
</script>

<template>
  <Teleport :to="portalTarget">
    <div
      v-if="isRendered"
      ref="overlayRef"
      :class="backdropClass"
      :data-entering="dataAttr(isEntering)"
      :data-exiting="dataAttr(isExiting)"
      data-slot="modal-backdrop"
      @click="handleBackdropClick"
      @touchmove.capture="handleTouchMove"
      @touchstart.capture="handleTouchStart"
      @wheel.capture="handleWheel"
    >
      <slot :close="close" :is-open="isOpen" :open="() => setOpen(true)" />
    </div>
  </Teleport>
</template>
