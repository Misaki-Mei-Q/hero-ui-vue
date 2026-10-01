<template>
  <Checkbox id="agreement" is-invalid name="agreement">
    <Label for="agreement">I agree to the terms</Label>
    <Description>You must accept the terms to continue</Description>
  </Checkbox>
</template>

<script setup>
import { Checkbox, Description, Label } from '@misaki-mei-q/heroui-vue'
</script>
