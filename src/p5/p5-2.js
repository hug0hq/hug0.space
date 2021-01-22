import React from 'react';
import p5 from 'p5';

export default class A2 extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        var width = 400;
        var height = 400;

        p.setup = () => {
            //function setup() {
                p.createCanvas(400, 400);
                p.background(15);

                trunk();
                branches();
            //}

        }

        
        function trunk() {
            p.stroke(180);
            p.strokeWeight(2);
            p.line(width / 2, height, width / 2, height - 310);
        }

        function leaf(x, y, direction, angle) {
            p.push();
            p.stroke(180);
            p.strokeWeight(1);
            p.translate(x, y);
            p.rotate(direction * (angle - p.PI / p.random(1.0, 1.4)));
            p.line(0, 0, 20, 0);
            p.pop();
        }

        function branches() {
            var size = 80;
            for (var h = 320; h > 100; h -= 30) {
                branch(size, h);
                size -= 10;
            }
        }
        
        function branch(len, h) {
           
            for (var r = 0; r < len; r += 10) {
                for (var p0 = 0; p0 < 2; p0++) {
                    leaf(width / 2 - r, h + p.exp(r / 30), 1.5, 0);
                    leaf(width / 2 - r, h + p.exp(r / 30), -1, 0);
                    leaf(width / 2 + r, h + p.exp(r / 30), 1.5, p.PI);
                    leaf(width / 2 + r, h + p.exp(r / 30), 1, p.PI);
                }

                if (p.random(10) > 7) {
                    p.noStroke();
                    p.fill( p.random(140, 250), 0, 0);
                    p.circle(width / 2 - r, h + p.exp(r / 30), p.random(6.0, 10.0));
                    p.circle(width / 2 + r, h + p.exp(r / 30), p.random(6.0, 10.0));
                }
            }
        }

        /* p.draw = () => {

        } */
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            <div ref={this.myRef}></div>
        )
    }
}