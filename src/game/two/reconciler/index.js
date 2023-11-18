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
