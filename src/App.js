import './App.css';

/* import Stats from 'stats.js'; */
import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { Stage, Graphics, Text, useTick, useApp, Container, useReducer } from '@inlet/react-pixi';
import { TextStyle } from 'pixi.js';

import {Engine, usePhysics} from "./physics"
import { Bodies } from 'matter-js';

const Player = (props) => {
  const app = useApp()
  const height = 40;

  const pDown = () => {

    setclick(true)
  }
  const pUp = () => {
    setclick(false)
  }

  useEffect(() => {

    //const update = () => setSize(getSize());
    //window.onresize = update;
    //return () => (window.onresize = null);
    window.addEventListener('pointerup', pUp);
    window.addEventListener('pointerdown', pDown);
    // clean up function
    return () => {
      // remove resize listener


      window.removeEventListener('pointerup', pUp);
      window.removeEventListener('pointerdown', pDown);
    }
  }, []);

  const [arrow, update] = useState(0)
  const [click, setclick] = useState(false)
  //  useReducer(reducer, initialArgs, init); its a better setState for comprex states
  const angle = (x, y) => {
    return Math.atan2(y, x) + Math.PI / 2;
  }

  useTick(delta => {
    if (click) {
      update({
        arrowSize: 60
      })
    }
    else {
      //let deltaVector = Matter.Vector.sub(mouse.position, ballBody.position);
      update({
        arrowSize: 0,
        //  rotation: angle(deltaVector.x, deltaVector.y)
      })
    }
  })

  return (
    <Container position={[100, app.screen.height - 100]} >
      <Arrow {...arrow} height={height}></Arrow>
      <Ball radios={props.radios} />
    </Container>
  )
}

const BallBody = () => {
 /*  Bodies.circle(100 + playerSize.radios, localHeight - 100 - playerSize.radios, playerSize.radios + 5, {
    restitution: 1,
    friction: 0.3,
    frictionAir: 0.05,
    label: 'ball',
    collisionFilter: {
      category: '0x0002'
    }
  } */
  const options = {
    restitution: 1,
    friction: 0.3,
    frictionAir: 0.05,
    label: 'ball',
    collisionFilter: {
      category: '0x0002'
    }
  }
  //Bodies(x, y, options)
}

const Ball = (props) => {
  const draw = useCallback((g) => {
    g.clear()
    g.beginFill(0xf3f3f3);
    g.drawCircle(0, 0, props.radios);
    g.endFill();
  }, [props]);
  return <Graphics draw={draw} />;
}
const Arrow = (props) => {
  /*  useTick(delta => {
     // do something here
   }) */
  const draw = useCallback((g) => {
    g.clear()
    g.beginFill(0xF04D4D);
    g.drawPolygon(
      [
        8,
        props.arrowSize,
        0,
        props.arrowSize + 8,
        -8,
        props.arrowSize,
        -8,
        0,
        8,
        0
      ]
    );
    g.endFill();
  }, [props]);
  return <Graphics draw={draw} />;
}

const Flag = (props) => {
  /*  useTick(delta => {
     // do something here
   }) */
  const pw = 10 //pole width
  const ph = 80 //pole height

  let tmpp1 = -pw / 2 - 40
  let tmpp2 = -ph + 2
  const tmpsize = 40

  const draw = useCallback((g) => {
    g.clear()
      .beginFill(0xF04D4D)
      .moveTo(-pw / 2, tmpp2)
      .lineTo(tmpp1, tmpp2 + tmpsize / 2 - 5)
      .quadraticCurveTo(tmpp1 - 10, tmpp2 + tmpsize / 2, tmpp1, tmpp2 + tmpsize / 2 + 5)
      .lineTo(-pw / 2, tmpp2 + tmpsize)
      .endFill()
    /*  g.clear();
     g.beginFill(props.color);
     g.drawRect(props.x, props.y, props.width, props.height);
     g.endFill(); */

  }/* , [props] */);
  return <Graphics draw={draw} />;
}

const FlagStick = (props) => {
  /*  useTick(delta => {
     // do something here
   })
  */
  const pw = 10 //pole width
  const ph = 80 //pole height
  let sp = - pw / 2 //mid

  const draw = useCallback((g) => {
    g.clear()
      .beginFill(0xf3f3f3)
      .moveTo(sp, 15)
      .arc(sp + pw / 2, -ph, pw / 2, Math.PI, 0)
      .lineTo(sp + pw, 15)
      .endFill()
    /*  g.clear();
     g.beginFill(props.color);
     g.drawRect(props.x, props.y, props.width, props.height);
     g.endFill(); */

  }/* , [props] */);
  return <Graphics draw={draw} />;
}

//const reducer = (_, { data }) => data

const Hole = (props) => {
  const app = useApp()
  //const [size, setSize] = useState(window.innerWidth/window.innerHeight);
  const [motion, update] = useState()
  //  useReducer(reducer, initialArgs, init); its a better setState for comprex states
  useTick(delta => {

    update({
      position: [app.screen.width - 100, app.screen.height - 100]
    })
  })
  /* useTick(delta => {
    //const i = (iter.current += 0.05 * delta)
    update({
      type: 'update',
      data: {
        position: [app.screen.width - 100, app.screen.height - 100]
      }
    })
  }) */

  return (
    <Container {...motion} /* scale={size}  position={[app.screen.width - 100, app.screen.height - 100]} */ >
      <Hole_p />
      <Flag />
      <FlagStick />
    </Container>
  );
}
const Hole_p = (props) => {
  const draw = useCallback((g) => {
    g.clear();
    g.beginFill(0x424242);
    g.drawCircle(0, 0, 15);
    g.endFill();
  }/* , [props] */);

  return (
    <Graphics draw={draw} />
  );
}

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


      console.log(h1text)

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

  const [text] = useState('Hello from html')

  return (
    <>
      <div className='tx'>
        <h1 ref={h1text}>
          {
            text.split('').map((char, index) => <span key={index}>{char}</span>)
          }
        </h1>
      </div>
      <Engine/>
      <div className="main">
        <Stage onMount={_app => (app.current = _app)}
          width={window.innerWidth}
          height={window.innerHeight}
          /*  raf={false}
           renderOnComponentChange={true} */
          options={options} >
          <MyComponent text={text} textRef={h1text} />
          <Player color={0xeef1f5} radios={10} />
          <Hole />
        </Stage>
      </div>
    </>)
};

/* const charsReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {count: state.count + 1};   
    default:
      throw new Error();
  }
} */

const MyComponent = (props) => {

  const [chars, setChars] = useState([])

  useEffect(() => {

    const ar = [];
    // console.log(props.textRef.current.childNodes)
    props.textRef.current.childNodes.forEach(
      c => {
        const tmp = c.getBoundingClientRect()

        // console.log(tmp)
        ar.push({ char: c.innerText, x: tmp.x, y: tmp.y, })
      }
    )

    setChars(ar)
    console.log(chars)
  }, []);

  const style = new TextStyle({
    /* align: "center", */
    fontFamily: "Arial",
    fontSize: 100,
    fontWeight: "bold",
    fill: '#ffffff',
    stroke: "#000000",
    strokeThickness: 2,
    /*  fill: ["#26f7a3", "#01d27e"],
   
     letterSpacing: 5, */
    /*  wordWrap: true */
    /*wordWrapWidth: 10 */
  });

  return (
    <Container>
      {/*  <Text text={props.text} x={0} y={0} style={style} /> */}
      {
        chars.map((c, index) =>
          <Text key={index} text={c.char} x={c.x} y={c.y} style={style} />
          /* console.log(c) */
        )
      }
    </Container>
  )
}

export default App;
