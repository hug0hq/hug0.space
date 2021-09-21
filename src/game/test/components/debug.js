import { useEffect, useState } from 'react'
import { useApp, useRender } from '../util'

import Two from 'two.js'
import Stats from 'stats.js'


export const Debug = (props) => {
  const app = useApp()
  const [stats] = useState(new Stats())

  useRender((frameCount) => {
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
