import './App.css';

/* import Stats from 'stats.js'; */
import React, { useEffect, useState, useRef } from 'react';
import { Stage } from '@inlet/react-pixi';
import { Engine } from "./physics"
import { Logo } from './components'

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
      <div className='tx'>
        <h1 ref={h1text}>
          {
            text.split('').map((char, index) => char !== '\n' ? <span key={index}>{char}</span> : <br key={index} />)
          }
        </h1>
      </div>
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
        <div className="txt">
          <p>Hugo Costa is my name, I'm mainly a web and game developer.</p>
          <p>Thank you for passing by! <span className="emo">🦾</span></p>
        </div>

      </section>

      <section className="groupgames">
        <h2 className="t4">Games</h2>
        <div className="list">
          <div>
            <div className="sname">
              <img src="./img/steve.svg" alt="Steve Vrum! Vrum!" />
            </div>

            <h2 className="t3">Steve Vrum! Vrum!</h2>
            <p>Video Game</p>
            <p>Available on Google Play</p>
            <div></div>
          </div>
          <div>
            <div className="sname">
              <img src="./img/jim.svg" alt="Sr. Jim!" />
            </div>

            <h2 className="t3">Sr. Jim!</h2>
            <p>Video Game</p>
            <p>Available on Google Play and Game Jolt</p>
            <div></div>

          </div>
        </div>
      </section>

      <section className="grouppen">
        <h2 className="t2">Pens</h2>
        <div className="pens">
          <div className="thumbnail" style={{ backgroundColor: '#edda5b' }} >
            <a href="https://codepen.io/hug0Hq/pen/KKMVGQg">
              <video preload="auto" muted loop
                onMouseOver={event => { event.target.play() }}
                onMouseOut={event => { event.target.currentTime = 0; event.target.pause(); }}>
                <source src="./vid/m1.webm" type="video/webm" />
                <source src="./vid/b1.mp4" type='video/mp4;' />
              </video>
            </a>
          </div>
          <div className="thumbnail" style={{ backgroundColor: '#1d1d1b' }}>
            <a href="https://codepen.io/hug0Hq/pen/ExyyYNZ">
              <video preload="auto" muted loop
                onMouseOver={event => { event.target.play() }}
                onMouseOut={event => { event.target.currentTime = 0; event.target.pause(); }}>
                <source src="./vid/m2.webm" type="video/webm" />
                <source src="./vid/b2.mp4" type='video/mp4;' />
              </video>
            </a>
          </div>
          <div className="thumbnail" style={{ backgroundColor: '#282c34' }}>
            <a href="https://codepen.io/hug0Hq/pen/OJXXLyB">
              <video preload="auto" muted loop
                onMouseOver={event => { event.target.play() }}
                onMouseOut={event => { event.target.currentTime = 0; event.target.pause(); }}>
                <source src="./vid/m3.webm" type="video/webm" />
                <source src="./vid/b3.mp4" type='video/mp4;' />
              </video>
            </a>
          </div>
          <div className="thumbnail" style={{ backgroundColor: '#0cbab9' }}>
            <a href="https://codepen.io/hug0Hq/pen/NEXgKa">
              <video preload="auto" muted loop
                onMouseOver={event => { event.target.play() }}
                onMouseOut={event => { event.target.currentTime = 0; event.target.pause(); }}>
                <source src="./vid/m4.webm" type="video/webm" />
                <source src="./vid/b4.mp4" type='video/mp4;' />
              </video>
            </a>
          </div>
          <div className="thumbnail" style={{ backgroundColor: '#f6f8ff' }}>
            <a href="https://codepen.io/hug0Hq/pen/PozNeEQ">
              <video preload="auto" muted loop
                onMouseOver={event => { event.target.play() }}
                onMouseOut={event => { event.target.currentTime = 0; event.target.pause(); }}>
                <source src="./vid/m5.webm" type="video/webm" />
                <source src="./vid/b5.mp4" type='video/mp4;' />
              </video>
            </a>
          </div>
          <div className="thumbnail" style={{ backgroundColor: '#A9E2F3' }}>
            <a href="https://codepen.io/hug0Hq/pen/ZEzPVLP">
              <video preload="auto" muted loop
                onMouseOver={event => { event.target.play() }}
                onMouseOut={event => { event.target.currentTime = 0; event.target.pause(); }}>
                <source src="./vid/m6.webm" type="video/webm" />
                <source src="./vid/b6.mp4" type='video/mp4;' />
              </video>
            </a>
          </div>
          {/*  <div className="thumbnail">
            <video preload="auto" muted>
              <source src="./vid/b1.mp4" type='video/mp4;' />
            </video>
            <span className="thumbnail__text">Lorem Ipsum</span>
            <div className="thumbnail__timeline thumbnail__timeline--ghost"></div>
            <div className="thumbnail__timeline thumbnail__timeline--progress"></div>
            <div className="thumbnail__loader"></div>
          </div> */}

        </div>
      </section>

      <section className="groupart">
        <h2 className="t2">Generative Art</h2>
        <div className="p5js">
          <a href="https://editor.p5js.org/hug0Hq/sketches/acMx6vOG4">
            <A1 className="im"></A1>
          </a>
          <a href="https://editor.p5js.org/hug0Hq/sketches/D7RH0Hm9y">
            <A2 className="im"></A2>
          </a>
          <a href="https://editor.p5js.org/hug0Hq/sketches/7b-Me5PCa">
            <A3 className="im"></A3>
          </a>
          <a href="https://editor.p5js.org/hug0Hq/sketches/cxPnkj95Q">
            <A4 className="im"></A4>
          </a>
          <a href="https://editor.p5js.org/hug0Hq/sketches/PUTOVojk1">
            <A5 className="im"></A5>
          </a>
          <a href="https://editor.p5js.org/hug0Hq/sketches/n3X0ZXdxk">
            <A6 className="im"></A6>
          </a>
          <a href="https://editor.p5js.org/hug0Hq/sketches/URwNbuFhB">
            <A10 className="im"></A10>
          </a>
          <a href="https://editor.p5js.org/hug0Hq/sketches/JYV2MMUzW">
            <A9 className="im"></A9>
          </a>
          <a href="https://editor.p5js.org/hug0Hq/sketches/V7SOXVkpw">
            <A8 className="im"></A8>
          </a>
          <a href="https://editor.p5js.org/hug0Hq/sketches/P4vg5KCxF">
            <A7 className="im"></A7>
          </a>
        </div>
      </section>

      <footer className="group1">

        <h2 className="mail">Say <a href="mailto:hi@hug0.pt?subject=Hi! 👋">hi@hug0.pt</a></h2>
        <div className="logoGroup">
          <div>
            <a href="https://www.instagram.com/hug0hq" >
              <svg width="25px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <g>
                  <path fill="#fff" d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z" ></path>
                </g>
              </svg>
            </a>
          </div>

          <div>
            <a href="https://twitter.com/hug0Hq">

              <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="xMidYMid">
                <path stroke="#fff" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                </path>
              </svg>
            </a>
          </div>

          <div>
            <a href="https://github.com/hug0Hq">

              <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="xMidYMid">
                <path stroke="#fff" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>

          <div>
            <a href="https://codepen.io/hug0Hq">
              {/*  <?xml version="1.0" encoding="UTF-8" standalone="no" ?> */}
              <svg width="25px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <g>
                  <path fill="#fff" d="M255.806943,87.0866439 C255.748337,86.7763743 255.696625,86.4661047 255.613887,86.1627299 C255.562175,85.9800156 255.500121,85.8076436 255.441515,85.6283767 C255.355329,85.3594764 255.265695,85.0905761 255.158825,84.8285707 C255.082981,84.6458563 254.996795,84.4700369 254.914056,84.2942175 C254.796843,84.0460018 254.676183,83.8012335 254.538285,83.5633602 C254.441757,83.3875407 254.331439,83.2220636 254.224568,83.0531391 C254.076328,82.825608 253.924641,82.6015244 253.759164,82.3843357 C253.638504,82.222306 253.514396,82.0671712 253.383393,81.9120364 C253.211021,81.70519 253.024859,81.5086859 252.838698,81.3156293 C252.693905,81.1708368 252.549113,81.0260443 252.397425,80.8846993 C252.197474,80.701985 251.990627,80.529613 251.773439,80.3641359 C251.607961,80.2365806 251.445932,80.1055779 251.27356,79.9883649 C251.211506,79.9435482 251.156347,79.8918366 251.090845,79.8504673 L134.098521,1.8486897 C130.406313,-0.616229901 125.590239,-0.616229901 121.898031,1.8486897 L4.89881225,79.8470198 C4.83331089,79.8883891 4.78159929,79.9401007 4.71609793,79.9849174 C4.54372593,80.1055779 4.38169625,80.2331331 4.21621913,80.3606884 C4.00247785,80.529613 3.79218401,80.701985 3.59223249,80.8778044 C3.44054513,81.015702 3.29575265,81.1604945 3.15440761,81.3087344 C2.96135097,81.5017911 2.78208409,81.6982951 2.60626464,81.9051415 C2.47526192,82.0602763 2.35115408,82.2154111 2.23049368,82.3877831 C2.06501656,82.6049719 1.9133292,82.825608 1.76508928,83.0565865 C1.65821864,83.2255111 1.551348,83.3909882 1.45137224,83.5668076 C1.31347464,83.804681 1.19281424,84.0494492 1.07904872,84.29077 C0.996310162,84.4665895 0.906676722,84.6458563 0.834280482,84.8251232 C0.727409841,85.0871287 0.634328961,85.356029 0.548142961,85.6249293 C0.489536481,85.8041962 0.427482561,85.9800156 0.379218401,86.1420453 C0.299927281,86.44542 0.2413208,86.7522422 0.18616176,87.0659592 C0.1551348,87.2245415 0.11721296,87.3796763 0.0965283202,87.5417059 C0.0344744001,88.0174527 2.84217094e-14,88.4931994 2.84217094e-14,88.9792884 L2.84217094e-14,166.994856 C2.84217094e-14,167.477497 0.0344744001,167.960139 0.1034232,168.432438 C0.12755528,168.60481 0.172372,168.742708 0.2068464,168.908185 C0.26200544,169.218455 0.310269601,169.528724 0.413692801,169.838994 C0.461956961,170.011366 0.517116001,170.183738 0.586064801,170.373347 C0.672250801,170.649142 0.758436801,170.924937 0.861860002,171.176601 C0.934256242,171.348973 1.034232,171.521345 1.1031808,171.693717 C1.21694632,171.935037 1.3445016,172.176358 1.4823992,172.428021 C1.57892752,172.600393 1.6892456,172.772765 1.7926688,172.931347 C1.94090872,173.172668 2.1029384,173.379515 2.2753104,173.586361 C2.3959708,173.758733 2.5166312,173.896631 2.6545288,174.062108 C2.83034825,174.268954 2.99927281,174.475801 3.20611921,174.658515 C3.34746425,174.796413 3.48191441,174.968785 3.65428641,175.072208 C3.85423793,175.24458 4.06797921,175.416952 4.27482561,175.596219 C4.44030273,175.734116 4.61956961,175.837539 4.75746721,175.97199 C4.82296857,176.006464 4.86089041,176.075413 4.92983921,176.10644 L121.898031,254.146139 C123.745859,255.387218 125.862587,256.007757 128,255.997414 C130.137413,255.987072 132.254141,255.376875 134.101969,254.146139 L251.101188,176.147809 C251.166689,176.10644 251.221848,176.058176 251.283902,176.013359 C251.456274,175.892698 251.618304,175.765143 251.783781,175.637588 C251.997522,175.468663 252.207816,175.292844 252.407768,175.113577 C252.559455,174.979127 252.704247,174.830887 252.84904,174.686094 C253.038649,174.493038 253.221363,174.296534 253.393735,174.089687 C253.524738,173.934553 253.648846,173.779418 253.769506,173.613941 C253.934983,173.396752 254.086671,173.172668 254.234911,172.945137 C254.341781,172.77966 254.448652,172.610736 254.548628,172.441811 C254.686525,172.20049 254.807186,171.955722 254.924399,171.707506 C255.007137,171.531687 255.093323,171.355867 255.169167,171.176601 C255.276038,170.911148 255.365671,170.642247 255.451857,170.373347 C255.510464,170.19408 255.572517,170.018261 255.624229,169.838994 C255.70352,169.535619 255.758679,169.225349 255.817286,168.91508 C255.844865,168.756498 255.886234,168.601363 255.903472,168.439333 C255.965526,167.963586 256,167.48784 256,167.001751 L256,88.9999731 C256,88.513884 255.962078,88.0381373 255.903472,87.5623906 C255.875892,87.393466 255.824181,87.2555684 255.789706,87.0866439 L255.806943,87.0866439 Z M127.996553,154.022139 L89.0921921,128.000862 L127.996553,101.976137 L166.90436,128.000862 L127.996553,154.022139 L127.996553,154.022139 Z M116.999219,82.8669773 L69.3073339,114.76614 L30.8097713,89.0137628 L116.999219,31.5552802 L116.999219,82.8669773 L116.999219,82.8669773 Z M49.5224757,127.997414 L22.0050096,146.403297 L22.0050096,109.591532 L49.5224757,127.997414 L49.5224757,127.997414 Z M69.3073339,141.242479 L116.999219,173.138194 L116.999219,224.449891 L30.8097713,166.984513 L69.3073339,141.235584 L69.3073339,141.242479 Z M138.997334,173.131299 L186.689219,141.235584 L225.190229,166.984513 L138.997334,224.442996 L138.997334,173.131299 L138.997334,173.131299 Z M206.474077,128.004309 L233.99499,109.59498 L233.99499,146.410191 L206.474077,127.997414 L206.474077,128.004309 Z M186.689219,114.76614 L138.997334,82.8704247 L138.997334,31.5552802 L225.190229,89.0137628 L186.689219,114.76614 L186.689219,114.76614 Z" ></path>
                </g>
              </svg>
            </a>
          </div>
          <div>
          </div>
        </div>
      </footer>
    </>)
};

export default App;
