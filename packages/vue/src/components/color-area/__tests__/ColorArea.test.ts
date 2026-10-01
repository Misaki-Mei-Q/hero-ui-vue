import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { ColorArea } from '../index'

describe('ColorArea', () => {
  it('renders the area root', () => {
    const wrapper = mount(ColorArea)
    expect(wrapper.find('[data-slot="color-area"]').exists()).toBe(true)
  })

  it('renders a thumb element', () => {
    const wrapper = mount(ColorArea)
    expect(wrapper.find('[data-slot="color-area-thumb"]').exists()).toBe(true)
  })

  it('respects saturation and lightness props', () => {
    const wrapper = mount(ColorArea, {
      props: { saturation: 70, lightness: 30, hue: 200 },
    })
    const thumb = wrapper.find('[data-slot="color-area-thumb"]')
    expect(thumb.attributes('style')).toContain('left: 70%')
    expect(thumb.attributes('style')).toContain('top: 70%')
  })

  it('marks data-disabled when isDisabled is true', () => {
    const wrapper = mount(ColorArea, { props: { isDisabled: true } })
    expect(wrapper.find('[data-slot="color-area"]').attributes('data-disabled')).toBe('true')
  })

  it('merges custom class', () => {
    const wrapper = mount(ColorArea, { props: { class: 'rounded-md' } })
    expect(wrapper.find('[data-slot="color-area"]').classes()).toContain('rounded-md')
  })

  it('uses role="slider"', () => {
    const wrapper = mount(ColorArea)
    expect(wrapper.find('[data-slot="color-area"]').attributes('role')).toBe('slider')
  })
})