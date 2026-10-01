<template>
  <div class="flex flex-wrap gap-4">
    <Modal v-for="variant in variants" :key="variant">
      <Button variant="secondary">
        {{ variantLabel(variant) }}
      </Button>
      <ModalBackdrop :variant="variant">
        <ModalContainer>
          <ModalDialog class="demo-modal-dialog">
            <ModalCloseTrigger />
            <ModalHeader>
              <ModalIcon class="bg-default text-foreground">
                <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </ModalIcon>
              <ModalHeading>Backdrop: {{ variantLabel(variant) }}</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <p>
                This modal uses the <code>{{ variant }}</code> backdrop variant. Compare the
                different visual effects: opaque provides full opacity, blur adds a backdrop
                filter, and transparent removes the background.
              </p>
            </ModalBody>
            <ModalFooter v-slot="{ close }">
              <Button class="w-full" @click="close">Continue</Button>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import {
  Button,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseTrigger,
  ModalContainer,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalIcon,
  type ModalBackdropVariant,
} from '@misaki-mei/heroui-vue'

const variants: ModalBackdropVariant[] = ['opaque', 'blur', 'transparent']

const variantLabel = (variant: ModalBackdropVariant) =>
  variant.charAt(0).toUpperCase() + variant.slice(1)
</script>

<style lang="less">
.demo-modal-dialog {
  max-width: 22.5rem;
}
</style>
