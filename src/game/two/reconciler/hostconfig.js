import { createElement, applyNodeProps } from './utils'

export const HostConfig = {
	getRootHostContext: () => {
		return {}
	},
	getChildHostContext: () => {
		return {}
	},
	getPublicInstance: (instance) => {
		return instance
	},
	prepareForCommit: () => {
		//noop
		return null
	},
	resetAfterCommit: () => {
		//noop
	},
	finalizeInitialChildren: () => {
		return false
	},
	shouldSetTextContent: () => {
		return false
	},
	insertInContainerBefore() {},
	clearContainer() {},
	now: () => {
		Date.now
	},
	isPrimaryRenderer: true,
	supportsMutation: true,
	supportsPersistence: false,
	supportsHydration: false,

	createTextInstance(text, rootContainerInstance, internalInstanceHandler) {
		//adding text is not suported
		throw new Error('react-two error trying to add text node "' + text + '"')
	},

	createInstance: createElement,

	appendInitialChild: (container, child) => {
		container.add(child)
	},
	appendChild(container, child) {
		container.add(child)
	},
	appendChildToContainer(container, child) {
		container.add(child)
	},

	removeChildFromContainer(container, child) {
		container.remove(child)
	},
	removeChild(container, child) {
		container.remove(child)
	},

	prepareUpdate: () => {
		return true
	},
	commitUpdate(instance, updatePayload, type, oldProps, newProps) {
		applyNodeProps(instance, oldProps, newProps)
	},

	detachDeletedInstance() {},
}
