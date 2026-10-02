import { afterEach, describe, expect, it } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { ColorSwatchPicker } from '../index'

enableAutoUnmount(afterEach)

const palette = ['#ff0000', '#00ff00', '#0000ff']

describe('ColorSwatchPicker', () => {
  it('renders the root container as a listbox', () => {
    const wrapper = mount(ColorSwatchPicker, { attachTo: document.body })
    const root = wrapper.find('[data-slot="color-swatch-picker"]')
    expect(root.exists()).toBe(true)
    expect(root.attributes('role')).toBe('listbox')
  })

  it('renders a swatch item per color', () => {
    const wrapper = mount(ColorSwatchPicker, {
      attachTo: document.body,
      props: { colors: palette },
    })
    expect(wrapper.findAll('[data-slot="color-swatch-picker-item"]')).toHaveLength(3)
    expect(wrapper.findAll('[data-slot="color-swatch-picker-swatch"]')).toHaveLength(3)
  })

  it('exposes the color on the item and swatch', () => {
    const wrapper = mount(ColorSwatchPicker, {
      attachTo: document.body,
      props: { colors: ['#ff0000'] },
    })
    const item = wrapper.find('[data-slot="color-swatch-picker-item"]')
    const swatch = wrapper.find('[data-slot="color-swatch-picker-swatch"]')
    expect(item.attributes('style')).toContain('--color-swatch-current')
    expect(swatch.attributes('style')).toContain('background-color')
  })

  it('renders a checkmark indicator and light-color flag', () => {
    const wrapper = mount(ColorSwatchPicker, {
      attachTo: document.body,
      props: { colors: ['#ffffff', '#000000'] },
    })
    expect(wrapper.findAll('[data-slot="color-swatch-picker-checkmark"]')).toHaveLength(2)
    const indicators = wrapper.findAll('[data-slot="color-swatch-picker-indicator"]')
    expect(indicators[0]!.attributes('data-light-color')).toBe('true')
    expect(indicators[1]!.attributes('data-light-color')).toBeUndefined()
  })

  it('marks the selected item from modelValue', () => {
    const wrapper = mount(ColorSwatchPicker, {
      attachTo: document.body,
      props: { modelValue: '#00ff00', colors: palette },
    })
    const items = wrapper.findAll('[data-slot="color-swatch-picker-item"]')
    expect(items[0]!.attributes('data-selected')).toBe('false')
    expect(items[1]!.attributes('data-selected')).toBe('true')
    expect(items[1]!.attributes('aria-selected')).toBe('true')
  })

  it('supports an uncontrolled defaultValue', () => {
    const wrapper = mount(ColorSwatchPicker, {
      attachTo: document.body,
      props: { defaultValue: '#0000ff', colors: palette },
    })
    const items = wrapper.findAll('[data-slot="color-swatch-picker-item"]')
    expect(items[2]!.attributes('data-selected')).toBe('true')
  })

  it('emits update:modelValue and change when a swatch is clicked', async () => {
    const wrapper = mount(ColorSwatchPicker, {
      attachTo: document.body,
      props: { colors: palette },
    })
    await wrapper.findAll('[data-slot="color-swatch-picker-item"]')[1]!.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['#00ff00'])
    expect(wrapper.emitted('change')?.at(-1)).toEqual(['#00ff00'])
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(ColorSwatchPicker, {
      attachTo: document.body,
      props: { isDisabled: true, colors: palette },
    })
    await wrapper.findAll('[data-slot="color-swatch-picker-item"]')[0]!.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    expect(wrapper.find('[data-slot="color-swatch-picker"]').attributes('data-disabled')).toBe('true')
  })

  it('applies layout, size and variant modifiers', () => {
    const wrapper = mount(ColorSwatchPicker, {
      attachTo: document.body,
      props: { layout: 'stack', size: 'lg', variant: 'square', colors: palette },
    })
    const root = wrapper.find('[data-slot="color-swatch-picker"]')
    expect(root.attributes('data-layout')).toBe('stack')
    expect(root.classes()).toContain('color-swatch-picker--stack')
    expect(root.classes()).toContain('color-swatch-picker--lg')
    expect(root.classes()).toContain('color-swatch-picker--square')
  })

  it('merges custom class', () => {
    const wrapper = mount(ColorSwatchPicker, {
      attachTo: document.body,
      props: { class: 'gap-4', colors: palette },
    })
    expect(wrapper.find('[data-slot="color-swatch-picker"]').classes()).toContain('gap-4')
  })
})
