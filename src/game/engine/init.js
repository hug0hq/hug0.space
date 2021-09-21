import Two from 'two.js'
import Matter from 'matter-js'

import { useEffect, useState, useMemo } from 'react'

//init matter and two

export const usePhysics = () =>
  useMemo(() => {
    const engine = Matter.Engine.create({
      enableSleeping: true,
      //gravity: 0
    })
    const runner = Matter.Runner.create()
    Matter.Runner.run(runner, engine)
    return engine
  }, [])

export const useRender = (renderProps, domCanvasRef) => {
  const [render, setRender] = useState()

  useEffect(() => {
    if (!domCanvasRef) return
    const two = new Two(renderProps).appendTo(domCanvasRef)
    setRender(two)
    //two.bind('update', update)

    return () => {
      //two.unbind('update')
      //two.clear() clear seams to be useless
      //two.pause()
      console.log('unmount')
      domCanvasRef.removeChild(two.renderer.domElement)
    }
  }, [renderProps, domCanvasRef])

  return render
}
