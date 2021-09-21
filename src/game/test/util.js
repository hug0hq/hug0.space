import Two from 'two.js'

import React, {
  useContext,
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
  useImperativeHandle,
  useMemo,
} from 'react'

export const AppContext = React.createContext(null)

export const useApp = () => {
  const app = useContext(AppContext)
  if (!app)
    throw `react-two hooks can only be used within the 'Stage' component!`
  return app
}

export const useRender = (/* fn, deps = [] */ callback) => {
  const app = useContext(AppContext)

  if (!app)
    throw `react-two hooks can only be used within the 'Stage' component!`

  useLayoutEffect(
    () => {
      // Subscribe to the render-loop
      //const unsubscribe = state.current.subscribe(fn)
      //console.log('update', state)

      // Call subscription off on unmount
      const resizeListener = (frameCount) => {
        callback(frameCount)
      }

      app.bind('update', resizeListener).play() // Finally, start the animation loop

      return () => {
        //unsubscribe()
        app.unbind('update', resizeListener)
      }
    },
    [callback, app] /* deps */,
  )
}
