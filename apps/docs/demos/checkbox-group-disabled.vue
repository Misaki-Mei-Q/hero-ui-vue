<template>
  <CheckboxGroup is-disabled name="disabled-features">
    <Label>Features</Label>
    <Description>Feature selection is temporarily disabled</Description>

    <Checkbox value="feature1">
      <Label>Feature 1</Label>
      <Description>This feature is coming soon</Description>
    </Checkbox>

    <Checkbox value="feature2">
      <Label>Feature 2</Label>
      <Description>This feature is coming soon</Description>
    </Checkbox>
  </CheckboxGroup>
</template>

<script setup lang="ts">
import { Checkbox, CheckboxGroup, Description, Label } from '@misaki-mei/heroui-vue'
</script>
