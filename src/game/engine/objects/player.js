import { useEffect, useState, useCallback, useMemo } from 'react'
import Matter from 'matter-js'
import Two from 'two.js'

import { Group, Path } from './two'

import { useRender, usePhysics, useTick } from '../utils'

import { useDrag } from '@use-gesture/react'
import { render } from 'react-dom'

const angle = (x, y) => {
  return Math.atan2(y, x) + Math.PI / 2
}

export const Player = (props) => {
  const matter = usePhysics()
  const two = useRender()

  const [a, setA] = useState()

  //const [maingroup, setMaingroup] = useState()

  const [player, setPlayer] = useState()
  const [height, setHeight] = useState(40)

  const [pointerDown, setPointerDown] = useState(false)

  //mouse
  const move = useCallback(
    (e) => {
      if (!two) return
      const bounding = two.renderer.domElement.getBoundingClientRect()

      setMousePosition({
        x: e.clientX - bounding.left,
        y: e.clientY - bounding.top,
      })
    },
    [two],
  )
  const up = useCallback((e) => {
    console.log('up')
    setPointerDown(false)
  }, [])

  const down = useCallback((e) => {
    console.log('down')
    setPointerDown(true)
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

  //draw

  const arrow = useMemo(() => {
    const vertices = [
      new Two.Anchor(8, 0),
      new Two.Anchor(-8, 0),
      new Two.Anchor(-8, -height),
      new Two.Anchor(0, -height - 10),
      new Two.Anchor(8, -height),
    ]

    const path = new Two.Path(vertices)
    path.fill = '#F04D4D'
    path.noStroke()

    console.log('arrow')

    const group = new Two.Group()
    group.add(path)

    setA(group)

    return group
  }, [height])

  const ball = useMemo(() => {
    const circle = new Two.Ellipse(0, 0, 10, 10)
    console.log('circle')
    circle.noStroke()
    return circle
  }, [])

  const [rotationAngle, setRotationAngle] = useState(0)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  //const [ab, setAb] = useState()

  // game loop
  useTick((t) => {
    if (player && mousePosition) {
      let deltaVector = Matter.Vector.sub(mousePosition, player.position)
      setRotationAngle(angle(deltaVector.x, deltaVector.y))
    }
  })

  useEffect(() => {
    //if (!arrow) return
    arrow.rotation = rotationAngle
  }, [arrow, rotationAngle])

  useEffect(() => {
    if (pointerDown) arrow.opacity = 1
    else arrow.opacity = 0
  }, [pointerDown, arrow])

  useEffect(() => {
    if (!two || !matter) return

    const group = new Two.Group()
    group.translation.set(100, two.height - 100)

    //setMaingroup(group)

    group.add(arrow)
    group.add(ball)

    two.add(group)

    setPlayer(group)

    console.log('draw player')
  }, [two, matter, arrow])

  return null /* (<Group add={render} x="100" y="100"></Group>) */
}
