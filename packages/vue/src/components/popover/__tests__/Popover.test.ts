import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { Popover } from '../index'

async function flush() {
  await nextTick()
  await new Promise((r) => setTimeout(r, 0))
}

afterEach(() => {
  document.body.innerHTML = ''
})

describe('Popover', () => {
  it('renders trigger slot without opening content by default', () => {
    mount(Popover, {
      props: { title: 'Title' },
      slots: { trigger: '<button>Open</button>' },
      attachTo: document.body,
    })

    expect(document.body.textContent).toContain('Open')
    expect(document.body.textContent).not.toContain('Title')
  })

  it('renders content when open is true', async () => {
    mount(Popover, {
      props: { open: true, title: 'Popover title' },
      slots: { default: '<span>Body text</span>', trigger: '<button>T</button>' },
      attachTo: document.body,
    })

    await flush()

    expect(document.body.textContent).toContain('Popover title')
    expect(document.body.textContent).toContain('Body text')
    expect(document.querySelector('[data-slot="popover"]')).not.toBeNull()
  })

  it('renders an arrow when arrow prop is true', async () => {
    mount(Popover, {
      props: { open: true, arrow: true },
      slots: { default: 'x', trigger: '<button>T</button>' },
      attachTo: document.body,
    })

    await flush()
    expect(document.querySelector('[data-slot="popover-overlay-arrow"]')).not.toBeNull()
  })

  it('passes placement to Radix Content as side', async () => {
    mount(Popover, {
      props: { open: true, placement: 'right' },
      slots: { default: 'x', trigger: '<button>T</button>' },
      attachTo: document.body,
    })

    await flush()
    const popover = document.querySelector('[data-slot="popover"]')
    expect(popover?.getAttribute('data-side')).toBe('right')
  })

  it('forwards open state via update:open', async () => {
    mount(Popover, {
      props: { defaultOpen: true },
      slots: { default: 'x', trigger: '<button>T</button>' },
      attachTo: document.body,
    })

    await flush()
    expect(document.querySelector('[data-slot="popover"]')).not.toBeNull()
  })

  it('renders heading from title prop', async () => {
    mount(Popover, {
      props: { open: true, title: 'Hello Heading' },
      slots: { default: 'body', trigger: '<button>T</button>' },
      attachTo: document.body,
    })

    await flush()
    expect(document.body.textContent).toContain('Hello Heading')
    expect(document.querySelector('[data-slot="popover-heading"]')).not.toBeNull()
  })

  it('renders close slot when provided', async () => {
    mount(Popover, {
      props: { open: true },
      slots: {
        default: 'body',
        trigger: '<button>T</button>',
        close: '<button>Close me</button>',
      },
      attachTo: document.body,
    })

    await flush()
    expect(document.body.textContent).toContain('Close me')
  })

  it('merges custom class with popover base class', async () => {
    mount(Popover, {
      props: { open: true, contentClass: 'shadow-2xl' },
      slots: { default: 'x', trigger: '<button>T</button>' },
      attachTo: document.body,
    })

    await flush()
    const popover = document.querySelector('[data-slot="popover"]')
    expect(popover?.classList.contains('shadow-2xl')).toBe(true)
    expect(popover?.classList.contains('popover')).toBe(true)
  })
})