<template>
  <RadioGroup class="demo-radio-standard" is-disabled default-value="pro" name="plan-disabled">
    <Label>Subscription plan</Label>
    <Description>Plan changes are temporarily paused while we roll out updates.</Description>
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
</template>

<script setup>
import { Description, Label, Radio, RadioGroup } from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-radio-standard {
  width: 24rem;
  max-width: 100%;
}
</style>
