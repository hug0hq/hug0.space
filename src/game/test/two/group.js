//import { Container as PixiContainer } from 'pixi.js'

//const Container = () => new PixiContainer()

import Two from 'two.js'

const Group = (root, props) => {
  const { x = 0, y = 0, rotation=0 } = props
  //function Group  (root, props)  {
  //const { text = '', x = 0, y = 0, style = {} } = props
  const pixiGroup = new Two.Group()

  pixiGroup.translation.set(x, y)
  pixiGroup.rotation = rotation
  /*  pixiGroup.x =  0 || x
  pixiGroup.y = y || 0 */

  console.log(props)
  return pixiGroup
}

export default Group
