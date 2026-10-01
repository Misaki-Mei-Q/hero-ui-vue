import { Skeleton } from '@heroui/react'

export function SkeletonCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Default</h3>
        <Skeleton className="h-4 w-48 rounded-sm" />
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Variants</h3>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <Skeleton variant="default" className="h-4 w-48 rounded-sm" />
          <Skeleton variant="shimmer" className="h-4 w-48 rounded-sm" />
          <Skeleton variant="pulse" className="h-4 w-48 rounded-sm" />
          <Skeleton variant="none" className="h-4 w-48 rounded-sm" />
        </div>
      </section>
    </div>
  )
}