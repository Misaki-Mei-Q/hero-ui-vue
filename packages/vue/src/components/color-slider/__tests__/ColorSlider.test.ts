import { afterEach, describe, expect, it } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { ColorSlider } from '../index'

enableAutoUnmount(afterEach)

describe('ColorSlider', () => {
  it('renders the slider root', () => {
    const wrapper = mount(ColorSlider, { attachTo: document.body })
    const root = wrapper.find('[data-slot="color-slider"]')
    expect(root.exists()).toBe(true)
    expect(root.attributes('data-orientation')).toBe('horizontal')
  })

  it('renders a native range input on the track', () => {
    const wrapper = mount(ColorSlider, { attachTo: document.body })
    const track = wrapper.find('[data-slot="color-slider-track"]')
    expect(track.exists()).toBe(true)
    expect(track.find('input[type="range"]').exists()).toBe(true)
  })

  it('renders label, output and thumb', () => {
    const wrapper = mount(ColorSlider, {
      attachTo: document.body,
      props: { label: 'Hue', modelValue: 180 },
    })
    expect(wrapper.find('[data-slot="label"]').text()).toBe('Hue')
    expect(wrapper.find('[data-slot="color-slider-output"]').text()).toContain('180')
    expect(wrapper.find('[data-slot="color-slider-thumb"]').exists()).toBe(true)
  })

  it('positions the thumb from the current value', () => {
    const wrapper = mount(ColorSlider, { attachTo: document.body, props: { modelValue: 180 } })
    const style = wrapper.find('[data-slot="color-slider-thumb"]').attributes('style') ?? ''
    expect(style).toContain('left: 50%')
    expect(style).toContain('background-color')
  })

  it('uses max=360 for the hue channel', () => {
    const wrapper = mount(ColorSlider, { attachTo: document.body, props: { channel: 'hue' } })
    expect(wrapper.find('input[type="range"]').attributes('max')).toBe('360')
  })

  it('uses max=100 for saturation and max=1 for alpha', () => {
    const saturation = mount(ColorSlider, {
      attachTo: document.body,
      props: { channel: 'saturation' },
    })
    expect(saturation.find('input[type="range"]').attributes('max')).toBe('100')
    const alpha = mount(ColorSlider, { attachTo: document.body, props: { channel: 'alpha' } })
    expect(alpha.find('input[type="range"]').attributes('max')).toBe('1')
  })

  it('respects an explicit max', () => {
    const wrapper = mount(ColorSlider, {
      attachTo: document.body,
      props: { channel: 'hue', max: 240 },
    })
    expect(wrapper.find('input[type="range"]').attributes('max')).toBe('240')
  })

  it('emits update:modelValue on input change', async () => {
    const wrapper = mount(ColorSlider, { attachTo: document.body, props: { modelValue: 100 } })
    await wrapper.find('input[type="range"]').setValue(200)
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([200])
    expect(wrapper.emitted('change')?.at(-1)).toEqual([200])
  })

  it('mirrors the value when uncontrolled', async () => {
    const wrapper = mount(ColorSlider, {
      attachTo: document.body,
      props: { channel: 'hue', defaultValue: 60 },
    })
    expect(wrapper.find('input[type="range"]').attributes('value')).toBe('60')
    await wrapper.find('input[type="range"]').setValue(120)
    expect(wrapper.find('input[type="range"]').attributes('value')).toBe('120')
  })

  it('renders vertical orientation attributes', () => {
    const wrapper = mount(ColorSlider, {
      attachTo: document.body,
      props: { orientation: 'vertical', channel: 'saturation', modelValue: 25 },
    })
    const root = wrapper.find('[data-slot="color-slider"]')
    expect(root.attributes('data-orientation')).toBe('vertical')
    const style = wrapper.find('[data-slot="color-slider-thumb"]').attributes('style') ?? ''
    expect(style).toContain('bottom: 25%')
  })

  it('marks data-disabled and disables the input', () => {
    const wrapper = mount(ColorSlider, {
      attachTo: document.body,
      props: { isDisabled: true },
    })
    expect(wrapper.find('[data-slot="color-slider"]').attributes('data-disabled')).toBe('true')
    expect(wrapper.find('input[type="range"]').attributes('disabled')).toBeDefined()
  })

  it('merges custom class', () => {
    const wrapper = mount(ColorSlider, {
      attachTo: document.body,
      props: { class: 'rounded-md' },
    })
    expect(wrapper.find('[data-slot="color-slider"]').classes()).toContain('rounded-md')
  })
})
