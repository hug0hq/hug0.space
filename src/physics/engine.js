import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import Matter from "matter-js";

export const Engine = () => {
    const boxRef = useRef(null)
    const canvasRef = useRef(null)
    useEffect(() => {
      let Engine = Matter.Engine
      let Render = Matter.Render
      let World = Matter.World
      let Bodies = Matter.Bodies
      let engine = Engine.create({})
      let render = Render.create({
        element: boxRef.current,
        engine: engine,
        canvas: canvasRef.current,
        options: {
          width: 300,
          height: 300,
          showAngleIndicator: true,
          wireframeBackground: 'transparent',
          background: 'transparent'
        },
      })
  
      Engine.run(engine)
      Render.run(render)
    }, [])
  
    return (
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
    )
  }
  