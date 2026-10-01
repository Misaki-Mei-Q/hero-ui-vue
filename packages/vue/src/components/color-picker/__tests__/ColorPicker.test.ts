import { afterEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { ColorPicker } from '../index'

afterEach(() => {
  document.body.innerHTML = ''
})

describe('ColorPicker', () => {
  it('renders the trigger', () => {
    const wrapper = mount(ColorPicker, {
      attachTo: document.body,
      props: { modelValue: '#ff0000' },
    })
    expect(wrapper.find('[data-slot="color-picker"]').exists()).toBe(true)
  })

  it('renders a ColorSwatch inside the trigger', () => {
    const wrapper = mount(ColorPicker, {
      attachTo: document.body,
      props: { modelValue: '#ff0000' },
    })
    expect(wrapper.find('[data-slot="color-swatch"]').exists()).toBe(true)
  })

  it('renders the color-swatch trigger with modelValue', () => {
    const wrapper = mount(ColorPicker, {
      attachTo: document.body,
      props: { modelValue: '#ff0000' },
    })
    expect(wrapper.find('[data-slot="color-swatch"]').exists()).toBe(true)
  })

  it('shows the hex string when modelValue is provided', () => {
    const wrapper = mount(ColorPicker, {
      attachTo: document.body,
      props: { modelValue: '#ff0000' },
    })
    expect(wrapper.text()).toContain('#ff0000')
  })

  it('respects isDisabled prop', () => {
    const wrapper = mount(ColorPicker, {
      attachTo: document.body,
      props: { isDisabled: true, modelValue: '#ff0000' },
    })
    expect(wrapper.find('[data-slot="color-picker-trigger"]').attributes('disabled')).toBeDefined()
  })

  it('merges custom class with color-picker base class', () => {
    const wrapper = mount(ColorPicker, {
      attachTo: document.body,
      props: { class: 'rounded-md', modelValue: '#ff0000' },
    })
    expect(wrapper.find('[data-slot="color-picker"]').classes()).toContain('rounded-md')
  })
})