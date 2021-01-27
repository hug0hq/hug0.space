import React, { useEffect, useRef, useState } from 'react';
import { Text, Container, useTick } from '@inlet/react-pixi';
import { TextStyle } from 'pixi.js';

//import { Char } from './char';

export const Title = (props) => {

    const text = useRef()
    const [chars, setChars] = useState([])

    //const [ch, setX] = useState(0);
    const [fontSize, setFontSize] = useState(100);
    /*  const [offsetX, setOffsetX] = useState(0)
     const [offsetY, setOffsetY] = useState(0) */

    const font = window.getComputedStyle(props.textRef.current).fontSize

    useEffect(() => {
        const fs = parseInt(font, 10)
        setFontSize(fs)

        /* text.current.children.forEach( (t)=> {
           // t.updateText()
            console.log(t)
        }) */
      

        /*  props.textBodys.forEach(
             (e) => {
                 setOffsetX(e.bounds.max.x - e.bounds.min.x)
                 setOffsetY(e.bounds.max.y - e.bounds.min.y)
                 //console.log(e)
             }); */

    }, [font, props.textRef, props.textBodys])

    useEffect(() => {

        const ar = [];
        // console.log(props.textRef.current.childNodes)
        props.textRef.current.childNodes.forEach(
            c => {
                const tmp = c.getBoundingClientRect()
                //console.log(c.innerText)
                if (c.innerText && c.innerText !== ' ') {
                    ar.push({ char: c.innerText, x: tmp.x, y: tmp.y, })
                }
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
    const [ch, setCh] = useState();
  
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
      /*   setXX(x)
        setYY(y) */
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
        stroke: "#ffffff",
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

        <Container ref={text}>
            {/*  <Text text={props.text} x={0} y={0} style={style} /> */}
            { ch &&
                chars.map((c, i) =>
                    <Text isSprite anchor={0.5} key={i} text={c.char} x={ch[i].x} y={ch[i].y} rotation={ch[i].r} style={style} />

                )
            }
            {/*  { chars[0] &&

                chars.forEach((c, index) =>
                    <Char fontSize={fontSize} char={c}></Char>
                )

            } */}

        </Container>
    )
}