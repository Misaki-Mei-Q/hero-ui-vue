<template>
  <div class="flex w-full max-w-xl flex-col gap-4">
    <InputGroup>
      <InputGroupPrefix>https://</InputGroupPrefix>
      <InputGroupInput placeholder="heroui-vue.dev" />
      <InputGroupSuffix>.com</InputGroupSuffix>
    </InputGroup>
    <InputGroup variant="secondary">
      <InputGroupPrefix>Note</InputGroupPrefix>
      <InputGroupTextArea placeholder="Describe the change..." rows="3" />
    </InputGroup>
  </div>
</template>

<script setup>
import {
  InputGroup,
  InputGroupInput,
  InputGroupPrefix,
  InputGroupSuffix,
  InputGroupTextArea,
} from '@misaki-mei-q/heroui-vue'
</script>
