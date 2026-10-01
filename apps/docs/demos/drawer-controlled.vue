<template>
  <div class="flex max-w-md flex-col gap-8">
    <div class="flex flex-col gap-3">
      <h3 class="m-0 text-lg font-semibold text-foreground">With ref()</h3>
      <p class="m-0 text-sm leading-relaxed text-pretty text-muted">
        Control the drawer using Vue's <code class="text-foreground">ref</code> for simple state
        management.
      </p>
      <div class="flex flex-col items-start gap-3 rounded-2xl bg-surface p-4 shadow-sm">
        <div class="flex w-full items-center justify-between">
          <p class="m-0 text-xs text-muted">
            Status:
            <span class="font-mono font-medium text-foreground">
              {{ isOpen ? 'open' : 'closed' }}
            </span>
          </p>
        </div>
        <div class="flex gap-2">
          <Button size="sm" variant="secondary" @click="isOpen = true">Open Drawer</Button>
          <Button size="sm" variant="tertiary" @click="isOpen = !isOpen">Toggle</Button>
        </div>
      </div>

      <DrawerBackdrop :is-open="isOpen" @open-change="isOpen = $event">
        <DrawerContent placement="right">
          <DrawerDialog>
            <DrawerCloseTrigger />
            <DrawerHeader>
              <DrawerHeading>Controlled with ref()</DrawerHeading>
            </DrawerHeader>
            <DrawerBody>
              <p>
                This drawer is controlled by a Vue <code>ref</code>. Pass <code>isOpen</code> and
                listen for <code>openChange</code> to manage state externally.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button data-drawer-close="true" variant="secondary">Close</Button>
            </DrawerFooter>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="m-0 text-lg font-semibold text-foreground">With small state helpers</h3>
      <p class="m-0 text-sm leading-relaxed text-pretty text-muted">
        Use a tiny local helper object for convenient methods like <code>open()</code>,
        <code>close()</code>, and <code>toggle()</code>.
      </p>
      <div class="flex flex-col items-start gap-3 rounded-2xl bg-surface p-4 shadow-sm">
        <div class="flex w-full items-center justify-between">
          <p class="m-0 text-xs text-muted">
            Status:
            <span class="font-mono font-medium text-foreground">
              {{ overlay.isOpen.value ? 'open' : 'closed' }}
            </span>
          </p>
        </div>
        <div class="flex gap-2">
          <Button size="sm" variant="secondary" @click="overlay.open">Open Drawer</Button>
          <Button size="sm" variant="tertiary" @click="overlay.toggle">Toggle</Button>
        </div>
      </div>

      <DrawerBackdrop :is-open="overlay.isOpen.value" @open-change="overlay.setOpen">
        <DrawerContent placement="right">
          <DrawerDialog>
            <DrawerCloseTrigger />
            <DrawerHeader>
              <DrawerHeading>Controlled with helpers</DrawerHeading>
            </DrawerHeader>
            <DrawerBody>
              <p>
                The helper object provides dedicated methods for common operations without manually
                creating callbacks every time.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button data-drawer-close="true" variant="secondary">Close</Button>
            </DrawerFooter>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Button,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerDialog,
  DrawerFooter,
  DrawerHeader,
  DrawerHeading,
} from '@misaki-mei-q/heroui-vue'

const isOpen = ref(false)
const helperOpen = ref(false)
const overlay = {
  close: () => {
    helperOpen.value = false
  },
  isOpen: computed(() => helperOpen.value),
  open: () => {
    helperOpen.value = true
  },
  setOpen: (value: boolean) => {
    helperOpen.value = value
  },
  toggle: () => {
    helperOpen.value = !helperOpen.value
  },
}
</script>
