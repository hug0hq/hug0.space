import {
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useState,
  useContext,
} from 'react'
import { Ellipse, Group, Path } from '../type'
import { useApp, useRender, usePhysics } from '../util'

import Matter from 'matter-js'
import Two from 'two.js'
//import { send } from 'react-ga'

import { useCircle } from './physics'

const angle = (x, y) => {
  return Math.atan2(y, x) + Math.PI / 2
}

const usePlayerBody = (x, y, radius) => {
  //const { x = 0, y = 0, radius } =
  const engine = usePhysics()
  const [ballBody, setBallBody] = useState()

  useEffect(() => {
    if (!engine) return

    /*  const tmp = Matter.Bodies.circle(x, y, radius, {
      restitution: 1,
      friction: 0.3,
      frictionAir: 0.05,
      label: 'ball',
      collisionFilter: {
        category: '0x0002',
      },
    })
    Matter.World.add(engine.world, [tmp])

    setBallBody(tmp) */
  }, [engine, x, y, radius])

  return ballBody
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
  const move = useCallback((e) => {
    const bounding = app.renderer.domElement.getBoundingClientRect()
    /* const bounding = app.renderer.domElement.getBoundingClientRect()

    if (Math.abs(bounding.top) < bounding.height) { */
    setMousePosition({
      x: e.clientX - bounding.left,
      y: e.clientY - bounding.top,
    })
  }, [])

  //const [body, setBody] = useState()
  //ßconst body = usePlayerBody(100, app.height - 100, 10)

  const up = useCallback((e) => {
    window.removeEventListener('pointermove', move)

    console.log('up update')

    const bounding = app.renderer.domElement.getBoundingClientRect()

    if (Math.abs(bounding.top) < bounding.height) {
      //console.log('up', mousePosition, bounding.width)

      applyForce(0.1, {
        x: e.clientX - bounding.left,
        y: e.clientY - bounding.top,
      })

      setPointerDown(false)
    }
  }, [])

  const down = useCallback((e) => {
    const bounding = app.renderer.domElement.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - bounding.left,
      y: e.clientY - bounding.top,
    })

    window.addEventListener('pointermove', move)
    //const bounding = app.renderer.domElement.getBoundingClientRect()

    // if (Math.abs(bounding.top) < bounding.height) {
    //  console.log('down')
    setPointerDown(true)
    //}
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

  useEffect(() => {
    console.log(mousePosition)
  }, [mousePosition])

  useRender((frameCount) => {
    //if (mousePosition) {
    //return
    let deltaVector = Matter.Vector.neg(  Matter.Vector.sub(mousePosition, bodyE.current.position) )
    arrow.current.rotation =  rotationAngle
    setRotationAngle(angle(deltaVector.x, deltaVector.y))
    //}
  })

  const arrow = useRef()
  //const player = useRef()

  /* useEffect(() => {
    arrow.current.rotation = rotationAngle
  }, [arrow, rotationAngle]) */

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

  const [bodyE, applyForce] = useCircle(12, {
    restitution: 1,
    friction: 0.3,
    frictionAir: 0.05,
    label: 'ball',
    collisionFilter: {
      category: '0x0002',
    },
  })

  return (
    <Group ref={bodyE} x={100} y={app.height - 100}>
      <Path ref={arrow} fill={'#F04D4D'} vertices={draw} />
      <Ellipse width={10} height={10} fill={'#f3f3f3'} noStroke />
    </Group>
  )
}
