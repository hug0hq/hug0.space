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
        <Logo />
        <div className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M506.157 132.386c-7.803-7.819-20.465-7.831-28.285-.029l-207.73 207.299c-7.799 7.798-20.486 7.797-28.299-.015L34.128 132.357c-7.819-7.803-20.481-7.79-28.285.029-7.802 7.819-7.789 20.482.029 28.284l207.701 207.27c11.701 11.699 27.066 17.547 42.433 17.547 15.358 0 30.719-5.846 42.405-17.533L506.128 160.67c7.818-7.802 7.831-20.465.029-28.284z" />
          </svg>
        </div>
      </header>
      <main>
        <section className="about pp">
          <div className="container">
            <header>
              <h2>About Me</h2>
              <h3>Short version</h3>
            </header>
            <div className="txt">
              <p style={{ marginTop: 0 }}>
                Hugo Costa is my name. I'm a creative developer doing
                interactive experiences, games and art. Mostly self-taught. I
                learned a lot by playing around and reading the internet.
              </p>
              <p>
                Thank you for passing by. 🙏{' '}
                {/* <span className="emo">🦾</span> */}
              </p>
            </div>
          </div>
        </section>
        <section className="groupgames pp">
          <div className="container">
            <header>
              <h2 className="textWhite">Games</h2>
              {/* <h3>Or video games</h3> */}
            </header>
            <div className="gamelist">
              <div className="cont">
                <div className="sname">
                  <img src="./img/steve.svg" alt="Steve Vrum! Vrum!" />
                </div>
                <h3 className="t3">Steve Vrum! Vrum!</h3>
                <h3 className="t4">
                  Available for Android on{' '}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.h0.SteveVrumVrum"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Play
                  </a>
                </h3>
              </div>
              <div className="cont">
                <div className="sname">
                  <img src="./img/jim.svg" alt="Sr. Jim!" />
                </div>
                <h3 className="t3">Sr. Jim!</h3>
                <h3 className="t4">
                  Available for Android on{' '}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.h0.SrJim"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Play
                  </a>{' '}
                  and for the web on{' '}
                  <a
                    href="https://gamejolt.com/games/sr-jim/38705"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Game Jolt
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="grouppen pp">
          <div className="container">
            <header>
              <h2>Pens</h2>
              <h3>Cool code experiments</h3>
            </header>
            <Pens />
          </div>
        </section>
        <section className="groupart pp">
          <div className="container">
            <header>
              <h2 className="textBlack">Generative Art</h2>
              <h3>It's code and art</h3>
            </header>
            <div className="p5js">
              <GaGroup />
            </div>
          </div>
        </section>
      </main>
      <footer className="group1 pp">
        <div className="container">
          <div className="mailContainer">
            <h2 className="textWhite mail">
              Say{' '}
              <a
                className="textWhite"
                href="mailto:hi@hug0.space?subject=Hi! 👋"
              >
                hi@hug0.space
              </a>
            </h2>
          </div>
          <Social />
        </div>
      </footer>
    </>
  )
}

export default App
