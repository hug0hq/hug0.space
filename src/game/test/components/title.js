import React, { useLayoutEffect, useCallback, useMemo, useState } from 'react'
import {
  Text,
  Ellipse,
  Group,
  RoundedRectangle,
  Path,
  Rectangle,
} from '../type'
import { useApp, useRender, usePhysics } from '../util'
import { useBox, useTextBox } from './physics'

import Matter from 'matter-js'
import Two from 'two.js'

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

export const TextFromDom = (props) => {
  const style = useComputedStyle(props.textRef)
  const engine = usePhysics()
  const app = useApp()

  const getGroup = useCallback(() => {
    const items = []
    if (props.textRef && style) {
      const bounding = app.renderer.domElement.getBoundingClientRect()

      props.textRef.current.childNodes.forEach((c, index) => {
        const tmp = c.getBoundingClientRect()

        if (c.innerText && c.innerText !== ' ') {
          items.push({
            text: {
              text: c.innerText,
              //x: 0,
              //y: 0,
              size: style.fontSize,
              weight: style.fontWeight,
              family: style.fontFamily,
              alignment: 'left',
              fill: '#f3f3f3',
            },

            x: tmp.x + tmp.width / 2,
            y: tmp.y + tmp.height / 2 - bounding.top,

            width: tmp.width,
            height: tmp.height,
          })

          const offset = {
            x: 0,
            y: 0,
          }

          /* const boxBody = Matter.Bodies.rectangle(
            tmp.left + (tmp.width - offset.x) / 2,
            tmp.top + (tmp.height - offset.y) / 2,
            tmp.width - offset.x,
            tmp.height - offset.y,
          )

          Matter.Composite.add(engine.world, boxBody) */
        }
      })
      //console.log('m', items)
    }
    return items
  }, [props.textRef, style])

  const textGroup = useMemo(() => {
    return getGroup().map((config, index) => (
      <TextBody key={index} {...config} />
    ))
  }, [getGroup])

  return <Group>{textGroup}</Group>
}

const TextBody = (props) => {
  const [textBody, api] = useBox({
    width: props.width,
    height: props.height,
    options: {
      restitution: 0.8,
      friction: 0,
      frictionAir: 0.3,
      collisionFilter: {
        category: '0x0002',
      },
    },
  })

  return (
    <Group x={props.x} y={props.y} ref={textBody}>
      <Text x={-props.width / 2} {...props.text} />
      <Rectangle
        noFill
        linewidth={2}
        stroke={'#FFED4A'}
        width={props.width}
        height={props.height}
      ></Rectangle>
    </Group>
  )
}
