<script setup lang="ts">
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  FieldsetActions,
  FieldsetLegend,
  Label as FormLabel,
  TextField,
  Textarea,
} from '@misaki-mei/heroui-vue'
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Basic</h3>
      <Fieldset style="width: 100%; max-width: 24rem">
        <FieldsetLegend>Profile Settings</FieldsetLegend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField name="name" label="Name" placeholder="John Doe" />
          <TextField name="email" type="email" label="Email" placeholder="john@example.com" />
          <div style="display: flex; flex-direction: column; gap: 0.25rem">
            <FormLabel>Bio</FormLabel>
            <Textarea placeholder="Tell us about yourself..." :rows="3" />
            <Description>Minimum 10 characters</Description>
            <FieldError />
          </div>
        </FieldGroup>
        <FieldsetActions>
          <Button type="submit" variant="primary">Save changes</Button>
          <Button type="reset" variant="secondary">Cancel</Button>
        </FieldsetActions>
      </Fieldset>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Disabled</h3>
      <Fieldset disabled style="width: 100%; max-width: 24rem">
        <FieldsetLegend>Locked profile</FieldsetLegend>
        <FieldGroup>
          <TextField name="locked-name" label="Name" model-value="John Doe" />
          <TextField name="locked-email" type="email" label="Email" model-value="john@example.com" />
        </FieldGroup>
      </Fieldset>
    </section>
  </div>
</template>