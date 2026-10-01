<template>
  <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
    <RadioGroup v-model="plan" class="demo-radio-standard" is-required :is-invalid="submitted && !plan" name="plan-validation">
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
      <FieldError v-if="submitted && !plan">Choose a subscription before continuing.</FieldError>
    </RadioGroup>
    <Button class="w-fit" type="submit">Submit</Button>
    <p v-if="message" class="text-sm text-muted">{{ message }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Description, FieldError, Label, Radio, RadioGroup } from '@misaki-mei-q/heroui-vue'

const plan = ref('')
const submitted = ref(false)
const message = ref('')

const handleSubmit = () => {
  submitted.value = true
  message.value = plan.value ? `Your chosen plan is: ${plan.value}` : ''
}
</script>

<style lang="less">
.demo-radio-standard {
  width: 24rem;
  max-width: 100%;
}
</style>
