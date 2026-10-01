<template>
  <div class="flex max-w-sm flex-col gap-6 demo-modal-dismiss">
    <section class="flex flex-col gap-2 demo-modal-section">
      <h3 class="text-lg font-semibold demo-modal-section-title">isDismissable</h3>
      <p class="demo-modal-section-copy">
        Controls whether the modal can be dismissed by clicking the overlay backdrop. Defaults to
        <code>true</code>. Set to <code>false</code> to require explicit close action.
      </p>
      <Modal>
        <Button variant="secondary">Open Modal</Button>
        <ModalBackdrop :is-dismissable="false">
          <ModalContainer>
            <ModalDialog class="demo-modal-dialog">
              <ModalCloseTrigger />
              <ModalHeader>
                <ModalIcon class="bg-default text-foreground">
                  <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </ModalIcon>
                <ModalHeading>isDismissable = false</ModalHeading>
                <p class="demo-modal-header-copy">
                  Clicking the backdrop won't close this modal
                </p>
              </ModalHeader>
              <ModalBody>
                <p>
                  Try clicking outside this modal on the overlay - it won't close. You must use
                  the close button or press ESC to dismiss it.
                </p>
              </ModalBody>
              <ModalFooter v-slot="{ close }">
                <Button class="w-full" @click="close">Close</Button>
              </ModalFooter>
            </ModalDialog>
          </ModalContainer>
        </ModalBackdrop>
      </Modal>
    </section>

    <section class="flex flex-col gap-2 demo-modal-section">
      <h3 class="text-lg font-semibold demo-modal-section-title">isKeyboardDismissDisabled</h3>
      <p class="demo-modal-section-copy">
        Controls whether the ESC key can dismiss the modal. When set to <code>true</code>, the ESC
        key will be disabled and users must use explicit close actions.
      </p>
      <Modal>
        <Button variant="secondary">Open Modal</Button>
        <ModalBackdrop is-keyboard-dismiss-disabled>
          <ModalContainer>
            <ModalDialog class="demo-modal-dialog">
              <ModalCloseTrigger />
              <ModalHeader>
                <ModalIcon class="bg-default text-foreground">
                  <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </ModalIcon>
                <ModalHeading>isKeyboardDismissDisabled = true</ModalHeading>
                <p class="demo-modal-header-copy">ESC key is disabled</p>
              </ModalHeader>
              <ModalBody>
                <p>
                  Press ESC - nothing happens. You must use the close button or click the overlay
                  backdrop to dismiss this modal.
                </p>
              </ModalBody>
              <ModalFooter v-slot="{ close }">
                <Button class="w-full" @click="close">Close</Button>
              </ModalFooter>
            </ModalDialog>
          </ModalContainer>
        </ModalBackdrop>
      </Modal>
    </section>
  </div>
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
} from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-modal-dismiss .demo-modal-section-title,
.demo-modal-dismiss .demo-modal-section-copy,
.demo-modal-header-copy {
  margin: 0;
}

.demo-modal-section-copy {
  font-size: 0.875rem;
  color: var(--muted);
}

.demo-modal-header-copy {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--muted);
}

.demo-modal-dialog {
  max-width: 22.5rem;
}
</style>
