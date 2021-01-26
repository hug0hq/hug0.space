import React, { useCallback, useEffect, useState } from 'react';
import { Graphics, useTick, useApp, Container } from '@inlet/react-pixi';

//import { CircleBody } from '../physics/components';
import Matter from "matter-js";


export const Player = (props) => {
    const app = useApp()
    const height = 40;

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [mposition, setMposition] = useState({ position: { x: 0, y: 0 } });


    const pMove = (e) => {
        if (e.clientX && e.clientY) {
            let mouse = {
                position: {
                    x: e.clientX,
                    y: e.clientY
                }
            }
            // console.log(e)

            setMposition(mouse)
        }
    }

    const pDown = (e) => {
        //e.preventDefault()
        setclick(true)

        // console.log('m down')

    }

    //const [mouse] = useState(Matter.Mouse.create(document.querySelector("body")))
    //const [mousestate, setMousestate] = useState(null);


    //   const player = useRef(null);
    

    useEffect(() => {
        //console.log( mouse)
        //const update = () => setSize(getSize());
        //window.onresize = update;
        //return () => (window.onresize = null);

        const pUp = (e) => {
            //e.preventDefault()
            setclick(false)

            //return;
            if (props.body.velocity.x > 1 || props.body.velocity.y > 1) {
                return
            }
            //console.log(props.body.velocity.x)
            let mouse = {
                position: {
                    x: e.clientX,
                    y: e.clientY
                }
            }
            // console.log('tacada')
            const force = 0.1 // 0.2;
            const deltaVector = Matter.Vector.sub(mouse.position, props.body.position);
            const normalizedDelta = Matter.Vector.normalise(deltaVector);
            const forceVector = Matter.Vector.mult(normalizedDelta, force);
            const op = Matter.Vector.neg(forceVector);
            //arrowSize = 0;
            //mousedown = false;
            //setclick(false)
            Matter.Body.applyForce(props.body, props.body.position, op);
            // }
        }

        //  const m = document.getElementById()
       // console.log(app.view.parentNode)
        app.view.addEventListener('mouseup', pUp);
        app.view.addEventListener('mousedown', pDown);
        // clean up function
        app.view.addEventListener('mousemove', pMove);


        //console.log('body render')
        return () => {
            // remove resize listener
            app.view.removeEventListener('mouseup', pUp);
            app.view.removeEventListener('mousedown', pDown);
            app.view.removeEventListener('mousemove', pMove);
        }



    }, [props.body, app.view]);

    const [arrow, update] = useState(0)
    const [click, setclick] = useState(false)

    const [rotation, setRotation] = useState(0);
    //  useReducer(reducer, initialArgs, init); its a better setState for comprex states
    const angle = (x, y) => {
        return Math.atan2(y, x) + Math.PI / 2;
    }

    useTick(delta => {

        setX(props.body.position.x);
        setY(props.body.position.y);
        //player.position = ballBody.position;
        //return
        if (click) {
            if (props.body.velocity.x > 1 || props.body.velocity.y > 1) {
                return
            }

            let deltaVector = Matter.Vector.sub(mposition.position, props.body.position)

            // console.log(angle(deltaVector.x, deltaVector.y))
            setRotation(angle(deltaVector.x, deltaVector.y))
            update({
                arrowSize: 45,
                /*  rotation:  */
            })

        }
        else {
            //let deltaVector = props.matter.Vector.sub( mouse.position, props.body)

            /* Matter.Vector.sub(mouse.position, body); */
            //setRotation(0)
            update({
                arrowSize: 0,
                /*     rotation: angle(deltaVector.x, deltaVector.y) */
            })
        }
    })



    //BallBody(100, 100, props.radios);
    /* const options = {
        restitution: 1,
        friction: 0.3,
        frictionAir: 0.05,
        label: 'ball',
        collisionFilter: {
            category: '0x0002'
        }
    } */
    /* 
        const handleClick = (e) => {
            e.preventDefault();
            console.log('The link was clicked.');
        } */
    return (
        <Container x={x} y={y} rotation={rotation} /*  onPointerDown={console.log('m')} */ /* position={[100, app.screen.height - 100]}  */>
            <Arrow {...arrow} height={height}></Arrow>
            <Ball radios={props.radios}  /* interactive={true} onClick={() => {console.log('click')}} */ />
            {/* <BallBody></BallBody> */}
            {/* <CircleBody x={100} y={ app.screen.height - 100} radios={props.radios} options={options} ></CircleBody> */}
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
    }, [props.arrowSize]);
    return <Graphics draw={draw} />;
}