<template>
  <div class="flex flex-col gap-4">
    <RadioGroup class="demo-radio-standard" default-value="pro" name="plan-uncontrolled" @change="selection = $event">
      <Label>Subscription plan</Label>
      <Radio value="starter">
        <Label>Starter</Label>
        <Description>For side projects and small teams</Description>
      </Radio>
      <Radio value="pro">
        <Label>Pro</Label>
        <Description>Advanced reporting and analytics</Description>
      </Radio>
      <Radio value="teams">
        <Label>Teams</Label>
        <Description>Share access with up to 10 teammates</Description>
      </Radio>
    </RadioGroup>
    <p class="text-sm text-muted">
      Last chosen plan: <span class="font-medium">{{ selection }}</span>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Description, Label, Radio, RadioGroup } from '@misaki-mei/heroui-vue'

const selection = ref('pro')
</script>

<style lang="less">
.demo-radio-standard {
  width: 24rem;
  max-width: 100%;
}
</style>
