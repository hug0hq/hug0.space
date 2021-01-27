import React, { useCallback, useState } from 'react';
import { Graphics, useTick, useApp, Container } from '@inlet/react-pixi';

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
        <Container {...motion}>
            <HoleP />
        </Container>
    )
}

export const Hole = (props) => {
    const app = useApp();
    const [motion, update] = useState();

    useTick(delta => {
        update({
            position: [app.screen.width - margin2, app.screen.height - 100]
        })
    })

    return (
        <Container {...motion} >
            <Flag />
            <FlagStick />
        </Container>
    );
}

const Flag = (props) => {
    const pw = 10; //pole width
    const ph = 80; //pole height

    let tmpp1 = -pw / 2 - 40;
    let tmpp2 = -ph + 2;
    const tmpsize = 40;

    const draw = useCallback((g) => {
        g.clear()
            .beginFill(0xF04D4D)
            .moveTo(-pw / 2, tmpp2)
            .lineTo(tmpp1, tmpp2 + tmpsize / 2 - 5)
            .quadraticCurveTo(tmpp1 - 10, tmpp2 + tmpsize / 2, tmpp1, tmpp2 + tmpsize / 2 + 5)
            .lineTo(-pw / 2, tmpp2 + tmpsize)
            .endFill()
    }, [tmpp1, tmpp2]);
    return <Graphics draw={draw} />;
}

const FlagStick = (props) => {
    const pw = 10; //pole width
    const ph = 80; //pole height
    let sp = - pw / 2; //mid

    const draw = useCallback((g) => {
        g.clear()
            .beginFill(0xf3f3f3)
            .moveTo(sp, 15)
            .arc(sp + pw / 2, -ph, pw / 2, Math.PI, 0)
            .lineTo(sp + pw, 15)
            .endFill()
    }, [sp]);
    return <Graphics draw={draw} />;
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