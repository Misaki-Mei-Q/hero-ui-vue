import { ProgressBar } from '@heroui/react'

const COLORS = ['default', 'accent', 'success', 'warning', 'danger'] as const
const SIZES = ['sm', 'md', 'lg'] as const

export function ProgressBarCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Determinate at 50%</h3>
        <ProgressBar value={50} />
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Indeterminate</h3>
        <ProgressBar />
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Colors</h3>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {COLORS.map((color) => (
            <ProgressBar key={color} color={color} value={70} />
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Sizes</h3>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {SIZES.map((size) => (
            <ProgressBar key={size} size={size} value={60} />
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Disabled</h3>
        <ProgressBar value={40} isDisabled />
      </section>
    </div>
  )
}