<template>
  <div class="demo-modal-controlled">
    <section class="demo-modal-section">
      <h3 class="demo-modal-section-title">With ref()</h3>
      <p class="demo-modal-section-copy">
        Control the modal using Vue's <code>ref</code> for simple external state management.
      </p>
      <div class="demo-modal-state-card">
        <p class="demo-modal-state">
          Status:
          <span>{{ isOpen ? 'open' : 'closed' }}</span>
        </p>
        <div class="flex gap-2">
          <Button size="sm" variant="secondary" @click="isOpen = true">Open Modal</Button>
          <Button size="sm" variant="tertiary" @click="isOpen = !isOpen">Toggle</Button>
        </div>
      </div>

      <ModalBackdrop v-model:is-open="isOpen">
        <ModalContainer>
          <ModalDialog class="demo-modal-dialog">
            <ModalCloseTrigger />
            <ModalHeader>
              <ModalIcon class="bg-accent-soft text-accent-soft-foreground">
                <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </ModalIcon>
              <ModalHeading>Controlled with ref()</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <p>
                This modal is controlled by a Vue <code>ref</code>. Pass <code>isOpen</code> with
                <code>update:isOpen</code> or use <code>v-model:is-open</code>.
              </p>
            </ModalBody>
            <ModalFooter v-slot="{ close }">
              <Button variant="secondary" @click="close">Cancel</Button>
              <Button @click="close">Confirm</Button>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </section>

    <section class="demo-modal-section">
      <h3 class="demo-modal-section-title">With small state helpers</h3>
      <p class="demo-modal-section-copy">
        A lightweight state object gives the same convenience methods as an overlay-state helper.
      </p>
      <div class="demo-modal-state-card">
        <p class="demo-modal-state">
          Status:
          <span>{{ overlay.isOpen.value ? 'open' : 'closed' }}</span>
        </p>
        <div class="flex gap-2">
          <Button size="sm" variant="secondary" @click="overlay.open">Open Modal</Button>
          <Button size="sm" variant="tertiary" @click="overlay.toggle">Toggle</Button>
        </div>
      </div>

      <ModalBackdrop :is-open="overlay.isOpen.value" @open-change="overlay.setOpen">
        <ModalContainer>
          <ModalDialog class="demo-modal-dialog">
            <ModalCloseTrigger />
            <ModalHeader>
              <ModalIcon class="bg-success-soft text-success-soft-foreground">
                <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </ModalIcon>
              <ModalHeading>Controlled with helpers</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <p>
                The helper object exposes <code>open()</code>, <code>close()</code>,
                <code>toggle()</code>, and <code>setOpen()</code> methods.
              </p>
            </ModalBody>
            <ModalFooter v-slot="{ close }">
              <Button variant="secondary" @click="close">Cancel</Button>
              <Button @click="close">Confirm</Button>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Button,
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

const isOpen = ref(false)
const helperOpen = ref(false)

const overlay = {
  close: () => {
    helperOpen.value = false
  },
  isOpen: helperOpen,
  open: () => {
    helperOpen.value = true
  },
  setOpen: (value: boolean) => {
    helperOpen.value = value
  },
  toggle: () => {
    helperOpen.value = !helperOpen.value
  },
}
</script>

<style lang="less">
.demo-modal-controlled {
  display: flex;
  max-width: 28rem;
  flex-direction: column;
  gap: 2rem;
}

.demo-modal-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.demo-modal-controlled .demo-modal-section-title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
}

.demo-modal-section-copy {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.625;
  color: var(--muted);
}

.demo-modal-state-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  border-radius: 1rem;
  background: var(--surface);
  padding: 1rem;
  box-shadow: var(--shadow-sm);
}

.demo-modal-state {
  margin: 0;
  font-size: 0.75rem;
  color: var(--muted);

  span {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-weight: 600;
    color: var(--foreground);
  }
}

.demo-modal-dialog {
  max-width: 22.5rem;
}
</style>
