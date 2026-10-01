import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { ColorField } from '../index'

describe('ColorField', () => {
  it('renders the root container', () => {
    const wrapper = mount(ColorField, { props: { modelValue: '#ff0000' } })
    expect(wrapper.find('[data-slot="color-field"]').exists()).toBe(true)
  })

  it('renders a native color input', () => {
    const wrapper = mount(ColorField, { props: { modelValue: '#ff0000' } })
    expect(wrapper.find('input[type="color"]').exists()).toBe(true)
  })

  it('shows the hex string in the trigger label', () => {
    const wrapper = mount(ColorField, { props: { modelValue: '#ff0000' } })
    expect(wrapper.text()).toContain('#ff0000')
  })

  it('renders a label above the input', () => {
    const wrapper = mount(ColorField, {
      props: { label: 'Brand color', modelValue: '#ff0000' },
    })
    expect(wrapper.find('[data-slot="label"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Brand color')
  })

  it('marks data-disabled when isDisabled is true', () => {
    const wrapper = mount(ColorField, {
      props: { isDisabled: true, modelValue: '#000000' },
    })
    expect(wrapper.find('[data-slot="color-field"]').attributes('data-disabled')).toBe('true')
  })

  it('emits update:modelValue on input change', async () => {
    const wrapper = mount(ColorField, {
      props: { modelValue: '#000000' },
    })
    const input = wrapper.find('input[type="color"]')
    await input.setValue('#123456')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('merges custom class', () => {
    const wrapper = mount(ColorField, {
      props: { class: 'p-2', modelValue: '#000000' },
    })
    expect(wrapper.find('[data-slot="color-field"]').classes()).toContain('p-2')
  })
})