import { createContext, useContext } from 'react'

export const EngineContext = createContext(null)

export const usePhysics = () => {
  const physics = useContext(EngineContext)
  return physics
}
