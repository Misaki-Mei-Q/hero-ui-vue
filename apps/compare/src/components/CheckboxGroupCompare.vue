<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup, Description, FieldError, Label } from '@misaki-mei/heroui-vue'

const selected = ref<string[]>(['coding'])
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Basic with description</h3>
      <div style="display: flex; flex-direction: column; gap: 0.5rem">
        <CheckboxGroup v-model="selected" name="interests">
          <Label>Select your interests</Label>
          <Description>Choose all that apply</Description>
          <Checkbox value="coding">Coding</Checkbox>
          <Checkbox value="design">Design</Checkbox>
          <Checkbox value="writing">Writing</Checkbox>
        </CheckboxGroup>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Required with validation</h3>
      <div style="display: flex; flex-direction: column; gap: 0.5rem">
        <CheckboxGroup is-required name="preferences">
          <Label>Notifications</Label>
          <Description>Pick how you want to be notified</Description>
          <Checkbox value="email">Email</Checkbox>
          <Checkbox value="sms">SMS</Checkbox>
          <Checkbox value="push">Push</Checkbox>
          <FieldError>Please select at least one notification method.</FieldError>
        </CheckboxGroup>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Disabled</h3>
      <CheckboxGroup is-disabled :default-value="['a']" name="locked">
        <Label>Locked options</Label>
        <Checkbox value="a">Option A</Checkbox>
        <Checkbox value="b">Option B</Checkbox>
      </CheckboxGroup>
    </section>
  </div>
</template>