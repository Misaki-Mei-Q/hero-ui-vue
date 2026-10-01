<template>
  <Drawer>
    <Button variant="secondary">Terms & Conditions</Button>
    <DrawerBackdrop>
      <DrawerContent>
        <DrawerDialog>
          <DrawerHandle />
          <DrawerCloseTrigger />
          <DrawerHeader>
            <DrawerHeading>Terms & Conditions</DrawerHeading>
          </DrawerHeader>
          <DrawerBody>
            <p v-for="index in 20" :key="index" class="mb-3">
              Paragraph {{ index }}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus,
              sed porttitor quam.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <Button data-drawer-close="true" variant="secondary">Decline</Button>
            <Button data-drawer-close="true">Accept</Button>
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
  DrawerCloseTrigger,
  DrawerContent,
  DrawerDialog,
  DrawerFooter,
  DrawerHandle,
  DrawerHeader,
  DrawerHeading,
} from '@misaki-mei/heroui-vue'
</script>
