import React, { useEffect, useState } from 'react';
import Matter from "matter-js";
import { EngineContext } from "./useEngine"

import { Player, Hole, H } from '../components'

export const Engine = (props) => {

  const [eg, setEngine] = useState(null);
  const [playerB, setPlayerB] = useState(null);

  // const [mouse] = useState(  .create(document.querySelector("body")) );

  const boxRef = props.box//getRef(null)
  const canvasRef = props.canvas//useRef(null)

  /*   useEffect(() => {
      console.log(eg)
    }, [eg]) */

  useEffect(() => {
    let Engine = Matter.Engine
    let Render = Matter.Render
    let World = Matter.World
    let Bodies = Matter.Bodies

    let engine = Engine.create({})

    setEngine(engine);
    engine.world.gravity.y = 0;
    /*  console.log(engine)
     console.log('oo') */

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
    var ballBody = Bodies.circle(100 + 10, localHeight - 100 - 10, 10 + 2 /* + 5 */, {
      restitution: 1,
      friction: 0.3,
      frictionAir: 0.05,
      label: 'ball',
      collisionFilter: {
        category: '0x0002'
      }
    });
    var holeBody = Bodies.circle(localWidth - 100, localHeight - 100, 10, {
      collisionFilter: {
        category: '0x0002'
      },
      label: 'hole',
      isSensor: true,
      isStatic: true
    });
    World.add(engine.world, [ballBody, holeBody]);
    setPlayerB(ballBody)

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


    Engine.run(engine)
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
      console.log(localWidth + " " + localHeight)
      console.log(wallRight)

    }

    window.addEventListener('resize', resizeListener);
    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);

      Matter.Events.off(engine, 'collisionStart')
    }

  }, [/* props.options, props.events */ boxRef, canvasRef, props.height, props.width])



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
      {
        eg &&
        <EngineContext.Provider value={eg}>{props.children}</EngineContext.Provider>
      }
    </>
    /*  eg ? <EngineContext.Provider value={eg}>{props.children}</EngineContext.Provider> : 
     null */
  )


}
