<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <p class="text-sm font-medium text-muted">Primary variant</p>
        <RadioGroup class="demo-radio-standard" default-value="option1" name="primary-plan" variant="primary">
        <Radio value="option1">
          <Label>Option 1</Label>
          <Description>Standard styling with default background</Description>
        </Radio>
        <Radio value="option2">
          <Label>Option 2</Label>
          <Description>Another option with primary styling</Description>
        </Radio>
      </RadioGroup>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-sm font-medium text-muted">Secondary variant</p>
        <RadioGroup class="demo-radio-standard" default-value="option1" name="secondary-plan" variant="secondary">
        <Radio value="option1">
          <Label>Option 1</Label>
          <Description>Lower emphasis variant for use in surfaces</Description>
        </Radio>
        <Radio value="option2">
          <Label>Option 2</Label>
          <Description>Another option with secondary styling</Description>
        </Radio>
      </RadioGroup>
    </div>
  </div>
</template>

<script setup>
import { Description, Label, Radio, RadioGroup } from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-radio-standard {
  width: 24rem;
  max-width: 100%;
}
</style>
