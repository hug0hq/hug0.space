import {
  createContext,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react'

export const AppContext = createContext(null)

export const useApp = () => {
  const app = useContext(AppContext)

  if (!app)
    throw `react-two hooks can only be used within the 'Stage' component!`
  return app
}

export const useRender = (callback) => {
  const app = useContext(AppContext)
  const savedRef = useRef(null)

  if (!app)
    throw `react-two hooks can only be used within the 'Stage' component!`

  useEffect(() => {
    savedRef.current = callback
  }, [callback])

  const gameLoop = useCallback((frameCount) => {
    savedRef.current(frameCount)
  }, [])

  useEffect(() => {
    app.bind('update', gameLoop).play() // start the animation loop

    return () => {
      // unsubscribe
      app.unbind('update', gameLoop)
    }
  }, [])
}
