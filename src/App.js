import './App.css';

/* import Stats from 'stats.js'; */
import React, { useEffect, useState, useRef } from 'react';
import { Stage } from '@inlet/react-pixi';
import { Engine } from "./physics"
import { Logo, Social, Pens, GaGroup /*, Link  */ } from './components'


const App = () => {
  //const [stats, setStats] = useState(null);
  useEffect(() => {
    //setWind(document.getElementById('root'));
    console.log('Hello! 😋')
    //console.log(devicePixelRatio)

    // const resizeListener = () => {
    //console.log('resize')

    /* if (!app.current.renderer) {
      return
    } */

    //console.log(h1text)

    //app.renderer.resize(window.innerWidth, window.innerHeight)
    // Immediately render because resizing clears the canvas
    //app.render()
    // };
    // set resize listener
    /*   window.addEventListener('resize', resizeListener);
      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      } */
  }, [])

  const options = {
    backgroundColor: 0x131618,
    antialias: true,
    autoDensity: true,
    resolution: devicePixelRatio,
    /* transparent: true, */
    preserveDrawingBuffer: true,  //fixes flikering 
    resizeTo: window ///document.getElementById('root'), // or window, or global.window, etc
  };

  /*  const resize = () => {
     app.renderer.resize(window.innerWidth, window.innerHeight)
     // Immediately render because resizing clears the canvas
     app.render()
   } */

  const app = useRef()
  const h1text = useRef()

  const [text] = useState('Hi there!\nI make cool things')

  const boxRef = useRef()
  const canvasRef = useRef()

  const headerRef = useRef()

  return (
    <>
      <div
        ref={boxRef}
        style={{
          position: 'absolute',
          opacity: 0.5,
          zIndex: 1,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <canvas ref={canvasRef} />
      </div>
      <header className="main" /* id="golf" */ >
        <div className="container" /* ref={headerRef} */>
          {/* <div className='tx'> */}
          <h1 className="textWhite tx" ref={h1text} style={{opacity: 0}}>
            {
              text.split('').map((char, index) => char !== '\n' ? <span key={index}>{char}</span> : <br key={index} />)
            }
          </h1>
          {/*    </div> */}
          {/* <div className="main"> */}
          <div /* className="golf" */>
            <Stage onMount={_app => (app.current = _app)}
              width={window.innerWidth}
              height={window.innerHeight}
              /*  raf={false}
               renderOnComponentChange={true} */
              options={options}

            >
              <Engine width={window.innerWidth} height={window.innerHeight} header={headerRef} box={boxRef} canvas={canvasRef} text={text} textRef={h1text} >

                {/* <Player color={0xeef1f5} radios={10} /> */}
                {/* <CircleBody x={100} y={100} radios={20} options> */}

                {/* </CircleBody> */}
                {/* <Hole /> */}
              </Engine>
            </Stage>
          </div>
        </div>
        {/*  </div> */}
        <Logo />
        <div className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.402 197.402">
            <polygon points="146.883,197.402 45.255,98.698 146.883,0 152.148,5.418 56.109,98.698 152.148,191.98" />
          </svg>
        </div>
      </header>
      <section className="about">
        <div className="container">
          <header>
            <h2>About Me</h2>
            <h3>Short version</h3>
          </header>
          <div className="txt">
            <p style={{ marginTop: 0 }}>Hugo Costa is my name. I'm a web and game developer trying different things out.</p>
            <p>Thank you for passing by! <span className="emo">🦾</span></p>
          </div>
        </div>
      </section>

      <section className="groupgames">
        <div className="container">
          <header>
            <h2 className="textWhite">Games</h2>
            <h3>Or video games</h3>
          </header>
          <div className="gamelist">
            <div className="cont">
              <div className="sname">
                <img src="./img/steve.svg" alt="Steve Vrum! Vrum!" />
              </div>

              <h3 className="t3">Steve Vrum! Vrum!</h3>

              <h3 className="t4">Available for Android on <a href="https://play.google.com/store/apps/details?id=com.h0.SteveVrumVrum" target="_blank" rel="noreferrer">Google Play</a></h3>

            </div>
            <div className="cont">
              <div className="sname">
                <img src="./img/jim.svg" alt="Sr. Jim!" />
              </div>

              <h3 className="t3">Sr. Jim!</h3>

              <h3 className="t4">Available for Android on <a href="https://play.google.com/store/apps/details?id=com.h0.SrJim" target="_blank" rel="noreferrer">Google Play</a> and for the web on <a href="https://gamejolt.com/games/sr-jim/38705" target="_blank" rel="noreferrer">Game Jolt</a></h3>

            </div>
          </div>
        </div>
      </section>

      <section className="grouppen">
        <div className="container">
          <header>
            <h2>Pens</h2>
            <h3>Cool code experiments</h3>
          </header>
          <Pens></Pens>
        </div>
      </section>

      <section className="groupart">
        <div className="container">
          <header>
            <h2 className="textBlack">Generative Art</h2>
            <h3>It's code and art</h3>
          </header>
          <div className="p5js">
            <GaGroup></GaGroup>
          </div>
        </div>
      </section>

      <footer className="group1">
        <div className="container">
          <div className="mailContainer">
            <h2 className="textWhite mail">Say <a className="textWhite" href="mailto:hi@hug0.pt?subject=Hi! 👋">hi@hug0.pt</a></h2>
          </div>
          <Social></Social>
          {/* <Draw></Draw> */}
        </div>
      </footer>
    </>)
};

export default App;
