import React, {
  useLayoutEffect,
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useState,
} from 'react'
import { Text, Ellipse, Group, RoundedRectangle, Path } from '../type'
import { useApp, useRender } from '../util'

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

  const textGroup = useCallback(() => {
    const items = []
    if (props.textRef && style) {
      props.textRef.current.childNodes.forEach((c, index) => {
        const tmp = c.getBoundingClientRect()
        //console.log(tmp)
        if (c.innerText && c.innerText !== ' ') {
          items.push({
            text: c.innerText,
            x: tmp.x,
            y: tmp.y + tmp.height/2,
            size: style.fontSize,
            weight: style.fontWeight,
            family: style.fontFamily,
            alignment: 'left',
            //baseline: 'top',
            fill: '#8eaafd',
          })
        }
      })
      //console.log('m', items)
    }
    return items
  }, [props.textRef, style])

  /* const mm = useMemo(() => {
    return (
      <Text
        x={100}
        y={100}
        alignment={'left'}
        baseline={'top'}
        text="hello"
        fill={'#8eaafd'}
      ></Text>
    )
  }, [])
  console.log(mm) */

  const mm2 = useMemo(() => {
    return textGroup().map((config, index) => <Text key={index} {...config} />)
  }, [textGroup])
  //console.log(mm2())

  return (
    <Group >
      {mm2}
      {/* {textGroup.map((config, index) => (
        <Text key={index} {...config} />
      ))} */}
    </Group>
  )
}
