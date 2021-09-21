import React, { useRef, useEffect, useCallback, useState } from 'react'
import { TwoFiber } from './reconciler'
import Two from 'two.js'

import { AppContext } from './util'

class Stage extends React.Component {
  _canvas = null
  _container = null

  twoContainer = null
  app = null

  getChildren = () => {
    const { children } = this.props
    //console.log('get', this.app)
    return (
      <AppContext.Provider value={this.app}>{children}</AppContext.Provider>
    )
  }

  updateSize = () => {
    if (this._container && this.app) {
      const rect = this._container.getBoundingClientRect()
      this.app.renderer.setSize(
        rect.width,
        rect.height,
        this.app.renderer.ratio,
      )
    }
  }

  componentDidMount() {
    const {
      width,
      height,
      type,
      fitted,
      imageSmoothingEnabled,
      autostart,
    } = this.props
    const params = {
      width,
      height,
      fitted,
      imageSmoothingEnabled,
      autostart /* , type: 'CanvasRenderer' */,
      type: type || 'CanvasRenderer',
    }

    this.app = new Two(params)

    //s console.log('two', this.app)

    this.app.appendTo(this._container) //.update()

    this._canvas = this.app.renderer.domElement

    this.twoContainer = TwoFiber.createContainer(this.app)
    TwoFiber.updateContainer(
      this.getChildren() /* this.props.children */,
      this.twoContainer,
      this,
    )

    window.addEventListener('resize', this.resizeListener)
    window.addEventListener('resize', this.updateSize)
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    // flush fiber
    TwoFiber.updateContainer(this.getChildren(), this.twoContainer, this)
  }

  componentWillUnmount() {
    //this.props.onUnmount(this.app)
    window.removeEventListener('resize', this.resizeListener)
    window.removeEventListener('resize', this.updateSize)

    TwoFiber.updateContainer(null, this.twoContainer, this)

    this._container.removeChild(this._canvas)

    //this.app.destroy()
    this.app.clear()

    console.log('unmount')
  }

  render() {
    return (
      <div
        id="tworender"
        style={this.props.style}
        ref={(c) => (this._container = c)}
      ></div>
    )
  }
}

export default Stage
