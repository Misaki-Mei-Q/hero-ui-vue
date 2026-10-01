<template>
  <Checkbox id="render-props-terms">
    <template #default="{ isSelected }">
      <Label for="render-props-terms">{{ isSelected ? 'Terms accepted' : 'Accept terms' }}</Label>
      <Description>
        {{ isSelected ? 'Thank you for accepting' : 'Please read and accept the terms' }}
      </Description>
    </template>
  </Checkbox>
</template>

<script setup>
import { Checkbox, Description, Label } from '@misaki-mei/heroui-vue'
</script>
