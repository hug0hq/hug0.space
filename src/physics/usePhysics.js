import React, { useContext } from 'react'
/* import { Application } from 'pixi.js'
 */
const Context = React.createContext(null)

export function usePhysics() {
    const app = useContext(Context)

   /*  invariant(
        app instanceof Application,
        'No Context found with `%s`. Make sure to wrap component with `%s`',
        'PIXI.Application',
        'AppProvider'
    ) */

    return app
}