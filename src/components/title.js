import React, { useEffect, useState } from 'react';
import { Text, Container, useTick } from '@inlet/react-pixi';
import { TextStyle } from 'pixi.js';

export const Title = (props) => {

    const [chars, setChars] = useState([])

    //const [ch, setX] = useState(0);
    const [ch, setCh] = useState();
    const [fontSize, setFontSize] = useState(100);
    /* const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0) */

    const font = window.getComputedStyle(props.textRef.current).fontSize

    useEffect(() => {
        const fs = parseInt(font, 10)
        setFontSize(fs)
        //console.log(fs)

      /*   props.textBodys.forEach(
            (e) => {
                setOffsetX(e.bounds.max.x - e.bounds.min.x)
                setOffsetY(e.bounds.max.y - e.bounds.min.y)
                //console.log(e)
            }); */

    }, [font, props.textRef])

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
        /*  props.textBodys.forEach(
             (e) => {
 
                 console.log(e)
             }); */


    }, [props.textRef]);




    /*     useEffect(() => {
    
            let tmp = []
            props.textBodys.forEach(
                (e) => {
                    //console.log(e.position)
                    tmp.push({
                        x: e.position.x,
                        y: e.position.y
                    })
                }
            )
            setCh(tmp);
    
        }, [props.textBodys]); */



    useTick(delta => {

        let tmp = []
        props.textBodys.forEach(
            (e) => {
                //console.log(e.position)
                //let offsetX = 80; //e.bounds.max.x - e.bounds.min.x;
                //let offsetY = 80; //e.bounds.max.y - e.bounds.min.y;
                //pivot.set(charMesh.width / 2, charMesh.height / 2)

                tmp.push({
                    x: e.position.x, //- offsetX / 2,
                    y: e.position.y, //- offsetY / 2,
                    r: e.angle
                })
            }
        )
        setCh(tmp);

        /*  props.textBodys.forEach(
             (e) => {
                 console.log(e)
                 setX
             }
         )
          */
        /*  setX(props.body.position.x);
         setY(props.body.position.y); */
    });

    const style = new TextStyle({
        /* align: "center", */
        fontFamily: "Roboto",
        fontSize: fontSize,
        fontWeight: "bold",
        fill: '#ffffff',
        /* stroke: "#000000", */
        strokeThickness: 2,
        /*  fill: ["#26f7a3", "#01d27e"],
       
         letterSpacing: 5, */
        /*  wordWrap: true */
        /*wordWrapWidth: 10 */
    });

    /*  //var op = o.body.position;
      //console.log(char.mesh)
      //console.log(char.body.position.x)
      char.mesh.position = char.body.position;
      char.mesh.rotation = char.body.angle;
    }) */


    return (

        <Container>
            {/*  <Text text={props.text} x={0} y={0} style={style} /> */}
            { ch &&
                chars.map((c, index) =>
                    <Text anchor={0.5}  key={index} text={c.char} x={ch[index].x} y={ch[index].y} rotation={ch[index].r} style={style} />
                    /* console.log(c) */
                )
            }
        </Container>
    )
}