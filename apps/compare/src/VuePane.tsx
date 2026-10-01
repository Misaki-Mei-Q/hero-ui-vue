import { createApp, type Component } from 'vue'
import { useEffect, useRef } from 'react'

interface VuePaneProps {
  component: Component
}

/**
 * Mounts a Vue component inside a React tree so we can render
 * the Vue port side-by-side with the React upstream for visual diffs.
 */
export function VuePane({ component }: VuePaneProps) {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const appRef = useRef<ReturnType<typeof createApp> | null>(null)

  useEffect(() => {
    if (!hostRef.current) return
    const app = createApp(component)
    app.mount(hostRef.current)
    appRef.current = app
    return () => {
      app.unmount()
      appRef.current = null
    }
  }, [component])

  return <div ref={hostRef} data-testid="vue-pane-host" />
}