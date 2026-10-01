import { Checkbox, FieldError } from '@heroui/react'
import { useState } from 'react'

export function CheckboxCompare() {
  const [selected, setSelected] = useState(false)
  const [selected2, setSelected2] = useState(true)

  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">States</h3>
        <div className="compare-grid" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Checkbox isSelected={selected} onChange={setSelected} name="basic">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Unchecked
            </Checkbox.Content>
          </Checkbox>
          <Checkbox isSelected={selected2} onChange={setSelected2} name="checked">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Checked
            </Checkbox.Content>
          </Checkbox>
          <Checkbox isIndeterminate name="indeterminate">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Indeterminate
            </Checkbox.Content>
          </Checkbox>
          <Checkbox isDisabled name="disabled">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Disabled
            </Checkbox.Content>
          </Checkbox>
          <Checkbox isDisabled isSelected name="disabled-checked">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Disabled + checked
            </Checkbox.Content>
          </Checkbox>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Invalid</h3>
        <div className="compare-grid" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Checkbox isInvalid isRequired name="agreement">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              I agree to the terms
            </Checkbox.Content>
            <FieldError>You must accept the terms to continue</FieldError>
          </Checkbox>
        </div>
      </section>
    </div>
  )
}