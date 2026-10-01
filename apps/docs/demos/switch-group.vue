<template>
  <SwitchGroup>
    <Switch name="notifications">
      <Label class="text-sm">Allow Notifications</Label>
    </Switch>
    <Switch name="marketing">
      <Label class="text-sm">Marketing emails</Label>
    </Switch>
    <Switch name="social">
      <Label class="text-sm">Social media updates</Label>
    </Switch>
  </SwitchGroup>
</template>

<script setup>
import { Label, Switch, SwitchGroup } from '@misaki-mei/heroui-vue'
</script>
