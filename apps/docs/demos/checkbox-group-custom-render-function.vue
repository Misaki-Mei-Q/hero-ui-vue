<template>
  <CheckboxGroup
    v-slot="{ value }"
    v-model="selectedInterests"
    class="demo-checkbox-group-render"
    name="interests"
  >
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

    <Description>Rendered with scoped slot value: {{ value.join(', ') || 'None' }}</Description>
  </CheckboxGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup, Description, Label } from '@misaki-mei-q/heroui-vue'

const selectedInterests = ref<string[]>(['coding'])
</script>

<style lang="less">
.demo-checkbox-group-render {
  min-width: 20rem;
}
</style>
