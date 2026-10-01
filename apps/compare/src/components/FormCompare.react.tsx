import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react'
import { useState } from 'react'

export function FormCompare() {
  const [submitted, setSubmitted] = useState<{ email?: string; password?: string } | null>(null)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '')
    const password = String(formData.get('password') ?? '')
    setSubmitted({ email, password })
  }

  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">With validation</h3>
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address'
              }
              return null
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return 'Password must be at least 8 characters'
              if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter'
              if (!/[0-9]/.test(value)) return 'Password must contain at least one number'
              return null
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button type="submit">Submit</Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>

          {submitted ? (
            <Description>
              Submitted: {submitted.email || '—'} / {submitted.password ? '••••••' : '—'}
            </Description>
          ) : null}
        </Form>
      </section>
    </div>
  )
}