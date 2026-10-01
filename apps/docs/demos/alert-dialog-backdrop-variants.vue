<template>
  <div class="demo-alert-dialog-actions">
    <AlertDialog v-for="variant in variants" :key="variant">
      <AlertDialogTrigger>
        <Button variant="secondary">{{ labels[variant] }}</Button>
      </AlertDialogTrigger>

      <AlertDialogBackdrop :variant="variant">
        <AlertDialogContainer>
          <AlertDialogDialog class="demo-alert-dialog">
            <AlertDialogCloseTrigger />
            <AlertDialogHeader>
              <AlertDialogIcon status="accent" />
              <AlertDialogHeading>{{ labels[variant] }} Backdrop</AlertDialogHeading>
            </AlertDialogHeader>
            <AlertDialogBody>
              This alert dialog uses the {{ variant }} backdrop variant.
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
  type AlertDialogBackdropVariant,
} from '@misaki-mei/heroui-vue'

const variants: AlertDialogBackdropVariant[] = ['transparent', 'opaque', 'blur']
const labels: Record<AlertDialogBackdropVariant, string> = {
  blur: 'Blur',
  opaque: 'Opaque',
  transparent: 'Transparent',
}
</script>

<style lang="less">
.demo-alert-dialog-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.demo-alert-dialog {
  max-width: 25rem;
}
</style>
