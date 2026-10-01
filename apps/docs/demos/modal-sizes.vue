<template>
  <div class="flex flex-wrap gap-4">
    <Modal v-for="size in sizes" :key="size">
      <Button variant="secondary">
        {{ sizeLabel(size) }}
      </Button>
      <ModalBackdrop>
        <ModalContainer :size="size">
          <ModalDialog>
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
              <ModalHeading>Size: {{ sizeLabel(size) }}</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <p v-if="size === 'cover'">
                This modal uses the <code>cover</code> size variant. It spans the full
                screen with margins: 16px on mobile and 40px on desktop. Maintains rounded
                corners and standard padding. Perfect for cover-style content that needs
                maximum width while preserving modal aesthetics.
              </p>
              <p v-else-if="size === 'full'">
                This modal uses the <code>full</code> size variant. It occupies the entire viewport
                without any margins, rounded corners, or shadows, creating a true fullscreen
                experience. Ideal for immersive content or full-page interactions.
              </p>
              <p v-else>
                This modal uses the <code>{{ size }}</code> size variant. On mobile devices, all
                sizes adapt to near full-width for optimal viewing. On desktop, each size
                provides a different maximum width to suit various content needs.
              </p>
            </ModalBody>
            <ModalFooter v-slot="{ close }">
              <Button variant="secondary" @click="close">Cancel</Button>
              <Button @click="close">Confirm</Button>
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
  type ModalSize,
} from '@misaki-mei-q/heroui-vue'

const sizes: ModalSize[] = ['xs', 'sm', 'md', 'lg', 'cover', 'full']

const sizeLabel = (size: ModalSize) => size.charAt(0).toUpperCase() + size.slice(1)
</script>
