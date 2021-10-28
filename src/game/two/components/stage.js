import React from 'react'
import { TwoFiber } from '../reconciler'
import { AppContext } from '../context'
import Two from 'two.js'

class Stage extends React.Component {
  _canvas = null
  _container = null
  twoContainer = null
  app = null

  getChildren = () => {
    const { children } = this.props
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
        this.app.renderer.ratio
      )
    }
  }

  componentDidMount() {
    const { width, height, type, fitted, imageSmoothingEnabled, autostart } =
      this.props
    const params = {
      width,
      height,
      fitted,
      imageSmoothingEnabled,
      autostart,
      type: type || 'CanvasRenderer',
    }

    this.app = new Two(params)
    this.app.appendTo(this._container)

    this._canvas = this.app.renderer.domElement

    this.twoContainer = TwoFiber.createContainer(this.app)
    TwoFiber.updateContainer(this.getChildren(), this.twoContainer, this)

    window.addEventListener('resize', this.updateSize)
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    // flush fiber
    TwoFiber.updateContainer(this.getChildren(), this.twoContainer, this)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize)

    TwoFiber.updateContainer(null, this.twoContainer, this)

    this._container.removeChild(this._canvas)

    this.app.pause()
    this.app.clear()
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
