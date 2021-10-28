import { useEffect, useState } from 'react'
import * as StatsJs from 'stats.js'

import { useRender } from '../two'

export const Stats = () => {
  const [stats] = useState(new StatsJs())

  useRender(() => {
    stats.begin()
    stats.end()
  })

  useEffect(() => {
    document.body.appendChild(stats.dom)
    return () => {
      document.body.removeChild(stats.dom)
    }
  }, [stats.dom])

  return null
}
