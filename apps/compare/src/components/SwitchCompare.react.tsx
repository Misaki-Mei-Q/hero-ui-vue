import { Switch } from '@heroui/react'
import { useState } from 'react'

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="1em" height="1em">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="1em" height="1em">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
)

export function SwitchCompare() {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Sizes</h3>
        <div className="compare-grid">
          <Switch size="sm" defaultSelected>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Small
            </Switch.Content>
          </Switch>
          <Switch size="md" defaultSelected>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Medium
            </Switch.Content>
          </Switch>
          <Switch size="lg" defaultSelected>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Large
            </Switch.Content>
          </Switch>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">States</h3>
        <div className="compare-grid">
          <Switch>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Off
            </Switch.Content>
          </Switch>
          <Switch defaultSelected>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              On
            </Switch.Content>
          </Switch>
          <Switch isDisabled>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Disabled off
            </Switch.Content>
          </Switch>
          <Switch isDisabled defaultSelected>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Disabled on
            </Switch.Content>
          </Switch>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Controlled</h3>
        <div className="compare-grid">
          <Switch isSelected={checked} onChange={setChecked}>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Controlled ({checked ? 'on' : 'off'})
            </Switch.Content>
          </Switch>
        </div>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Icon inside thumb</h3>
        <div className="compare-grid">
          <Switch defaultSelected aria-label="dark-mode">
            {({ isSelected }) => (
              <Switch.Content>
                <Switch.Control className={isSelected ? 'bg-amber-500' : ''}>
                  <Switch.Thumb>
                    <Switch.Icon>
                      {isSelected ? <SunIcon /> : <MoonIcon />}
                    </Switch.Icon>
                  </Switch.Thumb>
                </Switch.Control>
              </Switch.Content>
            )}
          </Switch>
        </div>
      </section>
    </div>
  )
}