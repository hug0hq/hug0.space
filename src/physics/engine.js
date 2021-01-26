import React, { useEffect, useState } from 'react';
import Matter from "matter-js";
//import { EngineContext } from "./useEngine"

import { Player, Hole, H, Title } from '../components'

import { useApp } from '@inlet/react-pixi';

//const golf = document.getElementById('golf')

export const Engine = (props) => {

  const app = useApp()

  /* const golf = document.eve
 */
  //const [eg, setEngine] = useState(null);
  const [playerB, setPlayerB] = useState(null);

  const [textBodys, setTextBodys] = useState();
  /* 
    const [ww, setW] = useState(null);
    const [hh, setH] = useState(null); */

  const [constraints, setContraints] = useState()
  const [scene, setScene] = useState()

  // const [mouse] = useState(  .create(document.querySelector("body")) );

  const boxRef = props.box//getRef(null)
  const canvasRef = props.canvas//useRef(null)

  //const headerRef = props.header

  /*   let Engine = Matter.Engine
    let Render = Matter.Render
    let World = Matter.World
    let Bodies = Matter.Bodies */


  /*   useEffect(() => {
      console.log(eg)
    }, [eg]) */

  useEffect(() => {
    /*
        let engine = Engine.create({})
        engine.world.gravity.y = 0;
        setEngine(engine);
    
    
        Engine.run(engine)
        /*  console.log(engine)
         console.log('oo') *./
    
        let render = Render.create({
          element: boxRef.current,
          engine: engine,
          canvas: canvasRef.current,
          options: {
            width: props.width,
            height: props.height,
            showAngleIndicator: true,
            wireframeBackground: 'transparent',
            background: 'transparent'
          },
        })
    
        //walls
        let localWidth = window.innerWidth;
        let localHeight = window.innerHeight;
        var wallTop = Bodies.rectangle(localWidth / 2, 0, localWidth, 40, {
          isStatic: true
        });
        var wallBottom = Bodies.rectangle(
          localWidth / 2,
          localHeight,
          localWidth,
          40,
          {
            isStatic: true
          }
        );
        var wallRight = Bodies.rectangle(
          localWidth,
          localHeight / 2,
          40,
          localHeight,
          {
            isStatic: true
          }
        );
        var wallLeft = Bodies.rectangle(0, localHeight / 2, 40, localHeight, {
          isStatic: true
        });
    
        World.add(engine.world, [wallBottom, wallTop, wallLeft, wallRight]);
    
        //Matter.Body.translate( wallLeft, {x: 100, y: 0});
        //Matter.Body.translate( wallRight, {x: 100, y: 0}) 
    
    
        const handleCollision = (event) => {
          var { pairs } = event;
          pairs.forEach((pair) => {
            var { bodyA, bodyB } = pair;
            if (bodyA.label === "ball" && bodyB.label === "hole") {
              Matter.Body.setVelocity(bodyA, {
                x: 0,
                y: 0
              });
              Matter.Body.setPosition(bodyA, {
                x: 170,
                y: 450
              });
              console.log("Hole!");
            }
          });
        }
    
        Matter.Events.on(engine, 'collisionStart', handleCollision);
    
    
        Render.run(render)
    
    
        const resizeListener = () => {
          localWidth = window.innerWidth;
          localHeight = window.innerHeight;
          World.remove(engine.world, wallRight);
    
          wallRight = Bodies.rectangle(
            localWidth,
            localHeight / 2,
            40,
            localHeight,
            {
              isStatic: true
            }
          );
          World.add(engine.world, [wallRight]);
    
          //wallBottom.setPosition(engine, localWidth / 2, localHeight )
          //Matter.Body.scale( wallRight, 1.5, 1.2);
          /*  Matter.Body.translate( wallBottom, {x: localWidth / 2, y: localHeight})
           Matter.Body.translate( wallRight, {x: 200, y: 0})  */
    /*  console.log(localWidth + " " + localHeight)
     console.log(wallRight) */

    //}

    // window.addEventListener('resize', resizeListener);
    // clean up function
    return () => {
      // remove resize listener
      // window.removeEventListener('resize', resizeListener);

      //Matter.Events.off(engine, 'collisionStart')
    }

  }, [/* props.options, props.events */ boxRef, canvasRef, props.height, props.width])

  // useEffect(() => {
  /*
      const ballBody = Bodies.circle(100 + 10, hh - 100 - 10, 10 + 2 /* + 5 *./, {
        restitution: 1,
        friction: 0.3,
        frictionAir: 0.05,
        label: 'ball',
        collisionFilter: {
          category: '0x0002'
        }
      });
  
      const holeBody = Bodies.circle(ww - 100, hh - 100, 10, {
        collisionFilter: {
          category: '0x0002'
        },
        label: 'hole',
        isSensor: true,
        isStatic: true
      });
      if (eg)
        World.add(eg.world, [ballBody, holeBody]);
      //setPlayerB(ballBody)
  
      */

  // }, [ww, hh])

  /*  const createPhysicsDebugRender = () => {
 
   }
   const resize = () => {
 
     if (eg) { */
  /* 
        Render.stop(render);
   */
  // World.clear(eg.world);
  // Engine.clear(eg);


  /* if (render) {
    render.canvas.remove();
    createPhysicsDebugRender();
  } */

  /*   }

    setW(app.screen.width)
    setH(app.screen.height)

    //console.log(app.screen.width)
  } */




  const STATIC_DENSITY = 100;

  /*  const playerReset = () => {
 
   } */
  //const [reset, setReset] = useState(0);
  //const [reset, setReset] = useState(1)
  const force = 0.001 // 0.2;
    


  const handleCollision = (event) => {
    let { pairs } = event;
    let height = app.screen.height;

    pairs.forEach((pair) => {
      let { bodyA, bodyB } = pair;
      if (bodyA.label === "ball" && bodyB.label === "hole") {
        Matter.Body.setVelocity(bodyA, {
          x: 0,
          y: 0
        });
        Matter.Body.setPosition(bodyA, {
          x: 100 - 12 / 2,
          y: height - 100 + 12 / 2,
        });
        //setReset(reset + 1)
        //reset();
        
        console.log("Hole! ⛳");

      }
    });
  }


  /* useEffect(() => {
    console.log('reset'+ reset)
    if (playerB) { */
 /*  const reset = () => {
    const p = {
      x: playerB.position.x + 2,
      y: playerB.position.y
    } */
   
  
  /* }, [playerB, reset]) */

  useEffect(() => {

    let Engine = Matter.Engine
    let Render = Matter.Render
    let World = Matter.World
    let Bodies = Matter.Bodies

    let engine = Engine.create({})
    engine.world.gravity.y = 0;

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {

        showAngleIndicator: true,
        wireframeBackground: 'transparent',
        background: 'transparent'
      },
    })

    const wallB = Bodies.rectangle(0, 0, 0, STATIC_DENSITY,
      {
        isStatic: true
      }
    );
    const wallT = Bodies.rectangle(0, 0, 0, STATIC_DENSITY,
      {
        isStatic: true
      }
    );
    const wallL = Bodies.rectangle(0, 0, STATIC_DENSITY, 0,
      {
        isStatic: true
      }
    );
    const wallR = Bodies.rectangle(0, 0, STATIC_DENSITY, 0,
      {
        isStatic: true
      }
    );
    //World.add(engine.world, [wallRight]);

    /*    const ball = Bodies.circle(150, 0, 10, {
         restitution: 0.9,
         render: {
           fillStyle: 'yellow',
         },
       }) */

    const ballBody = Bodies.circle(0, 0, 10 + 2 /* + 5 */, {
      restitution: 1,
      friction: 0.3,
      frictionAir: 0.05,
      label: 'ball',
      collisionFilter: {
        category: '0x0002'
      }
    });

  

    const holeBody = Bodies.circle(0, 0, 12, {
      collisionFilter: {
        category: '0x0002'
      },
      label: 'hole',
      isSensor: true,
      isStatic: true
    });

    World.add(engine.world, [wallB, wallT, wallL, wallR, ballBody, holeBody])


    // console.log(props.text)
    const ar = [];
    // console.log(props.textRef.current.childNodes)
    props.textRef.current.childNodes.forEach(
      c => {
        //console.log(c.offsetTop)
        const tmp = c.getBoundingClientRect()
        //  console.log(c.getBounds())
        //console.log(tmp)
        // console.log(tmp)
        ar.push(tmp /* { char: c.innerText, x: tmp.x, y: tmp.y, } */)
      }
    )
    /* 
        var offset = {
          x: 0,
          y: 0
        }
        var last = {
          //width : 0,
          //height : 0,
          left: 0,
          line: 0,
          height: 0
        } */
    let leterBody = [];

    ar.forEach((letter, i) => {
      //console.log(letter)
      /*  if (letter == '\n') {
         last.left = 0;
         last.line += last.height;
         return
       } */

      /*   var charMesh = new PIXI.Text(letter, {
          fontFamily: "Trispace",
          fontSize: 0.1 * app.renderer.width,
          fill: "#fff",
        });
  
        var lb = charMesh.getBounds();
  
        if (letter == ' ') {
          //        
          var lb = charMesh.getBounds()
          last.left += lb.width;
          return
        }
  
        charMesh.pivot.set(charMesh.width / 2, charMesh.height / 2);
        app.stage.addChild(charMesh) */
      //var lb =  letter;
      const textBody = Bodies.rectangle(letter.x + letter.width / 2, letter.y + letter.height / 2, letter.width, letter.height, {

        //var b = Bodies.rectangle(last.left + offset.x + lb.width / 2 - 5, last.line + offset.y + lb.height / 2, lb.width - 10, lb.height / 2, {
        restitution: 1,
        friction: 0.3,
        collisionFilter: {
          category: '0x0002'
        }
      });
      /*   last.left += lb.width;
     last.height = lb.height; */

      World.add(engine.world, [textBody]);
      leterBody.push(textBody);
      /* leterBody.push({
        //mesh: charMesh,
        body: b
      }) */

    });
    // setTextBodys(ar);
    setTextBodys(leterBody)


    Engine.run(engine)
    //Render.run(render)

    Matter.Events.on(engine, 'collisionStart', handleCollision);

    //handleResize()
    setScene(render)

    const handleResize = () => {
      app.resize()
      let tmp = {
        width: app.screen.width,
        height: app.screen.height
      }
      // console.log(app)
      //console.log(boxRef.current.getBoundingClientRect())
      setContraints(tmp)

      //console.log('r')
    }
    handleResize()

    window.addEventListener('resize', handleResize);
    // clean up function


    return () => {
      window.removeEventListener('resize', handleResize)

    }
    /*   return () => {
        // remove resize listener
        window.removeEventListener('resize', resize);
  
        //Matter.Events.off(engine, 'collisionStart')
      } */
    // eslint-disable-next-line
  }, [boxRef, canvasRef]);


  /*   useEffect(() => {
      //console.log(app.screen)
    
      // eslint-disable-next-line
    }, [])
   */


  useEffect(() => {
    // console.log('update')
    if (constraints) {
      //console.log(constraints)
      let { width, height } = constraints

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width
      scene.bounds.max.y = height
      scene.options.width = width
      scene.options.height = height
      scene.canvas.width = width
      scene.canvas.height = height

      //console.log('update')
      // Dynamically update floor
      const wallB = scene.engine.world.bodies[0]
      Matter.Body.setPosition(wallB, {
        x: width / 2,
        y: height + STATIC_DENSITY / 2 - 10,
      })
      Matter.Body.setVertices(wallB, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ])

      const wallT = scene.engine.world.bodies[1]
      Matter.Body.setPosition(wallT, {
        x: width / 2,
        y: 10 - STATIC_DENSITY / 2 /*+ STATIC_DENSITY / 2 */,
      })
      Matter.Body.setVertices(wallT, [
        { x: 0, y: 0 },
        { x: width, y: 0 },
        { x: width, y: 0 + STATIC_DENSITY },
        { x: 0, y: 0 + STATIC_DENSITY },
      ])

      const wallL = scene.engine.world.bodies[2]
      Matter.Body.setPosition(wallL, {
        x: - STATIC_DENSITY / 2 + 20, //- STATIC_DENSITY / 2,
        y: height / 2,
      })
      Matter.Body.setVertices(wallL, [
        { x: 0 - STATIC_DENSITY / 2, y: 0 },
        { x: 0 - STATIC_DENSITY / 2, y: height },
        { x: 0 + STATIC_DENSITY / 2, y: height },
        { x: 0 + STATIC_DENSITY / 2, y: 0 }
      ])

      const wallR = scene.engine.world.bodies[3]
      Matter.Body.setPosition(wallR, {
        x: width + STATIC_DENSITY / 2 - 20,
        y: height / 2,
      })
      Matter.Body.setVertices(wallR, [
        { x: width - STATIC_DENSITY / 2, y: 0 },
        { x: width - STATIC_DENSITY / 2, y: height },
        { x: width + STATIC_DENSITY / 2, y: height },
        { x: width + STATIC_DENSITY / 2, y: 0 }
      ])

      //const margin =  parseInt( window.getComputedStyle(headerRef.current, null).getPropertyValue('padding-left'), 10);
      //console.log(margin, 10))
      const margin = 100;

      const ballBody = scene.engine.world.bodies[4]
      Matter.Body.setPosition(ballBody, {
        x: margin - 12 / 2,
        y: height - 100 + 12 / 2,
      })

      setPlayerB(ballBody)
      const p = {
        x: ballBody.position.x + 2,
        y: ballBody.position.y
      }
      const deltaVector = Matter.Vector.sub(p, ballBody.position);
      const normalizedDelta = Matter.Vector.normalise(deltaVector);
      const forceVector = Matter.Vector.mult(normalizedDelta, force);
      //var op = Matter.Vector.neg(forceVector);
      Matter.Body.applyForce(ballBody, ballBody.position, forceVector);

      const margin2 = 200;

      const holeBody = scene.engine.world.bodies[5]
      Matter.Body.setPosition(holeBody, {
        x: width - margin2,
        y: height - 100,
      })

      //let textObj = textBodys;
      //textObj.map
      const ar = [];
      const startID = 6;
      // console.log(props.textRef.current.childNodes)
      props.textRef.current.childNodes.forEach(
        c => {
          //console.log(c.offsetTop)
          const tmp = c.getBoundingClientRect()
          //  console.log(c.getBounds())
          //console.log(tmp)
          // console.log(tmp)
          ar.push(tmp /* { char: c.innerText, x: tmp.x, y: tmp.y, } */)
        }
      )

      ar.forEach((p, i) => {

        const letter = scene.engine.world.bodies[startID + i]
        //letter.setVelocity(0)
        /*  Matter.Body.setVelocity(letter, {
           x: 0,
           y: 0
         }); */
        /*   Matter.Body.setVelocity(bodyA, {
            x: 0,
            y: 0
          }); */

        Matter.Body.setPosition(letter, {
          x: p.x + p.width / 2,
          y: p.y + p.height / 2,
        })
        Matter.Body.setVertices(letter, [
          { x: p.x - p.width / 2, y: p.y - p.height / 2 },
          { x: p.x + p.width / 2, y: p.y - p.height / 2 },
          { x: p.x + p.width / 2, y: p.y + p.height / 2 },
          { x: p.x - p.width / 2, y: p.y + p.height / 2 }
        ])

      })

    }

  }, [scene, constraints, props.textRef])


  /*   return (
      <>
        { eg ?
          <EngineContext.Provider value={eg}>
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
            {props.children}
          </EngineContext.Provider>
          : null
        }
      </>
    ) */

  return (
    <>
      <H />
      {/* <Title text={text} textRef={h1text} /> */}
      {playerB && <Player color={0xeef1f5} radios={10} body={playerB}/*  matter={Matter} */ />}
      <Hole />

      {textBodys && <Title text={props.text} textRef={props.textRef} textBodys={textBodys} />}
      {/*  {props.children} */}
      {/*  {
        eg &&
        <EngineContext.Provider value={eg}></EngineContext.Provider>
      } */}
    </>
    /*  eg ? <EngineContext.Provider value={eg}>{props.children}</EngineContext.Provider> : 
     null */
  )


}
