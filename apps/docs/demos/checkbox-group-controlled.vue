<template>
  <CheckboxGroup v-model="selectedSkills" class="demo-checkbox-group-controlled" name="skills">
    <Label>Your skills</Label>

    <Checkbox value="coding">
      <Label>Coding</Label>
    </Checkbox>

    <Checkbox value="design">
      <Label>Design</Label>
    </Checkbox>

    <Checkbox value="writing">
      <Label>Writing</Label>
    </Checkbox>

    <Label class="demo-checkbox-group-selected">
      Selected: {{ selectedSkills.join(', ') || 'None' }}
    </Label>
  </CheckboxGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup, Label } from '@misaki-mei/heroui-vue'

const selectedSkills = ref<string[]>(['coding', 'design'])
</script>

<style lang="less">
.demo-checkbox-group-controlled {
  min-width: 20rem;
}

.demo-checkbox-group-selected {
  margin-block: 1rem;
  color: var(--color-muted);
  font-size: 0.875rem;
}
</style>
