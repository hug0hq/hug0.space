import { useCallback, useEffect, useRef, useMemo, useState } from 'react'
import { Ellipse, Group, Path } from '../type'
import { useApp, useRender } from '../util'

import Matter from 'matter-js'
import Two from 'two.js'

const angle = (x, y) => {
  return Math.atan2(y, x) + Math.PI / 2
}

export const Player = (props) => {
  const app = useApp()

  const [height, setHeight] = useState(40)
  const [pointerDown, setPointerDown] = useState(false)

  const [rotationAngle, setRotationAngle] = useState(0)
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  //mouse
  const move = useCallback(
    (e) => {
      const bounding = app.renderer.domElement.getBoundingClientRect()

      if (Math.abs(bounding.top) < bounding.height) {
        setMousePosition({
          x: e.clientX - bounding.left,
          y: e.clientY - bounding.top,
        })
      }
    },
    [app],
  )
  const up = useCallback((e) => {
    const bounding = app.renderer.domElement.getBoundingClientRect()

    if (Math.abs(bounding.top) < bounding.height) {
      console.log('up')
      setPointerDown(false)
    }
  }, [])

  const down = useCallback((e) => {
    const bounding = app.renderer.domElement.getBoundingClientRect()

    if (Math.abs(bounding.top) < bounding.height) {
      console.log('down')
      setPointerDown(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointerdown', down)

    return () => {
      window.addEventListener('pointermove', move)
      window.addEventListener('pointerup', up)
      window.addEventListener('pointerdown', down)
    }
  }, [move, up, down])

  useRender((frameCount) => {
    if (mousePosition) {
      let deltaVector = Matter.Vector.sub(
        mousePosition,
        player.current.position,
      )
      setRotationAngle(angle(deltaVector.x, deltaVector.y))
    }
  })

  const arrow = useRef()
  const player = useRef()
  useEffect(() => {
    arrow.current.rotation = rotationAngle
  }, [arrow, rotationAngle])

  useEffect(() => {
    if (pointerDown) arrow.current.opacity = 1
    else arrow.current.opacity = 0
  }, [pointerDown, arrow])

  const draw = useMemo(
    (g) => {
      return [
        new Two.Anchor(8, 0),
        new Two.Anchor(-8, 0),
        new Two.Anchor(-8, -height),
        new Two.Anchor(0, -height - 10),
        new Two.Anchor(8, -height),
      ]
    },
    [height],
  )

  return (
    <Group ref={player} x={100} y={app.height - 100}>
      <Path ref={arrow} fill={'#F04D4D'} vertices={draw} />
      <Ellipse width={10} height={10} fill={'#f3f3f3'} noStroke />
    </Group>
  )
}
