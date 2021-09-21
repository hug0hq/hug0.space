import { useContext, createContext, useEffect, useState, useLayoutEffect } from 'react'

const useRender = () => {
  const { render } = useContext(EngineContext)
  return render
}

const EngineContext = createContext(null)

const usePhysics = () => {
  const { physics } = useContext(EngineContext)
  return physics
}

const useTick = (callback) => {
  // do something here
  const render = useRender()

  useEffect(() => {
    if (!render) return

    const resizeListener = (frameCount) => {
      callback(frameCount)
    }

    render.bind('update', resizeListener).play()

    return () => {
      render.unbind('update', resizeListener)
    }
  }, [render, callback])
}

export { EngineContext, useRender, usePhysics, useTick }
