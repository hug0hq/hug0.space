import React from 'react';
import p5 from 'p5';

export default class A6 extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        let width = 400
        let size = 40;
        let margin = 20;

        let scale = 2;

        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(255);
            p.noLoop();
            p.noStroke();

            p.colorMode( p.HSB, 360, 100, 100);

            let l = width / (size + margin);

            for (let j = 1; j < l - 1; j++) {

                for (let i = 1; i < l - 1; i++) {

                    p.fill( p.random(100), 80, 100);

                    //circle( (size+margin)*j , (size+margin)*i , size );
                    //fill(255)

                    if (j % 2 === 0) {
                        p.circle((size + margin) * j, (size + margin) * i, size - scale * i);
                    } else {
                        p.circle((size + margin) * j, (size + margin) * i + size, size - scale * (l - i));
                    }
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