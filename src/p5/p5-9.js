import React from 'react';

import Sketch from "react-p5";

export const A9 = (props) => {

        const width = 520;
        const height = 520;

        const setup = (p5, canvasParentRef) => {

            p5.createCanvas(width, height).parent(canvasParentRef);
            p5.background(255);

            /*  }
             
             function setup() {
                
                 
                 //noStroke();
                 
               } */
       /*  }
        p.draw = () => { */
            let size = 40;
            let margin = 20;

            let scale = 1;
            let t = 0;


            // function draw() {

            let l = width / (size + margin);

            while (t < 1100) {


                for (let j = 1; j < l - 1; j++) {

                    for (let i = 1; i < l - 1; i++) {

                        p5.stroke(35, 40, 110);
                        //rect( (size+margin)*j , (size+margin)*i , size , size);
                        p5.fill(255)

                        p5.push(); // Start a new drawing state

                        p5.rotate(p5.PI / t);
                        p5.rect((size + margin) * j + (scale * i) / 2, (size + margin) * i + (scale * i) / 2, size - scale * i, size - scale * i);

                        p5.pop(); // Restore original state

                    }

                }
                t += 1
            }

        
    }

    return (
        <div {...props}>
            <Sketch setup={setup} /* draw={draw} */ />
        </div>
    );
}