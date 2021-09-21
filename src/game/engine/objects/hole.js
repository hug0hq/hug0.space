import React, { useEffect, useMemo, useCallback, useContext, useState } from 'react'
import Matter from 'matter-js'

import { useRender, usePhysics } from '../utils'

import Two from 'two.js'

import { useSpring, useChain, animated, useSpringRef } from '@react-spring/web'

/* const draw = ctx => {
  ctx.noStroke()
  ctx.
} */
const GroupContext = React.createContext(null)

const Pole = (props) => {
  const group0 = useContext(GroupContext)

  const pole = useMemo(() => {
    if (!group0) return
    const group = new Two.Group()
    const height = 100
    group.translation.set(0, -height / 2 + 12)
    //if (!two) return
    const roundedRect = new Two.RoundedRectangle(0, 0, 10, height, 5)
    roundedRect.noStroke()

    group.add(roundedRect)

    console.log('pole')

    group0.add(group)
    return group
  }, [props.y, group0])

  if (!props.children) return null
  return props.children
}

const Group = (props) => {
  const two = useRender()

  const group = useMemo(() => {
    if (!two) return
    const group = new Two.Group()
    group.translation.set(two.width - 100, two.height - 100)
    return group
  }, [two])

  useEffect(() => {
    if (!two) return
    two.add(group)
  }, [two, group])

  return (
    <GroupContext.Provider value={group}>
      {props.children}
    </GroupContext.Provider>
  )
}

const c = () => {
  return <Ellipse w="16" h="12" fill="#424242" />
}

const Ellipse = (props) => {

  

  /*  useEffect(() => {
    ellipse.fill = props.fill
    ellipse.noStroke()
  }, [props.fill, ellipse]) */

  return null
}

export const Hole = (props) => {
  const matter = usePhysics()
  const two = useRender()

  // const draw = React.useCallback((g) => {}, [])

  //const AnimatedFlagStick = animated(FlagStick);

  const flag = useMemo(() => {
    const group = new Two.Group()
    group.translation.set(-5, -100 + 40)

    const vertices = [
      new Two.Anchor(0, 20),
      new Two.Anchor(-45, 0),
      new Two.Anchor(0, -20),
    ]

    var path = new Two.Path(vertices /*, true, true , manual */)
    path.fill = '#F04D4D'
    path.noStroke()
    group.add(path)

    return group
  }, [])

  const hole = useMemo(() => {
    const circle = new Two.Ellipse(0, 0, 16, 12)
    circle.fill = '#424242'
    circle.noStroke()
    return circle
  }, [])

  useEffect(() => {
    if (!two || !matter) return

    const group = new Two.Group()
    group.translation.set(two.width - 100, two.height - 100)

    //const c = two.makeCircle(two.width - 100, two.height - 100, 15)
    //group.add(hole)
    //group.add(<pole y="50"></pole>)
    group.add(flag)

    two.add(group)

    //const holeBody = Matter.Bodies.circle(two.width - 100, two.height - 100, 15)
    //Matter.Composite.add(matter.world, holeBody)

    console.log('draw hole')
  }, [two, matter])

  const Container = useMemo((props) => {
    const group = new Two.Group()
    return group
  }, [])

  const AnimatedContainer = animated(Container)
  //const AnimatedPole = animated(Pole)

  const spring1Ref = useSpringRef()
  const spring2Ref = useSpringRef()

  const stickanim = useSpring({
    to: { d: 1, y: 80 },
    from: { d: 0, y: 0 },
    config: { mass: 5, tension: 1000, friction: 100 },
    ref: spring1Ref,
  })

  useChain([spring1Ref, spring2Ref])

  return (
    <Group x="0" y="0">
      <Pole y="50"></Pole>
      <Ellipse w="16" h="12" fill="#424242" />
      {/*   <AnimatedContainer>
        <AnimatedPole {...stickanim}/>
      </AnimatedContainer>
    */}
    </Group>
  )
}
