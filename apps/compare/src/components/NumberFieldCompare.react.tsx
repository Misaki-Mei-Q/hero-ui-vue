import { Description, NumberField } from '@heroui/react'

export function NumberFieldCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Basic with min/max</h3>
        <NumberField className="w-full max-w-[200px]" defaultValue={1024} minValue={0} name="width">
          <NumberField.Label>Width</NumberField.Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input />
            <NumberField.IncrementButton />
          </NumberField.Group>
        </NumberField>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Step + percent format</h3>
        <NumberField
          className="w-full max-w-[200px]"
          defaultValue={0.5}
          formatOptions={{ style: 'percent' }}
          maxValue={1}
          minValue={0}
          step={0.1}
          name="percentage"
        >
          <NumberField.Label>Percentage</NumberField.Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input />
            <NumberField.IncrementButton />
          </NumberField.Group>
          <Description>Value must be between 0 and 100</Description>
        </NumberField>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Disabled</h3>
        <NumberField className="w-full max-w-[200px]" isDisabled defaultValue={10} name="locked">
          <NumberField.Label>Quantity (locked)</NumberField.Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input />
            <NumberField.IncrementButton />
          </NumberField.Group>
        </NumberField>
      </section>
    </div>
  )
}