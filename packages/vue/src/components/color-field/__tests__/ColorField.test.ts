import { afterEach, describe, expect, it } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { ColorField } from '../index'

enableAutoUnmount(afterEach)

describe('ColorField', () => {
  it('renders the root container', () => {
    const wrapper = mount(ColorField, { attachTo: document.body })
    expect(wrapper.find('[data-slot="color-field"]').exists()).toBe(true)
  })

  it('renders a hex text input', () => {
    const wrapper = mount(ColorField, { props: { modelValue: '#ff0000' } })
    const input = wrapper.find('[data-slot="color-input-group-input"]')
    expect(input.exists()).toBe(true)
    expect(input.attributes('type')).toBe('text')
    expect((input.element as HTMLInputElement).value).toBe('#ff0000')
  })

  it('renders a color swatch preview bound to the current value', () => {
    const wrapper = mount(ColorField, { props: { modelValue: '#ff0000' } })
    const swatch = wrapper.find('[data-slot="color-swatch"]')
    expect(swatch.exists()).toBe(true)
    expect(swatch.attributes('style')).toContain('--color-swatch-current')
  })

  it('renders a label linked to the input', () => {
    const wrapper = mount(ColorField, {
      props: { label: 'Brand color', modelValue: '#ff0000' },
    })
    const label = wrapper.find('[data-slot="label"]')
    expect(label.exists()).toBe(true)
    expect(label.text()).toContain('Brand color')
    expect(label.attributes('for')).toBe(
      wrapper.find('[data-slot="color-input-group-input"]').attributes('id'),
    )
  })

  it('emits update:modelValue for a valid hex value', async () => {
    const wrapper = mount(ColorField, { props: { modelValue: '#000000' } })
    await wrapper.find('[data-slot="color-input-group-input"]').setValue('#123456')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['#123456'])
  })

  it('does not emit for an invalid hex value while typing', async () => {
    const wrapper = mount(ColorField, { props: { modelValue: '#000000' } })
    await wrapper.find('[data-slot="color-input-group-input"]').setValue('#12')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('hides the description while an error message is present', () => {
    const wrapper = mount(ColorField, {
      props: { description: 'Pick a color', errorMessage: 'Required' },
    })
    expect(wrapper.find('[data-slot="description"]').exists()).toBe(false)
    expect(wrapper.find('[data-slot="error-message"]').text()).toContain('Required')
  })

  it('marks data-disabled and data-required', () => {
    const wrapper = mount(ColorField, {
      props: { isDisabled: true, isRequired: true },
    })
    const root = wrapper.find('[data-slot="color-field"]')
    expect(root.attributes('data-disabled')).toBe('true')
    expect(root.attributes('data-required')).toBe('true')
    expect(wrapper.find('[data-slot="color-input-group-input"]').attributes('disabled')).toBeDefined()
  })

  it('applies the full width modifier', () => {
    const wrapper = mount(ColorField, { props: { fullWidth: true } })
    expect(wrapper.find('[data-slot="color-field"]').classes()).toContain('color-field--full-width')
  })

  it('merges custom class', () => {
    const wrapper = mount(ColorField, { props: { class: 'p-2' } })
    expect(wrapper.find('[data-slot="color-field"]').classes()).toContain('p-2')
  })
})
