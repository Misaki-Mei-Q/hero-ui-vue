<template>
  <RadioGroup class="demo-radio-standard" default-value="premium" name="plan-custom-indicator">
    <Label>Plan selection</Label>
    <Description>Choose the plan that suits you best</Description>
    <Radio v-for="plan in plans" :key="plan.value" :value="plan.value">
      <template #indicator="{ isSelected }">
        <svg
          v-if="isSelected"
          class="size-3 text-inherit"
          style="color: var(--color-accent-foreground);"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <path d="m20 6-11 11-5-5" />
        </svg>
      </template>
      <Label>{{ plan.label }}</Label>
      <Description>{{ plan.description }}</Description>
    </Radio>
  </RadioGroup>
</template>

<script setup>
import { Description, Label, Radio, RadioGroup } from '@misaki-mei/heroui-vue'

const plans = [
  { value: 'basic', label: 'Basic Plan', description: 'Includes 100 messages per month' },
  { value: 'premium', label: 'Premium Plan', description: 'Includes 200 messages per month' },
  { value: 'business', label: 'Business Plan', description: 'Unlimited messages' },
]
</script>

<style lang="less">
.demo-radio-standard {
  width: 24rem;
  max-width: 100%;
}
</style>
