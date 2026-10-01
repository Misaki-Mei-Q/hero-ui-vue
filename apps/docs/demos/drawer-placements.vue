<template>
  <div class="flex flex-wrap gap-4">
    <Drawer v-for="placement in placements" :key="placement">
      <Button variant="secondary">{{ placementLabel(placement) }}</Button>
      <DrawerBackdrop>
        <DrawerContent :placement="placement">
          <DrawerDialog>
            <DrawerCloseTrigger />
            <DrawerHandle v-if="placement === 'bottom'" />
            <DrawerHeader>
              <DrawerHeading>{{ placementLabel(placement) }} Drawer</DrawerHeading>
            </DrawerHeader>
            <DrawerBody>
              <p>
                This drawer slides in from the <strong>{{ placement }}</strong> edge of the screen.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button data-drawer-close="true" variant="secondary">Cancel</Button>
              <Button data-drawer-close="true">Done</Button>
            </DrawerFooter>
            <DrawerHandle v-if="placement === 'top'" />
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
  type DrawerPlacement,
} from '@misaki-mei-q/heroui-vue'

const placements: DrawerPlacement[] = ['bottom', 'top', 'left', 'right']
const placementLabel = (placement: DrawerPlacement) =>
  placement.charAt(0).toUpperCase() + placement.slice(1)
</script>
