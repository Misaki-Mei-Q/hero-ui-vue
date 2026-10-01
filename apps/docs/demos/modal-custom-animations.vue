<template>
  <div class="flex flex-wrap gap-4">
    <Modal>
      <Button variant="secondary">Kinematic Scale</Button>
      <ModalBackdrop
        class="demo-modal-animation-backdrop demo-modal-animation-backdrop--scale"
      >
        <ModalContainer
          class="demo-modal-animation-container demo-modal-animation-container--scale"
        >
          <ModalDialog class="demo-modal-dialog">
            <ModalCloseTrigger />
            <ModalHeader>
              <ModalIcon class="bg-default text-foreground">
                <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9.9 10.8 8 17l-1.9-6.2L0 9l6.1-1.8L8 1l1.9 6.2L16 9l-6.1 1.8Z" />
                  <path d="M18 16.5 17 20l-1-3.5-3.5-1 3.5-1 1-3.5 1 3.5 3.5 1-3.5 1Z" />
                </svg>
              </ModalIcon>
              <ModalHeading>Kinematic Scale Animation</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <p class="demo-modal-animation-copy">
                Physics-based elastic scaling. Simulates a high-damping spring system with fast
                transient response and prolonged settling time. Ideal for Modals and Popovers.
              </p>
            </ModalBody>
            <ModalFooter v-slot="{ close }">
              <Button variant="tertiary" @click="close">Close</Button>
              <Button @click="close">Try Again</Button>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>

    <Modal>
      <Button variant="secondary">Fluid Slide</Button>
      <ModalBackdrop
        class="demo-modal-animation-backdrop demo-modal-animation-backdrop--slide"
      >
        <ModalContainer
          class="demo-modal-animation-container demo-modal-animation-container--slide"
        >
          <ModalDialog class="demo-modal-dialog">
            <ModalCloseTrigger />
            <ModalHeader>
              <ModalIcon class="bg-default text-foreground">
                <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 19V5" />
                  <path d="m5 12 7-7 7 7" />
                  <path d="M5 22h14" />
                </svg>
              </ModalIcon>
              <ModalHeading>Fluid Slide Animation</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <p class="demo-modal-animation-copy">
                Simulates movement through a medium with fluid resistance. Eliminates mechanical
                linearity for a natural, grounded feel. Perfect for Bottom Sheets or Toasts.
              </p>
            </ModalBody>
            <ModalFooter v-slot="{ close }">
              <Button variant="tertiary" @click="close">Close</Button>
              <Button @click="close">Try Again</Button>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
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
} from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-modal-dialog {
  max-width: 22.5rem;
}

.demo-modal-animation-copy {
  margin-top: 0.25rem;
}

@media (prefers-reduced-motion: no-preference) {
  .modal__backdrop.demo-modal-animation-backdrop--scale[data-entering="true"] {
    animation: demo-modal-backdrop-in 400ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .modal__backdrop.demo-modal-animation-backdrop--scale[data-exiting="true"] {
    animation: demo-modal-backdrop-out 200ms cubic-bezier(0.7, 0, 0.84, 0) both;
  }

  .modal__container.demo-modal-animation-container--scale[data-entering="true"] {
    animation: demo-modal-scale-in 400ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .modal__container.demo-modal-animation-container--scale[data-exiting="true"] {
    animation: demo-modal-scale-out 200ms cubic-bezier(0.7, 0, 0.84, 0) both;
  }

  .modal__backdrop.demo-modal-animation-backdrop--slide[data-entering="true"] {
    animation: demo-modal-backdrop-in 500ms cubic-bezier(0.25, 1, 0.5, 1) both;
  }

  .modal__backdrop.demo-modal-animation-backdrop--slide[data-exiting="true"] {
    animation: demo-modal-backdrop-out 200ms cubic-bezier(0.5, 0, 0.75, 0) both;
  }

  .modal__container.demo-modal-animation-container--slide[data-entering="true"] {
    animation: demo-modal-slide-in 500ms cubic-bezier(0.25, 1, 0.5, 1) both;
  }

  .modal__container.demo-modal-animation-container--slide[data-exiting="true"] {
    animation: demo-modal-slide-out 200ms cubic-bezier(0.5, 0, 0.75, 0) both;
  }
}

@keyframes demo-modal-backdrop-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes demo-modal-backdrop-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes demo-modal-scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes demo-modal-scale-out {
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

@keyframes demo-modal-slide-in {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes demo-modal-slide-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(0.5rem);
  }
}
</style>
