import React, {  useEffect, useState } from 'react';
import { Text, Container } from '@inlet/react-pixi';
import { TextStyle } from 'pixi.js';


export const Title = (props) => {

    const [chars, setChars] = useState([])

    useEffect(() => {

        const ar = [];
        // console.log(props.textRef.current.childNodes)
        props.textRef.current.childNodes.forEach(
            c => {
                const tmp = c.getBoundingClientRect()

                // console.log(tmp)
                ar.push({ char: c.innerText, x: tmp.x, y: tmp.y, })
            }
        )

        setChars(ar)
       // console.log(chars)
    }, [props.textRef]);

    const style = new TextStyle({
        /* align: "center", */
        fontFamily: "Arial",
        fontSize: 100,
        fontWeight: "bold",
        fill: '#ffffff',
        stroke: "#000000",
        strokeThickness: 2,
        /*  fill: ["#26f7a3", "#01d27e"],
       
         letterSpacing: 5, */
        /*  wordWrap: true */
        /*wordWrapWidth: 10 */
    });

    return (
        <Container>
            {/*  <Text text={props.text} x={0} y={0} style={style} /> */}
            {
                chars.map((c, index) =>
                    <Text key={index} text={c.char} x={c.x} y={c.y} style={style} />
                    /* console.log(c) */
                )
            }
        </Container>
    )
}