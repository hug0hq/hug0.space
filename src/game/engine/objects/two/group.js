import { useRender, usePhysics } from '../../utils'

import Two from 'two.js'
import { useEffect, useState } from 'react'

// export const Group = () => new Two.Group()

 export const Group = (props) => {
  //const render = useRender()
console.log(props.parent)
  return null
  const [group] = useState( new Two.Group())
 
  useEffect(() => {
    if (!group) return

    group.translation.set(props.x[0], props.y[1])
    props.addTo.add(group)

  }, [group, props.addTo, props.x, props.y])

  return props.children
} 
