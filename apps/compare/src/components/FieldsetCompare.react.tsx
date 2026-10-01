import { Button, Description, FieldError, Input, Label, TextArea, TextField } from '@heroui/react'
import { FieldGroup, Fieldset } from '@heroui/react'

export function FieldsetCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Basic</h3>
        <Fieldset className="w-full max-w-96">
          <Fieldset.Legend>Profile Settings</Fieldset.Legend>
          <Description>Update your profile information.</Description>
          <FieldGroup>
            <TextField name="name">
              <Label>Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
            <TextField name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
            <TextField name="bio">
              <Label>Bio</Label>
              <TextArea placeholder="Tell us about yourself..." />
              <Description>Minimum 10 characters</Description>
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit" variant="primary">
              Save changes
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Disabled</h3>
        <Fieldset isDisabled className="w-full max-w-96">
          <Fieldset.Legend>Locked profile</Fieldset.Legend>
          <FieldGroup>
            <TextField name="locked-name" value="John Doe">
              <Label>Name</Label>
              <Input />
            </TextField>
            <TextField name="locked-email" value="john@example.com" type="email">
              <Label>Email</Label>
              <Input />
            </TextField>
          </FieldGroup>
        </Fieldset>
      </section>
    </div>
  )
}