import { Meter } from '@heroui/react'

const COLORS = ['default', 'accent', 'success', 'warning', 'danger'] as const
const SIZES = ['sm', 'md', 'lg'] as const

export function MeterCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Default at 45%</h3>
        <Meter value={45} />
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Colors</h3>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {COLORS.map((color) => (
            <Meter key={color} color={color} value={70} />
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Sizes</h3>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {SIZES.map((size) => (
            <Meter key={size} size={size} value={60} />
          ))}
        </div>
      </section>
    </div>
  )
}