import { Checkbox, CheckboxGroup, Description, FieldError, Label } from '@heroui/react'
import { useState } from 'react'

export function CheckboxGroupCompare() {
  const [selected, setSelected] = useState<string[]>(['coding'])

  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Basic with description</h3>
        <CheckboxGroup className="w-full max-w-64" name="interests" value={selected} onChange={setSelected}>
          <Label>Select your interests</Label>
          <Description>Choose all that apply</Description>
          <Checkbox value="coding">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Coding
            </Checkbox.Content>
            <Description>Love building software</Description>
          </Checkbox>
          <Checkbox value="design">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Design
            </Checkbox.Content>
            <Description>Visual & interaction design</Description>
          </Checkbox>
          <Checkbox value="writing">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Writing
            </Checkbox.Content>
            <Description>Technical &amp; creative writing</Description>
          </Checkbox>
        </CheckboxGroup>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Required with validation</h3>
        <CheckboxGroup isRequired className="w-full max-w-64" name="preferences">
          <Label>Notifications</Label>
          <Description>Pick how you want to be notified</Description>
          <Checkbox value="email">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Email
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="sms">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              SMS
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="push">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Push
            </Checkbox.Content>
          </Checkbox>
          <FieldError>Please select at least one notification method.</FieldError>
        </CheckboxGroup>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Disabled</h3>
        <CheckboxGroup isDisabled className="w-full max-w-64" name="locked" defaultValue={['a']}>
          <Label>Locked options</Label>
          <Checkbox value="a">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Option A
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="b">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Option B
            </Checkbox.Content>
          </Checkbox>
        </CheckboxGroup>
      </section>
    </div>
  )
}