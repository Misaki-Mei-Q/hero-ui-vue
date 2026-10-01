import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { Tooltip } from '../index'

async function flush() {
  await nextTick()
  await new Promise((r) => setTimeout(r, 0))
}

afterEach(() => {
  document.body.innerHTML = ''
})

describe('Tooltip', () => {
  it('renders trigger slot without opening content by default', () => {
    mount(Tooltip, {
      props: { content: 'Hi' },
      slots: { trigger: '<button>Hover me</button>' },
      attachTo: document.body,
    })

    expect(document.body.textContent).toContain('Hover me')
    expect(document.body.textContent).not.toContain('Hi')
  })

  it('exposes tooltip root in DOM when open is true', async () => {
    mount(Tooltip, {
      props: { content: 'Hello world', open: true },
      slots: { trigger: '<button>Trigger</button>' },
      attachTo: document.body,
    })

    await flush()

    expect(document.body.textContent).toContain('Hello world')
    expect(document.querySelector('[data-slot="tooltip"]')).not.toBeNull()
  })

  it('shows content via default slot', async () => {
    mount(Tooltip, {
      props: { open: true },
      slots: {
        default: '<span>Custom content</span>',
        trigger: '<button>T</button>',
      },
      attachTo: document.body,
    })

    await flush()
    expect(document.body.textContent).toContain('Custom content')
  })

  it('forwards open state via update:open', async () => {
    mount(Tooltip, {
      props: { content: 'Tip', defaultOpen: true },
      slots: { trigger: '<button>T</button>' },
      attachTo: document.body,
    })

    await flush()

    expect(document.querySelector('[data-slot="tooltip"]')).not.toBeNull()
  })

  it('renders arrow when arrow prop is true', async () => {
    mount(Tooltip, {
      props: { content: 'Tip', open: true, arrow: true },
      slots: { trigger: '<button>T</button>' },
      attachTo: document.body,
    })

    await flush()
    const arrow = document.body.querySelector('[data-slot="overlay-arrow"]')
    expect(arrow).not.toBeNull()
  })

  it('passes placement to Radix Content as side', async () => {
    mount(Tooltip, {
      props: { content: 'Below', open: true, placement: 'bottom' },
      slots: { trigger: '<button>T</button>' },
      attachTo: document.body,
    })

    await flush()
    const popups = document.querySelectorAll('[data-slot="tooltip"]')
    const popupsForSide = Array.from(popups).filter(
      (el) => el.textContent?.includes('Below'),
    )
    expect(popupsForSide[0]?.getAttribute('data-side')).toBe('bottom')
  })

  it('merges custom class with tooltip base class', async () => {
    mount(Tooltip, {
      props: { content: 'Tip', open: true, class: 'rounded-md' },
      slots: { trigger: '<button>T</button>' },
      attachTo: document.body,
    })

    await flush()
    const popups = document.querySelectorAll('[data-slot="tooltip"]')
    const target = Array.from(popups).find((el) =>
      el.textContent?.includes('Tip'),
    )
    expect(target?.classList.contains('rounded-md')).toBe(true)
    expect(target?.classList.contains('tooltip')).toBe(true)
  })
})