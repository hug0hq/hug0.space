import React, { useCallback, useEffect, useState } from 'react';
import { Graphics, useTick, useApp, Container } from '@inlet/react-pixi';

import {CircleBody} from '../physics/components';

export const Player = (props) => {
    const app = useApp()
    const height = 40;

    const pDown = () => {

        setclick(true)
    }
    const pUp = () => {
        setclick(false)
    }

    useEffect(() => {

        //const update = () => setSize(getSize());
        //window.onresize = update;
        //return () => (window.onresize = null);
        window.addEventListener('pointerup', pUp);
        window.addEventListener('pointerdown', pDown);
        // clean up function
        
        console.log('body render')
        return () => {
            // remove resize listener


            window.removeEventListener('pointerup', pUp);
            window.removeEventListener('pointerdown', pDown);
        }

    }, []);

    const [arrow, update] = useState(0)
    const [click, setclick] = useState(false)
    //  useReducer(reducer, initialArgs, init); its a better setState for comprex states
    const angle = (x, y) => {
        return Math.atan2(y, x) + Math.PI / 2;
    }

    useTick(delta => {
        if (click) {
            update({
                arrowSize: 60
            })
        }
        else {
            //let deltaVector = Matter.Vector.sub(mouse.position, ballBody.position);
            update({
                arrowSize: 0,
                // rotation: angle(deltaVector.x, deltaVector.y)
            })
        }
    })


    
  //BallBody(100, 100, props.radios);
  const options = {
    restitution: 1,
    friction: 0.3,
    frictionAir: 0.05,
    label: 'ball',
    collisionFilter: {
        category: '0x0002'
    }
}
    return (
        <Container position={[100, app.screen.height - 100]} >
            <Arrow {...arrow} height={height}></Arrow>
            <Ball radios={props.radios} />
            {/* <BallBody></BallBody> */}
            <CircleBody x={100} y={ app.screen.height - 100} radios={props.radios} options={options} ></CircleBody>
        </Container>
    )
}

/* const BallBody = (x, y, radios) => {

    const options = {
        restitution: 1,
        friction: 0.3,
        frictionAir: 0.05,
        label: 'ball',
        collisionFilter: {
            category: '0x0002'
        }
    }
    //Bodies(x, y, options)
    CircleBody(x, y, radios, options)
}

 */
const Ball = (props) => {
    const draw = useCallback((g) => {
        g.clear()
        g.beginFill(0xf3f3f3);
        g.drawCircle(0, 0, props.radios);
        g.endFill();
    }, [props]);
    return <Graphics draw={draw} />;
}
const Arrow = (props) => {
    /*  useTick(delta => {
       // do something here
     }) */
    const draw = useCallback((g) => {
        g.clear()
        g.beginFill(0xF04D4D);
        g.drawPolygon(
            [
                8,
                props.arrowSize,
                0,
                props.arrowSize + 8,
                -8,
                props.arrowSize,
                -8,
                0,
                8,
                0
            ]
        );
        g.endFill();
    }, [props]);
    return <Graphics draw={draw} />;
}