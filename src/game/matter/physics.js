import {
  useEffect,
  useState,
  useMemo,
  useContext,
  useRef,
  useLayoutEffect,
  useCallback,
} from 'react'
import { EngineContext } from './context'
import { useRender, useApp } from '../two'
import Matter from 'matter-js'

const useBody = (type, args) => {
  const physics = useContext(EngineContext)
  const ref = useRef()
  const bodyref = useRef()

  useRender(() => {
    if (
      ref.current.position.x != bodyref.current.position.x ||
      ref.current.position.y != bodyref.current.position.y
    )
      ref.current.position.set(
        bodyref.current.position.x,
        bodyref.current.position.y,
      )
    if (ref.current.rotation != bodyref.current.angle)
      ref.current.rotation = bodyref.current.angle
  })

  useLayoutEffect(() => {
    const object = ref.current

    if (type == 'circle') {
      bodyref.current = Matter.Bodies.circle(
        object.position.x,
        object.position.y,
        args.radius || object.width / 2,
        args.options,
      )
      return
    }

    bodyref.current = Matter.Bodies.rectangle(
      object.position.x,
      object.position.y,
      args.width || object.width,
      args.height || object.height,
      args.options,
    )
  }, [])

  useLayoutEffect(() => {
    if (physics) {
      Matter.Composite.add(physics.world, bodyref.current)
    }
    return () => {
      if (physics) {
        Matter.Composite.remove(physics.world, bodyref.current)
      }
    }
  }, [physics])

  const setPosition = useCallback((x, y) => {
    if (bodyref.current.position.x != x || bodyref.current.position.y != y) {
      Matter.Body.setPosition(bodyref.current, { x: x, y: y })
      console.log('update pos')
    }
  }, [])

  //const setSize = useCallback((x, y) => {}, [])

  const applyForce = useCallback((force, vector) => {
    const deltaVector = Matter.Vector.sub(vector, bodyref.current.position)
    const normalizedDelta = Matter.Vector.normalise(deltaVector)
    const forceVector = Matter.Vector.mult(normalizedDelta, force)
    const op = Matter.Vector.neg(forceVector)

    Matter.Body.applyForce(bodyref.current, bodyref.current.position, op)
  }, [])

  const isMoving = useCallback(() => {
    return bodyref.current.speed > 0.5 ? true : false
  }, [])

  return [ref, { setPosition, applyForce, isMoving }]
}

export const useBox = (args) => {
  return useBody('rectangle', args)
}

export const useCircle = (args) => {
  return useBody('circle', args)
}

export const Physics = (props) => {
  const [physics, setPhysics] = useState(null)
  const engineProviderValue = useMemo(() => physics, [physics])

  useEffect(() => {
    const engine = Matter.Engine.create({ ...props })

    setPhysics(engine)
    return () => {
      Matter.Engine.clear(engine)
    }
  }, [])

  const app = useApp()

  useRender((frame) => {
    if (!physics) return

    Matter.Engine.update(physics, (1 / 3 / 60) * 1000) // (1000 / 60)

    // avoid tunneling
    //if (frame > 2) return
    const world = physics.world
    world.bodies.map((body) => {
      //console.log(Matter.Vertices.contains(body.vertices, {x: app.width, y: body.position.y}))

      if (body.position.x > app.width) {
        //console.log('out', body)
        Matter.Body.setPosition(body, { x: app.width - 5, y: body.position.y })

        let v = Matter.Vector.neg(body.velocity)
        Matter.Body.setVelocity(body, { x: v.x, y: body.velocity.y })
        //console.log('out', v, body.velocity)
      }
      if (body.position.x < 0) {
        Matter.Body.setPosition(body, { x: 0, y: body.position.y })

        let v = Matter.Vector.neg(body.velocity)
        Matter.Body.setVelocity(body, { x: v.x, y: body.velocity.y })
      }
      if (body.position.y > app.height) {
        Matter.Body.setPosition(body, { x: body.position.x, y: app.height })

        let v = Matter.Vector.neg(body.velocity)
        Matter.Body.setVelocity(body, { x: body.velocity.x, y: v.y })
      }
      if (body.position.y < 0) {
        Matter.Body.setPosition(body, { x: body.position.x, y: 0 })

        let v = Matter.Vector.neg(body.velocity)
        Matter.Body.setVelocity(body, { x: body.velocity.x, y: v.y })
      }
    })
  })

  return (
    <EngineContext.Provider value={engineProviderValue}>
      {props.children}
    </EngineContext.Provider>
  )
}
