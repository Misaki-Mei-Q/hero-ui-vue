import { afterEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { ToastProvider, useToast } from '../index'

afterEach(() => {
  document.body.innerHTML = ''
})

describe('Toast', () => {
  it('renders the provider without throwing', () => {
    expect(() =>
      mount(ToastProvider, { slots: { default: '<div>app</div>' } }),
    ).not.toThrow()
  })

  it('renders a viewport region in the DOM', () => {
    mount(ToastProvider, {
      slots: { default: '<div>app</div>' },
      attachTo: document.body,
    })
    const region = document.querySelector('[data-slot="toast-region"]')
    expect(region).not.toBeNull()
  })

  it('merges custom class with toast region', () => {
    mount(ToastProvider, {
      props: { class: 'rounded-md' },
      slots: { default: '<div>app</div>' },
      attachTo: document.body,
    })
    const region = document.querySelector('[data-slot="toast-region"]')
    expect(region?.classList.contains('rounded-md')).toBe(true)
  })

  it('respects placement prop via variant class', () => {
    mount(ToastProvider, {
      props: { placement: 'top' },
      slots: { default: '<div>app</div>' },
      attachTo: document.body,
    })
    const region = document.querySelector('[data-slot="toast-region"]')
    expect(region?.classList.contains('toast-region--top')).toBe(true)
  })

  function withToastApi(
    setupFn: (api: NonNullable<ReturnType<typeof useToast>>) => void,
  ): NonNullable<ReturnType<typeof useToast>> | null {
    let captured: ReturnType<typeof useToast> = null
    const Child = defineComponent({
      setup() {
        captured = useToast()
        if (captured) setupFn(captured as NonNullable<ReturnType<typeof useToast>>)
        return () => h('span', null, 'child')
      },
    })
    mount(ToastProvider, {
      slots: { default: () => h(Child) },
      attachTo: document.body,
    })
    return captured as NonNullable<ReturnType<typeof useToast>> | null
  }

  it('exposes a useToast composable when mounted inside the provider', () => {
    const api = withToastApi(() => {})
    expect(api).not.toBeNull()
  })

  it('returns null when useToast is called outside provider', () => {
    let returnedApi: ReturnType<typeof useToast> = 'not-null' as unknown as ReturnType<typeof useToast>
    const Child = defineComponent({
      setup() {
        returnedApi = useToast()
        return () => h('span')
      },
    })
    mount(Child, { attachTo: document.body })
    expect(returnedApi).toBeNull()
  })

  it('shows a toast via the show() API', () => {
    const api = withToastApi(() => {})
    expect(api).not.toBeNull()
    if (!api) return
    api.show({ title: 'Hi', description: 'World' })
    expect(api.toasts.value.length).toBe(1)
  })

  it('closes a toast via the close() API', () => {
    const api = withToastApi(() => {})
    expect(api).not.toBeNull()
    if (!api) return
    const id = api.show({ title: 'Hi' })
    expect(api.toasts.value.length).toBe(1)
    api.close(id)
    expect(api.toasts.value.length).toBe(0)
  })

  it('closeAll clears all toasts', () => {
    const api = withToastApi(() => {})
    expect(api).not.toBeNull()
    if (!api) return
    api.show({ title: 'A' })
    api.show({ title: 'B' })
    expect(api.toasts.value.length).toBe(2)
    api.closeAll()
    expect(api.toasts.value.length).toBe(0)
  })

  it('respects duration prop', () => {
    const wrapper = mount(ToastProvider, {
      props: { duration: 1500 },
      slots: { default: '<div>app</div>' },
    })
    expect(wrapper.props('duration')).toBe(1500)
  })
})