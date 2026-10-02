import { afterEach, describe, expect, it } from 'vitest'
import { CalendarDate } from '@internationalized/date'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { RangeCalendar } from '../index'

enableAutoUnmount(afterEach)

function queryAll(selector: string) {
  return Array.from(document.querySelectorAll(selector))
}

describe('RangeCalendar', () => {
  it('module exports RangeCalendar', () => {
    expect(RangeCalendar).toBeDefined()
    expect(typeof RangeCalendar).toBe('object')
  })

  it('renders the header, heading and grid', () => {
    mount(RangeCalendar, {
      attachTo: document.body,
      props: {
        modelValue: { start: new CalendarDate(2025, 1, 15), end: new CalendarDate(2025, 1, 22) },
      },
    })

    expect(document.querySelector('[data-slot="range-calendar-heading"]')?.textContent?.trim()).toBe(
      'January 2025',
    )
    expect(document.querySelector('[data-slot="range-calendar-prev"]')).not.toBeNull()
    expect(document.querySelector('[data-slot="range-calendar-next"]')).not.toBeNull()
    expect(queryAll('[data-slot="range-calendar-header-cell"]')).toHaveLength(7)
    expect(queryAll('[data-slot="cell-trigger"]').length % 7).toBe(0)
    expect(document.querySelector('[data-slot="range-calendar-grid"]')?.tagName).toBe('TABLE')
  })

  it('marks the selection start, end and days in between', () => {
    mount(RangeCalendar, {
      attachTo: document.body,
      props: {
        modelValue: { start: new CalendarDate(2025, 1, 15), end: new CalendarDate(2025, 1, 22) },
      },
    })

    const start = queryAll('[data-slot="cell-trigger"][data-selection-start="true"]')
    const end = queryAll('[data-slot="cell-trigger"][data-selection-end="true"]')
    const selected = queryAll('[data-slot="cell-trigger"][data-selected="true"]')

    expect(start).toHaveLength(1)
    expect(start[0]?.textContent?.trim()).toBe('15')
    expect(end).toHaveLength(1)
    expect(end[0]?.textContent?.trim()).toBe('22')
    expect(selected).toHaveLength(8)
  })

  it('marks days outside the visible month', () => {
    mount(RangeCalendar, {
      attachTo: document.body,
      props: {
        modelValue: { start: new CalendarDate(2025, 1, 15), end: new CalendarDate(2025, 1, 22) },
      },
    })

    expect(queryAll('[data-slot="cell-trigger"][data-outside-month="true"]').length).toBeGreaterThan(0)
  })

  it('accepts a custom class', () => {
    mount(RangeCalendar, {
      attachTo: document.body,
      props: {
        modelValue: { start: new CalendarDate(2025, 1, 15), end: new CalendarDate(2025, 1, 22) },
        class: 'my-range-calendar',
      },
    })

    const root = document.querySelector('[data-slot="range-calendar"]')
    expect(root?.classList.contains('my-range-calendar')).toBe(true)
    expect(root?.classList.contains('range-calendar')).toBe(true)
  })

  it('respects the disabled prop', () => {
    mount(RangeCalendar, {
      attachTo: document.body,
      props: {
        modelValue: { start: new CalendarDate(2025, 1, 15), end: new CalendarDate(2025, 1, 22) },
        disabled: true,
      },
    })

    expect(document.querySelector('[data-slot="range-calendar"]')?.getAttribute('data-disabled')).toBe(
      '',
    )
  })

  it('renders two months when numberOfMonths is 2', () => {
    mount(RangeCalendar, {
      attachTo: document.body,
      props: {
        modelValue: { start: new CalendarDate(2025, 1, 15), end: new CalendarDate(2025, 1, 22) },
        numberOfMonths: 2,
      },
    })

    expect(queryAll('[data-slot="range-calendar-month"]')).toHaveLength(2)
    expect(
      queryAll('[data-slot="range-calendar-heading"]').map((node) => node.textContent?.trim()),
    ).toEqual(['January 2025', 'February 2025'])
  })

  it('accepts isDateDisabled callback', () => {
    mount(RangeCalendar, {
      attachTo: document.body,
      props: {
        modelValue: { start: new CalendarDate(2025, 1, 15), end: new CalendarDate(2025, 1, 22) },
        isDateDisabled: (date) => date.month === 1 && date.day <= 7,
      },
    })

    const disabled = queryAll('[data-slot="cell-trigger"][data-disabled]')
    expect(disabled).toHaveLength(7)
    expect(disabled[0]?.textContent?.trim()).toBe('1')
  })
})
