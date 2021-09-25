import {
  useEffect,
  useState,
  useMemo,
  useContext,
  useRef,
  useLayoutEffect,
  useCallback,
} from 'react'
import Matter from 'matter-js'

import { EngineContext } from '../util'
import { useRender } from '../util'

export const useTextBox = (width, height, args) => {
  const physics = useContext(EngineContext)
  const ref = useRef()
  const bodyref = useRef()

  useRender((frame) => {
    //if(frame > 6) return
    /*  if (
      bodyref.current.position.x !== ref.current.position.x ||
      bodyref.current.position.y !== ref.current.position.y
    ) { */
    //  console.log('update', bodyref.current.position.x, ref.current.position.x)
     ref.current.position.set(
      bodyref.current.position.x, // - ref.current.width/2, // - width / 2,
      bodyref.current.position.y,
    ) 
    ref.current.rotation =  bodyref.current.angle
 
    // }
  })

  useLayoutEffect(() => {
    const object = ref.current
    const tmp = object.getBoundingClientRect()

    const boxBody = Matter.Bodies.rectangle(
      object.position.x + width / 2,
      object.position.y ,
      width,
      height,
      args,
    )

    bodyref.current = boxBody
  }, [])

  useLayoutEffect(() => {
    if (physics) {
      Matter.Composite.add(physics.world, bodyref.current)
    }
  }, [physics])

  const setPosition = useCallback((x, y) => {
    if (bodyref.current.position.x != x || bodyref.current.position.y != y) {
      Matter.Body.setPosition(bodyref.current, { x: x, y: y })
      ref.current.position.set(x, y)
      console.log('update pos')
    }
  }, [])

  const setSize = useCallback((x, y) => {}, [])

  return [ref, { setPosition, setSize }]
}

export const useBox = (args) => {
  const physics = useContext(EngineContext)
  const ref = useRef()
  const bodyref = useRef()

  useLayoutEffect(() => {
    const object = ref.current
    const tmp = object.getBoundingClientRect()

    const boxBody = Matter.Bodies.rectangle(
      object.position.x,
      object.position.y,
      object.width,
      object.height,
      args,
    )

    bodyref.current = boxBody
  }, [])

  useLayoutEffect(() => {
    if (physics) {
      Matter.Composite.add(physics.world, bodyref.current)
    }
  }, [physics])

  const setPosition = useCallback((x, y) => {
    if (bodyref.current.position.x != x || bodyref.current.position.y != y) {
      Matter.Body.setPosition(bodyref.current, { x: x, y: y })
      ref.current.position.set(x, y)
      console.log('update pos')
    }
  }, [])

  const setSize = useCallback((x, y) => {}, [])

  return [ref, { setPosition, setSize }]
}
export const useCircle = (radius, args) => {
  const physics = useContext(EngineContext)
  const ref = useRef()
  const bodyref = useRef()

  useRender((frame) => {
    /*  if (
      bodyref.current.position.x !== ref.current.position.x ||
      bodyref.current.position.y !== ref.current.position.y
    ) { */
    //  console.log('update', bodyref.current.position.x, ref.current.position.x)
    ref.current.position.set(
      bodyref.current.position.x,
      bodyref.current.position.y,
    )
    // }
  })

  useLayoutEffect(() => {
    const object = ref.current
    console.log(object)

    const boxBody = Matter.Bodies.circle(
      object.position.x,
      object.position.y,
      radius,
      args,
    )
    bodyref.current = boxBody
  }, [])

  useLayoutEffect(() => {
    if (physics) {
      Matter.Composite.add(physics.world, bodyref.current)
    }
  }, [physics])

  const applyForce = useCallback((force, vector) => {
    //applay force
    //if (bodyref.current.velocity.x > 1 || bodyref.current.velocity.y > 1) {
    if (bodyref.current.speed > 0.5) {
      console.log('no force')
      return
    }

    console.log('force', force, vector)

    //const force = 0.1 // 0.2;
    const deltaVector = Matter.Vector.sub(vector, bodyref.current.position)
    const normalizedDelta = Matter.Vector.normalise(deltaVector)
    const forceVector = Matter.Vector.mult(normalizedDelta, force)
    const op = Matter.Vector.neg(forceVector)

    Matter.Body.applyForce(bodyref.current, bodyref.current.position, op)
  }, [])

  return [ref, applyForce]
}

const useBody = (props, ref, deps) => {
  console.log(ref)
  return null
}

export const Physics = (props) => {
  const [physics, setPhysics] = useState(null)

  const engineProviderValue = useMemo(() => physics, [physics])

  useEffect(() => {
    const engine = Matter.Engine.create({
      //enableSleeping: true,
      gravity: { x: 0, y: 0 },
    })
    //const runner = Matter.Runner.create()
    //Matter.Runner.run(runner, engine)

    setPhysics(engine)
    return () => {
      //cleanup
      Matter.Engine.clear(engine)
      //Matter.Runner.stop(runner)
    }
  }, [])

   useRender((frame) => {
    if (physics) 
    Matter.Engine.update(physics, 1000 / 60);

   
  }) 

  return (
    <EngineContext.Provider value={engineProviderValue}>
      {props.children}
    </EngineContext.Provider>
  )
}
