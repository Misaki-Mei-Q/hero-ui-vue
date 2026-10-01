import { Button, Description, FieldError, InputGroup, Label, TextField } from '@heroui/react'
import { useState } from 'react'

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="1em" height="1em">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const EnvelopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="1em" height="1em">
    <rect x="3" y="5" width="18" height="18" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="1em" height="1em">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
)

export function InputGroupCompare() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const EyeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="1em" height="1em">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
  const EyeSlashIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="1em" height="1em">
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )

  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField className="w-[280px]" name="primary">
            <Label>Primary variant</Label>
            <InputGroup variant="primary">
              <InputGroup.Prefix>
                <EnvelopeIcon />
              </InputGroup.Prefix>
              <InputGroup.Input placeholder="name@email.com" />
            </InputGroup>
          </TextField>
          <TextField className="w-[280px]" name="secondary">
            <Label>Secondary variant</Label>
            <InputGroup variant="secondary">
              <InputGroup.Prefix>
                <EnvelopeIcon />
              </InputGroup.Prefix>
              <InputGroup.Input placeholder="name@email.com" />
            </InputGroup>
          </TextField>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Text prefix / suffix (currency)</h3>
        <TextField className="w-[280px]" name="price">
          <Label>Set a price</Label>
          <InputGroup>
            <InputGroup.Prefix>$</InputGroup.Prefix>
            <InputGroup.Input placeholder="0" type="number" />
            <InputGroup.Suffix>USD</InputGroup.Suffix>
          </InputGroup>
          <Description>What customers would pay</Description>
        </TextField>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Icon + text (website)</h3>
        <TextField className="w-[280px]" name="website" defaultValue="heroui">
          <Label>Website</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <GlobeIcon />
            </InputGroup.Prefix>
            <InputGroup.Input />
            <InputGroup.Suffix>.com</InputGroup.Suffix>
          </InputGroup>
        </TextField>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Copy button suffix</h3>
        <TextField className="w-[280px]" name="copy" defaultValue="heroui.com">
          <Label>Website</Label>
          <InputGroup>
            <InputGroup.Input />
            <InputGroup.Suffix className="pe-0">
              <Button isIconOnly aria-label="Copy" size="sm" variant="ghost">
                <CopyIcon />
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Password toggle</h3>
        <TextField className="w-[280px]" name="password">
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              type={passwordVisible ? 'text' : 'password'}
              value={passwordVisible ? '87$2h.3diua' : '••••••••'}
            />
            <InputGroup.Suffix className="pe-0">
              <Button
                isIconOnly
                aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                size="sm"
                variant="ghost"
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <EyeIcon /> : <EyeSlashIcon />}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Invalid</h3>
        <TextField isInvalid isRequired className="w-[280px]" name="email2">
          <Label>Email address</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <EnvelopeIcon />
            </InputGroup.Prefix>
            <InputGroup.Input placeholder="name@email.com" />
          </InputGroup>
          <FieldError>Please enter a valid email address</FieldError>
        </TextField>
      </section>
    </div>
  )
}