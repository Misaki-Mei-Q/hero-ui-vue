import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { ColorSwatchPicker } from '../index'

describe('ColorSwatchPicker', () => {
  it('renders the root container', () => {
    const wrapper = mount(ColorSwatchPicker)
    expect(wrapper.find('[data-slot="color-swatch-picker"]').exists()).toBe(true)
  })

  it('renders a button per color in the colors prop', () => {
    const wrapper = mount(ColorSwatchPicker, {
      props: { colors: ['#ff0000', '#00ff00', '#0000ff'] },
    })
    const items = wrapper.findAll('[data-slot="color-swatch-picker-item"]')
    expect(items.length).toBe(3)
  })

  it('emits update:modelValue when a swatch is clicked', async () => {
    const wrapper = mount(ColorSwatchPicker, {
      props: { colors: ['#ff0000', '#00ff00'] },
    })
    await wrapper.findAll('[data-slot="color-swatch-picker-item"]')[0]!.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('marks data-selected on the active swatch', () => {
    const wrapper = mount(ColorSwatchPicker, {
      props: { modelValue: '#00ff00', colors: ['#ff0000', '#00ff00'] },
    })
    const items = wrapper.findAll('[data-slot="color-swatch-picker-item"]')
    expect(items[0]!.attributes('data-selected')).toBe('false')
    expect(items[1]!.attributes('data-selected')).toBe('true')
  })

  it('respects layout prop', () => {
    const wrapper = mount(ColorSwatchPicker, {
      props: { layout: 'stack', colors: ['#ff0000'] },
    })
    expect(wrapper.find('[data-slot="color-swatch-picker"]').attributes('data-layout')).toBe('stack')
  })

  it('marks data-disabled when isDisabled is true', () => {
    const wrapper = mount(ColorSwatchPicker, {
      props: { isDisabled: true, colors: ['#ff0000'] },
    })
    expect(wrapper.find('[data-slot="color-swatch-picker"]').attributes('data-disabled')).toBe('true')
  })
})