import React, { useCallback, useEffect, useState } from 'react';
import { Graphics, useTick, useApp, Container } from '@inlet/react-pixi';

import Matter from "matter-js";

export const Player = (props) => {
    const app = useApp();
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
            setMposition(mouse);
        }
    }

    const pDown = (e) => {
        setclick(true);
    }

    useEffect(() => {
        const pUp = (e) => {
            setclick(false);

            if (props.body.velocity.x > 1 || props.body.velocity.y > 1) {
                return;
            }

            let mouse = {
                position: {
                    x: e.clientX,
                    y: e.clientY
                }
            }

            const force = 0.1 // 0.2;
            const deltaVector = Matter.Vector.sub(mouse.position, props.body.position);
            const normalizedDelta = Matter.Vector.normalise(deltaVector);
            const forceVector = Matter.Vector.mult(normalizedDelta, force);
            const op = Matter.Vector.neg(forceVector);

            Matter.Body.applyForce(props.body, props.body.position, op);
        }

        const m = document.getElementById('golf')

        m.addEventListener('mouseup', pUp);
        m.addEventListener('mousedown', pDown);
        m.addEventListener('mousemove', pMove);

        return () => {
            m.removeEventListener('mouseup', pUp);
            m.removeEventListener('mousedown', pDown);
            m.removeEventListener('mousemove', pMove);
        }
    }, [props.body, app.view]);

    const [arrow, update] = useState(0);
    const [click, setclick] = useState(false);
    const [rotation, setRotation] = useState(0);

    const angle = (x, y) => {
        return Math.atan2(y, x) + Math.PI / 2;
    }

    useTick(delta => {

        setX(props.body.position.x);
        setY(props.body.position.y);

        if (click) {
            if (props.body.velocity.x > 1 || props.body.velocity.y > 1) {
                return;
            }
            let deltaVector = Matter.Vector.sub(mposition.position, props.body.position);
            setRotation(angle(deltaVector.x, deltaVector.y));
            update({
                arrowSize: 45
            })
        }
        else {
            update({
                arrowSize: 0
            })
        }
    })

    return (
        <Container x={x} y={y} rotation={rotation} >
            <Arrow {...arrow} height={height}></Arrow>
            <Ball radios={props.radios} />
        </Container>
    )
}

const Ball = (props) => {
    const draw = useCallback((g) => {
        g.clear()
            .beginFill(0xf3f3f3)
            .drawCircle(0, 0, props.radios)
            .endFill()
    }, [props]);
    return <Graphics draw={draw} />;
}

const Arrow = (props) => {

    const draw = useCallback((g) => {
        g.clear()
            .beginFill(0xF04D4D)
            .drawPolygon(
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
            )
            .endFill()
    }, [props.arrowSize]);
    return <Graphics draw={draw} />;
}
