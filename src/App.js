import './App.css';

/* import Stats from 'stats.js'; */
import React, { useEffect, useState, useRef } from 'react';
import { Stage } from '@inlet/react-pixi';
import { Engine } from "./physics"
import { Logo, GaCard, Social, Pens, Draw, Link } from './components'

import A1 from './p5/p5-1'
import A2 from './p5/p5-2'
import A3 from './p5/p5-3'
import A4 from './p5/p5-4'
import A5 from './p5/p5-5'
import A6 from './p5/p5-6'
import A7 from './p5/p5-7'
import A8 from './p5/p5-8'
import A9 from './p5/p5-9'
import A10 from './p5/p5-10'

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

  const boxRef = useRef(null)
  const canvasRef = useRef(null)

  return (
    <>
      <div
        ref={boxRef}
        style={{
          position: 'absolute',
          opacity: 0.5,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <canvas ref={canvasRef} />
      </div>
      <header className="main" id="golf">
        {/* <div className='tx'> */}
        <h1 className="textWhite tx" ref={h1text}>
          {
            text.split('').map((char, index) => char !== '\n' ? <span key={index}>{char}</span> : <br key={index} />)
          }
        </h1>
        {/*    </div> */}
        {/* <div className="main"> */}
        <Stage onMount={_app => (app.current = _app)}
          width={window.innerWidth}
          height={window.innerHeight}
          /*  raf={false}
           renderOnComponentChange={true} */
          options={options}

        >
          <Engine width={window.innerWidth} height={window.innerHeight} box={boxRef} canvas={canvasRef}>

            {/* <Title text={text} textRef={h1text} /> */}
            {/* <Player color={0xeef1f5} radios={10} /> */}
            {/* <CircleBody x={100} y={100} radios={20} options> */}

            {/* </CircleBody> */}
            {/* <Hole /> */}
          </Engine>
        </Stage>

        {/*  </div> */}
        <Logo />
      </header>
      <section className="about">
        <header>
          <h2>About Me</h2>
          <h3>Short version</h3>
        </header>
        <div className="txt">
          <p style={{ marginTop: 0 }}>Hugo Costa is my name. I'm a web and game developer trying different things out.</p>
          <p>Thank you for passing by! <span className="emo">🦾</span></p>
        </div>

      </section>

      <section className="groupgames">
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

            <h3 className="t4">Available for Android on <a href="https://play.google.com/store/apps/details?id=com.h0.SteveVrumVrum" target="_blank">Google Play</a></h3>

          </div>
          <div className="cont">
            <div className="sname">
              <img src="./img/jim.svg" alt="Sr. Jim!" />
            </div>

            <h3 className="t3">Sr. Jim!</h3>
            
            <h3 className="t4">Available for Android on <a href="https://play.google.com/store/apps/details?id=com.h0.SrJim" target="_blank">Google Play</a> and for the web on <a href="https://gamejolt.com/games/sr-jim/38705" target="_blank">Game Jolt</a></h3>

          </div>
        </div>
      </section>

      <section className="grouppen">
        <header>
          <h2>Pens</h2>
          <h3>Cool code experiments</h3>
        </header>
        <Pens></Pens>

      </section>

      <section className="groupart">
        <header>
          <h2 className="textBlack">Generative Art</h2>
          <h3>It's code and art</h3>
        </header>
        <div className="p5js">
          <GaCard href="https://editor.p5js.org/hug0Hq/sketches/acMx6vOG4">
            <A1 className="im"></A1>
          </GaCard>
          <GaCard linkColor="#fff" href="https://editor.p5js.org/hug0Hq/sketches/D7RH0Hm9y">
            <A2 className="im"></A2>
          </GaCard>
          <GaCard linkColor="#f36a19" href="https://editor.p5js.org/hug0Hq/sketches/7b-Me5PCa">
            <A3 className="im"></A3>
          </GaCard>
          <GaCard href="https://editor.p5js.org/hug0Hq/sketches/cxPnkj95Q">
            <A4 className="im"></A4>
          </GaCard>
          <GaCard href="https://editor.p5js.org/hug0Hq/sketches/PUTOVojk1">
            <A5 className="im"></A5>
          </GaCard>
          <GaCard href="https://editor.p5js.org/hug0Hq/sketches/n3X0ZXdxk">
            <A6 className="im"></A6>
          </GaCard>
          <GaCard linkColor="#f36a19" href="https://editor.p5js.org/hug0Hq/sketches/URwNbuFhB">
            <A10 className="im"></A10>
          </GaCard>
          <GaCard linkColor="#f36a19" href="https://editor.p5js.org/hug0Hq/sketches/JYV2MMUzW">
            <A9 className="im"></A9>
          </GaCard>
          <GaCard href="https://editor.p5js.org/hug0Hq/sketches/V7SOXVkpw">
            <A8 className="im"></A8>
          </GaCard>
          <GaCard href="https://editor.p5js.org/hug0Hq/sketches/P4vg5KCxF">
            <A7 className="im"></A7>
          </GaCard>
        </div>
      </section>

      <footer className="group1">
        <div className="mailContainer">
          <h2 className="textWhite mail">Say <a className="textWhite" href="mailto:hi@hug0.pt?subject=Hi! 👋">hi@hug0.pt</a></h2>
        </div>
        <Social></Social>
        {/* <Draw></Draw> */}
      </footer>
    </>)
};

export default App;
