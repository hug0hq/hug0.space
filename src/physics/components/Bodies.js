import { useEffect } from 'react';
import Matter from "matter-js";
import { useEngine } from '../useEngine'

/* const Circle = PixiComponent('Rectangle', {
    create: props => new Graphics(),
    applyProps: (instance, _, props) => {
      const { x, y, width, height, fill } = props;
      instance.clear();
      instance.beginFill(fill);
      instance.drawRect(x, y, width, height);
      instance.endFill();
    },
  });
 */


/* Bodies.circle(100 + playerSize.radios, localHeight - 100 - playerSize.radios, playerSize.radios + 5, {
  restitution: 1,
  friction: 0.3,
  frictionAir: 0.05,
  label: 'ball',
  collisionFilter: {
    category: '0x0002'
  }
}); */

export const CircleBody = (props) => {
  //console.log(root)
  //ref.current = body;
  //const ref = useForwardRef(bodyRef);
  

  const eg = useEngine();
  /*   const engine = useContext(EngineContext)
    console.log(engine)
    console.log('circle') */
  /*  useCallback((g) => { */

  useEffect(() => {
    console.log(props)
    //let b = Matter.Bodies.circle(100, 100, 20);
    let b = Matter.Bodies.circle(props.x, props.y, props.radios, props.options, props.maxSides)
    // Matter.World.add(engine.world, [body])
    Matter.World.add(eg.world, b)


  }, [eg.world, props]);
/* 
  useEffect(() => {
    const body = ref.current!;
    Matter.Body.setPosition(body, { x: props.x, y: props.y });
  }, [ref, props.x, props.y]); */

  return (null)

}

//export default CircleBody