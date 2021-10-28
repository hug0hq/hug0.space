import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useReducer,
  useMemo,
} from 'react'
import { useSpring, useChain, animated, useSpringRef } from '@react-spring/web'

import Two from 'two.js'
import Matter from 'matter-js'

import {
  Ellipse,
  Group,
  RoundedRectangle,
  Path,
  useApp,
  useRender,
} from '../two'
import { useCircle, usePhysics } from '../matter'

const AnimatedGroup = animated(Group)
const AnimatedRoundedRectangle = animated(RoundedRectangle)
const AnimatedPath = animated(Path)

export const Hole = (props) => {
  const app = useApp()
  const hole = useRef()

  useRender(() => {
    const padding = parseInt(
      window
        .getComputedStyle(props.textDomRef.current.parentElement)
        .getPropertyValue('padding-left')
    )

    //console.log(padding)

    hole.current.position.set(app.width - padding - 8, app.height - padding - 8)
  })

  return (
    <Ellipse
      ref={hole}
     /*  x={app.width - 100}
      y={app.height - 100} */
      width={16}
      height={12}
      fill={'#424242'}
      noStroke
    />
  )
}

const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }

    default:
      throw new Error()
  }
}

export const Flag = (props) => {
  const app = useApp()
  const flag = useRef()
  const engine = usePhysics()

  const [playScore, setPlayScore] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    console.log('⛳', state.count)
  }, [state.count])

  const handleCollision = useCallback((event) => {
    const pairs = event.pairs

    pairs.forEach((pair) => {
      let { bodyA, bodyB } = pair
      if (bodyA.label === 'ball' && bodyB.label === 'hole') {
       /*  Matter.Body.setVelocity(bodyA, {
          x: 0,
          y: 0,
        }) */

        const w = Matter.Common.random(0, app.width)
        const h = Matter.Common.random(0, app.height)

        //let w = Math.floor(Math.random() * app.screen.width - 200) + 200
        //let h = Math.floor(Math.random() * app.screen.height - 200) + 200

        Matter.Body.setPosition(bodyA, {
          x: w, //100 - 12 / 2,
          y: h, //height - 100 + 12 / 2,
        })

        setPlayScore(true)
        dispatch({ type: 'increment' })

        //console.log('b force')

        const force = 0.2
        const vector = {
          x: Matter.Common.random(0, app.width),
          y: Matter.Common.random(0, app.height),
        }
        const deltaVector = Matter.Vector.sub(vector, bodyA.position)
        const normalizedDelta = Matter.Vector.normalise(deltaVector)
        const forceVector = Matter.Vector.mult(normalizedDelta, force)
        const op = Matter.Vector.neg(forceVector)

        //Matter.Body.applyForce(bodyA, bodyA.position, op)
        Matter.Body.setVelocity(bodyA, {
          x: op.x*12,
          y: op.y*12,
        })
        //console.log(bodyA,bodyA.position,  vector, force, op)

        //console.log('b after force')
      }
    })
  }, [])

  useEffect(() => {
    //console.log(physics)
    //if (!engine) return
    Matter.Events.on(engine, 'collisionStart', handleCollision)
    //console.log(props.textDomRef.current.parentElement.style)

    return () => {
      Matter.Events.off(engine, 'collisionStart', handleCollision)
    }
  }, [])

  const [holeBody, api] = useCircle({
    options: {
      label: 'hole',
      isSensor: true,
      isStatic: true,
    },
  })

  useRender(() => {
    const padding = parseInt(
      window
        .getComputedStyle(props.textDomRef.current.parentElement)
        .getPropertyValue('padding-left')
    )

    flag.current.position.set(app.width - padding - 8, app.height - padding - 8)
    api.setPosition(app.width - padding - 8, app.height - padding - 8)
  })

  const { rotation } = useSpring({
    rotation: playScore ? 1 : 0,
    from: { rotation: 0 },
    reset: true,
    config: { mass: 5, tension: 2000, friction: 40 },
  })

  //
  const spring1Ref = useSpringRef()
  const spring2Ref = useSpringRef()

  const [poleVisible, setPoleVisible] = useState(false)

  const stickanim = useSpring({
    to: { y: -38, height: 100 },
    from: { y: 10, height: 5 },
    //delay: 500,
    config: { mass: 5, tension: 1000, friction: 100 },
    onStart: () => setPoleVisible(true),
    ref: spring1Ref,
  })

  const [flagVisible, setFlagVisible] = useState(false)

  const { xy } = useSpring({
    //w: 0,
    to: { xy: [40, 5] },
    from: { xy: [0, 20] },
    //delay: 1000,
    config: { mass: 5, tension: 2000, friction: 200 },
    onStart: { xy: () => setFlagVisible(true) },
    ref: spring2Ref,
  })

  useChain([spring1Ref, spring2Ref], [0.5, 1])

  //console.log(Two.Commands)

  const anchor = useCallback((x, y, l1, l2, r1, r2, command) => {
    //console.log('ooo')
    return new Two.Anchor(x, y, l1, l2, r1, r2, command)
  }, [])

  //useEffect(()=>console.log(fill), [fill])

  return (
    <>
      <Group ref={flag} /* x={app.width - 100} y={app.height - 100} */>
        <AnimatedGroup
          rotation={rotation.to({ range: [0, 0.5, 1], output: [0, 0.08, 0] })}
        >
          <AnimatedRoundedRectangle
            //y={-38}

            fill={!poleVisible ? 'transparent' : '#f3f3f3'}
            {...stickanim}
            width={10}
            //height={100}
            radius={5}
            noStroke
          />
          <Group x={-5} y={-60}>
            <AnimatedPath
              fill={!flagVisible ? 'transparent' : '#F04D4D'}
              //noFill={'#F04D4D'}
              noStroke
              manual
              vertices={xy.to((x, y) => [
                anchor(0, -20, 0, 0, 0, 0, Two.Commands.move),
                //anchor(-x+10, y-10 /* -10 */, 0, 0, 0, 0, Two.Commands.line),

                // anchor(-x, -y-5, 0, 0, 0, 0, Two.Commands.line),
                // x, y, left, right
                anchor(-x, -y, 0, 0, -6, 2, Two.Commands.curve),

                anchor(-x - 5.2, -y + 5, 0, 0, 0, 0, Two.Commands.curve),

                //anchor(-x -5, -y, 0, 0, 0, 0, Two.Commands.line),

                anchor(-x - 5.2, y - 5, 0, 0, 0, 0, Two.Commands.line),

                anchor(-x, y, -6, -2, 0, 0, Two.Commands.curve),

                anchor(0, 20, 0, 0, 0, 0, Two.Commands.line),

                //anchor(-x - 4, y - 5, 0, -4, 0, 0, Two.Commands.curve),

                //anchor(-x, y, 0, 0, 0, 0, Two.Commands.line),

                //anchor(-x, 0, 0, 0, 0, 0, Two.Commands.line),
                //anchor(0, 20, 0, 0, 0, 0, Two.Commands.line),
              ])}

              /*
               anchor(0, -20, 0, 0, 0, 0, Two.Commands.move),
                anchor(-x+10, y-10 /* -10 *./, 0, 0, 0, 0, Two.Commands.line),

                anchor(-x, y, 0, -8, 0, 0, Two.Commands.curve),

                anchor(-x, 0, 0, 0, 0, 0, Two.Commands.line),
                anchor(0, 0, 0, 0, 0, 0, Two.Commands.line),


              anchor(0, 20, 0, 0, 0, 0, Two.Commands.move),
                anchor(-40, 5, 0, 0, 0, 0, Two.Commands.line),
                anchor(-40-5, 0 /*-5/, 2, 5, 0, 0, Two.Commands.curve),
                anchor(-40-5, 0, 0, 0, 0, 0, Two.Commands.line),
                anchor(-40, -5, -5, 2, 0, 0, Two.Commands.curve),
                anchor(0, -20, 0, 0, 0, 0, Two.Commands.line),
                */

              /* vertices={[
                new Two.Anchor(-40, 5, 0, 0, 0, 0, Two.Commands.line),
                new Two.Anchor(-45, 0, 0, 5, 0, 0, Two.Commands.curve),
                new Two.Anchor(-40, -5, 0, -5, 0, 0, Two.Commands.curve),
                new Two.Anchor(-40, -5, 0, 0, 0, 0, Two.Commands.line),
                new Two.Anchor(0, -20, 0, 0, 0, 0, Two.Commands.line),
              ]} */
            />
          </Group>
        </AnimatedGroup>
      </Group>
      <Ellipse
        /* x={app.width - 100}
        y={app.height - 100} */
        ref={holeBody}
        width={10}
        height={10}
        linewidth={2}
        stroke={'#FFED4A'}
        noFill
        noStroke={process.env.NODE_ENV !== 'production' ? false : true}
      />
    </>
  )
}

const FlagStick = (props) => {
  return null
}
