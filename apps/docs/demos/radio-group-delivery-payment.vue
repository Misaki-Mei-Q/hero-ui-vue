<template>
  <div class="demo-radio-checkout-shell">
    <section class="demo-radio-section">
      <RadioGroup default-value="express" name="delivery" variant="secondary">
        <Label>Delivery method</Label>
        <div class="demo-radio-card-grid">
          <Radio
            v-for="option in deliveryOptions"
            :key="option.value"
            class="demo-radio-card"
            control-class="demo-radio-card__control"
            content-class="demo-radio-card__content"
            :value="option.value"
          >
            <div class="flex flex-col gap-1">
              <Label>{{ option.title }}</Label>
              <Description>{{ option.description }}</Description>
            </div>
            <span class="text-sm font-semibold">{{ option.price }}</span>
          </Radio>
        </div>
      </RadioGroup>
    </section>

    <section class="demo-radio-section">
      <RadioGroup default-value="visa" name="payment" variant="secondary">
        <Label>Payment method</Label>
        <div class="demo-radio-card-grid demo-radio-card-grid--payment">
          <Radio
            v-for="option in paymentOptions"
            :key="option.value"
            class="demo-radio-card"
            control-class="demo-radio-card__control"
            content-class="demo-radio-card__content demo-radio-card__content--row"
            :value="option.value"
          >
            <span class="demo-payment-icon">{{ option.icon }}</span>
            <div class="flex flex-col gap-1">
              <Label>{{ option.title }}</Label>
              <Description>{{ option.description }}</Description>
            </div>
          </Radio>
        </div>
      </RadioGroup>
    </section>
  </div>
</template>

<script setup>
import { Description, Label, Radio, RadioGroup } from '@misaki-mei/heroui-vue'

const deliveryOptions = [
  { value: 'standard', title: 'Standard', description: '4-10 business days', price: '$5.00' },
  { value: 'express', title: 'Express', description: '2-5 business days', price: '$16.00' },
  { value: 'super-fast', title: 'Super Fast', description: '1 business day', price: '$25.00' },
]

const paymentOptions = [
  { value: 'mastercard', icon: 'MC', title: '**** 8304', description: 'Exp. on 01/2026' },
  { value: 'visa', icon: 'VISA', title: '**** 0123', description: 'Exp. on 01/2026' },
  { value: 'paypal', icon: 'PP', title: 'PayPal', description: 'Pay with PayPal' },
]
</script>

<style lang="less">
.demo-radio-checkout-shell {
  display: flex;
  width: 100%;
  max-width: 36rem;
  flex-direction: column;
  gap: 2.5rem;
  align-items: stretch;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: var(--color-background);
  text-align: left;
}

.demo-radio-section {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
}

.demo-radio-card-grid {
  display: grid;
  gap: 1rem;
  width: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.demo-radio-card-grid--payment {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.demo-radio-card {
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  min-width: 0;
  width: 100%;
  padding: 1rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  background: var(--color-surface);
  text-align: left;
  box-shadow: 0 1px 2px oklch(0% 0 0 / 4%);
  transition:
    border-color 160ms var(--ease-out),
    background-color 160ms var(--ease-out),
    box-shadow 160ms var(--ease-out);
}

.demo-radio-card[data-selected="true"] {
  border-color: var(--color-accent);
  background: color-mix(in oklch, var(--color-accent), transparent 90%);
}

.demo-radio-card__control {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  width: 1.25rem;
  height: 1.25rem;
}

.demo-radio-card__content {
  width: 100%;
  gap: 1.5rem;
  padding-right: 1.5rem;
  text-align: left;
}

.demo-radio-card__content--row {
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
}

.demo-payment-icon {
  display: inline-flex;
  min-width: 2.25rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  background: var(--color-default);
  color: var(--color-default-foreground);
  font-size: 0.7rem;
  font-weight: 700;
}

@media (max-width: 720px) {
  .demo-radio-card-grid,
  .demo-radio-card-grid--payment {
    grid-template-columns: 1fr;
  }
}
</style>
