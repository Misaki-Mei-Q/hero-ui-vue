<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <p class="text-sm font-medium text-muted">Primary variant</p>
      <Checkbox id="primary" name="primary" variant="primary">
        <Label for="primary">Primary checkbox</Label>
        <Description>Standard styling with default background</Description>
      </Checkbox>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-sm font-medium text-muted">Secondary variant</p>
      <Checkbox id="secondary" name="secondary" variant="secondary">
        <Label for="secondary">Secondary checkbox</Label>
        <Description>Lower emphasis variant for use in surfaces</Description>
      </Checkbox>
    </div>
  </div>
</template>

<script setup>
import { Checkbox, Description, Label } from '@misaki-mei-q/heroui-vue'
</script>
