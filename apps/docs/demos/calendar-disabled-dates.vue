<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { Calendar } from '@misaki-mei/heroui-vue'

const today = new CalendarDate(2025, 0, 15)
</script>

<template>
  <ClientOnly>
    <Calendar
      :model-value="today"
      :is-date-disabled="(date) => date.day < 8"
      weekday-format="short"
      :fixed-weeks="true"
    />
  </ClientOnly>
</template>