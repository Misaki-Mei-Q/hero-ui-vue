<script setup lang="ts">
import { ref } from 'vue'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@misaki-mei/heroui-vue'

const value = ref('')
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">6-digit with separator</h3>
      <InputOTP v-model="value" :max-length="6">
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
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">4-digit</h3>
      <InputOTP :max-length="4">
        <InputOTPGroup>
          <InputOTPSlot :index="0" />
          <InputOTPSlot :index="1" />
          <InputOTPSlot :index="2" />
          <InputOTPSlot :index="3" />
        </InputOTPGroup>
      </InputOTP>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Disabled</h3>
      <InputOTP is-disabled :max-length="6" model-value="123456">
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
    </section>
  </div>
</template>