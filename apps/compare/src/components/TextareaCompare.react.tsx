import { Description, TextArea } from '@heroui/react'
import { useState } from 'react'

export function TextareaCompare() {
  const [value, setValue] = useState('')

  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Variants</h3>
        <div className="compare-grid" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <TextArea aria-label="primary" placeholder="Primary textarea" variant="primary" />
          <TextArea aria-label="secondary" placeholder="Secondary textarea" variant="secondary" />
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Rows</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <TextArea aria-label="rows-3" placeholder="Short feedback..." rows={3} />
          <TextArea aria-label="rows-6" placeholder="Detailed notes..." rows={6} style={{ resize: 'vertical' }} />
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Controlled with description</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <TextArea
            aria-describedby="textarea-controlled-description"
            aria-label="Announcement"
            placeholder="Compose an announcement..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <Description id="textarea-controlled-description">
            Characters: {value.length} / 280
          </Description>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Disabled</h3>
        <TextArea aria-label="disabled" isDisabled placeholder="Disabled textarea" />
      </section>
    </div>
  )
}