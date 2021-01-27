import React from 'react';
import { useSpring, animated } from 'react-spring';

let limitNumberWithinRange = (num, min, max) => {
    const MIN = min || 1;
    const MAX = max || 20;
    const parsed = parseInt(num)
    return Math.min(Math.max(parsed, MIN), MAX)
}

const calc = (x, y) => [limitNumberWithinRange(-(y - window.innerHeight / 2) / 20, -4, 4), limitNumberWithinRange((x - window.innerWidth / 2) / 20, -4, 4), 1.01]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const Card = (props) => {

    const [p, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10 /* 5 */, tension: 350, friction: 40 } }))

    return (
        <animated.div
            className="card"
            onMouseMove={({ clientX: x, clientY: y }) => { set({ xys: calc(x, y) }); }}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: p.xys.interpolate(trans) }}
        >
            {props.children}
        </animated.div>
    );
}
