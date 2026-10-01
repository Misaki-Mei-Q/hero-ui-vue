<template>
  <div class="flex flex-wrap gap-4">
    <Checkbox default-selected name="heart">
      <template #indicator="{ isSelected }">
        <svg v-if="isSelected" class="size-3 text-inherit" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z" />
        </svg>
      </template>
      <Label>Heart</Label>
    </Checkbox>
    <Checkbox default-selected name="plus">
      <template #indicator="{ isSelected }">
        <svg v-if="isSelected" class="size-3 text-inherit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <path d="M6 12h12" />
          <path d="M12 18V6" />
        </svg>
      </template>
      <Label>Plus</Label>
    </Checkbox>
    <Checkbox :checked="'indeterminate'" name="indeterminate">
      <template #indicator="{ isIndeterminate }">
        <svg v-if="isIndeterminate" class="size-3 text-inherit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <line x1="21" x2="3" y1="12" y2="12" />
        </svg>
      </template>
      <Label>Indeterminate</Label>
    </Checkbox>
  </div>
</template>

<script setup>
import { Checkbox, Label } from '@misaki-mei-q/heroui-vue'
</script>
