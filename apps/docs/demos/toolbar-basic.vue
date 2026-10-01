<template>
  <Toolbar>
    <ToggleButton default-selected>Preview</ToggleButton>
    <ToggleButton>Code</ToggleButton>
    <Separator orientation="vertical" />
    <Button variant="ghost">Copy</Button>
    <Button variant="primary">Publish</Button>
  </Toolbar>
</template>

<script setup>
import { Button, Separator, ToggleButton, Toolbar } from '@misaki-mei/heroui-vue'
</script>
