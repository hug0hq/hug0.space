import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Graphics, useTick, Container, useApp } from '@inlet/react-pixi';

import { useSpring, useChain, animated } from 'react-spring';

const margin2 = 200;

export const H = (props) => {
    const app = useApp();
    const [motion, update] = useState();

    useTick(delta => {
        update({
            position: [app.screen.width - margin2, app.screen.height - 100]
        })
    })

    return (
        <Container {...motion} >
            <HoleP />
        </Container>
    )
}

const Flag = (props) => {
    const pw = 10; //pole width
    const ph = 80; //pole height

    let tmpp1 = -pw / 2 - props.w;
    let tmpp2 = -ph + 2;
    const tmpsize = 40;

    let tmpp3 = tmpp2 + props.h;

    let tmpp4 = tmpp2 + tmpsize - props.h;

    // cpx, cpy, x, y
    const draw = useCallback((g) => {
        if (props.d === 0) {
            return
        }
        g.clear()
            .beginFill(0xF04D4D)
            .moveTo(-pw / 2, tmpp2)
            .lineTo(tmpp1, tmpp3)
            .quadraticCurveTo(tmpp1 - 5, tmpp3 + 2, tmpp1 - 5, tmpp3 + 5)
            .lineTo(tmpp1 - 5, tmpp4 - 5)
            .quadraticCurveTo(tmpp1 - 5, tmpp4 - 2, tmpp1, tmpp4)
            .lineTo(tmpp1, tmpp4)
            .lineTo(-pw / 2, tmpp2 + tmpsize)
            .endFill()

    }, [tmpp1, tmpp2, tmpp3, tmpp4, tmpsize, props.d]);
    return <Graphics draw={draw} />;
}

const FlagStick = (props) => {
    const pw = 10; //pole width
    const ph = props.y //80; //pole height
    let sp = - pw / 2; //mid

    const draw = useCallback((g) => {
        if (props.d === 0) {
            return
        }
        g.clear()
            .beginFill(0xf3f3f3)
            .moveTo(sp, 15)
            .arc(sp + pw / 2, -ph, pw / 2, Math.PI, 0)
            .lineTo(sp + pw, 15)
            .endFill()
    }, [sp, ph, pw, props.d]);
    return <Graphics draw={draw} />;
}

// React components
const AnimatedFlagStick = animated(FlagStick);
const AnimatedFlag = animated(Flag);
const AnimatedContainer = animated(Container);

export const Hole = (props) => {
    const app = useApp();
    const [motion, update] = useState();

    const [play, setPlay] = useState(false);
    const [playOnStart, setPlayOnStart] = useState(true);

    useTick(delta => {
        update({
            position: [app.screen.width - margin2, app.screen.height - 100]
        })
    })

    useEffect(() => {
        if (playOnStart) {
            setPlayOnStart(false);
            return;
        }
        setPlay(!play);

        // eslint-disable-next-line 
    }, [props.point])

    const spring1Ref = useRef()
    const spring2Ref = useRef()

    const stickanim = useSpring({ to: { d: 1, y: 80 }, from: { d: 0, y: 0 }, config: { mass: 5, tension: 1000, friction: 100 }, ref: spring1Ref })
    const flaganim = useSpring({ to: { d: 1, w: 40, h: 15 }, from: { d: 0, w: 0, h: 0 }, delay: 41, config: { mass: 5, tension: 2000, friction: 200 }, ref: spring2Ref })

    useChain([spring1Ref, spring2Ref])

    const { r } = useSpring({ from: { r: 0 }, r: play ? 1 : 0, config: { mass: 5, tension: 2000, friction: 40 } })

    return (
        <AnimatedContainer {...motion} rotation={r.interpolate({ range: [0, 0.5, 1], output: [0, 0.08, 0] })}>
            <AnimatedFlag  {...flaganim} />
            <AnimatedFlagStick  {...stickanim} />
        </AnimatedContainer>
    );
}

const HoleP = (props) => {
    const draw = useCallback((g) => {
        g.clear()
            .beginFill(0x424242)
            .drawEllipse(0, 2, 15, 13)
            .endFill()
    }, []);

    return (
        <Graphics draw={draw} />
    );
}
