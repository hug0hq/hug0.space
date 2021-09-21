import React, { useRef, useEffect } from 'react'
import { Canvas, Text, Player, Hole, Walls } from './engine'
import { RenderDebug } from './engine/debug'

import TwoRenderer from './test/example'
//import { Illustration, Ellipse } from './test/zdogtype'

const Fiber = () => {
  return null
}

const Game = () => {
  /*  useEffect(() => {
    TwoRenderer.render(<Fiber/>, document.getElementById('ca'));
  }, [])
 */
//console.log( Ellipse)
  return (
    <React.Fragment>
      {/* 
    <Canvas
      id="ca"
      style={{
        height: '100%',
        width: '100%',
      }}
      render={{
        autostart: true,
        fitted: true,
        imageSmoothingEnabled: true,
        type: 'CanvasRenderer', //type can be ['WebGLRenderer', 'SVGRenderer', 'CanvasRenderer']
      }}
    >
      <Walls />
      <Text text={['Hi there!', 'I make cool things']}></Text>
      <Player />
      <Hole />

     
    </Canvas>
*/}
        <TwoRenderer />
     {/*  <Illustration >
        <Ellipse x="10"></Ellipse>
        <Ellipse x="10"></Ellipse>
        <Ellipse x="10"></Ellipse>
        <Ellipse x="10"></Ellipse>
      </Illustration> */}
    </React.Fragment>

  )
}

export default Game
