import React, { useEffect, useState } from 'react';

import Matter from "matter-js";
import { Player, Hole, H, Title } from '../pixi'
import { useApp } from '@inlet/react-pixi';

export const Engine = (props) => {

  const app = useApp();

  const [playerB, setPlayerB] = useState(null);
  const [textBodys, setTextBodys] = useState();
  const [constraints, setContraints] = useState();
  const [scene, setScene] = useState();

  const boxRef = props.box;
  const canvasRef = props.canvas;

  const STATIC_DENSITY = 100;
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
        showAngleIndicator: true,
        wireframeBackground: 'transparent',
        background: 'transparent'
      },
    });

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

    World.add(engine.world, [wallB, wallT, wallL, wallR, ballBody, holeBody]);

    const ar = [];
    props.textRef.current.childNodes.forEach(
      c => {
        const tmp = c.getBoundingClientRect()
        if (c.innerText && c.innerText !== ' ') {
          ar.push(tmp)
        }
      }
    )
    let leterBody = [];
    ar.forEach((letter, i) => {
      const textBody = Bodies.rectangle(letter.x + letter.width / 2, letter.y + letter.height / 2, letter.width, letter.height, {
        restitution: 1,
        friction: 0.3,
        collisionFilter: {
          category: '0x0002'
        }
      });
      World.add(engine.world, [textBody]);
      leterBody.push(textBody);
    });
    setTextBodys(leterBody);

    Engine.run(engine);
    //Render.run(render)

    Matter.Events.on(engine, 'collisionStart', handleCollision);
    setScene(render);

    const handleResize = () => {
      app.resize();
      let tmp = {
        width: app.screen.width,
        height: app.screen.height
      }
      setContraints(tmp);
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

    // eslint-disable-next-line
  }, [boxRef, canvasRef]);

  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints;

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;

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
        y: 10 - STATIC_DENSITY / 2,
      })
      Matter.Body.setVertices(wallT, [
        { x: 0, y: 0 },
        { x: width, y: 0 },
        { x: width, y: 0 + STATIC_DENSITY },
        { x: 0, y: 0 + STATIC_DENSITY },
      ])

      const wallL = scene.engine.world.bodies[2]
      Matter.Body.setPosition(wallL, {
        x: - STATIC_DENSITY / 2 + 20,
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

      const margin = 100;
      const ballBody = scene.engine.world.bodies[4];
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
      Matter.Body.applyForce(ballBody, ballBody.position, forceVector);

      const margin2 = 200;
      const holeBody = scene.engine.world.bodies[5];
      Matter.Body.setPosition(holeBody, {
        x: width - margin2,
        y: height - 100,
      })

      const ar = [];
      const startID = 6;
      props.textRef.current.childNodes.forEach(
        c => {
          const tmp = c.getBoundingClientRect();
          if (c.innerText && c.innerText !== ' ') { ar.push(tmp) }
        }
      );
      ar.forEach((p, i) => {
        const letter = scene.engine.world.bodies[startID + i];
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
      });

    }
  }, [scene, constraints, props.textRef])

  return (
    <>
      <H />
      {textBodys && <Title textRef={props.textRef} textBodys={textBodys} />}
      {playerB && <Player color={0xeef1f5} radios={10} body={playerB} />}
      <Hole />
    </>
  )
}
