import React from 'react';
import p5 from 'p5';

export default class A10 extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        const w = 600;

        p.setup = () => {
            p.createCanvas(w, w);
            p.background(255);
            p.noFill();

            for(var i = 0; i< 800; i++){
                p.triangle(p.random(w), p.random(w), p.random(w), p.random(w), p.random(w), p.random(w));

            }

        }

        p.draw = () => {
          
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