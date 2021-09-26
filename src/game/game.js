import React, { useRef } from 'react'

import { Stage } from './two'
import { Physics } from './matter'

import { TitleContainer, TextFromDom, Hole, Flag, Player } from './components'

import { Walls } from './components/walls'
import { Debug } from './components/debug'

const Game = () => {
  const textDomRef = useRef()

  return (
    <>
      <TitleContainer
        ref={textDomRef}
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
          <Hole />
          {/* <Walls /> */}
          <TextFromDom textDomRef={textDomRef}></TextFromDom>
          <Player />
          <Flag />
          <Debug />
        </Physics>
      </Stage>
    </>
  )
}

export default Game
