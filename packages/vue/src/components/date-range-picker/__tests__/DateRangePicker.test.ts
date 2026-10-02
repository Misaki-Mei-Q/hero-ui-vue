import { afterEach, describe, expect, it } from 'vitest'
import { CalendarDate } from '@internationalized/date'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { DateRangePicker } from '../index'

enableAutoUnmount(afterEach)

const range = {
  start: new CalendarDate(2025, 1, 15),
  end: new CalendarDate(2025, 1, 22),
}

describe('DateRangePicker', () => {
  it('module exports DateRangePicker', () => {
    expect(DateRangePicker).toBeDefined()
    expect(typeof DateRangePicker).toBe('object')
  })

  it('mounts with no props', () => {
    mount(DateRangePicker, { attachTo: document.body })

    const trigger = document.querySelector('[data-slot="date-range-picker-trigger"]')
    expect(trigger).not.toBeNull()
    expect(trigger?.textContent).toContain('Select a range')
    expect(document.querySelector('[data-slot="date-range-picker-separator"]')).toBeNull()
  })

  it('shows the formatted range and separator when a value is set', () => {
    mount(DateRangePicker, {
      attachTo: document.body,
      props: { modelValue: range },
    })

    const trigger = document.querySelector('[data-slot="date-range-picker-trigger"]')
    expect(trigger?.textContent).toContain('Jan 15, 2025')
    expect(trigger?.textContent).toContain('Jan 22, 2025')

    const separator = document.querySelector('[data-slot="date-range-picker-separator"]')
    expect(separator).not.toBeNull()
    expect(separator?.closest('[data-slot="date-range-picker-trigger"]')).not.toBeNull()
  })

  it('renders a custom separator through the slot', () => {
    mount(DateRangePicker, {
      attachTo: document.body,
      props: { modelValue: range },
      slots: { separator: 'to' },
    })

    expect(document.querySelector('[data-slot="date-range-picker-separator"]')?.textContent?.trim()).toBe(
      'to',
    )
  })

  it('mounts with labelText prop', () => {
    mount(DateRangePicker, {
      attachTo: document.body,
      props: { labelText: 'Trip dates' },
    })

    expect(document.querySelector('[data-slot="label"]')?.textContent?.trim()).toBe('Trip dates')
  })

  it('mounts with disabled and isRequired props', () => {
    mount(DateRangePicker, {
      attachTo: document.body,
      props: { isDisabled: true, isRequired: true },
    })

    const root = document.querySelector('[data-slot="date-range-picker"]')
    expect(root?.getAttribute('data-disabled')).toBe('true')
    expect(root?.getAttribute('data-required')).toBe('true')
  })

  it('mounts with fullWidth prop', () => {
    mount(DateRangePicker, { attachTo: document.body, props: { fullWidth: true } })

    expect(
      document
        .querySelector('[data-slot="date-range-picker"]')
        ?.classList.contains('date-range-picker--full-width'),
    ).toBe(true)
  })

  it('opens with two months by default', async () => {
    const wrapper = mount(DateRangePicker, {
      attachTo: document.body,
      props: { modelValue: range },
    })

    const trigger = document.querySelector(
      '[data-slot="date-range-picker-trigger"]',
    ) as HTMLButtonElement
    trigger.click()
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('openChange')?.[0]?.[0]).toBe(true)
    expect(document.querySelectorAll('[data-slot="range-calendar-month"]')).toHaveLength(2)
    expect(document.querySelector('[data-slot="range-calendar"]')).not.toBeNull()
  })
})
