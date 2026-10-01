<template>
  <Checkbox
    id="select-all"
    :checked="checked"
    :is-indeterminate="isIndeterminate"
    @change="handleChange"
  >
    <Label for="select-all">Select all</Label>
    <Description>Shows indeterminate state with a dash icon</Description>
  </Checkbox>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox, Description, Label } from '@misaki-mei-q/heroui-vue'

const checked = ref(false)
const isIndeterminate = ref(true)

const handleChange = (next) => {
  checked.value = next
  isIndeterminate.value = false
}
</script>
