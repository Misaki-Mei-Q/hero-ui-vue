<template>
  <div class="demo-modal-close-methods">
    <section class="demo-modal-section">
      <h3 class="demo-modal-section-title">Using a close target</h3>
      <p class="demo-modal-section-copy">
        Add <code>data-modal-close="true"</code> to an element inside the dialog to close the modal
        automatically when it is clicked.
      </p>
      <Modal>
        <Button variant="secondary">Open Modal</Button>
        <ModalBackdrop>
          <ModalContainer>
            <ModalDialog class="demo-modal-dialog">
              <ModalHeader>
                <ModalIcon class="bg-accent-soft text-accent-soft-foreground">
                  <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </ModalIcon>
                <ModalHeading>Using a close target</ModalHeading>
              </ModalHeader>
              <ModalBody>
                <p>
                  Click either button below. Both have <code>data-modal-close="true"</code> and
                  will close the modal automatically.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button data-modal-close="true" variant="secondary">Cancel</Button>
                <Button data-modal-close="true">Confirm</Button>
              </ModalFooter>
            </ModalDialog>
          </ModalContainer>
        </ModalBackdrop>
      </Modal>
    </section>

    <section class="demo-modal-section">
      <h3 class="demo-modal-section-title">Using dialog slot props</h3>
      <p class="demo-modal-section-copy">
        Access the <code>close</code> method from the dialog slot props when custom logic is needed
        before closing.
      </p>
      <Modal>
        <Button variant="secondary">Open Modal</Button>
        <ModalBackdrop>
          <ModalContainer>
            <ModalDialog v-slot="{ close }" class="demo-modal-dialog">
              <ModalHeader>
                <ModalIcon class="bg-success-soft text-success-soft-foreground">
                  <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </ModalIcon>
                <ModalHeading>Using dialog slot props</ModalHeading>
              </ModalHeader>
              <ModalBody>
                <p>
                  The footer buttons call the <code>close</code> method from slot props. You can add
                  validation or other logic before calling it.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="secondary" @click="close">Cancel</Button>
                <Button @click="close">Confirm</Button>
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
  ModalContainer,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalIcon,
} from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-modal-close-methods {
  display: flex;
  max-width: 42rem;
  flex-direction: column;
  gap: 2rem;
}

.demo-modal-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-modal-close-methods .demo-modal-section-title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
}

.demo-modal-section-copy {
  margin: 0;
  font-size: 0.875rem;
  color: var(--muted);
}

.demo-modal-dialog {
  max-width: 22.5rem;
}
</style>
