<template>
  <div class="demo-input-otp-card">
    <form class="demo-input-otp-form" @submit.prevent="handleSubmit">
      <Label>Verify account</Label>
      <Description>Hint: The code is 123456</Description>
      <InputOTP
        v-model="value"
        :is-invalid="isInvalid"
        :max-length="6"
        aria-describedby="code-error"
        name="code"
        @change="isInvalid = false"
      >
        <InputOTPGroup>
          <InputOTPSlot :index="0" />
          <InputOTPSlot :index="1" />
          <InputOTPSlot :index="2" />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot :index="3" />
          <InputOTPSlot :index="4" />
          <InputOTPSlot :index="5" />
        </InputOTPGroup>
      </InputOTP>
      <span id="code-error" class="field-error" :data-visible="isInvalid ? 'true' : undefined">
        Invalid code. Please try again.
      </span>
      <Button :is-disabled="value.length !== 6" type="submit">
        Submit
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Description, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label } from '@misaki-mei-q/heroui-vue'

const value = ref('')
const isInvalid = ref(false)

const handleSubmit = () => {
  if (value.value !== '123456') {
    isInvalid.value = true
    return
  }

  isInvalid.value = false
  value.value = ''
}
</script>

<style lang="less">
.demo-input-otp-card,
.demo-input-otp-form {
  display: flex;
  width: 280px;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
