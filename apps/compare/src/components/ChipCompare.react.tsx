import { Chip } from '@heroui/react'

const COLORS = ['default', 'accent', 'success', 'warning', 'danger'] as const
const VARIANTS = ['primary', 'secondary', 'tertiary', 'soft'] as const
const SIZES = ['sm', 'md', 'lg'] as const

export function ChipCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Colors</h3>
        <div className="compare-grid">
          {COLORS.map((color) => (
            <Chip key={color} color={color}>
              {color}
            </Chip>
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Sizes</h3>
        <div className="compare-grid">
          {SIZES.map((size) => (
            <Chip key={size} size={size}>
              {size}
            </Chip>
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Variant × color matrix</h3>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          {VARIANTS.map((variant) => (
            <div key={variant} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ width: '5rem', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{variant}</span>
              {COLORS.map((color) => (
                <Chip key={color} variant={variant} color={color}>
                  {color}
                </Chip>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}