<template>
  <div class="demo-modal-scroll">
    <RadioGroup v-model="scroll" class="demo-modal-scroll-options" orientation="horizontal">
      <Radio value="inside">
        <Label>Inside</Label>
      </Radio>
      <Radio value="outside">
        <Label>Outside</Label>
      </Radio>
    </RadioGroup>

    <Modal>
      <Button variant="secondary">
        Open Modal ({{ scrollLabel }})
      </Button>
      <ModalBackdrop>
        <ModalContainer :scroll="scroll">
          <ModalDialog class="demo-modal-dialog">
            <ModalCloseTrigger />
            <ModalHeader>
              <ModalHeading>Scroll: {{ scrollLabel }}</ModalHeading>
              <p class="demo-modal-scroll-copy">
                Compare scroll behaviors - inside keeps content scrollable within the modal,
                outside allows page scrolling
              </p>
            </ModalHeader>
            <ModalBody>
              <p v-for="index in 30" :key="index" class="demo-modal-scroll-paragraph">
                Paragraph {{ index }}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam.
              </p>
            </ModalBody>
            <ModalFooter v-slot="{ close }">
              <Button variant="secondary" @click="close">Cancel</Button>
              <Button @click="close">Confirm</Button>
            </ModalFooter>
            <ModalCloseTrigger />
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Button,
  Label,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseTrigger,
  ModalContainer,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  Radio,
  RadioGroup,
  type ModalScroll,
} from '@misaki-mei-q/heroui-vue'

const scroll = ref<ModalScroll>('inside')
const scrollLabel = computed(() => scroll.value.charAt(0).toUpperCase() + scroll.value.slice(1))
</script>

<style lang="less">
.demo-modal-scroll {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-modal-scroll-options {
  flex-direction: row;
}

.demo-modal-scroll-copy {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--muted);
}

.demo-modal-scroll-paragraph {
  margin: 0 0 0.75rem;
}

.demo-modal-dialog {
  max-width: 22.5rem;
}
</style>
