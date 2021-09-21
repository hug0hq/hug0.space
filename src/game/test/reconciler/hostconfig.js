import { createElement, applyNodeProps } from '../two'

export const HostConfig = {
  getRootHostContext: (...args) => {
    //console.log('getRootHostContext', ...args)
    return {}
  },
  getChildHostContext: (...args) => {
    //console.log('getChildHostContext', ...args)
    return {}
  },
  getPublicInstance: (instance) => {
    //console.log('getPublicInstance', instance)
    return instance
  },
  prepareForCommit: (...args) => {
    //noop
    return null
  },
  resetAfterCommit: (...args) => {
    //noop
  },
  createInstance: createElement,

  //hide unhide
  /* hideInstance(instance) {
    //instance.visible = false
    console.log('hide')
  },

  unhideInstance(instance, props) {
    //const visible = props !== undefined && props !== null && props.hasOwnProperty('visible') ? props.visible : true
    //instance.visible = visible
    console.log('unhide')
  },  */

  finalizeInitialChildren: (...args) => {
    return false
  },

  shouldSetTextContent: (...args) => {
    return false
  },
  /* shouldDeprioritizeSubtree: (...args) => {
    console.log('shouldDeprioritizeSubtree', ...args)
  }, */

  clearContainer(container) {
    // TODO implement this
  },

  //scheduleDeferredCallback
  //cancelDeferredCallback

  /* scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,

  noTimeout: -1, */
  now: () => {}, //Date.now,
  isPrimaryRenderer: false,
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,

  createTextInstance(text, rootContainerInstance, internalInstanceHandler) {
    //adding text is not suported
    throw new Error('react-two error trying to add text node "' + text + '"')
  },

  appendInitialChild: (container, child) => {
    //if(parent.)
    container.add(child)
    console.log('appendInitialChild' /* , container, child */)
  },
  appendChild(container, child) {
    console.log('appendChild')
    container.add(child)
  },

  appendChildToContainer(container, child) {
    //container.appendChild(child)
    container.add(child)
    //return res
    console.log('appendChildToContainer' /* , container, child */)
  },

  removeChildFromContainer(container, child) {
    //container.removeChild(child)
    container.remove(child)
    console.log('removeChildFromContainer')
  },
  removeChild(container, child) {
    //container.removeChild(child)
    container.remove(child)
    console.log('removeChild')
  },

  prepareUpdate: (...args) => {
    //console.log('prepareUpdate')
    return true
  },
  commitUpdate(instance, updatePayload, type, oldProps, newProps) {
    //let applyProps = instance && instance.applyProps
    applyNodeProps(instance, oldProps, newProps)
    //console.log('commitUpdate')
  },

  insertInContainerBefore(...args) {
    //const res = insertBefore.apply(null, args)
    //window.dispatchEvent(new CustomEvent(`__REACT_PIXI_REQUEST_RENDER__`, { detail: 'insertInContainerBefore' }))
    //return res
    console.log('insertInContainerBefore', ...args)
  },

  /* insertBefore(...props) {
    console.log('i', props)
  }, */
}
