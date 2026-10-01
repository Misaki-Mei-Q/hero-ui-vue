<script setup lang="ts">
import { Description, Label, Radio, RadioGroup } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Basic (vertical)</h3>
      <div style="display: flex; flex-direction: column; gap: 0.5rem">
        <RadioGroup default-value="premium" name="plan">
          <Label>Plan selection</Label>
          <Description>Choose the plan that suits you best</Description>
          <Radio value="basic">Basic Plan</Radio>
          <Radio value="premium">Premium Plan</Radio>
          <Radio value="enterprise">Enterprise</Radio>
        </RadioGroup>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Horizontal</h3>
      <RadioGroup default-value="pro" orientation="horizontal" name="plan-h">
        <Radio value="starter">Starter</Radio>
        <Radio value="pro">Pro</Radio>
        <Radio value="business">Business</Radio>
      </RadioGroup>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Disabled</h3>
      <RadioGroup is-disabled default-value="b" name="plan-d">
        <Label>Plan (locked)</Label>
        <Radio value="b">Basic</Radio>
        <Radio value="p">Premium</Radio>
      </RadioGroup>
    </section>
  </div>
</template>