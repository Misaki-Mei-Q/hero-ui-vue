import { Link } from '@heroui/react'

export function LinkCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Default</h3>
        <Link href="https://heroui.com" target="_blank">
          External link
        </Link>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Inline</h3>
        <p>
          Read our <Link href="https://heroui.com/docs">docs</Link> for more.
        </p>
      </section>
    </div>
  )
}