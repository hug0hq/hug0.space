import React, {
  useLayoutEffect,
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useState,
} from 'react'
import { Text, Ellipse, Group, RoundedRectangle, Path } from '../type'
import { useApp, useRender, usePhysics } from '../util'

import Matter from 'matter-js'
import Two from 'two.js'

import { Rectangle } from '../type'

import { useBox } from './physics'

export const Walls = (props) => {
  const physics = usePhysics()
  const two = useApp()

  useEffect(() => {
    return
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
  }, [two, physics])

  const [textBody0] = useBox({ options: { isStatic: true, label: 'wall' } })
  const [textBody1] = useBox({ options: { isStatic: true, label: 'wall' } })
  const [textBody2, api2] = useBox({
    options: { isStatic: true, label: 'wall' },
  })
  const [textBody3, api3] = useBox({
    options: { isStatic: true, label: 'wall' },
  })

  useRender((frame) => {
    api2.setPosition(two.width + 190, two.height / 2)
    api3.setPosition(two.width / 2, two.height + 190)
    //api.setSize(40, two.height)
  })

  return (
    <>
      <Rectangle
        ref={textBody0}
        x={-190}
        y={two.height / 2}
        width={400}
        height={two.height}
        stroke={'#878787'}
        noFill
      ></Rectangle>
      <Rectangle
        ref={textBody1}
        x={two.width / 2}
        y={-190}
        width={two.width}
        height={400}
        stroke={'#878787'}
        noFill
      ></Rectangle>
      <Rectangle
        ref={textBody2}
        x={two.width + 190 }
        y={two.height / 2}
        width={400}
        height={two.height}
        stroke={'#878787'}
        noFill
      ></Rectangle>
      <Rectangle
        ref={textBody3}
        x={two.width / 2}
        y={two.height + 190}
        width={two.width}
        height={400}
        stroke={'#878787'}
        noFill
      ></Rectangle>
    </>
  )
}
