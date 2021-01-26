import React, { useEffect, useState } from 'react';
import { Text, Container, useTick } from '@inlet/react-pixi';
import { TextStyle } from 'pixi.js';

export const Leter = (props) => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [r, setR] = useState(0)


    useEffect(() => {

        console.log('fs')

    }, [])

    useTick(delta => {

        const tmpX = props.body.position.x;
        const tmpY = props.body.position.y;
        const tmpR = props.body.angle;

        if (tmpX !== x) {
            setX(tmpX)
        }
        if (tmpY !== y) {
            setY(tmpX)
        }
        if (tmpR !== r) {
            setR(tmpX)
        }
    });

    const style = new TextStyle({
        /* align: "center", */
        fontFamily: "Roboto",
        fontSize: 100,
        fontWeight: "bold",
        fill: '#ffffff',
        /* stroke: "#000000", */
        strokeThickness: 2,
        /*  fill: ["#26f7a3", "#01d27e"],
       
         letterSpacing: 5, */
        /*  wordWrap: true */
        /*wordWrapWidth: 10 */
    });


    return (
        <Text anchor={0.5} text={props.text} x={x} y={y} rotation={r} style={style} />
    )


}