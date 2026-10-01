import { Description, FieldError, Input, Label, TextArea, TextField } from '@heroui/react'
import { useState } from 'react'

export function TextFieldCompare() {
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const isUsernameInvalid = username.length > 0 && username.length < 3
  const isBioInvalid = bio.length > 0 && bio.length < 20

  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Basic</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField className="w-full max-w-64" name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField className="w-full max-w-64" name="username">
            <Label>Username</Label>
            <Input placeholder="jane_doe" />
            <Description>Choose a unique username for your account</Description>
          </TextField>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Required</h3>
        <TextField isRequired className="w-full max-w-64" name="fullName">
          <Label>Full Name</Label>
          <Input placeholder="John Doe" />
          <Description>This field is required</Description>
        </TextField>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Disabled & Invalid</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField isDisabled className="w-full max-w-64" name="accountId" value="USR-12345">
            <Label>Account ID</Label>
            <Input placeholder="Auto-generated" />
            <Description>This field cannot be edited</Description>
          </TextField>
          <TextField isInvalid isRequired className="w-full max-w-64" name="password" type="password">
            <Label>Password</Label>
            <Input />
            <FieldError>Password must be longer than 8 characters</FieldError>
          </TextField>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Validation (controlled)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField
            isRequired
            isInvalid={isUsernameInvalid}
            name="username"
            value={username}
            onChange={setUsername}
          >
            <Label>Username</Label>
            <Input placeholder="jane_doe" />
            {isUsernameInvalid ? (
              <FieldError>Username must be at least 3 characters.</FieldError>
            ) : (
              <Description>Choose a unique username for your profile.</Description>
            )}
          </TextField>

          <TextField isRequired isInvalid={isBioInvalid} name="bio" value={bio} onChange={setBio}>
            <Label>Bio</Label>
            <TextArea placeholder="Tell us about yourself..." />
            {isBioInvalid ? (
              <FieldError>Bio must contain at least 20 characters.</FieldError>
            ) : (
              <Description>Minimum 20 characters ({bio.length}/20).</Description>
            )}
          </TextField>
        </div>
      </section>
    </div>
  )
}