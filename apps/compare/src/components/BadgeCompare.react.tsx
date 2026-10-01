import { Badge, BadgeAnchor } from '@heroui/react'

const COLORS = ['default', 'accent', 'success', 'warning', 'danger'] as const
const VARIANTS = ['primary', 'secondary', 'soft'] as const

export function BadgeCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Colors (dot mode)</h3>
        <div className="compare-grid">
          {COLORS.map((color) => (
            <BadgeAnchor key={color}>
              <span style={{ width: '2rem', height: '2rem', display: 'inline-block', background: 'var(--default)', borderRadius: '9999px' }} />
              <Badge color={color} placement="bottom-right" size="sm" />
            </BadgeAnchor>
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Sizes</h3>
        <div className="compare-grid">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <Badge key={size} color="accent" size={size}>
              {size}
            </Badge>
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
                <Badge key={color} variant={variant} color={color} size="sm">
                  {color}
                </Badge>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Placements</h3>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '1rem' }}>
          {(['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const).map((placement) => (
            <BadgeAnchor key={placement}>
              <span style={{ width: '2.5rem', height: '2.5rem', display: 'inline-block', background: 'var(--default)', borderRadius: '9999px' }} />
              <Badge color="accent" placement={placement} size="sm" />
            </BadgeAnchor>
          ))}
        </div>
      </section>
    </div>
  )
}