<script setup lang="ts">
import {
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  Button,
} from '@misaki-mei/heroui-vue'
</script>

<template>
  <Dropdown placement="bottom" align="end">
    <template #trigger>
      <Button variant="secondary">User menu</Button>
    </template>

    <DropdownItem>Account</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownSeparator />
    <DropdownItem>Help &amp; feedback</DropdownItem>
    <DropdownItem variant="danger">Sign out</DropdownItem>
  </Dropdown>
</template>