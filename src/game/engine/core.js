import { useEffect, useState, useMemo, useRef } from 'react'

import { usePhysics, useRender } from './init'
import { EngineContext } from './utils'
import { useStats } from './debug'

export const Canvas = (props) => {
  const containerRef = useRef()
  const [domCanvas, setDomCanvas] = useState()

  //set dom ref
  useEffect(() => {
    if (containerRef.current) {
      setDomCanvas(containerRef.current)
    }
  }, [containerRef])

  //create physics and render
  const physics = usePhysics()
  const render = useRender(props.render, domCanvas)

  //debug fps
  useStats(render)

  //render resize listener. this is not required, [fitted: true] should do it but it doesn't
  useEffect(() => {
    if (!render) return

    const resizeListener = () => {
      console.log('resize')
      const rect = containerRef.current.getBoundingClientRect()
      render.renderer.setSize(rect.width, rect.height, render.renderer.ratio)
    }

    console.log('setup tick')
    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [render])

  const engineProviderValue = useMemo(() => ({ physics, render }), [
    physics,
    render,
  ])

  return (
    <div className="render" style={props.style} ref={containerRef}>
      <EngineContext.Provider value={engineProviderValue}>
        {props.children}
      </EngineContext.Provider>
    </div>
  )
}
