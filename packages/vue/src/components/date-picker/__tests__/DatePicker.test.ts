/**
 * DatePicker tests are skipped due to the upstream radix-vue Calendar bug
 * that also affects DatePickerRoot + DatePickerCalendar. The Popover/Trigger
 * surface is testable in isolation but the full compositing pipeline would
 * fail in jsdom.
 */
import { describe, expect, it } from 'vitest'
import { DatePicker } from '../index'

describe('DatePicker (skipped due to upstream radix-vue Calendar bug)', () => {
  it('module exports DatePicker', () => {
    expect(DatePicker).toBeDefined()
    expect(typeof DatePicker).toBe('object')
  })

  it.skip('mounts successfully with no props', () => {
    // re-enable when radix-vue Calendar bug is fixed
  })

  it.skip('mounts with modelValue prop', () => {
    // re-enable when radix-vue Calendar bug is fixed
  })

  it.skip('mounts with placeholder prop', () => {
    // re-enable when radix-vue Calendar bug is fixed
  })

  it.skip('mounts with disabled prop', () => {
    // re-enable when radix-vue Calendar bug is fixed
  })

  it.skip('mounts with isRequired prop', () => {
    // re-enable when radix-vue Calendar bug is fixed
  })

  it.skip('mounts with fullWidth prop', () => {
    // re-enable when radix-vue Calendar bug is fixed
  })
})