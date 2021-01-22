import React from 'react';
import p5 from 'p5';

export default class A3 extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        var width = 400;
        var height = 400;

        p.setup = () => {
            p.createCanvas(400, 400);
            p.noStroke();

            p.background(255);
            drawfigure();
        }

        /* p.draw = () => {

        } */
       

        function drawfigure() {
            p.fill(0);
            for (let i = 1; i < width; i++) {
                for (let j = 1; j < 40; j++) {
                    p.circle(100 * (i / 8), 100 * (j / 8), p.random(0, 4));
                }
            }
        }
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