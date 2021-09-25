import React, { useRef, useEffect, useState } from 'react'
import Stage from './stage'

import { /* Text, */ Ellipse, Group } from './type'
import { TextFromDom } from './components/title'
import { Hole } from './components/hole'
import { Player } from './components/player'
import { Walls } from './components/walls'
import { TitleContainer } from './components/titleContiner'
import { useRender, useApp } from './util'
import { Debug } from './components/debug'
import { Physics } from './components/physics'

const Game = () => {
  const textRef = useRef()

  //const [text] = useState()

  useEffect(() => {
    //console.log('c:', textRef.current)
  }, [textRef])

  return (
    <>
      {/* <button onClick={o}>Update</button> */}
      {/* <div className="section" style={{ position: 'absolute' }}>
        <h1 className="textWhite tx" ref={textRef} style={{ opacity: 0.1 }}>
          {htmlText}
        </h1>
      </div> */}
      <TitleContainer
        ref={textRef}
        text={['Hi there!', 'I make cool things']}
      />
      <Stage
        style={{
          height: '100%',
          width: '100%',
        }}
        //type="SVGRenderer"
        autostart
        fitted
        imageSmoothingEnabled
      >
        <Physics>
          <Walls />
          <TextFromDom textRef={textRef}></TextFromDom>
          <Player />
          <Hole />
          <Debug />
        </Physics>
      </Stage>
    </>
  )
}

export default Game
