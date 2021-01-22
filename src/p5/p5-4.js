import React from 'react';
import p5 from 'p5';

export default class A4 extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        var width = 400;
        var height = 400;

        p.setup = () => {

            p.createCanvas(400, 400);
            p.background(250);
            p.noStroke()


            for (let i = 130; i > 0; i--) {

                if (i <= 1) {
                    p.fill(20)
                } else {
                    //norm(i,1,130)
                    p.fill( p.map(i, 130, 1, 80, 230));
                }
                p.ellipse(width / 2 + i, height / 2 + i, 200)
            }



        }

        /*   p.draw = () => {
  
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