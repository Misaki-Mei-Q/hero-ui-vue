<template>
  <Surface class="demo-checkbox-group-surface">
    <CheckboxGroup v-model="selectedInterests" name="interests" variant="secondary">
      <Label>Select your interests</Label>
      <Description>Choose all that apply</Description>

      <Checkbox value="coding">
        <Label>Coding</Label>
        <Description>Love building software</Description>
      </Checkbox>

      <Checkbox value="design">
        <Label>Design</Label>
        <Description>Enjoy creating beautiful interfaces</Description>
      </Checkbox>

      <Checkbox value="writing">
        <Label>Writing</Label>
        <Description>Passionate about content creation</Description>
      </Checkbox>
    </CheckboxGroup>
  </Surface>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup, Description, Label, Surface } from '@misaki-mei/heroui-vue'

const selectedInterests = ref<string[]>(['coding'])
</script>

<style lang="less">
.demo-checkbox-group-surface {
  width: min(100%, 28rem);
  padding: 1.5rem;
  border-radius: 1.5rem;
  text-align: left;
}
</style>
