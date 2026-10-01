import { Spinner } from '@heroui/react'

const COLORS = ['current', 'accent', 'success', 'warning', 'danger'] as const
const SIZES = ['sm', 'md', 'lg', 'xl'] as const

export function SpinnerCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Colors</h3>
        <div className="compare-grid">
          {COLORS.map((color) => (
            <Spinner key={color} color={color as any} />
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Sizes</h3>
        <div className="compare-grid" style={{ alignItems: 'center' }}>
          {SIZES.map((size) => (
            <Spinner key={size} size={size} />
          ))}
        </div>
      </section>
    </div>
  )
}