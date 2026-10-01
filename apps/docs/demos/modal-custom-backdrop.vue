<template>
  <Modal>
    <Button variant="secondary">Custom Backdrop</Button>
    <ModalBackdrop
      class="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
      variant="blur"
    >
      <ModalContainer>
        <ModalDialog class="demo-modal-dialog">
          <ModalHeader class="demo-modal-premium-header">
            <ModalIcon class="bg-accent-soft text-accent-soft-foreground">
              <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9.9 10.8 8 17l-1.9-6.2L0 9l6.1-1.8L8 1l1.9 6.2L16 9l-6.1 1.8Z" />
                <path d="M18 16.5 17 20l-1-3.5-3.5-1 3.5-1 1-3.5 1 3.5 3.5 1-3.5 1Z" />
              </svg>
            </ModalIcon>
            <ModalHeading>Premium Backdrop</ModalHeading>
          </ModalHeader>
          <ModalBody>
            <p>
              This backdrop features a sophisticated gradient that transitions from a dark color
              at the bottom to complete transparency at the top, combined with a smooth blur
              effect. The gradient automatically adapts its intensity for optimal contrast in both
              light and dark modes.
            </p>
          </ModalBody>
          <ModalFooter v-slot="{ close }" class="demo-modal-premium-footer">
            <Button class="w-full" @click="close">Amazing!</Button>
            <Button class="w-full" variant="secondary" @click="close">Close</Button>
          </ModalFooter>
          <ModalCloseTrigger />
        </ModalDialog>
      </ModalContainer>
    </ModalBackdrop>
  </Modal>
</template>

<script setup>
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
} from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-modal-dialog {
  max-width: 22.5rem;
}

.demo-modal-premium-header {
  align-items: center;
  text-align: center;
}

.demo-modal-premium-footer {
  flex-direction: column-reverse;
}
</style>
