<template>
  <Switch
    default-selected
    style="--switch-control-bg: rgb(203 213 225); --switch-control-bg-hover: rgb(148 163 184); --switch-control-bg-checked: rgb(6 182 212); --switch-control-bg-checked-hover: rgb(8 145 178);"
  >
    <template #icon="{ checked }">
      <svg v-if="checked" class="size-3 text-inherit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m20 6-11 11-5-5" />
      </svg>
      <svg v-else class="size-3 text-inherit opacity-70" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 9 9 0 1 0 21 14.5Z" />
      </svg>
    </template>
    <Label class="text-sm">Custom switch</Label>
  </Switch>
</template>

<script setup>
import { Label, Switch } from '@misaki-mei-q/heroui-vue'
</script>
