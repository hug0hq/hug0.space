import React from 'react';
import Sketch from "react-p5";

export const A3 = (props) => {
    

   

        const width = 600;
        const height = 600;

        const setup = (p5, canvasParentRef) => {
            p5.createCanvas(width, height).parent(canvasParentRef);
            p5.noStroke();

            p5.background(255);
        /*     drawfigure();
        } */

        /* p.draw = () => {

        } */
       

       // function drawfigure() {
            p5.fill(0);
            for (let i = 1; i < 48; i++) {
                for (let j = 1; j < 48; j++) {
                    p5.circle(100 * (i / 8), 100 * (j / 8), p5.random(0, 4));
                }
            }
        }
    

    return (
        <div {...props}>
            <Sketch setup={setup} /* draw={draw} */ />
        </div>
    );
}