import { InputOTP } from '@heroui/react'
import { useState } from 'react'

export function InputOTPCompare() {
  const [value, setValue] = useState('')

  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">6-digit with separator</h3>
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
          </InputOTP.Group>
          <InputOTP.Separator />
          <InputOTP.Group>
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
          </InputOTP.Group>
        </InputOTP>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">4-digit</h3>
        <InputOTP maxLength={4}>
          <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
            <InputOTP.Slot index={3} />
          </InputOTP.Group>
        </InputOTP>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Disabled</h3>
        <InputOTP maxLength={6} isDisabled defaultValue="123456">
          <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
          </InputOTP.Group>
          <InputOTP.Separator />
          <InputOTP.Group>
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
          </InputOTP.Group>
        </InputOTP>
      </section>
    </div>
  )
}