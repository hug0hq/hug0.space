import React from 'react';
import Sketch from "react-p5";

export const A8 = (props) => {

        const width = 520;
        const height = 520;

        let size = 40;
        let margin = 20;

        let scale = 1;
        const setup = (p5, canvasParentRef) => {
            p5.createCanvas(width, height).parent(canvasParentRef);
            p5.background(255);
            //p.noLoop();
            //noStroke();
            let l = width / (size + margin);

            for (let j = 1; j < l - 1; j++) {

                for (let i = 1; i < l - 1; i++) {

                    p5.fill(20);
                    p5.rect((size + margin) * j, (size + margin) * i, size, size);
                    p5.fill(255)

                    p5.rect((size + margin) * j + (scale * i) / 2, (size + margin) * i + (scale * i) / 2, size - scale * i + 1 * i, size - scale * i + 1 * i);


                }

            }
        }
    

    return (
        <div {...props}>
            <Sketch setup={setup}/*  draw={draw} */ />
        </div>
    );
}