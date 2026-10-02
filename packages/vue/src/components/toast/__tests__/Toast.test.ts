import { afterEach, describe, expect, it } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { defineComponent, h, nextTick } from 'vue'
import { ToastProvider, useToast } from '../index'

enableAutoUnmount(afterEach)

type ToastApiShape = NonNullable<ReturnType<typeof useToast>>

let api: ToastApiShape | null = null

function mountProvider() {
  api = null
  const Child = defineComponent({
    setup() {
      api = useToast()
      return () => h('span', 'child')
    },
  })
  const wrapper = mount(ToastProvider, {
    slots: { default: () => h(Child) },
    attachTo: document.body,
  })
  return wrapper
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

describe('Toast', () => {
  it('renders the provider and viewport region', () => {
    mount(ToastProvider, { slots: { default: '<div>app</div>' }, attachTo: document.body })
    expect(document.querySelector('[data-slot="toast-region"]')).not.toBeNull()
  })

  it('merges custom class with the region', () => {
    mount(ToastProvider, {
      props: { class: 'rounded-md' },
      slots: { default: '<div>app</div>' },
      attachTo: document.body,
    })
    const region = document.querySelector('[data-slot="toast-region"]')
    expect(region?.classList.contains('rounded-md')).toBe(true)
  })

  it('applies the placement modifier to the region', () => {
    mount(ToastProvider, {
      props: { placement: 'top' },
      slots: { default: '<div>app</div>' },
      attachTo: document.body,
    })
    const region = document.querySelector('[data-slot="toast-region"]')
    expect(region?.classList.contains('toast-region--top')).toBe(true)
  })

  it('exposes the toast api inside the provider', () => {
    mountProvider()
    expect(api).not.toBeNull()
    expect(typeof api!.show).toBe('function')
  })

  it('returns null when useToast is called outside the provider', () => {
    let returned: ReturnType<typeof useToast> = null
    const Child = defineComponent({
      setup() {
        returned = useToast()
        return () => h('span')
      },
    })
    mount(Child, { attachTo: document.body })
    expect(returned).toBeNull()
  })

  it('renders a toast added through show()', async () => {
    mountProvider()
    api!.show({ title: 'Hi', description: 'World' })
    await nextTick()
    const toast = document.querySelector('[data-slot="toast"]')
    expect(toast).not.toBeNull()
    expect(toast?.textContent).toContain('Hi')
    expect(toast?.textContent).toContain('World')
    expect(toast?.getAttribute('data-frontmost')).toBe('true')
    expect(toast?.getAttribute('data-index')).toBe('0')
  })

  it('applies the variant class and indicator', async () => {
    mountProvider()
    api!.show({ title: 'Saved', variant: 'success' })
    await nextTick()
    const toast = document.querySelector('[data-slot="toast"]')
    expect(toast?.classList.contains('toast--success')).toBe(true)
    expect(document.querySelector('[data-slot="toast-indicator"]')).not.toBeNull()
  })

  it('stacks toasts with increasing indexes and a single frontmost', async () => {
    mountProvider()
    api!.show({ title: 'A' })
    api!.show({ title: 'B' })
    await nextTick()
    const toasts = document.querySelectorAll('[data-slot="toast"]')
    expect(toasts).toHaveLength(2)
    expect(document.querySelectorAll('[data-slot="toast"][data-frontmost="true"]')).toHaveLength(1)
    const indexes = Array.from(toasts).map((el) => el.getAttribute('data-index'))
    expect(new Set(indexes)).toEqual(new Set(['0', '1']))
  })

  it('marks a dismissed toast with data-exiting before removing it', async () => {
    mountProvider()
    const id = api!.show({ title: 'Hi' })
    await nextTick()
    api!.close(id)
    await nextTick()
    expect(document.querySelector('[data-slot="toast"]')?.getAttribute('data-exiting')).toBe('true')
    await delay(400)
    await nextTick()
    expect(document.querySelectorAll('[data-slot="toast"]')).toHaveLength(0)
  })

  it('closes a toast via its close button', async () => {
    mountProvider()
    api!.show({ title: 'Hi' })
    await nextTick()
    document.querySelector<HTMLButtonElement>('[data-slot="toast-close"]')?.click()
    await nextTick()
    expect(document.querySelector('[data-slot="toast"]')?.getAttribute('data-exiting')).toBe('true')
    await delay(400)
    await nextTick()
    expect(document.querySelectorAll('[data-slot="toast"]')).toHaveLength(0)
  })

  it('closeAll clears every toast', async () => {
    mountProvider()
    api!.show({ title: 'A' })
    api!.show({ title: 'B' })
    await nextTick()
    expect(document.querySelectorAll('[data-slot="toast"]')).toHaveLength(2)
    api!.closeAll()
    await delay(400)
    await nextTick()
    expect(document.querySelectorAll('[data-slot="toast"]')).toHaveLength(0)
  })

  it('exposes gap and width through region CSS variables', () => {
    mount(ToastProvider, {
      props: { gap: 20, width: 320 },
      slots: { default: '<div>app</div>' },
      attachTo: document.body,
    })
    const region = document.querySelector<HTMLElement>('[data-slot="toast-region"]')
    expect(region?.style.getPropertyValue('--gap')).toBe('20px')
    expect(region?.style.getPropertyValue('--toast-width')).toBe('320px')
  })
})
