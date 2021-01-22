import React, { useEffect, useState } from 'react';
import Matter from "matter-js";
//import { EngineContext } from "./useEngine"

import { Player, Hole, H } from '../components'

import { useApp } from '@inlet/react-pixi';

export const Engine = (props) => {

  const app = useApp()

  //const [eg, setEngine] = useState(null);
  const [playerB, setPlayerB] = useState(null);
/* 
  const [ww, setW] = useState(null);
  const [hh, setH] = useState(null); */

  const [constraints, setContraints] = useState()
  const [scene, setScene] = useState()

  // const [mouse] = useState(  .create(document.querySelector("body")) );

  const boxRef = props.box//getRef(null)
  const canvasRef = props.canvas//useRef(null)

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

  const handleResize = () => {
    let tmp = {
      width: app.screen.width,
      height: app.screen.height
    }
    //console.log(boxRef.current.getBoundingClientRect())
    setContraints(tmp)
  }


  const STATIC_DENSITY = 100;

 /*  const playerReset = () => {

  } */

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
        console.log("Hole! ⛳");
      }
    });
  }

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
        /*  width: props.width,
         height: props.height, */
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

    setPlayerB(ballBody)

    const holeBody = Bodies.circle(0, 0, 10, {
      collisionFilter: {
        category: '0x0002'
      },
      label: 'hole',
      isSensor: true,
      isStatic: true
    });



    World.add(engine.world, [wallB, wallT, wallL, wallR, ballBody, holeBody])
    Engine.run(engine)
    Render.run(render)

    Matter.Events.on(engine, 'collisionStart', handleCollision);

    window.addEventListener('resize', handleResize);
    // clean up function
    handleResize()
    setScene(render)
    /*   return () => {
        // remove resize listener
        window.removeEventListener('resize', resize);
  
        //Matter.Events.off(engine, 'collisionStart')
      } */
      // eslint-disable-next-line
  }, [boxRef, canvasRef]);


  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line
  }, [])



  useEffect(() => {
    if (constraints) {
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
        x: - STATIC_DENSITY / 2,
        y: height / 2,
      })
      Matter.Body.setVertices(wallL, [
        { x: 0 - STATIC_DENSITY, y: 0 },
        { x: 0 - STATIC_DENSITY, y: height },
        { x: 0 + STATIC_DENSITY, y: height },
        { x: 0 + STATIC_DENSITY, y: 0 }
      ])

      const wallR = scene.engine.world.bodies[3]
      Matter.Body.setPosition(wallR, {
        x: width + STATIC_DENSITY / 2,
        y: height / 2,
      })
      Matter.Body.setVertices(wallR, [
        { x: width - STATIC_DENSITY, y: 0 },
        { x: width - STATIC_DENSITY, y: height },
        { x: width + STATIC_DENSITY, y: height },
        { x: width + STATIC_DENSITY, y: 0 }
      ])


      const ballBody = scene.engine.world.bodies[4]
      Matter.Body.setPosition(ballBody, {
        x: 100 - 12 / 2,
        y: height - 100 + 12 / 2,
      })

      const holeBody = scene.engine.world.bodies[5]
      Matter.Body.setPosition(holeBody, {
        x: width - 100,
        y: height - 100,
      })

    }
  }, [scene, constraints])


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
      {props.children}
      {/*  {
        eg &&
        <EngineContext.Provider value={eg}></EngineContext.Provider>
      } */}
    </>
    /*  eg ? <EngineContext.Provider value={eg}>{props.children}</EngineContext.Provider> : 
     null */
  )


}
