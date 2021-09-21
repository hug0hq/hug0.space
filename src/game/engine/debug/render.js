import { useEffect } from 'react'
import Two from 'two.js'
import Matter from 'matter-js'

import { useRender, usePhysics } from '../utils'

export const RenderDebug = () => {
  const engine = usePhysics()
  const two = useRender()

  useEffect(() => {
    if (!two || !engine) return

    console.log('debug render:', two.type)
    var bodies = Matter.Composite.allBodies(engine.world)

    for (var i = 0; i < bodies.length; i += 1) {
      var vertices = bodies[i].vertices

      let points = []

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

      for (var j = 1; j < vertices.length; j += 1) {
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

      let arrowMesh = new Two.Path(points, true, false, true)
      arrowMesh.noFill()
      arrowMesh.linewidth = 2
      arrowMesh.stroke = '#1a9fd8'

      two.add(arrowMesh)
    }
  }, [two, engine])

  return null
}
