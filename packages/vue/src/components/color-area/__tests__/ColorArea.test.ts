import { afterEach, describe, expect, it, vi } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { ColorArea } from '../index'

enableAutoUnmount(afterEach)

function mockRect(element: Element, rect: Partial<DOMRect>) {
  vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({
    left: 0,
    top: 0,
    width: 100,
    height: 100,
    right: 100,
    bottom: 100,
    x: 0,
    y: 0,
    toJSON: () => ({}),
    ...rect,
  } as DOMRect)
}

describe('ColorArea', () => {
  it('renders the area root with slider semantics', () => {
    const wrapper = mount(ColorArea, { attachTo: document.body })
    const root = wrapper.find('[data-slot="color-area"]')
    expect(root.exists()).toBe(true)
    expect(root.attributes('role')).toBe('slider')
    expect(root.attributes('aria-label')).toBe('Color area')
    expect(root.attributes('tabindex')).toBe('0')
    expect(root.attributes('aria-valuetext')).toBe('Saturation 100%, Lightness 50%')
  })

  it('renders a thumb element', () => {
    const wrapper = mount(ColorArea, { attachTo: document.body })
    expect(wrapper.find('[data-slot="color-area-thumb"]').exists()).toBe(true)
  })

  it('exposes the gradient through a CSS custom property', () => {
    const wrapper = mount(ColorArea, { attachTo: document.body, props: { hue: 200 } })
    const style = wrapper.find('[data-slot="color-area"]').attributes('style') ?? ''
    expect(style).toContain('--color-area-background')
    expect(style).toContain('linear-gradient')
  })

  it('positions the thumb from saturation and lightness', () => {
    const wrapper = mount(ColorArea, {
      attachTo: document.body,
      props: { saturation: 70, lightness: 30, hue: 200 },
    })
    const thumb = wrapper.find('[data-slot="color-area-thumb"]')
    const style = thumb.attributes('style') ?? ''
    expect(style).toContain('left: 70%')
    expect(style).toContain('top: 70%')
    expect(style).toContain('--color-area-thumb-color')
  })

  it('supports swapping the x and y channels', () => {
    const wrapper = mount(ColorArea, {
      attachTo: document.body,
      props: { saturation: 20, lightness: 80, xChannel: 'lightness', yChannel: 'saturation' },
    })
    const style = wrapper.find('[data-slot="color-area-thumb"]').attributes('style') ?? ''
    expect(style).toContain('left: 80%')
    expect(style).toContain('top: 80%')
  })

  it('emits channel updates on pointer interaction', async () => {
    const wrapper = mount(ColorArea, {
      attachTo: document.body,
      props: { saturation: 0, lightness: 0 },
    })
    const root = wrapper.find('[data-slot="color-area"]')
    mockRect(root.element, {})
    root.element.dispatchEvent(
      new MouseEvent('pointerdown', { bubbles: true, clientX: 80, clientY: 20 }),
    )
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('update:saturation')?.at(-1)).toEqual([80])
    expect(wrapper.emitted('update:lightness')?.at(-1)).toEqual([80])
    expect(wrapper.emitted('change')?.at(-1)).toEqual([80, 80])
  })

  it('adjusts values with the keyboard', async () => {
    const wrapper = mount(ColorArea, {
      attachTo: document.body,
      props: { saturation: 50, lightness: 50 },
    })
    const root = wrapper.find('[data-slot="color-area"]')
    await root.trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.emitted('update:saturation')?.at(-1)).toEqual([51])
    await root.trigger('keydown', { key: 'ArrowUp' })
    expect(wrapper.emitted('update:lightness')?.at(-1)).toEqual([51])
  })

  it('marks data-disabled when isDisabled is true', () => {
    const wrapper = mount(ColorArea, { attachTo: document.body, props: { isDisabled: true } })
    expect(wrapper.find('[data-slot="color-area"]').attributes('data-disabled')).toBe('true')
    expect(wrapper.find('[data-slot="color-area-thumb"]').attributes('data-disabled')).toBe('true')
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(ColorArea, {
      attachTo: document.body,
      props: { isDisabled: true },
    })
    await wrapper.find('[data-slot="color-area"]').trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.emitted('update:saturation')).toBeFalsy()
  })

  it('merges custom class', () => {
    const wrapper = mount(ColorArea, { attachTo: document.body, props: { class: 'rounded-md' } })
    expect(wrapper.find('[data-slot="color-area"]').classes()).toContain('rounded-md')
  })
})
