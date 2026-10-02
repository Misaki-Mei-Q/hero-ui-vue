import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { defineComponent, h, nextTick } from 'vue'
import { ToastProvider, useToast } from '../index'
import { toastQueue } from '../queue'

enableAutoUnmount(afterEach)

beforeEach(() => {
  toastQueue.closeAll()
})

function mountWithToastApi() {
  let api: ReturnType<typeof useToast> | null = null
  const Child = defineComponent({
    setup() {
      api = useToast()
      return () => h('span', 'child')
    },
  })
  mount(ToastProvider, {
    slots: { default: () => h(Child) },
    attachTo: document.body,
  })
  return api as unknown as ReturnType<typeof useToast>
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

  it('exposes a global toast api outside the provider', () => {
    const api = mountWithToastApi()
    expect(api).not.toBeNull()
    expect(typeof api.show).toBe('function')
  })

  it('renders a toast added through the global api', async () => {
    const wrapper = mount(ToastProvider, {
      slots: { default: '<div>app</div>' },
      attachTo: document.body,
    })
    toastQueue.show({ title: 'Hi', description: 'World' })
    await nextTick()
    const toast = document.querySelector('[data-slot="toast"]')
    expect(toast).not.toBeNull()
    expect(toast?.textContent).toContain('Hi')
    expect(toast?.textContent).toContain('World')
    expect(toast?.getAttribute('data-frontmost')).toBe('true')
    expect(toast?.getAttribute('data-index')).toBe('0')
    void wrapper
  })

  it('applies the variant class to a toast', async () => {
    mount(ToastProvider, { slots: { default: '<div>app</div>' }, attachTo: document.body })
    toastQueue.show({ title: 'Saved', variant: 'success' })
    await nextTick()
    const toast = document.querySelector('[data-slot="toast"]')
    expect(toast?.classList.contains('toast--success')).toBe(true)
    expect(document.querySelector('[data-slot="toast-indicator"]')).not.toBeNull()
  })

  it('stacks toasts with increasing indexes and a single frontmost', async () => {
    mount(ToastProvider, { slots: { default: '<div>app</div>' }, attachTo: document.body })
    toastQueue.show({ title: 'A' })
    toastQueue.show({ title: 'B' })
    await nextTick()
    const toasts = document.querySelectorAll('[data-slot="toast"]')
    expect(toasts).toHaveLength(2)
    const frontmost = document.querySelectorAll('[data-slot="toast"][data-frontmost="true"]')
    expect(frontmost).toHaveLength(1)
    const indexes = Array.from(toasts).map((el) => el.getAttribute('data-index'))
    expect(new Set(indexes)).toEqual(new Set(['0', '1']))
  })

  it('closes a toast through the api', async () => {
    mount(ToastProvider, { slots: { default: '<div>app</div>' }, attachTo: document.body })
    const id = toastQueue.show({ title: 'Hi' })
    await nextTick()
    expect(document.querySelectorAll('[data-slot="toast"]')).toHaveLength(1)
    toastQueue.close(id)
    await nextTick()
    expect(document.querySelectorAll('[data-slot="toast"]')).toHaveLength(0)
  })

  it('closes a toast via its close button', async () => {
    mount(ToastProvider, { slots: { default: '<div>app</div>' }, attachTo: document.body })
    toastQueue.show({ title: 'Hi' })
    await nextTick()
    const closeButton = document.querySelector<HTMLButtonElement>('[data-slot="toast-close"]')
    closeButton?.click()
    await nextTick()
    expect(document.querySelectorAll('[data-slot="toast"]')).toHaveLength(0)
  })

  it('closeAll clears every toast', async () => {
    mount(ToastProvider, { slots: { default: '<div>app</div>' }, attachTo: document.body })
    toastQueue.show({ title: 'A' })
    toastQueue.show({ title: 'B' })
    await nextTick()
    expect(document.querySelectorAll('[data-slot="toast"]')).toHaveLength(2)
    toastQueue.closeAll()
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
