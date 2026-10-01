<template>
  <Surface class="demo-radio-surface">
    <RadioGroup class="demo-radio-standard" default-value="premium" name="plan-on-surface" variant="secondary">
      <Label>Plan selection</Label>
      <Description>Choose the plan that suits you best</Description>
      <Radio value="basic">
        <Label>Basic Plan</Label>
        <Description>Includes 100 messages per month</Description>
      </Radio>
      <Radio value="premium">
        <Label>Premium Plan</Label>
        <Description>Includes 200 messages per month</Description>
      </Radio>
      <Radio value="business">
        <Label>Business Plan</Label>
        <Description>Unlimited messages</Description>
      </Radio>
    </RadioGroup>
  </Surface>
</template>

<script setup>
import { Description, Label, Radio, RadioGroup, Surface } from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-radio-surface {
  width: 100%;
  max-width: 28rem;
  padding: 1.5rem;
  border: 1px solid color-mix(in oklch, var(--vp-c-divider), transparent 20%);
  border-radius: 1.5rem;
  background: var(--color-surface);
  box-shadow:
    0 1px 2px oklch(0% 0 0 / 5%),
    0 16px 40px oklch(36% 0.05 260 / 8%);
}

.demo-radio-standard {
  width: 24rem;
  max-width: 100%;
}
</style>
