import { Kbd } from '@heroui/react'

export function KbdCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Single keys</h3>
        <div className="compare-grid">
          <Kbd>Esc</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Combinations</h3>
        <div className="compare-grid" style={{ alignItems: 'center' }}>
          <p style={{ display: 'flex', gap: '0.25rem', alignItems: 'center', margin: 0 }}>
            <Kbd>Ctrl</Kbd>+<Kbd>C</Kbd>to copy
          </p>
          <p style={{ display: 'flex', gap: '0.25rem', alignItems: 'center', margin: 0 }}>
            <Kbd>Cmd</Kbd>+<Kbd>V</Kbd>to paste
          </p>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Variants</h3>
        <div className="compare-grid">
          <Kbd>default</Kbd>
          <Kbd variant="light">light</Kbd>
        </div>
      </section>
    </div>
  )
}