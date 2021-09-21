import { useEffect, useState } from 'react'
import { /* Text, */ Ellipse, Group, RoundedRectangle, Path } from '../type'
import { useApp } from '../util'

import { useSpring, useChain, animated, useSpringRef } from '@react-spring/web'

import Two from 'two.js'

const AnimatedGroup = animated(Group)

export const Hole = (props) => {
  const app = useApp()

  const [play, setPlay] = useState(true)

  const { r } = useSpring({
    from: { r: 0 },
    r: play ? 1 : 0,
    config: { mass: 5, tension: 2000, friction: 40 },
  })

  return (
    <Group x={app.width - 100} y={app.height - 100}>
      <Ellipse width={16} height={12} fill={'#424242'} noStroke />
      <AnimatedGroup
        rotation={r.to({ range: [0, 0.5, 1], output: [0, 0.08, 0] })}
      >
        <RoundedRectangle y={-38} width={10} height={100} radius={5} noStroke />
        <Group x={-5} y={-60}>
          <Path
            fill={'#F04D4D'}
            noStroke
            vertices={[
              new Two.Anchor(0, 20),
              new Two.Anchor(-45, 0),
              new Two.Anchor(0, -20),
            ]}
          />
        </Group>
      </AnimatedGroup>
    </Group>
  )
}
