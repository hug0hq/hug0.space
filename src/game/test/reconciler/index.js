import React from 'react'
import Reconciler from 'react-reconciler'
import { HostConfig } from './hostconfig'

export const TwoFiber = Reconciler(HostConfig)

TwoFiber.injectIntoDevTools({
  findHostInstanceByFiber: TwoFiber.findHostInstance,
  bundleType: process.env.NODE_ENV !== 'production' ? 1 : 0,
  version: React.version,
  rendererPackageName: 'react-two',
})

/* export default function render(element, renderDom, callback) {
  // element: This is the react element for App component
  // renderDom: This is the host root element to which the rendered app will be attached.
  // callback: if specified will be called after render is done.
  //const isAsync = false // Disables async rendering
  const container = TwoFiber.createContainer(renderDom) // Creates root fiber node.

  //const parentComponent = null // Since there is no parent (since this is the root fiber). We set parentComponent to null.
  TwoFiber.updateContainer(
    element,
    container,
    parentComponent,

    //callback, //calback
  ) // Start reconcilation and render the result
}
 */