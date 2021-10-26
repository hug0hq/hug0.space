//const Logo = dynamic(() => import('./components/logo'))
//import { Game } from '../components'
import React, { useEffect, useState, useRef } from 'react'

//import dynamic from 'next/dynamic'

//const GameThree = dynamic(() => import('../components/game'), { ssr: false })
//import GameThree from '../components/game'
import Game from '../game/game'

import { Logo } from '../svg'

const Header = () => {
  const [text] = useState('Hi there!\nI make cool things')

  const h1text = useRef()

  return (
    <header className="main " /* pp */ id="golf">
      <div className="header--bg"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
       
        }}
      >
        <Logo />
        <div className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M506.157 132.386c-7.803-7.819-20.465-7.831-28.285-.029l-207.73 207.299c-7.799 7.798-20.486 7.797-28.299-.015L34.128 132.357c-7.819-7.803-20.481-7.79-28.285.029-7.802 7.819-7.789 20.482.029 28.284l207.701 207.27c11.701 11.699 27.066 17.547 42.433 17.547 15.358 0 30.719-5.846 42.405-17.533L506.128 160.67c7.818-7.802 7.831-20.465.029-28.284z" />
          </svg>
        </div>
        {/*  <div style={{position: 'absolute', top: 0, left: 0 }}> */}
        {/*  <div style={{ position: 'absolute' , top: 0, left: 0}}> */}
        {/* <GameThree /> */}
        {/* <TwoRender textRef={h1text}></TwoRender> */}
        <Game />

        {/*  <h1 className="textWhite tx" ref={h1text} style={{ opacity: 0 }}>
        {text
          .split('')
          .map((char, index) =>
            char !== '\n' ? (
              <span key={index}>{char}</span>
            ) : (
              <br key={index} />
            ),
          )}
      </h1> */}
        {/* </div> */}
      </div>
    </header>
  )
}

export default Header
