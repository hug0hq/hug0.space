import React from 'react';
import Sketch from "react-p5";

export const A1 = (props) => {

    const width = 400; //this.props.width;
    const height = 400; //this.props.height;

    let grid = []

    const setup = (p5, canvasParentRef) => {

        p5.createCanvas(width, height).parent(canvasParentRef);
        //frameRate(10);
        for (let i = 0; i < height; i += height / 14) {
            grid.push(i)
        }
    }

    const draw = (p5) => {

        p5.background(255)
        p5.noStroke()
        //for(var i=0;i<600; i+=h*2){
        grid.forEach(
            (line, i) => {
                const m = p5.map(line, 0, height, 0, 1);
                p5.fill(p5.lerp(200, 0, m))
                const hy = p5.lerp(4, 30, m);
                p5.rect(0, line, width, hy)

                grid[i] += 0.5;

                if (line > height) {
                    grid[i] = 0;
                }
            }
        )
        p5.noFill()
        p5.stroke(255)
        p5.strokeWeight(width / 3)
        p5.circle(width / 2, height / 2, width + width / 6)
        //console.log('oi')
    }

    return (
        <div {...props}>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}