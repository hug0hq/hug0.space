import React from 'react';
import Sketch from "react-p5";

export const A2 = (props) => {


    const width = 400;
    const height = 400;

    const setup = (p5, canvasParentRef) => {
        //function setup() {
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.background(15);

        trunk();
        branches();
        //}

        //}


        function trunk() {
            p5.stroke(180);
            p5.strokeWeight(2);
            p5.line(width / 2, height, width / 2, height - 310);
        }

        function leaf(x, y, direction, angle) {
            p5.push();
            p5.stroke(180);
            p5.strokeWeight(1);
            p5.translate(x, y);
            p5.rotate(direction * (angle - p5.PI / p5.random(1.0, 1.4)));
            p5.line(0, 0, 20, 0);
            p5.pop();
        }

        function branches() {
            let size = 80;
            for (let h = 320; h > 100; h -= 30) {
                branch(size, h);
                size -= 10;
            }
        }

        function branch(len, h) {

            for (let r = 0; r < len; r += 10) {
                for (let p0 = 0; p0 < 2; p0++) {
                    leaf(width / 2 - r, h + p5.exp(r / 30), 1.5, 0);
                    leaf(width / 2 - r, h + p5.exp(r / 30), -1, 0);
                    leaf(width / 2 + r, h + p5.exp(r / 30), 1.5, p5.PI);
                    leaf(width / 2 + r, h + p5.exp(r / 30), 1, p5.PI);
                }

                if (p5.random(10) > 7) {
                    p5.noStroke();
                    p5.fill(p5.random(140, 250), 0, 0);
                    p5.circle(width / 2 - r, h + p5.exp(r / 30), p5.random(6.0, 10.0));
                    p5.circle(width / 2 + r, h + p5.exp(r / 30), p5.random(6.0, 10.0));
                }
            }
        }
    }

    /* p.draw = () => {

    } */




    return (
        <div {...props}>
            <Sketch setup={setup}  />
        </div>
    );
}