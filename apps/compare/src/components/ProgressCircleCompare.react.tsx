import { ProgressCircle } from '@heroui/react'

const COLORS = ['default', 'accent', 'success', 'warning', 'danger'] as const
const SIZES = ['sm', 'md', 'lg'] as const

export function ProgressCircleCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Determinate at 65%</h3>
        <ProgressCircle value={65} />
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Indeterminate</h3>
        <ProgressCircle />
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Colors</h3>
        <div className="compare-grid" style={{ alignItems: 'center' }}>
          {COLORS.map((color) => (
            <ProgressCircle key={color} color={color} value={70} />
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Sizes</h3>
        <div className="compare-grid" style={{ alignItems: 'center' }}>
          {SIZES.map((size) => (
            <ProgressCircle key={size} size={size} value={60} />
          ))}
        </div>
      </section>
    </div>
  )
}