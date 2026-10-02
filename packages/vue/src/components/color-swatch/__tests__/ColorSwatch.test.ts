import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { ColorSwatch } from '../index'

describe('ColorSwatch', () => {
  it('renders a span with the swatch color', () => {
    const wrapper = mount(ColorSwatch, { props: { color: '#ff0000' } })
    expect(wrapper.find('[data-slot="color-swatch"]').exists()).toBe(true)
    expect(wrapper.element.style.backgroundColor).toContain('rgb')
  })

  it('exposes the current color through a CSS custom property', () => {
    const wrapper = mount(ColorSwatch, { props: { color: '#ff0000' } })
    expect(wrapper.element.style.getPropertyValue('--color-swatch-current')).toBe('#ff0000')
  })

  it('uses role="img"', () => {
    const wrapper = mount(ColorSwatch, { props: { color: '#ff0000' } })
    expect(wrapper.find('[data-slot="color-swatch"]').attributes('role')).toBe('img')
  })

  it('exposes aria-label', () => {
    const wrapper = mount(ColorSwatch, { props: { color: '#ff0000' } })
    expect(wrapper.find('[data-slot="color-swatch"]').attributes('aria-label')).toContain('#ff0000')
  })

  it('respects shape prop', () => {
    const wrapper = mount(ColorSwatch, {
      props: { color: '#ff0000', shape: 'square' },
    })
    expect(wrapper.find('[data-slot="color-swatch"]').attributes('data-shape')).toBe('square')
  })

  it('respects size prop', () => {
    const wrapper = mount(ColorSwatch, {
      props: { color: '#ff0000', size: 'lg' },
    })
    expect(wrapper.find('[data-slot="color-swatch"]').attributes('data-size')).toBe('lg')
  })

  it('merges custom class', () => {
    const wrapper = mount(ColorSwatch, {
      props: { color: '#ff0000', class: 'border-2' },
    })
    expect(wrapper.find('[data-slot="color-swatch"]').classes()).toContain('border-2')
  })
})