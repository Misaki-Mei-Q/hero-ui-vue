<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { RangeCalendar, Label, Description } from '@misaki-mei/heroui-vue'

const range = {
  start: new CalendarDate(2025, 0, 15),
  end: new CalendarDate(2025, 0, 22),
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label>Trip dates</Label>
    <RangeCalendar :model-value="range" />
    <Description>Select your check-in and check-out dates.</Description>
  </div>
</template>