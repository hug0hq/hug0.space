import React, { useEffect, useRef, useState } from 'react';
import { Text, Container, useTick } from '@inlet/react-pixi';
import { TextStyle } from 'pixi.js';

export const Title = (props) => {

    const text = useRef();
    const [chars, setChars] = useState([]);
    const [fontSize, setFontSize] = useState(100);
    const [ch, setCh] = useState();
    const font = window.getComputedStyle(props.textRef.current).fontSize

    useEffect(() => {
        const fs = parseInt(font, 10);
        setFontSize(fs);
    }, [font, props.textRef, props.textBodys])

    useEffect(() => {

        const ar = [];
        props.textRef.current.childNodes.forEach(
            c => {
                const tmp = c.getBoundingClientRect();
                if (c.innerText && c.innerText !== ' ') {
                    ar.push({ char: c.innerText, x: tmp.x, y: tmp.y, })
                }
            }
        )
        setChars(ar);

    }, [props.textRef]);

    useTick(delta => {

        let tmp = []
        props.textBodys.forEach(
            (e) => {
                tmp.push({
                    x: e.position.x,
                    y: e.position.y,
                    r: e.angle
                })
            }
        )
        setCh(tmp);
    });

    const style = new TextStyle({
        fontFamily: ["Roboto", "Arial"],
        fontSize: fontSize,
        fontWeight: "bold",
        fill: '#ffffff',
        stroke: "#ffffff",
        strokeThickness: 2,
    });

    return (
        <Container ref={text}>
            { ch &&
                chars.map((c, i) =>
                    <Text isSprite anchor={0.5} key={i} text={c.char} x={ch[i].x} y={ch[i].y} rotation={ch[i].r} style={style} />
                )
            }
        </Container>
    )
}
