<template>
  <Drawer>
    <Button variant="secondary">Important Action</Button>
    <DrawerBackdrop :is-dismissable="false">
      <DrawerContent>
        <DrawerDialog>
          <DrawerHeader>
            <DrawerHeading>Confirm Action</DrawerHeading>
          </DrawerHeader>
          <DrawerBody>
            <p>
              This drawer cannot be dismissed by clicking outside or dragging. You must use one of
              the buttons below.
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
} from '@misaki-mei-q/heroui-vue'
</script>
