import React from 'react';
import Sketch from "react-p5";

export const A4 = (props) => {

    

        const width = 400;
        const height = 400;

        const setup = (p5, canvasParentRef) => {

            p5.createCanvas(width, height).parent(canvasParentRef);
            p5.background(250);
            p5.noStroke()


            for (let i = 130; i > 0; i--) {

                if (i <= 1) {
                    p5.fill(20)
                } else {
                    //norm(i,1,130)
                    p5.fill( p5.map(i, 130, 1, 80, 230));
                }
                p5.ellipse(width / 2 + i, height / 2 + i, 200)
            }



        

        /*   p.draw = () => {
  
          } */
    }

    return (
        <div {...props}>
            <Sketch setup={setup}/*  draw={draw} */ />
        </div>
    );
}