import { createContext, useContext } from 'react';

export const EngineContext = createContext(null);
export const useEngine = () => useContext(EngineContext);