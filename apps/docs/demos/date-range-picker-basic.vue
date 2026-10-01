<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { DateRangePicker, Label } from '@misaki-mei/heroui-vue'

const range = {
  start: new CalendarDate(2025, 0, 15),
  end: new CalendarDate(2025, 0, 22),
}
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col gap-2">
      <Label>Stay dates</Label>
      <DateRangePicker :model-value="range" label-text="Check-in - Check-out" />
    </div>
  </ClientOnly>
</template>