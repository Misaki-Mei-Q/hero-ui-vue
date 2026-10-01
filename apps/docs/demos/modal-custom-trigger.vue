<template>
  <Modal>
    <ModalTrigger class="demo-modal-card-trigger">
      <div class="demo-modal-card-icon">
        <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
      <div class="demo-modal-card-copy">
        <p>Settings</p>
        <p>Manage your preferences</p>
      </div>
    </ModalTrigger>
    <ModalBackdrop>
      <ModalContainer>
        <ModalDialog class="demo-modal-dialog">
          <ModalCloseTrigger />
          <ModalHeader>
            <ModalIcon class="bg-accent-soft text-accent-soft-foreground">
              <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </ModalIcon>
            <ModalHeading>Settings</ModalHeading>
          </ModalHeader>
          <ModalBody>
            <p>
              Use <code>ModalTrigger</code> to create custom trigger elements beyond standard
              buttons. This example shows a card-style trigger with icon and descriptive text.
            </p>
          </ModalBody>
          <ModalFooter v-slot="{ close }">
            <Button variant="secondary" @click="close">Cancel</Button>
            <Button @click="close">Save</Button>
          </ModalFooter>
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
  ModalTrigger,
} from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-modal-card-trigger {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 1rem;
  background: var(--surface);
  padding: 1rem;
  box-shadow: var(--shadow-xs);
  user-select: none;

  &:hover {
    background: var(--surface-secondary);
  }
}

.demo-modal-card-icon {
  display: flex;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  background: var(--accent-soft);
  color: var(--accent-soft-foreground);
}

.demo-modal-card-copy {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.125rem;

  p {
    margin: 0;
  }

  p:first-child {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--foreground);
  }

  p:last-child {
    font-size: 0.75rem;
    color: var(--muted);
  }
}

.demo-modal-dialog {
  max-width: 22.5rem;
}
</style>
