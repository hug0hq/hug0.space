import { useEffect, useState, useRef } from 'react'
import { useApp, useRender, usePhysics } from '../util'

import Two from 'two.js'
import Stats from 'stats.js'
import Matter from 'matter-js'
import { update } from 'lodash'

export const Debug = (props) => {
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

  const app = useApp()
  const engine = usePhysics()

  console.log('debug render:', app.type)

  const [lib, setLib] = useState([])

  const debugGroup = useRef(null)
  //let tmplib = []

  useRender((frameCount) => {
    return
    //if (frameCount > 2) return

    /* if (!debugGroup.current) {
      debugGroup.current = new Two.Group()
      app.add(debugGroup.current)
    } else { */
    app.remove(debugGroup.current)
    debugGroup.current = new Two.Group()
    app.add(debugGroup.current)
    // }

    //console.log('render')

    const bodies = Matter.Composite.allBodies(engine.world)
    for (let i = 0; i < bodies.length; i += 1) {
      const vertices = bodies[i].vertices

      const points = []
      points.push(
        new Two.Anchor(
          vertices[0].x,
          vertices[0].y,
          0,
          0,
          0,
          0,
          Two.Commands.move,
        ),
      )

      for (let j = 1; j < vertices.length; j += 1) {
        points.push(
          new Two.Anchor(
            vertices[j].x,
            vertices[j].y,
            0,
            0,
            0,
            0,
            Two.Commands.line,
          ),
        )
      }
      points.push(
        new Two.Anchor(
          vertices[0].x,
          vertices[0].y,
          0,
          0,
          0,
          0,
          Two.Commands.line,
        ),
      )

      const box = new Two.Path(points, true, false, true)
      box.noFill()
      box.linewidth = 2
      box.stroke = '#1a9fd8'

      //const group =
      /* if (!debugGroup.current) {
        const dg = new Two.Group()
        app.add(dg)
        debugGroup.current = dg
      } */

      debugGroup.current.add(box)
      //tmplib.push(box)
    }

    //app.remove(debugGroup.current)

    /* if (!engine) {
      return
    } */
  }) //, [app, engine])

  return null
}
