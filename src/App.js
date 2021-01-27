import './App.css';

import React, { useEffect, useState, useRef } from 'react';

import { Stage } from '@inlet/react-pixi';
import { Engine } from "./physics";
import { Logo, Social } from './components';
import { Pens, GaGroup } from './containers';
import ReactGA from 'react-ga';

const App = () => {

  //google analytics
  useEffect(() => {
    ReactGA.initialize('UA-55839128-1');
    ReactGA.pageview(window.location.pathname);
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
    resizeTo: window
  };

  const [text] = useState('Hi there!\nI make cool things')

  const app = useRef()
  const h1text = useRef()
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
      <header className="main" id="golf" >
        <div className="container">
          <h1 className="textWhite tx" ref={h1text} style={{ opacity: 0 }}>
            {
              text.split('').map((char, index) => char !== '\n' ? <span key={index}>{char}</span> : <br key={index} />)
            }
          </h1>
          <div className="golf">
            <Stage onMount={_app => (app.current = _app)}
              width={window.innerWidth}
              height={window.innerHeight}
              options={options}
            >
              <Engine width={window.innerWidth} height={window.innerHeight} header={headerRef} box={boxRef} canvas={canvasRef} textRef={h1text} />
            </Stage>
          </div>
        </div>
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
          <Pens />
        </div>
      </section>
      <section className="groupart">
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
      <footer className="group1">
        <div className="container">
          <div className="mailContainer">
            <h2 className="textWhite mail">Say <a className="textWhite" href="mailto:hi@hug0.pt?subject=Hi! 👋">hi@hug0.pt</a></h2>
          </div>
          <Social />
        </div>
      </footer>
    </>)
};

export default App;
