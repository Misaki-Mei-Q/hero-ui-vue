import { afterEach, describe, expect, it } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import NumberField from '../NumberField.vue'
import NumberFieldDecrementButton from '../NumberFieldDecrementButton.vue'
import NumberFieldGroup from '../NumberFieldGroup.vue'
import NumberFieldIncrementButton from '../NumberFieldIncrementButton.vue'
import NumberFieldInput from '../NumberFieldInput.vue'

enableAutoUnmount(afterEach)

const basicField = {
  components: {
    NumberField,
    NumberFieldGroup,
    NumberFieldInput,
    NumberFieldIncrementButton,
    NumberFieldDecrementButton,
  },
  template: `
    <NumberField :default-value="value" :min-value="minValue" :max-value="maxValue" :step="step" v-bind="$attrs">
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
    </NumberField>
  `,
  props: {
    value: { type: Number, default: 10 },
    minValue: { type: Number, default: undefined },
    maxValue: { type: Number, default: undefined },
    step: { type: Number, default: 1 },
  },
}

function input(wrapper: ReturnType<typeof mount>) {
  return wrapper.find('[data-slot="number-field-input"]')
}

describe('NumberField', () => {
  it('renders the default value', () => {
    const wrapper = mount(basicField, { attachTo: document.body })
    expect((input(wrapper).element as HTMLInputElement).value).toBe('10')
  })

  it('increments and decrements with the step buttons', async () => {
    const wrapper = mount(basicField, { attachTo: document.body })
    await wrapper.find('[data-slot="number-field-increment-button"]').trigger('click')
    expect((input(wrapper).element as HTMLInputElement).value).toBe('11')
    await wrapper.find('[data-slot="number-field-decrement-button"]').trigger('click')
    expect((input(wrapper).element as HTMLInputElement).value).toBe('10')
  })

  it('respects the step value', async () => {
    const wrapper = mount(basicField, {
      attachTo: document.body,
      props: { value: 0, step: 5 },
    })
    await wrapper.find('[data-slot="number-field-increment-button"]').trigger('click')
    expect((input(wrapper).element as HTMLInputElement).value).toBe('5')
  })

  it('clamps to min and max and disables the buttons', async () => {
    const wrapper = mount(basicField, {
      attachTo: document.body,
      props: { value: 10, minValue: 10, maxValue: 10 },
    })
    expect(wrapper.find('[data-slot="number-field-increment-button"]').attributes('disabled')).toBeDefined()
    expect(wrapper.find('[data-slot="number-field-decrement-button"]').attributes('disabled')).toBeDefined()
    await wrapper.find('[data-slot="number-field-increment-button"]').trigger('click')
    expect((input(wrapper).element as HTMLInputElement).value).toBe('10')
  })

  it('emits update:modelValue when typing', async () => {
    const wrapper = mount(basicField, { attachTo: document.body })
    await input(wrapper).setValue('42')
    expect(wrapper.findComponent(NumberField).emitted('update:modelValue')?.at(-1)).toEqual([42])
  })

  it('ignores non numeric characters', async () => {
    const wrapper = mount(basicField, { attachTo: document.body })
    await input(wrapper).setValue('12abc')
    expect((input(wrapper).element as HTMLInputElement).value).toBe('12')
    expect(wrapper.findComponent(NumberField).emitted('update:modelValue')?.at(-1)).toEqual([12])
  })

  it('formats the value with percent format options', async () => {
    const wrapper = mount(basicField, {
      attachTo: document.body,
      props: { value: 0.5 },
      attrs: { formatOptions: { style: 'percent' } },
    })
    expect((input(wrapper).element as HTMLInputElement).value).toBe('50%')
    await input(wrapper).setValue('75')
    expect(wrapper.findComponent(NumberField).emitted('update:modelValue')?.at(-1)).toEqual([0.75])
  })

  it('formats the value with currency format options', () => {
    const wrapper = mount(basicField, {
      attachTo: document.body,
      props: { value: 99 },
      attrs: { formatOptions: { currency: 'USD', style: 'currency' } },
    })
    expect((input(wrapper).element as HTMLInputElement).value).toContain('99')
  })

  it('reflects externally controlled value changes while focused', async () => {
    const wrapper = mount(
      {
        components: {
          NumberField,
          NumberFieldGroup,
          NumberFieldInput,
          NumberFieldIncrementButton,
          NumberFieldDecrementButton,
        },
        template: `
          <NumberField :model-value="value">
            <NumberFieldGroup>
              <NumberFieldInput />
            </NumberFieldGroup>
          </NumberField>
        `,
        props: { value: { type: Number, required: true } },
      },
      { attachTo: document.body, props: { value: 1 } },
    )
    await input(wrapper).trigger('focus')
    await wrapper.setProps({ value: 2 })
    await nextTick()
    expect((input(wrapper).element as HTMLInputElement).value).toBe('2')
  })

  it('marks the group disabled and disables the input', () => {
    const wrapper = mount(basicField, {
      attachTo: document.body,
      attrs: { isDisabled: true },
    })
    expect(wrapper.find('[data-slot="number-field"]').attributes('data-disabled')).toBe('true')
    expect(wrapper.find('[data-slot="number-field-group"]').attributes('data-disabled')).toBe('true')
    expect(input(wrapper).attributes('disabled')).toBeDefined()
  })

  it('marks required state', () => {
    const wrapper = mount(basicField, {
      attachTo: document.body,
      attrs: { isRequired: true },
    })
    expect(input(wrapper).attributes('required')).toBeDefined()
  })

  it('applies full width and variant modifiers', () => {
    const wrapper = mount(basicField, {
      attachTo: document.body,
      attrs: { fullWidth: true, variant: 'secondary' },
    })
    const root = wrapper.find('[data-slot="number-field"]')
    expect(root.classes()).toContain('number-field--full-width')
    expect(root.classes()).toContain('number-field--secondary')
  })
})
