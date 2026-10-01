<template>
  <div class="flex flex-col gap-4">
    <Label>Subscription plan</Label>
    <RadioGroup class="demo-radio-standard" default-value="pro" name="plan-orientation" orientation="horizontal">
      <Radio value="starter">
        <Label>Starter</Label>
        <Description>For side projects</Description>
      </Radio>
      <Radio value="pro">
        <Label>Pro</Label>
        <Description>Advanced reporting</Description>
      </Radio>
      <Radio value="teams">
        <Label>Teams</Label>
        <Description>Up to 10 teammates</Description>
      </Radio>
    </RadioGroup>
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
