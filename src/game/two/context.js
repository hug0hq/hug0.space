import { createContext, useContext, useLayoutEffect } from 'react'

export const AppContext = createContext(null)

export const useApp = () => {
  const app = useContext(AppContext)
  if (!app)
    throw `react-two hooks can only be used within the 'Stage' component!`
  return app
}

export const useRender = (callback) => {
  const app = useContext(AppContext)

  if (!app)
    throw `react-two hooks can only be used within the 'Stage' component!`

  useLayoutEffect(() => {
    const gameLoop = (frameCount) => {
      callback(frameCount)
    }

    app.bind('update', gameLoop).play() // start the animation loop

    return () => {
      // unsubscribe
      app.unbind('update', gameLoop)
    }
  }, [callback, app])
}
