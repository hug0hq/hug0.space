import React from 'react';
import Sketch from "react-p5";

export const A7 = (props) => {

        const width = 800;
        const height = 600;
        let div = 10;

        const setup = (p5, canvasParentRef) => {

            p5.createCanvas(width, height).parent(canvasParentRef);
            p5.noStroke();
            //noLoop();  

            // let sqr = 8;
            // let lastSize = 800;

            let sq = width / div;

            for (let i = div; i > 0; i--) {

                if (p5.random([0, 1]) === 0) {
                    p5.fill(1, 255, 255);
                } else {
                    p5.fill(255, 255, 0);
                }

                let m = sq * 3 / 4;
                p5.rect(0, 0, sq * i, m * i);

            }

        }

    

    return (
        <div {...props}>
            <Sketch setup={setup}/*  draw={draw} */ />
        </div>
    );
}