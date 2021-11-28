import React, { useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'

const limitNumberWithinRange = (num, min, max) => {
  const MIN = min || 1
  const MAX = max || 20
  const parsed = parseInt(num)
  return Math.min(Math.max(parsed, MIN), MAX)
}

const calcX = (y) =>
  limitNumberWithinRange(-(y - window.innerHeight / 2) / 20, -3, 3)
const calcY = (x) =>
  limitNumberWithinRange((x - window.innerWidth / 2) / 20, -4, 4)

const Card = (props) => {
  const domTarget = useRef(null)

  const [{ rotateX, rotateY /* , translateZ */ }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    //translateZ: 0,
    config: { mass: 4, tension: 250, friction: 40 },
  }))

  useGesture(
    {
      onMoveStart: ({ xy: [px, py] }) =>
        api.start({
          rotateX: calcX(py),
          rotateY: calcY(px),
          //translateZ: 1
        }),

      onMoveEnd: () =>
        api.start({
          rotateX: 0,
          rotateY: 0,
          //translateZ: 0
        }),
    },
    { target: domTarget, eventOptions: { passive: false } }
  )

  return (
    <div className="card card-parent">
      <animated.div
        ref={domTarget}
        className="card--container "
        style={{
          transform: 'perspective(800px)',
          rotateX,
          rotateY,
        }}
      >
        {props.children}
      </animated.div>
    </div>
  )
}

export default Card
