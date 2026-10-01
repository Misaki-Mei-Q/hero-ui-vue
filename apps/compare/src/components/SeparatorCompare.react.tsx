import { Separator } from '@heroui/react'

export function SeparatorCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Horizontal</h3>
        <Separator />
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Vertical</h3>
        <div style={{ height: '4rem', display: 'flex', alignItems: 'center' }}>
          <span>Above</span>
          <Separator orientation="vertical" />
          <span>Below</span>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Inside paragraph</h3>
        <p>
          First
          <Separator orientation="vertical" />
          Middle
          <Separator orientation="vertical" />
          Last
        </p>
      </section>
    </div>
  )
}