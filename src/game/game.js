import React, { useRef } from 'react'

import { Stage } from './two'
import { Physics } from './matter'

import {
  TitleContainer,
  TextFromDom,
  Hole,
  Flag,
  Player,
  Stats,
} from './components'

import { Walls } from './components/_walls'
import { Debug } from './components/_debug'

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
        <Physics gravity={{ x: 0, y: 0 }}>
          <Hole />
          {/* <Walls /> */}
          <TextFromDom textDomRef={textDomRef}></TextFromDom>
          <Player />
          <Flag />
          {/* <Debug /> */}
          {process.env.NODE_ENV !== 'production' ? <Stats /> : null}
        </Physics>
      </Stage>
    </>
  )
}

export default Game
