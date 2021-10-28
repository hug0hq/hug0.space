import React, { useEffect, useState, useRef } from 'react'

import { Stage } from '@inlet/react-pixi'
import { Engine } from './physics'
import { Logo, Social } from './components'
import { Pens, GaGroup } from './containers'
import ReactGA from 'react-ga'

const App = () => {
  //google analytics
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-55839128-1')
      ReactGA.pageview(window.location.pathname)
    }
  }, [])

  useEffect(() => {
    console.log('Hello! 😋')
  }, [])

  const options = {
    backgroundColor: 0x131618,
    antialias: true,
    autoDensity: true,
    resolution: devicePixelRatio,
    // transparent: true,
    // preserveDrawingBuffer: true, //fixes flikering
    resizeTo: window,
  }

  const [text] = useState('Hi there!\nI make cool things')

  const app = useRef()
  const h1text = useRef()
  const boxRef = useRef()
  const canvasRef = useRef()
  const headerRef = useRef()

  return (
    <>
      <header className="main pp" id="golf">
        <div className="container">
          <h1 className="textWhite tx" ref={h1text} style={{ opacity: 0 }}>
            {text
              .split('')
              .map((char, index) =>
                char !== '\n' ? (
                  <span key={index}>{char}</span>
                ) : (
                  <br key={index} />
                ),
              )}
          </h1>
          <div
            /* debuger */
            ref={boxRef}
            className="debuger"
          >
            <canvas ref={canvasRef} />
          </div>
          <div className="golf">
            <Stage
              onMount={(_app) => (app.current = _app)}
              width={window.innerWidth}
              height={window.innerHeight}
              options={options}
            >
              <Engine
                width={window.innerWidth}
                height={window.innerHeight}
                header={headerRef}
                box={boxRef}
                canvas={canvasRef}
                textRef={h1text}
              />
            </Stage>
          </div>
        </div>
        
      </header>
    
    </>
  )
}

export default App
