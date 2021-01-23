import React from 'react';
import p5 from 'p5';

export default class A7 extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {
        const width = 800;
        const height = 600;
        let div = 10;

        p.setup = () => {

            p.createCanvas(width, height);
            p.noStroke();
            //noLoop();  

            // let sqr = 8;
            // let lastSize = 800;

            let sq = width / div;

            for (let i = div; i > 0; i--) {

                if (p.random([0, 1]) === 0) {
                    p.fill(1, 255, 255);
                } else {
                    p.fill(255, 255, 0);
                }

                let m = sq * 3 / 4;
                p.rect(0, 0, sq * i, m * i);

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