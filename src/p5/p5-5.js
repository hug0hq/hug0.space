import React from 'react';
import Sketch from "react-p5";

export const A5 = (props) => {

        const width = 490;
        const height = 490;

        let size = 40;
        let margin = 20;

        let scale = 1;

        const setup = (p5, canvasParentRef) => {
            p5.createCanvas(width, height).parent(canvasParentRef);
            p5.background(255);
            //rend()
            //p.noLoop();
            let l = width / (size + margin);

            for (let j = 1; j < l - 1; j++) {

                for (let i = 1; i < l - 1; i++) {

                    p5.fill(20);
                    p5.circle((size + margin) * j, (size + margin) * i, size, size);
                    p5.fill(255)

                    p5.circle((size + margin) * j + (scale * i) / 2, (size + margin) * i + (scale * i) / 2, size - scale * i, size - scale * i);

                }

            }
        

        /* 
        p.draw = () => {

        } */
    }

    return (
        <div {...props}>
            <Sketch setup={setup}/*  draw={draw} */ />
        </div>
    );
}