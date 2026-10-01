<template>
  <div class="flex flex-wrap gap-4">
    <Drawer v-for="variant in variants" :key="variant">
      <Button variant="secondary">{{ variantLabel(variant) }}</Button>
      <DrawerBackdrop :variant="variant">
        <DrawerContent>
          <DrawerDialog>
            <DrawerHandle />
            <DrawerCloseTrigger />
            <DrawerHeader>
              <DrawerHeading>Backdrop: {{ variantLabel(variant) }}</DrawerHeading>
            </DrawerHeader>
            <DrawerBody>
              <p>
                This drawer uses the <code>{{ variant }}</code> backdrop variant.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button class="w-full" data-drawer-close="true">Close</Button>
            </DrawerFooter>
          </DrawerDialog>
        </DrawerContent>
      </DrawerBackdrop>
    </Drawer>
  </div>
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
  type DrawerBackdropVariant,
} from '@misaki-mei-q/heroui-vue'

const variants: DrawerBackdropVariant[] = ['opaque', 'blur', 'transparent']
const variantLabel = (variant: DrawerBackdropVariant) =>
  variant.charAt(0).toUpperCase() + variant.slice(1)
</script>
