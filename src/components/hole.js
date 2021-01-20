import React, { useCallback, useState } from 'react';
import { Graphics, useTick, useApp, Container } from '@inlet/react-pixi';


export const Hole = (props) => {
    const app = useApp()
    //const [size, setSize] = useState(window.innerWidth/window.innerHeight);
    const [motion, update] = useState()
    //  useReducer(reducer, initialArgs, init); its a better setState for comprex states
    useTick(delta => {

        update({
            position: [app.screen.width - 100, app.screen.height - 100]
        })
    })
    /* useTick(delta => {
      //const i = (iter.current += 0.05 * delta)
      update({
        type: 'update',
        data: {
          position: [app.screen.width - 100, app.screen.height - 100]
        }
      })
    }) */

    return (
        <Container {...motion} /* scale={size}  position={[app.screen.width - 100, app.screen.height - 100]} */ >
            <HoleP />
            <Flag />
            <FlagStick />
        </Container>
    );
}


const Flag = (props) => {
    /*  useTick(delta => {
       // do something here
     }) */
    const pw = 10 //pole width
    const ph = 80 //pole height

    let tmpp1 = -pw / 2 - 40
    let tmpp2 = -ph + 2
    const tmpsize = 40

    const draw = useCallback((g) => {
        g.clear()
            .beginFill(0xF04D4D)
            .moveTo(-pw / 2, tmpp2)
            .lineTo(tmpp1, tmpp2 + tmpsize / 2 - 5)
            .quadraticCurveTo(tmpp1 - 10, tmpp2 + tmpsize / 2, tmpp1, tmpp2 + tmpsize / 2 + 5)
            .lineTo(-pw / 2, tmpp2 + tmpsize)
            .endFill()
        /*  g.clear();
         g.beginFill(props.color);
         g.drawRect(props.x, props.y, props.width, props.height);
         g.endFill(); */

    }, []);
    return <Graphics draw={draw} />;
}

const FlagStick = (props) => {
    /*  useTick(delta => {
       // do something here
     })
    */
    const pw = 10 //pole width
    const ph = 80 //pole height
    let sp = - pw / 2 //mid

    const draw = useCallback((g) => {
        g.clear()
            .beginFill(0xf3f3f3)
            .moveTo(sp, 15)
            .arc(sp + pw / 2, -ph, pw / 2, Math.PI, 0)
            .lineTo(sp + pw, 15)
            .endFill()
        /*  g.clear();
         g.beginFill(props.color);
         g.drawRect(props.x, props.y, props.width, props.height);
         g.endFill(); */

    }, [sp]);
    return <Graphics draw={draw} />;
}

const HoleP = (props) => {

    const draw = useCallback((g) => {
        g.clear();
        g.beginFill(0x424242);
        g.drawCircle(0, 0, 15);
        g.endFill();
    }, []);

    return (
        <Graphics draw={draw} />
    );
}