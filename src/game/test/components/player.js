import { useCallback, useEffect, useRef, useMemo, useState } from 'react'
import { Ellipse, Group, Path } from '../type'
import { useApp, useRender } from '../util'

import Matter from 'matter-js'
import Two from 'two.js'

import { useCircle } from './physics'

const angle = (x, y) => {
  return Math.atan2(y, x) + Math.PI / 2
}

export const Player = (props) => {
  const app = useApp()
  const arrow = useRef()

  const [pointerDown, setPointerDown] = useState(false)

  const [rotationAngle, setRotationAngle] = useState(0)
  const [mousePosition, setMousePosition] = useState(null)

  //mouse
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
        api.applyForce(0.9 /*0.1*/, {
          x: e.clientX - bounding.left,
          y: e.clientY - bounding.top,
        })
      setMousePosition(null)
      //setPointerDown(false)
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

    //setPointerDown(true)
  }, [])

  useEffect(() => {
    //window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointerdown', down)

    return () => {
      //window.addEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointerdown', down)
    }
  }, [])

  useRender((frameCount) => {
    //if (mousePosition) {
    //return
    //let deltaVector = Matter.Vector.sub(mousePosition, body.current.position)
    //Matter.Vector.neg( //)
    // arrow.current.rotation = rotationAngle
    // setRotationAngle(angle(deltaVector.x, deltaVector.y))
    //}
  })

  useEffect(() => {
    if (mousePosition && !api.isMoving()) {
      const deltaVector = Matter.Vector.neg(
        Matter.Vector.sub(mousePosition, body.current.position),
      )

      arrow.current.rotation =
        angle(deltaVector.x, deltaVector.y) - body.current.rotation
      arrow.current.opacity = 1
    } else {
      arrow.current.opacity = 0
    }
  }, [mousePosition])

  const draw = useMemo(() => {
    const height = 40
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
      collisionFilter: {
        category: '0x0002',
      },
    },
  })

  return (
    <Group ref={body} x={100} y={app.height - 100}>
      <Path ref={arrow} noStroke fill={'#F04D4D'} vertices={draw} />
      <Ellipse width={10} height={10} fill={'#f3f3f3'} noStroke />
    </Group>
  )
}
