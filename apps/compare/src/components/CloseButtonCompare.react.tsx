import { CloseButton } from '@heroui/react'

export function CloseButtonCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Default</h3>
        <div className="compare-grid">
          <CloseButton aria-label="Close" />
          <CloseButton aria-label="Disabled" isDisabled />
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Custom icon</h3>
        <div className="compare-grid">
          <CloseButton aria-label="Custom">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="1em" height="1em">
              <circle cx="12" cy="12" r="10" />
              <path d="M15 9 9 15" />
              <path d="M9 9l6 6" />
            </svg>
          </CloseButton>
        </div>
      </section>
    </div>
  )
}