import React from 'react';
import Sketch from "react-p5";

export const A10 = (props) => {

    const w = 600;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(w, w).parent(canvasParentRef);
        p5.background(255);
        p5.noFill();

        for (var i = 0; i < 800; i++) {
            p5.triangle(p5.random(w), p5.random(w), p5.random(w), p5.random(w), p5.random(w), p5.random(w));

        }
    }

    return (
        <div {...props}>
            <Sketch setup={setup} />
        </div>
    );
}