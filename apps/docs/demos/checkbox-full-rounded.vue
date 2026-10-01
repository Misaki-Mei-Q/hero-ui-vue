<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-3">
      <Label class="text-muted">Rounded checkboxes</Label>
      <Checkbox control-class="size-3 rounded-full" name="small-rounded">
        <Label>Small size</Label>
      </Checkbox>
      <Checkbox control-class="size-4 rounded-full" name="default-rounded">
        <Label>Default size</Label>
      </Checkbox>
      <Checkbox control-class="size-5 rounded-full" name="large-rounded">
        <Label>Large size</Label>
      </Checkbox>
      <Checkbox control-class="size-6 rounded-full" name="xl-rounded">
        <Label>Extra large size</Label>
      </Checkbox>
    </div>
  </div>
</template>

<script setup>
import { Checkbox, Label } from '@misaki-mei-q/heroui-vue'
</script>
