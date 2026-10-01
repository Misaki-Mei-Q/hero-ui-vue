<template>
  <RadioGroup class="demo-radio-standard" default-value="premium" name="plan">
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
