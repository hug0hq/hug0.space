import React from 'react';
import p5 from 'p5';

export default class A3 extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        const width = 600;
        const height = 600;

        p.setup = () => {
            p.createCanvas(width, height);
            p.noStroke();

            p.background(255);
            drawfigure();
        }

        /* p.draw = () => {

        } */
       

        function drawfigure() {
            p.fill(0);
            for (let i = 1; i < 48; i++) {
                for (let j = 1; j < 48; j++) {
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
            <div ref={this.myRef} {...this.props}></div>
        )
    }
}