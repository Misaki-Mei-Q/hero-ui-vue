<template>
  <form class="demo-input-otp-form" @submit.prevent="handleSubmit">
    <Label>Verify account</Label>
    <InputOTP
      v-model="value"
      :max-length="6"
      @complete="isComplete = true"
      @change="isComplete = false"
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
    <Button class="demo-input-otp-submit" :is-disabled="!isComplete" :is-pending="isSubmitting" type="submit" variant="primary">
      <Spinner v-if="isSubmitting" color="current" size="sm" />
      {{ isSubmitting ? 'Verifying...' : 'Verify Code' }}
    </Button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label, Spinner } from '@misaki-mei/heroui-vue'

const value = ref('')
const isComplete = ref(false)
const isSubmitting = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  window.setTimeout(() => {
    value.value = ''
    isComplete.value = false
    isSubmitting.value = false
  }, 1200)
}
</script>

<style lang="less">
.demo-input-otp-form {
  display: flex;
  width: 280px;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-input-otp-submit {
  margin-top: 0.5rem;
  width: 100%;
}
</style>
