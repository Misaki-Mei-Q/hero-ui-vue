<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { Calendar, Label, Description } from '@misaki-mei/heroui-vue'

const value = new CalendarDate(2025, 0, 15)
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col gap-2">
      <Label>Date of birth</Label>
      <Calendar :model-value="value" />
      <Description>Pick your date of birth.</Description>
    </div>
  </ClientOnly>
</template>