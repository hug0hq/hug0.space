import React, { useEffect, useState, useMemo, useRef, useLayoutEffect } from 'react'

import Two from 'two.js'
import Matter from 'matter-js'

import { useRender, usePhysics/* , useComputedStyle */ } from '../utils'

const useComputedStyle = (textRef) => {
  const [style, setStyle] = useState()

  useLayoutEffect(() => {
    const computedStyle = window.getComputedStyle(textRef.current)

    setStyle({
      fontSize: parseInt(computedStyle.fontSize, 10),
      fontWeight: parseInt(computedStyle.fontWeight, 10),
      fontFamily: computedStyle.fontFamily,
    })
  }, [textRef])
  return style
}

export const Text = (props) => {
  const engine = usePhysics()
  const two = useRender()

  const [text] = useState(props.text)
  const textRef = useRef()

  const style = useComputedStyle(textRef)

  useEffect(() => {
    if (!two || !style || !engine) return

    let textGroup = []

    textRef.current.childNodes.forEach((c) => {
 
      const tmp = c.getBoundingClientRect()
      if (c.innerText && c.innerText !== ' ') {
        const text = new Two.Text(
          c.innerText,
          tmp.x /* - rect.x, */,
          tmp.y /* - rect.y */,
          {
            size: style.fontSize,
            weight: style.fontWeight,

            family: style.fontFamily,
            alignment: 'left',
            baseline: 'top',
          },
        )

        text.fill = '#8eaafd'
        two.add(text)

        // create two boxes and a ground
        //const bx = text.getBoundingClientRect()

        const offset = {
          x: 0,
          y: 0,
        }

        const boxBody = Matter.Bodies.rectangle(
          tmp.left + (tmp.width - offset.x) / 2,
          tmp.top + (tmp.height - offset.y) / 2,
          tmp.width - offset.x,
          tmp.height - offset.y,
        )

        Matter.Composite.add(engine.world, boxBody)

        textGroup.push({
          mesh: text,
          body: boxBody,
        })
      }
    })

    const update = (frameCount) => {
      textGroup.map((tx) =>
        tx.mesh.translation.set(tx.body.position.x, tx.body.position.y),
      )
    }

    /*  two.bind('update', update)

    return function unbind() {
      two.unbind('update')
      two.pause()
    } */
  }, [style, two, engine])

  const htmlText = useMemo(() => {
    return text.map((sentence, sentenceIndex) => {
      return (
        <React.Fragment key={'br' + sentenceIndex}>
          {sentence.split('').map((char, charIndex) => (
            <span key={'char' + charIndex}>{char}</span>
          ))}
          <br />
        </React.Fragment>
      )
    })
  }, [text])

  /*   */
  return (
    <div className="section" style={{ position: 'absolute' }}>
      <h1 className="textWhite tx" ref={textRef} style={{ opacity: 0.1 }}>
        {htmlText}
      </h1>
    </div>
  )
}
