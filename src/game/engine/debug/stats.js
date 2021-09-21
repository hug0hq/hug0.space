import { useEffect } from 'react'

import Stats from 'stats.js'

export const useStats = (render) => {
  useEffect(() => {
    if (!render) return

    const update = (frameCount) => {
      stats.begin()
      stats.end()
    }

    render.bind('update', update)

    const stats = new Stats()
    document.body.appendChild(stats.dom)

    return () => {
      render.unbind('update')
      render.pause()

      document.body.removeChild(stats.dom)
    }
  }, [render])
}
