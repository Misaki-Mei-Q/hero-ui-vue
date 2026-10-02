import { afterEach, describe, expect, it } from 'vitest'
import { CalendarDate } from '@internationalized/date'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { Calendar } from '../index'

enableAutoUnmount(afterEach)

function queryAll(selector: string) {
  return Array.from(document.querySelectorAll(selector))
}

describe('Calendar', () => {
  it('module exports Calendar', () => {
    expect(Calendar).toBeDefined()
    expect(typeof Calendar).toBe('object')
  })

  it('renders the header with a localized heading and navigation buttons', () => {
    mount(Calendar, {
      attachTo: document.body,
      props: { modelValue: new CalendarDate(2025, 3, 15) },
    })

    expect(document.querySelector('[data-slot="calendar-heading"]')?.textContent?.trim()).toBe(
      'March 2025',
    )
    expect(document.querySelector('[data-slot="calendar-prev"]')).not.toBeNull()
    expect(document.querySelector('[data-slot="calendar-next"]')).not.toBeNull()
  })

  it('renders the grid with weekday header cells and day cells', () => {
    mount(Calendar, {
      attachTo: document.body,
      props: { modelValue: new CalendarDate(2025, 0, 15) },
    })

    const headerCells = queryAll('[data-slot="calendar-header-cell"]')
    expect(headerCells).toHaveLength(7)
    expect(headerCells.map((cell) => cell.textContent?.trim())).toEqual([
      'S',
      'M',
      'T',
      'W',
      'T',
      'F',
      'S',
    ])

    const triggers = queryAll('[data-slot="cell-trigger"]')
    expect(triggers.length).toBeGreaterThanOrEqual(28)
    expect(triggers.length % 7).toBe(0)
    expect(document.querySelector('[data-slot="calendar-grid"]')?.tagName).toBe('DIV')
    expect(document.querySelector('[data-slot="calendar-grid-row"]')?.tagName).toBe('DIV')
    expect(document.querySelector('[data-slot="calendar-cell"]')?.tagName).toBe('DIV')
  })

  it('marks the selected date', () => {
    mount(Calendar, {
      attachTo: document.body,
      props: { modelValue: new CalendarDate(2025, 0, 15) },
    })

    const selected = queryAll('[data-slot="calendar-cell"][data-selected="true"]')
    expect(selected).toHaveLength(1)
    expect(selected[0]?.textContent?.trim()).toBe('15')
  })

  it('marks days outside the visible month', () => {
    mount(Calendar, {
      attachTo: document.body,
      props: { modelValue: new CalendarDate(2025, 0, 15) },
    })

    const outside = queryAll('[data-slot="calendar-cell"][data-outside-month="true"]')
    expect(outside.length).toBeGreaterThan(0)
    const inside = queryAll('[data-slot="calendar-cell"]:not([data-outside-month="true"])')
    expect(inside.length).toBe(31)
  })

  it('accepts a custom class', () => {
    mount(Calendar, {
      attachTo: document.body,
      props: { modelValue: new CalendarDate(2025, 0, 15), class: 'my-calendar' },
    })

    const root = document.querySelector('[data-slot="calendar"]')
    expect(root?.classList.contains('my-calendar')).toBe(true)
    expect(root?.classList.contains('calendar')).toBe(true)
  })

  it('respects weekStartsOn and weekdayFormat', () => {
    mount(Calendar, {
      attachTo: document.body,
      props: {
        modelValue: new CalendarDate(2025, 0, 15),
        weekStartsOn: 1,
        weekdayFormat: 'short',
      },
    })

    const headerCells = queryAll('[data-slot="calendar-header-cell"]')
    expect(headerCells.map((cell) => cell.textContent?.trim())).toEqual([
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
    ])
  })

  it('respects disabled prop', () => {
    mount(Calendar, {
      attachTo: document.body,
      props: { modelValue: new CalendarDate(2025, 0, 15), disabled: true },
    })

    const root = document.querySelector('[data-slot="calendar"]')
    expect(root?.getAttribute('data-disabled')).toBe('')
  })

  it('respects fixedWeeks prop', () => {
    mount(Calendar, {
      attachTo: document.body,
      props: { modelValue: new CalendarDate(2025, 0, 15), fixedWeeks: true },
    })

    expect(queryAll('[data-slot="cell-trigger"]')).toHaveLength(42)
  })

  it('supports numberOfMonths prop', () => {
    mount(Calendar, {
      attachTo: document.body,
      props: { modelValue: new CalendarDate(2025, 0, 15), numberOfMonths: 2 },
    })

    const months = queryAll('[data-slot="calendar-month"]')
    expect(months).toHaveLength(2)
    const headings = queryAll('[data-slot="calendar-heading"]').map((node) =>
      node.textContent?.trim(),
    )
    expect(headings).toEqual(['January 2025', 'February 2025'])
    expect(document.querySelector('[data-slot="calendar"]')?.classList.contains('calendar--multi')).toBe(
      true,
    )
  })

  it('supports multiple selection', () => {
    mount(Calendar, {
      attachTo: document.body,
      props: {
        defaultValue: [new CalendarDate(2025, 0, 15), new CalendarDate(2025, 0, 20)],
        multiple: true,
      },
    })

    const selected = queryAll('[data-slot="calendar-cell"][data-selected="true"]')
    expect(selected.map((cell) => cell.textContent?.trim())).toEqual(['15', '20'])
  })

  it('accepts isDateDisabled callback', () => {
    mount(Calendar, {
      attachTo: document.body,
      props: {
        modelValue: new CalendarDate(2025, 0, 15),
        isDateDisabled: (date) => date.month === 1 && date.day <= 7,
      },
    })

    const disabled = queryAll('[data-slot="calendar-cell"][data-disabled]')
    expect(disabled).toHaveLength(7)
    expect(disabled[0]?.textContent?.trim()).toBe('1')
  })

  it('emits update:modelValue when an uncontrolled day is clicked', async () => {
    const wrapper = mount(Calendar, {
      attachTo: document.body,
      props: { defaultValue: new CalendarDate(2025, 0, 15) },
    })

    const target = queryAll('[data-slot="cell-trigger"]').find(
      (node) => node.textContent?.trim() === '16',
    )
    target?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await wrapper.vm.$nextTick()

    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted?.[0]?.[0]?.toString()).toBe('2025-01-16')
  })
})
