import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from '@use-gesture/react'

const limitNumberWithinRange = (num, min, max) => {
    const MIN = min || 1;
    const MAX = max || 20;
    const parsed = parseInt(num);
    return Math.min(Math.max(parsed, MIN), MAX);
}

const calcX = (y) => limitNumberWithinRange(-(y - window.innerHeight / 2) / 20, -4, 4);
const calcY = (x) => limitNumberWithinRange((x - window.innerWidth / 2) / 20, -4, 4);

export const Card = (props) => {

    const domTarget = useRef(null)

    const [{ rotateX, rotateY }, api] = useSpring(
        () => ({
            rotateX: 0,
            rotateY: 0,
            config: { mass: 14 /* 5 */, tension: 350, friction: 40 },
        })
    )

    useGesture(
        {
            onMoveStart: ({ xy: [px, py] }) =>
                api({
                rotateX: calcX(py),
                rotateY: calcY(px),
                }),

            onMoveEnd: () =>
                api({
                rotateX: 0,
                rotateY: 0,
                }),
        },
        { target: domTarget, eventOptions: { passive: false } }
      )

    return (
        <animated.div
            ref={domTarget}
            className="card"
            style={{
                transform: 'perspective(600px)',
                rotateX,
                rotateY,
              }}
        >
            {props.children}
        </animated.div>
    );
}
