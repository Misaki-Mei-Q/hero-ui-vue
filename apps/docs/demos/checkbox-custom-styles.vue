<template>
  <Checkbox
    id="custom"
    control-class="demo-checkbox-custom-control"
    indicator-class="demo-checkbox-custom-indicator"
  >
    <Label for="custom">Custom styled checkbox</Label>
  </Checkbox>
</template>

<script setup>
import { Checkbox, Label } from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-checkbox-custom-control {
  border: 2px solid rgb(168 85 247);
}

.checkbox[data-selected="true"] .demo-checkbox-custom-control {
  background: rgb(168 85 247);
}

.demo-checkbox-custom-control::before {
  background: rgb(168 85 247);
}

.demo-checkbox-custom-indicator {
  color: white;
}
</style>
