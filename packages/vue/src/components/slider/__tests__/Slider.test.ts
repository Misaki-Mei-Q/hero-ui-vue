import { afterEach, describe, expect, it } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import Slider from '../Slider.vue'

enableAutoUnmount(afterEach)

describe('Slider', () => {
  it('renders with default props', () => {
    const wrapper = mount(Slider, {
      props: { label: 'Volume' },
    })

    const root = wrapper.find('[data-slot="slider"]')
    expect(root.exists()).toBe(true)
    expect(root.classes()).toContain('slider')
    expect(root.attributes('data-orientation')).toBe('horizontal')
    expect(root.attributes('data-disabled')).toBeUndefined()
    expect(wrapper.text()).toContain('Volume')
  })

  it('renders the value output formatted as a number', () => {
    const wrapper = mount(Slider, {
      props: { label: 'Volume', modelValue: 35, maxValue: 100 },
    })

    expect(wrapper.text()).toContain('35')
  })

  it('updates the rendered value when modelValue prop changes', async () => {
    const wrapper = mount(Slider, {
      props: { label: 'Volume', modelValue: 10, maxValue: 100 },
    })

    expect(wrapper.text()).toContain('10')

    await wrapper.setProps({ modelValue: 80 })
    expect(wrapper.text()).toContain('80')
  })

  it('respects the isDisabled prop', () => {
    const wrapper = mount(Slider, {
      props: { isDisabled: true, label: 'Locked' },
    })

    const root = wrapper.find('[data-slot="slider"]')
    expect(root.attributes('data-disabled')).not.toBeUndefined()
    expect(root.attributes('aria-disabled')).toBe('true')
  })

  it('uses vertical orientation when configured', () => {
    const wrapper = mount(Slider, {
      props: { orientation: 'vertical', label: 'Mixer' },
    })

    const root = wrapper.find('[data-slot="slider"]')
    expect(root.attributes('data-orientation')).toBe('vertical')
  })

  it('renders step indicators when showSteps is true', () => {
    const wrapper = mount(Slider, {
      props: {
        showSteps: true,
        minValue: 0,
        maxValue: 100,
        step: 25,
        modelValue: 50,
      },
    })

    const steps = wrapper.findAll('[data-slot="slider-step"]')
    expect(steps.length).toBe(5)
    const inRange = steps.filter((s) => s.attributes('data-in-range') === 'true')
    expect(inRange.length).toBeGreaterThan(0)
  })

  it('renders user-provided marks', () => {
    const wrapper = mount(Slider, {
      props: {
        marks: [
          { value: 0, label: 'Min' },
          { value: 50, label: 'Mid' },
          { value: 100, label: 'Max' },
        ],
        modelValue: 50,
      },
    })

    const labels = wrapper.findAll('[data-slot="slider-mark"]')
    expect(labels).toHaveLength(3)
    expect(labels[0]!.text()).toBe('Min')
    expect(labels[1]!.text()).toBe('Mid')
    expect(labels[2]!.text()).toBe('Max')
  })

  it('formats output values via getValue callback', () => {
    const wrapper = mount(Slider, {
      props: {
        label: 'Speed',
        modelValue: 60,
        getValue: (value) => `${value} mph`,
      },
    })

    expect(wrapper.text()).toContain('60 mph')
  })

  it('formats numbers using Intl.NumberFormat when formatOptions are provided', () => {
    const wrapper = mount(Slider, {
      props: {
        label: 'Price',
        modelValue: 1234.5,
        formatOptions: { style: 'currency', currency: 'USD' },
      },
    })

    expect(wrapper.text()).toContain('$1,234.50')
  })

  it('renders a thumb for each value in array form', () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [10, 50, 90], maxValue: 100 },
    })

    const thumbs = wrapper.findAll('[data-slot="slider-thumb"]')
    expect(thumbs).toHaveLength(3)
  })

  it('merges user-provided class with styles package classes', () => {
    const wrapper = mount(Slider, {
      props: { class: 'rounded-full' },
    })

    const root = wrapper.find('[data-slot="slider"]')
    expect(root.classes()).toContain('rounded-full')
    expect(root.classes()).toContain('slider')
  })

  it('updates the uncontrolled output through keyboard interaction', async () => {
    const wrapper = mount(Slider, {
      attachTo: document.body,
      props: { label: 'Volume', defaultValue: [35] },
    })
    expect(wrapper.text()).toContain('35')
    await wrapper.find('[data-slot="slider-thumb"]').trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.text()).toContain('36')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([36])
  })

  it('marks fill edges on the track when the value reaches the max', () => {
    const wrapper = mount(Slider, {
      attachTo: document.body,
      props: { modelValue: 100 },
    })
    const track = wrapper.find('[data-slot="slider-track"]')
    expect(track.attributes('data-fill-start')).toBe('true')
    expect(track.attributes('data-fill-end')).toBe('true')
  })

  it('marks the fill start on a range track', () => {
    const wrapper = mount(Slider, {
      attachTo: document.body,
      props: { modelValue: [0, 50] },
    })
    const track = wrapper.find('[data-slot="slider-track"]')
    expect(track.attributes('data-fill-start')).toBe('true')
    expect(track.attributes('data-fill-end')).toBeUndefined()
  })
})