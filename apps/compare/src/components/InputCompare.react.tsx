import { Input } from '@heroui/react'
import { useState } from 'react'

export function InputCompare() {
  const [value, setValue] = useState('heroui.com')

  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Variants</h3>
        <div className="compare-grid" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
          <Input aria-label="primary" placeholder="Primary input" variant="primary" />
          <Input aria-label="secondary" placeholder="Secondary input" variant="secondary" />
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Full width</h3>
        <div style={{ width: '100%' }}>
          <Input aria-label="Full width" fullWidth placeholder="Full width input" />
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Types (with Label)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label htmlFor="input-type-email-react" style={{ fontSize: '0.85rem' }}>Email</label>
            <Input id="input-type-email-react" placeholder="jane@example.com" type="email" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label htmlFor="input-type-password-react" style={{ fontSize: '0.85rem' }}>Password</label>
            <Input id="input-type-password-react" placeholder="••••••••" type="password" />
          </div>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Disabled & readonly</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Input aria-label="disabled" isDisabled value="Disabled value" />
          <Input aria-label="readonly" isReadOnly value="Read only value" />
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Controlled</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Input
            aria-label="Domain"
            placeholder="domain"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <span style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', paddingInlineStart: '0.25rem' }}>
            https://{value || 'your-domain'}
          </span>
        </div>
      </section>
    </div>
  )
}