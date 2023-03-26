import React, {
  useLayoutEffect,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react'

import { Text, Group, Rectangle, useApp } from '../two'
import { useBox } from '../matter'

export const TextFromDom = (props) => {
  const [items, setItems] = useState([])

  useLayoutEffect(() => {
    const element = window.getComputedStyle(props.textDomRef.current)
    const fontSize = parseInt(element.fontSize)
    const fontWeight = 700
    const fontFamily = element.fontFamily
    const localitems = []
    const bounding = app.renderer.domElement.getBoundingClientRect()
    props.textDomRef.current.childNodes.forEach((c, index) => {
      const tmp = c.getBoundingClientRect()

      if (c.innerText && c.innerText !== ' ') {
        localitems.push({
          text: {
            text: c.innerText,
            size: fontSize,
            weight: fontWeight,
            family: fontFamily,
            alignment: 'left',
            fill: '#f3f3f3',
          },

          x: tmp.x + tmp.width / 2,
          y: tmp.y + tmp.height / 2 - bounding.top,

          width: tmp.width,
          height: tmp.height,
          textref: c,
        })
      }
    })
    setItems(localitems)
  }, [])

  const app = useApp()

  const textGroup = useMemo(() => {
    return items.map((config, index) => <TextBody key={index} {...config} />)
  }, [items])

  return <Group>{textGroup}</Group>
}

const TextBody = (props) => {
  const [textBody, api] = useBox({
    width: props.width,
    height: props.height,
    options: {
      restitution: 0.2,
      friction: 0.1,
      frictionAir: 0.15,
    },
  })

  const app = useApp()
  const [textSize, setTextSize] = useState(props.text)
  const [width, setWidth] = useState(props.width)
  const [height, setHeight] = useState(props.height)

  const updateSize = useCallback(() => {
    const bounding = app.renderer.domElement.getBoundingClientRect()
    const tmp = props.textref.getBoundingClientRect()

    api.setPosition(
      tmp.x + tmp.width / 2,
      tmp.y + tmp.height / 2 - bounding.top
    )
    api.setRotation(0)

    const element = window.getComputedStyle(props.textref)
    const size = parseInt(element.fontSize)

    setTextSize((prods) => ({
      ...prods,
      size: size,
    }))
    setHeight(tmp.height)
    setWidth(tmp.width)
    api.setRecSize(tmp.width, tmp.height)
    api.setVelocity(0)
  }, [textSize])
  useEffect(() => {
    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return (
    <Group x={props.x} y={props.y} ref={textBody}>
      <Text x={-width / 2} {...textSize} />
      {process.env.NODE_ENV !== 'production' ? (
        <Rectangle
          noFill
          linewidth={2}
          stroke={'#FFED4A'}
          width={width}
          height={height}
        ></Rectangle>
      ) : null}
    </Group>
  )
}
