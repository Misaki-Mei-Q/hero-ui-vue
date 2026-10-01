<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { DatePicker, Label, Description } from '@misaki-mei/heroui-vue'

const value = new CalendarDate(2025, 0, 15)
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label>Birthday</Label>
    <DatePicker :model-value="value" label-text="Pick a date" />
    <Description>We use this for age verification.</Description>
  </div>
</template>