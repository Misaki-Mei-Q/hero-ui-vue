<template>
  <Drawer>
    <Button variant="secondary">Open Drawer</Button>
    <DrawerBackdrop>
      <DrawerContent placement="right">
        <DrawerDialog>
          <DrawerHeader>
            <DrawerHeading>Drawer Title</DrawerHeading>
          </DrawerHeader>
          <DrawerBody>
            <p>
              This is a right drawer built with the Vue Drawer component. It slides in from the
              edge of the screen with a smooth CSS transition.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <Button data-drawer-close="true" variant="secondary">Cancel</Button>
            <Button data-drawer-close="true">Confirm</Button>
          </DrawerFooter>
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
  DrawerContent,
  DrawerDialog,
  DrawerFooter,
  DrawerHeader,
  DrawerHeading,
} from '@misaki-mei/heroui-vue'
</script>
