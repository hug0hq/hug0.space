import React, { useLayoutEffect, useCallback, useMemo, useState } from 'react'

import { Text, Group, Rectangle, useApp } from '../two'
import { useBox } from '../matter'

const useComputedStyle = (textDomRef) => {
  const [style, setStyle] = useState()
  //const [tm] = useState()

  useLayoutEffect(() => {
    const computedStyle = window.getComputedStyle(textDomRef.current)

    setStyle({
      fontSize: parseInt(computedStyle.fontSize, 10),
      fontWeight: parseInt(computedStyle.fontWeight, 10) || 700,
      fontFamily: computedStyle.fontFamily,
    })

    //console.log(computedStyle)
  }, [textDomRef])
  return style
}

export const TextFromDom = (props) => {
  const style = useComputedStyle(props.textDomRef)
  const app = useApp()

  const getGroup = useCallback(() => {
    const items = []
    if (props.textDomRef && style) {
      const bounding = app.renderer.domElement.getBoundingClientRect()

      props.textDomRef.current.childNodes.forEach((c, index) => {
        const tmp = c.getBoundingClientRect()

        if (c.innerText && c.innerText !== ' ') {
          items.push({
            text: {
              text: c.innerText,
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
        }
      })
    }
    return items
  }, [style])

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
      restitution: 0.9,
      friction: 0,
      frictionAir: 0.2,
    },
  })

  return (
    <Group x={props.x} y={props.y} ref={textBody}>
      <Text x={-props.width / 2} {...props.text} />
      {process.env.NODE_ENV !== 'production' ? (
        <Rectangle
          noFill
          linewidth={2}
          stroke={'#FFED4A'}
          width={props.width}
          height={props.height}
        ></Rectangle>
      ) : null}
    </Group>
  )
}
