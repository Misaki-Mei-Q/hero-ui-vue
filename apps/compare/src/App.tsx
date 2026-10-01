import { useState } from 'react'
import type { Component as ReactComponent, ComponentType } from 'react'
import { VuePane } from './VuePane'

import { ButtonCompare as ReactButtonMatrix } from './components/ButtonCompare.react'
import { BadgeCompare as ReactBadgeMatrix } from './components/BadgeCompare.react'
import { ChipCompare as ReactChipMatrix } from './components/ChipCompare.react'
import { CloseButtonCompare as ReactCloseButtonMatrix } from './components/CloseButtonCompare.react'
import { KbdCompare as ReactKbdMatrix } from './components/KbdCompare.react'
import { SeparatorCompare as ReactSeparatorMatrix } from './components/SeparatorCompare.react'
import { SkeletonCompare as ReactSkeletonMatrix } from './components/SkeletonCompare.react'
import { SpinnerCompare as ReactSpinnerMatrix } from './components/SpinnerCompare.react'
import { ProgressBarCompare as ReactProgressBarMatrix } from './components/ProgressBarCompare.react'
import { ProgressCircleCompare as ReactProgressCircleMatrix } from './components/ProgressCircleCompare.react'
import { MeterCompare as ReactMeterMatrix } from './components/MeterCompare.react'
import { LinkCompare as ReactLinkMatrix } from './components/LinkCompare.react'

import VueButtonCompare from './components/ButtonCompare.vue'
import VueBadgeCompare from './components/BadgeCompare.vue'
import VueChipCompare from './components/ChipCompare.vue'
import VueCloseButtonCompare from './components/CloseButtonCompare.vue'
import VueKbdCompare from './components/KbdCompare.vue'
import VueSeparatorCompare from './components/SeparatorCompare.vue'
import VueSkeletonCompare from './components/SkeletonCompare.vue'
import VueSpinnerCompare from './components/SpinnerCompare.vue'
import VueProgressBarCompare from './components/ProgressBarCompare.vue'
import VueProgressCircleCompare from './components/ProgressCircleCompare.vue'
import VueMeterCompare from './components/MeterCompare.vue'
import VueLinkCompare from './components/LinkCompare.vue'

interface CompareEntry {
  id: string
  title: string
  react: ComponentType
  vue: ComponentType
}

const ENTRIES: CompareEntry[] = [
  { id: 'button', title: 'Button', react: ReactButtonMatrix, vue: VueButtonCompare },
  { id: 'badge', title: 'Badge', react: ReactBadgeMatrix, vue: VueBadgeCompare },
  { id: 'chip', title: 'Chip', react: ReactChipMatrix, vue: VueChipCompare },
  { id: 'close-button', title: 'CloseButton', react: ReactCloseButtonMatrix, vue: VueCloseButtonCompare },
  { id: 'kbd', title: 'Kbd', react: ReactKbdMatrix, vue: VueKbdCompare },
  { id: 'separator', title: 'Separator', react: ReactSeparatorMatrix, vue: VueSeparatorCompare },
  { id: 'skeleton', title: 'Skeleton', react: ReactSkeletonMatrix, vue: VueSkeletonCompare },
  { id: 'spinner', title: 'Spinner', react: ReactSpinnerMatrix, vue: VueSpinnerCompare },
  { id: 'progress-bar', title: 'ProgressBar', react: ReactProgressBarMatrix, vue: VueProgressBarCompare },
  { id: 'progress-circle', title: 'ProgressCircle', react: ReactProgressCircleMatrix, vue: VueProgressCircleCompare },
  { id: 'meter', title: 'Meter', react: ReactMeterMatrix, vue: VueMeterCompare },
  { id: 'link', title: 'Link', react: ReactLinkMatrix, vue: VueLinkCompare },
]

function App() {
  const [activeId, setActiveId] = useState(ENTRIES[0].id)
  const active = ENTRIES.find((entry) => entry.id === activeId) ?? ENTRIES[0]
  const VueComponent = active.vue
  const ReactCompareComponent = active.react

  return (
    <div>
      <nav className="compare-nav">
        <strong style={{ alignSelf: 'center', marginRight: '0.5rem' }}>HeroUI parity</strong>
        {ENTRIES.map((entry) => (
          <a
            key={entry.id}
            href={`#${entry.id}`}
            className="compare-nav__link"
            data-active={entry.id === activeId || undefined}
            onClick={(event) => {
              event.preventDefault()
              setActiveId(entry.id)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            {entry.title}
          </a>
        ))}
      </nav>

      <div className="compare-shell">
        <section className="compare-pane" aria-label="React upstream">
          <header className="compare-pane__header">
            <h2 className="compare-pane__title">@heroui/react@3.2.x</h2>
            <span className="compare-pane__badge">upstream</span>
          </header>
          <ReactCompareComponent />
        </section>

        <section className="compare-pane" aria-label="Vue port">
          <header className="compare-pane__header">
            <h2 className="compare-pane__title">@misaki-mei/heroui-vue</h2>
            <span className="compare-pane__badge">local</span>
          </header>
          <VuePane component={VueComponent as ReactComponent<{}>} />
        </section>
      </div>
    </div>
  )
}

export { App }