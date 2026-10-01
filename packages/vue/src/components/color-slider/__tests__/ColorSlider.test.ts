import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { ColorSlider } from '../index'

describe('ColorSlider', () => {
  it('renders the slider root', () => {
    const wrapper = mount(ColorSlider)
    expect(wrapper.find('[data-slot="color-slider"]').exists()).toBe(true)
  })

  it('renders a native range input', () => {
    const wrapper = mount(ColorSlider)
    expect(wrapper.find('input[type="range"]').exists()).toBe(true)
  })

  it('respects modelValue prop', () => {
    const wrapper = mount(ColorSlider, { props: { modelValue: 180 } })
    expect(wrapper.find('input[type="range"]').attributes('value')).toBe('180')
  })

  it('uses max=360 for hue channel', () => {
    const wrapper = mount(ColorSlider, { props: { channel: 'hue' } })
    expect(wrapper.find('input[type="range"]').attributes('max')).toBe('360')
  })

  it('uses max=100 for non-hue channels', () => {
    const wrapper = mount(ColorSlider, { props: { channel: 'saturation' } })
    expect(wrapper.find('input[type="range"]').attributes('max')).toBe('100')
  })

  it('emits update:modelValue on input change', async () => {
    const wrapper = mount(ColorSlider, { props: { modelValue: 100 } })
    await wrapper.find('input[type="range"]').setValue(200)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('merges custom class', () => {
    const wrapper = mount(ColorSlider, { props: { class: 'rounded-md' } })
    expect(wrapper.find('[data-slot="color-slider"]').classes()).toContain('rounded-md')
  })
})