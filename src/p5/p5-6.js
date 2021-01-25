import React from 'react';
import Sketch from "react-p5";

export const A6 = (props) => {



    const width = 520;
    const height = 520;

    let size = 40;
    let margin = 20;

    let scale = 2;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.background(255);
        p5.noLoop();
        p5.noStroke();

        p5.colorMode(p5.HSB, 360, 100, 100);

        let l = width / (size + margin);

        for (let j = 1; j < l - 1; j++) {

            for (let i = 1; i < l - 1; i++) {

                p5.fill(p5.random(100), 80, 100);

                //circle( (size+margin)*j , (size+margin)*i , size );
                //fill(255)

                if (j % 2 === 0) {
                    p5.circle((size + margin) * j + 20, (size + margin) * i, size - scale * i);
                } else {
                    p5.circle((size + margin) * j + 20, (size + margin) * i + size, size - scale * (l - i));
                }
            }

        }

    }


    return (
        <div {...props}>
            <Sketch setup={setup} /* draw={draw} */ />
        </div>
    );
}