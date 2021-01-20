import './App.css';

/* import Stats from 'stats.js'; */
import React, { useEffect, useState, useRef } from 'react';
import { Stage } from '@inlet/react-pixi';
import { Engine } from "./physics"
import { Logo, Hole, Title, Player } from './components'


const App = () => {
  //const [stats, setStats] = useState(null);
  useEffect(() => {
    //setWind(document.getElementById('root'));
    console.log('😋')
    console.log(devicePixelRatio)

    const resizeListener = () => {
      console.log('resize')

      if (!app.current.renderer) {
        return
      }


      //console.log(h1text)

      //app.renderer.resize(window.innerWidth, window.innerHeight)
      // Immediately render because resizing clears the canvas
      //app.render()
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);
    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  const options = {
    backgroundColor: 0x000000,
    antialias: true,
    autoDensity: true,
    resolution: devicePixelRatio,
    transparent: true,
    /*  preserveDrawingBuffer: true, */ //fixes flikering 
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
      <div className='tx'>
        <h1 ref={h1text}>
          {
            text.split('').map((char, index) => char!='\n' ? <span key={index}>{char}</span> : <br/>)
          }
        </h1>
      </div>
      <div
        ref={boxRef}
        style={{
          width: 300,
          height: 300,
          position: 'absolute',
          opacity: 0.5,
        }}
      >
        <canvas ref={canvasRef} />
      </div>
      <div className="main">
        {/* <div className="main"> */}
        <Stage onMount={_app => (app.current = _app)}
          width={window.innerWidth}
          height={window.innerHeight}
          /*  raf={false}
           renderOnComponentChange={true} */
          options={options}

        >
          <Engine width={window.innerWidth} height={window.innerHeight} box={boxRef} canvas={canvasRef}>
            
            <Title text={text} textRef={h1text} />
            {/* <Player color={0xeef1f5} radios={10} /> */}
            {/* <CircleBody x={100} y={100} radios={20} options> */}
            <Player color={0xeef1f5} radios={10} />
            {/* </CircleBody> */}
            <Hole />
          </Engine>
        </Stage>

        {/*  </div> */}

      </div>
      <Logo />
      {/* <div className="group1">
          content
        </div> */}
    </>)
};

export default App;
