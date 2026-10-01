<template>
  <div class="demo-modal-portal">
    <div>
      <p class="demo-modal-portal-copy">
        Render modals inside a custom container instead of <code>document.body</code>.
      </p>
      <p class="demo-modal-portal-muted">
        Apply <code>transform: translate(0)</code> to the container to create a new stacking
        context.
      </p>
    </div>

    <div ref="portalContainer" class="demo-modal-portal-frame">
      <Modal v-if="portalContainer">
        <Button>Open Modal</Button>
        <ModalBackdrop class="demo-modal-portal-backdrop" :unstable-portal-container="portalContainer">
          <ModalContainer class="demo-modal-portal-container">
            <ModalDialog class="demo-modal-portal-dialog">
              <ModalCloseTrigger />
              <ModalHeader>
                <ModalHeading>Custom Portal</ModalHeading>
              </ModalHeader>
              <ModalBody>
                <p v-for="index in 3" :key="index" class="demo-modal-portal-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </ModalBody>
              <ModalFooter v-slot="{ close }">
                <Button variant="secondary" @click="close">Close</Button>
              </ModalFooter>
            </ModalDialog>
          </ModalContainer>
        </ModalBackdrop>
      </Modal>
    </div>
  </div>
</template>

<script setup lang="ts">
/* global HTMLElement */
import { useTemplateRef } from 'vue'
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
} from '@misaki-mei-q/heroui-vue'

const portalContainer = useTemplateRef<HTMLElement>('portalContainer')
</script>

<style lang="less">
.demo-modal-portal {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-modal-portal-copy,
.demo-modal-portal-muted,
.demo-modal-portal-paragraph {
  margin: 0;
  font-size: 0.875rem;
}

.demo-modal-portal-muted,
.demo-modal-portal-paragraph {
  color: var(--muted);
}

.demo-modal-portal-frame {
  position: relative;
  display: flex;
  height: 23.75rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
  background: color-mix(in srgb, var(--muted) 20%, transparent);
  transform: translate(0);
}

.demo-modal-portal-backdrop {
  height: 100%;
}

.demo-modal-portal-container,
.demo-modal-portal-dialog {
  height: 100%;
  max-height: 100%;
}

.demo-modal-portal-dialog {
  max-width: 28rem;
}
</style>
