import { useEffect } from 'react'

import Two from 'two.js'
import Matter from 'matter-js'

import { useRender, usePhysics } from '../utils'

export const Walls = (props) => {
  const physics = usePhysics()
  const two = useRender()

  useEffect(() => {
    if (!two || !physics) return

    const wallSize = 40
    const label = {
      isStatic: true,
      label: 'wall',
    }
    const wallLeftBody = Matter.Bodies.rectangle(
      0,
      two.height / 2,
      wallSize,
      two.height,
      label,
    )
    const wallRightBody = Matter.Bodies.rectangle(
      two.width,
      two.height / 2,
      wallSize,
      two.height,
      label,
    )
    const wallTopBody = Matter.Bodies.rectangle(
      two.width / 2,
      0,
      two.width,
      wallSize,
      label,
    )
    const wallBottomBody = Matter.Bodies.rectangle(
      two.width / 2,
      two.height,
      two.width,
      wallSize,
      label,
    )
    Matter.Composite.add(physics.world, [
      wallLeftBody,
      wallRightBody,
      wallTopBody,
      wallBottomBody,
    ])
  }, [physics, two])

  return null
}
