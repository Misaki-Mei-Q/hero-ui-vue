<template>
  <Drawer>
    <Button variant="secondary">
      <svg
        aria-hidden="true"
        class="size-5"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
      Menu
    </Button>
    <DrawerBackdrop>
      <DrawerContent placement="left">
        <DrawerDialog>
          <DrawerCloseTrigger />
          <DrawerHeader>
            <DrawerHeading>Navigation</DrawerHeading>
          </DrawerHeader>
          <DrawerBody>
            <nav aria-label="Main navigation" class="flex flex-col gap-1">
              <button
                v-for="item in navItems"
                :key="item.label"
                class="flex w-full items-center justify-start gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-default"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  class="size-5 shrink-0 text-muted"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <component
                    :is="segment.element"
                    v-for="segment in item.icon"
                    :key="segment.key"
                    v-bind="segment.attrs"
                  />
                </svg>
                {{ item.label }}
              </button>
            </nav>
          </DrawerBody>
        </DrawerDialog>
      </DrawerContent>
    </DrawerBackdrop>
  </Drawer>
</template>

<script setup lang="ts">
import {
  Button,
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerDialog,
  DrawerHeader,
  DrawerHeading,
} from '@misaki-mei/heroui-vue'

type IconSegment = {
  attrs: Record<string, string | number>
  element: 'circle' | 'path' | 'rect'
  key: string
}

const navItems = [
  {
    icon: [
      { attrs: { d: 'M3 10.5 12 3l9 7.5' }, element: 'path', key: 'roof' },
      { attrs: { d: 'M5 10v10h14V10' }, element: 'path', key: 'frame' },
      { attrs: { d: 'M9 20v-6h6v6' }, element: 'path', key: 'door' },
    ],
    label: 'Home',
  },
  {
    icon: [
      { attrs: { cx: 11, cy: 11, r: 7 }, element: 'circle', key: 'lens' },
      { attrs: { d: 'm20 20-4.2-4.2' }, element: 'path', key: 'handle' },
    ],
    label: 'Search',
  },
  {
    icon: [
      { attrs: { d: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9' }, element: 'path', key: 'bell' },
      { attrs: { d: 'M13.7 21a2 2 0 0 1-3.4 0' }, element: 'path', key: 'clapper' },
    ],
    label: 'Notifications',
  },
  {
    icon: [
      { attrs: { height: 16, rx: 2, width: 20, x: 2, y: 4 }, element: 'rect', key: 'box' },
      { attrs: { d: 'm22 7-8.5 5.5a3 3 0 0 1-3 0L2 7' }, element: 'path', key: 'fold' },
    ],
    label: 'Messages',
  },
  {
    icon: [
      { attrs: { cx: 12, cy: 7, r: 4 }, element: 'circle', key: 'avatar' },
      { attrs: { d: 'M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2' }, element: 'path', key: 'body' },
    ],
    label: 'Profile',
  },
  {
    icon: [
      { attrs: { cx: 12, cy: 12, r: 3 }, element: 'circle', key: 'center' },
      {
        attrs: {
          d: 'M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1a2.1 2.1 0 0 1-3 3l-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1 1.7V21a2.1 2.1 0 0 1-4.2 0v-.1a1.8 1.8 0 0 0-1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1a2.1 2.1 0 0 1-3-3l.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1H3a2.1 2.1 0 0 1 0-4.2h.1a1.8 1.8 0 0 0 1.7-1 1.8 1.8 0 0 0-.4-2l-.1-.1a2.1 2.1 0 0 1 3-3l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1-1.7V3a2.1 2.1 0 0 1 4.2 0v.1a1.8 1.8 0 0 0 1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1a2.1 2.1 0 0 1 3 3l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1h.1a2.1 2.1 0 0 1 0 4.2h-.1a1.8 1.8 0 0 0-1.7 1z',
        },
        element: 'path',
        key: 'gear',
      },
    ],
    label: 'Settings',
  },
] satisfies Array<{ icon: IconSegment[]; label: string }>
</script>
