/**
 * DateRangePicker tests are skipped due to the upstream radix-vue
 * Calendar bug that propagates through RangeCalendarRoot and
 * DateRangePickerRoot. Trigger surface is testable in isolation.
 */
import { describe, expect, it } from 'vitest'
import { DateRangePicker } from '../index'

describe('DateRangePicker (skipped due to upstream radix-vue Calendar bug)', () => {
  it('module exports DateRangePicker', () => {
    expect(DateRangePicker).toBeDefined()
    expect(typeof DateRangePicker).toBe('object')
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