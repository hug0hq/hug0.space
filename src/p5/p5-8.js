import React from 'react';
import p5 from 'p5';

export default class A8 extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {
        const width = 520;
        const height = 520;

        let size = 40;
        let margin = 20;

        let scale = 1;
        p.setup = () => {
            p.createCanvas(width, height);
            p.background(255);
            //p.noLoop();
            //noStroke();
            let l = width / (size + margin);

            for (let j = 1; j < l - 1; j++) {

                for (let i = 1; i < l - 1; i++) {

                    p.fill(20);
                    p.rect((size + margin) * j, (size + margin) * i, size, size);
                    p.fill(255)

                    p.rect((size + margin) * j + (scale * i) / 2, (size + margin) * i + (scale * i) / 2, size - scale * i + 1 * i, size - scale * i + 1 * i);


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