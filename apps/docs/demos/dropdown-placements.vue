<script setup lang="ts">
import {
  Dropdown,
  DropdownItem,
  Button,
} from '@misaki-mei/heroui-vue'

const placements = ['top', 'right', 'bottom', 'left'] as const
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Dropdown
      v-for="p in placements"
      :key="p"
      :placement="p"
    >
      <template #trigger>
        <Button variant="secondary">{{ p }}</Button>
      </template>
      <DropdownItem>Cut</DropdownItem>
      <DropdownItem>Copy</DropdownItem>
      <DropdownItem>Paste</DropdownItem>
    </Dropdown>
  </div>
</template>