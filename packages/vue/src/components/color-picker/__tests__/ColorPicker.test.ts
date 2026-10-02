import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { ColorPicker } from '../index'

enableAutoUnmount(afterEach)

describe('ColorPicker', () => {
  it('renders the trigger', () => {
    const wrapper = mount(ColorPicker, {
      attachTo: document.body,
      props: { modelValue: '#ff0000' },
    })
    expect(wrapper.find('[data-slot="color-picker"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="color-picker-trigger"]').exists()).toBe(true)
  })

  it('renders a ColorSwatch inside the trigger', () => {
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

  it('opens the popover when defaultOpen is true', async () => {
    mount(ColorPicker, {
      attachTo: document.body,
      props: { modelValue: '#ff0000', defaultOpen: true },
    })
    await nextTick()
    expect(document.querySelector('[data-slot="color-picker-popover"]')).not.toBeNull()
  })

  it('stays closed when defaultOpen is omitted', async () => {
    mount(ColorPicker, {
      attachTo: document.body,
      props: { modelValue: '#ff0000' },
    })
    await nextTick()
    expect(document.querySelector('[data-slot="color-picker-popover"]')).toBeNull()
  })

  it('honors the controlled open prop', async () => {
    mount(ColorPicker, {
      attachTo: document.body,
      props: { modelValue: '#ff0000', open: true },
    })
    await nextTick()
    expect(document.querySelector('[data-slot="color-picker-popover"]')).not.toBeNull()
  })

  it('emits open change events when the trigger is clicked', async () => {
    const wrapper = mount(ColorPicker, {
      attachTo: document.body,
      props: { modelValue: '#ff0000' },
    })
    await wrapper.find('[data-slot="color-picker-trigger"]').trigger('click')
    expect(wrapper.emitted('update:open')?.at(-1)).toEqual([true])
    expect(wrapper.emitted('openChange')?.at(-1)).toEqual([true])
  })

  it('merges custom class with color-picker base class', () => {
    const wrapper = mount(ColorPicker, {
      attachTo: document.body,
      props: { class: 'rounded-md', modelValue: '#ff0000' },
    })
    expect(wrapper.find('[data-slot="color-picker"]').classes()).toContain('rounded-md')
  })
})
