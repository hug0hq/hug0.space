import React, {
  useLayoutEffect,
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useState,
} from 'react'
import { Text, Ellipse, Group, RoundedRectangle, Path } from '../type'
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
            text: c.innerText,
            x: tmp.x,
            y: tmp.y + tmp.height / 2 - bounding.top,
            size: style.fontSize,
            weight: style.fontWeight,
            family: style.fontFamily,
            alignment: 'left',
            fill: '#f3f3f3',

            width: tmp.width,
            height: tmp.height
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
  const [textBody, api] = useTextBox(props.width, props.height, {
    restitution: 1,
    friction: 0.3,
    collisionFilter: {
      category: '0x0002',
    },
  })
  //console.log('text body call')

  return <Text ref={textBody} /*  key={index} */ {...props} />
}
