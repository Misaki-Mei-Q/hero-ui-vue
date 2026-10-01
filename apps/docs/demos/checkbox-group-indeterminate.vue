<template>
  <div class="demo-checkbox-group-indeterminate">
    <Checkbox
      value="all"
      :is-indeterminate="selectedValues.length > 0 && selectedValues.length < allOptions.length"
      :is-selected="selectedValues.length === allOptions.length"
      @change="handleSelectAll"
    >
      <Label>Select all</Label>
    </Checkbox>

    <CheckboxGroup v-model="selectedValues" class="demo-checkbox-group-nested">
      <Checkbox value="coding">
        <Label>Coding</Label>
      </Checkbox>
      <Checkbox value="design">
        <Label>Design</Label>
      </Checkbox>
      <Checkbox value="writing">
        <Label>Writing</Label>
      </Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup, Label } from '@misaki-mei/heroui-vue'

const allOptions = ['coding', 'design', 'writing']
const selectedValues = ref<string[]>(['coding'])

const handleSelectAll = (isSelected: boolean) => {
  selectedValues.value = isSelected ? [...allOptions] : []
}
</script>

<style lang="less">
.demo-checkbox-group-indeterminate {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.demo-checkbox-group-nested {
  margin-left: 1.5rem;
}
</style>
