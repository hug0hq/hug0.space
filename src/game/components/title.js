import React, {
  useLayoutEffect,
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from 'react'

import { Text, Group, Rectangle, useApp } from '../two'
import { useBox } from '../matter'
import { update } from 'lodash'

/* const useComputedStyle = (textDomRef) => {
  const [style, setStyle] = useState()
  //const [tm] = useState()

  //const computedStyle = useRef(window.getComputedStyle(textDomRef.current))
  useLayoutEffect(() => {
    //const computedStyle = window.getComputedStyle(textDomRef.current)
    const computedStyle = window.getComputedStyle(textDomRef.current)
    /*  const fontSize = parseInt(
      window.getComputedStyle(textDomRef.current).fontSize,
      10
    ) *./
    setStyle({
      fontSize: parseInt(computedStyle.fontSize),
      fontWeight: parseInt(computedStyle.fontWeight, 10) || 700,
      fontFamily: computedStyle.fontFamily,
    })

    console.log('compund update')
  }, [textDomRef])

  return style
} */

export const TextFromDom = (props) => {
  //const style = useComputedStyle(props.textDomRef)
  const [style, setStyle] = useState([])
  const [items, setItems] = useState([])


  const [update, setUpdate] = useState(false)
  //const c = useRef( window.getComputedStyle(textDomRef.current).fontSize )
  useLayoutEffect(() => {
    const element = window.getComputedStyle(props.textDomRef.current)
    const size = parseInt(element.fontSize)

    const weight = parseInt(element.fontWeight, 10)
    const font = element.fontFamily

    setStyle({
      fontSize: size,
      fontWeight: weight || 700,
      fontFamily: font,
      //fontWeight: style.fontWeight,
      //fontFamily: style.fontFamily,
    })

    //console.log('set size', size, weight, font)
  }, [])



  const updateSize = useCallback(() => {
  
    /* const element = window.getComputedStyle(props.textDomRef.current)
    const size = parseInt(element.fontSize)

    setStyle(prods => ({
      ...prods,
      fontSize: size
   })); */

   //setPsition
 
   }, [style])

  useEffect(() => {
    //console.log(style)
    const element = window.getComputedStyle(props.textDomRef.current)
    const fontSize = parseInt(element.fontSize)

    const fontWeight = parseInt(element.fontWeight, 10)
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
          textref: c
        })
      }
    })
    setItems(localitems)
  }, [])

  useEffect(() => {
    //window.addEventListener('resize', updateSize)

    return () => {
     // window.removeEventListener('resize', updateSize)
    }
  }, [])

  const app = useApp()
/*
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
            textref: c
          })
        }
      })
      console.log('style updated')
    }
    return items
  }, [style])
*/
  const textGroup = useMemo(() => {
    return items.map((config, index) => (
      <TextBody key={index} {...config} />
    ))
  }, [items/* getGroup */])

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

  const app = useApp()
  const [textSize, setTextSize] = useState(props.text)
  const [width, setWidth] = useState(props.width)
  const [height, setHeight] = useState(props.height)

  const updateSize = useCallback(() => {
  
    const bounding = app.renderer.domElement.getBoundingClientRect()
    const tmp = props.textref.getBoundingClientRect()

    api.setPosition(  tmp.x + tmp.width / 2,
       tmp.y + tmp.height / 2 - bounding.top)
    api.setRotation(  0)

    const element = window.getComputedStyle(props.textref)
    const size = parseInt(element.fontSize)
    //if(textSize.size != size){

     // setTextSize(size)
     // console.log(textSize, size)
     setTextSize(prods => ({
          ...prods,
          size: size
      }));
      setHeight(tmp.height)
      setWidth(tmp.width)
      api.setRecSize(tmp.width, tmp.height)
      api.setVelocity(0)

    //}

 
   }, [textSize])
   useEffect(() => {
    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return (
    <Group x={props.x} y={props.y} ref={textBody}>
      <Text x={-width / 2}  {...textSize}/>
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
