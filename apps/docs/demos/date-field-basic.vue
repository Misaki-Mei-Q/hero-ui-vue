<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { DateField, Label, Description } from '@misaki-mei/heroui-vue'

const value = new CalendarDate(2025, 0, 15)
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label>Date of birth</Label>
    <DateField :model-value="value" />
    <Description>Use arrow keys to navigate segments.</Description>
  </div>
</template>