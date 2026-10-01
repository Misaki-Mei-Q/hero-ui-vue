<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { DateField, Label } from '@misaki-mei/heroui-vue'

const value = new CalendarDate(2025, 0, 15)
</script>

<template>
  <DateField
    :model-value="value"
    label="Event date"
    description="Includes day, month, and year"
    is-required
  />
</template>