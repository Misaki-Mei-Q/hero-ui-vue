<template>
  <div class="demo-alert-dialog-actions">
    <AlertDialog v-for="size in sizes" :key="size">
      <AlertDialogTrigger>
        <Button variant="secondary">{{ size.toUpperCase() }}</Button>
      </AlertDialogTrigger>

      <AlertDialogBackdrop>
        <AlertDialogContainer :size="size">
          <AlertDialogDialog>
            <AlertDialogCloseTrigger />
            <AlertDialogHeader>
              <AlertDialogIcon class="demo-alert-dialog-default-icon" status="default" />
              <AlertDialogHeading>{{ size.toUpperCase() }} Alert Dialog</AlertDialogHeading>
            </AlertDialogHeader>
            <AlertDialogBody>
              This alert dialog uses the {{ size }} size variant. On mobile it still adapts to the
              viewport width.
            </AlertDialogBody>
            <AlertDialogFooter v-slot="{ close }">
              <Button variant="secondary" @click="close">Cancel</Button>
              <Button variant="primary" @click="close">Confirm</Button>
            </AlertDialogFooter>
          </AlertDialogDialog>
        </AlertDialogContainer>
      </AlertDialogBackdrop>
    </AlertDialog>
  </div>
</template>

<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseTrigger,
  AlertDialogContainer,
  AlertDialogDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogIcon,
  AlertDialogTrigger,
  Button,
  type AlertDialogSize,
} from '@misaki-mei/heroui-vue'

const sizes: AlertDialogSize[] = ['xs', 'sm', 'md', 'lg']
</script>

<style lang="less">
.demo-alert-dialog-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.demo-alert-dialog-default-icon {
  background: var(--color-default);
  color: var(--color-foreground);
}
</style>
