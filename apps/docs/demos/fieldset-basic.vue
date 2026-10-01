<template>
  <Fieldset class="max-w-xl">
    <FieldsetLegend>Account</FieldsetLegend>
    <FieldGroup>
      <InputGroup>
        <InputGroupPrefix>Email</InputGroupPrefix>
        <InputGroupInput placeholder="you@example.com" />
      </InputGroup>
      <InputGroup>
        <InputGroupPrefix>Team</InputGroupPrefix>
        <InputGroupInput placeholder="Design systems" />
      </InputGroup>
    </FieldGroup>
    <FieldsetActions>
      <Button variant="ghost">Cancel</Button>
      <Button variant="primary">Save</Button>
    </FieldsetActions>
  </Fieldset>
</template>

<script setup>
import {
  Button,
  FieldGroup,
  Fieldset,
  FieldsetActions,
  FieldsetLegend,
  InputGroup,
  InputGroupInput,
  InputGroupPrefix,
} from '@misaki-mei/heroui-vue'
</script>
