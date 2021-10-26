import { useCallback, useEffect, useRef, useMemo, useState } from 'react'

import Matter from 'matter-js'
import Two from 'two.js'

import { Ellipse, Group, Path, useApp, useRender } from '../two'
import { useCircle } from '../matter'

const angle = (x, y) => {
  return Math.atan2(y, x) + Math.PI / 2
}

export const Player = () => {
  const app = useApp()
  const arrow = useRef()

  const [mousePosition, setMousePosition] = useState(null)

  useEffect(() => {
    //const bounding = app.renderer.domElement.getBoundingClientRect()
    api.applyForce(0.02 /*0.1*/, {
      x: 0,
      y: app.height - 100,
    })
  }, [])

  //mouse
  useRender(() => {
    //reset player on scroll

    const bounding = app.renderer.domElement.getBoundingClientRect()
    if (Math.abs(bounding.top) < bounding.height) {
      return
    }
    setMousePosition(null)
  })
  const move = useCallback((e) => {
    const bounding = app.renderer.domElement.getBoundingClientRect()

    if (Math.abs(bounding.top) < bounding.height) {
      setMousePosition({
        x: e.clientX - bounding.left,
        y: e.clientY - bounding.top,
      })
    }
  }, [])

  const up = useCallback((e) => {
    window.removeEventListener('pointermove', move)

    const bounding = app.renderer.domElement.getBoundingClientRect()

    if (Math.abs(bounding.top) < bounding.height) {
      if (!api.isMoving())
        api.applyForce(0.8 /*0.1*/, {
          x: e.clientX - bounding.left,
          y: e.clientY - bounding.top,
        })
      setMousePosition(null)
    }
  }, [])

  const down = useCallback((e) => {
    window.addEventListener('pointermove', move)
    const bounding = app.renderer.domElement.getBoundingClientRect()
    if (Math.abs(bounding.top) < bounding.height) {
      setMousePosition({
        x: e.clientX - bounding.left,
        y: e.clientY - bounding.top,
      })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('pointerup', up)
    if (window.matchMedia('(hover: hover)').matches) {
      // do sth
      window.addEventListener('pointerdown', down)
    }

    return () => {
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointerdown', down)
    }
  }, [])

  useEffect(() => {
    if (mousePosition && !api.isMoving()) {
      const deltaVector = Matter.Vector.neg(
        Matter.Vector.sub(mousePosition, body.current.position)
      )
      arrow.current.rotation =
        angle(deltaVector.x, deltaVector.y) - body.current.rotation
      arrow.current.opacity = 1
    } else {
      arrow.current.opacity = 0
    }
  }, [mousePosition])

  const draw = useMemo(() => {
    const height = 50
    return [
      new Two.Anchor(8, 0),
      new Two.Anchor(-8, 0),
      new Two.Anchor(-8, -height),
      new Two.Anchor(0, -height - 10),
      new Two.Anchor(8, -height),
    ]
  }, [])

  const [body, api] = useCircle({
    radius: 12,
    options: {
      restitution: 0.9,
      friction: 0,
      frictionAir: 0.05,
      label: 'ball',
    },
  })

  return (
    <Group ref={body} x={100} y={app.height - 100}>
      <Path ref={arrow} noStroke fill={'#F04D4D'} vertices={draw} />
      <Ellipse width={10} height={10} fill={'#f3f3f3'} noStroke />
      {process.env.NODE_ENV !== 'production' ? (
        <Ellipse
          width={12}
          height={12}
          noFill
          linewidth={2}
          stroke={'#FFED4A'}
        />
      ) : null}
    </Group>
  )
}
