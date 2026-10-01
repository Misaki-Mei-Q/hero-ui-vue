import { Button } from '@heroui/react'

const VARIANTS = ['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'danger', 'danger-soft'] as const
const SIZES = ['sm', 'md', 'lg'] as const

export function ButtonCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Variants</h3>
        <div className="compare-grid">
          {VARIANTS.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Sizes</h3>
        <div className="compare-grid">
          {SIZES.map((size) => (
            <Button key={size} size={size}>
              {size}
            </Button>
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">States</h3>
        <div className="compare-grid">
          <Button isDisabled>disabled</Button>
          <Button isPending>pending</Button>
          <Button isIconOnly aria-label="icon-only">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="1em" height="1em">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Button>
          <Button fullWidth>full width</Button>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Variant × size matrix</h3>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          {VARIANTS.map((variant) => (
            <div key={variant} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ width: '6rem', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{variant}</span>
              {SIZES.map((size) => (
                <Button key={size} variant={variant} size={size}>
                  {size}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}