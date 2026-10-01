<template>
  <SwitchGroup class="overflow-x-auto" orientation="horizontal">
    <Switch name="notifications">
      <Label class="text-sm">Notifications</Label>
    </Switch>
    <Switch name="marketing">
      <Label class="text-sm">Marketing</Label>
    </Switch>
    <Switch name="social">
      <Label class="text-sm">Social</Label>
    </Switch>
  </SwitchGroup>
</template>

<script setup>
import { Label, Switch, SwitchGroup } from '@misaki-mei-q/heroui-vue'
</script>
