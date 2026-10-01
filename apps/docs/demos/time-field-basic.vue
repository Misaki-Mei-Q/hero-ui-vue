<script setup lang="ts">
import { Time } from '@internationalized/date'
import { TimeField, Label } from '@misaki-mei/heroui-vue'

const value = new Time(9, 0)
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label>Start time</Label>
    <TimeField :model-value="value" :hour-cycle="24" />
  </div>
</template>