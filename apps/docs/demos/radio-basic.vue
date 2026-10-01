<template>
  <RadioGroup default-value="b" name="demo">
    <Radio value="a">Option A</Radio>
    <Radio value="b">Option B</Radio>
    <Radio value="c" :disabled="true">Option C (disabled)</Radio>
  </RadioGroup>
</template>

<script setup>
import { Radio, RadioGroup } from '@misaki-mei/heroui-vue'
</script>
