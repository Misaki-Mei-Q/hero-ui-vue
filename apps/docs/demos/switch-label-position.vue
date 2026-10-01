<template>
  <div class="flex flex-col gap-4">
    <Switch>
      <Label class="text-sm">Label after</Label>
    </Switch>
    <Switch class="flex-row-reverse">
      <template #default="{ checked }">
        <Label class="text-sm">Label before {{ checked ? 'on' : 'off' }}</Label>
      </template>
    </Switch>
  </div>
</template>

<script setup>
import { Label, Switch } from '@misaki-mei-q/heroui-vue'
</script>
