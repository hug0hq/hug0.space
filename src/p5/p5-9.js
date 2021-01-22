import React from 'react';
import p5 from 'p5';

export default class A9 extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        const width = 520;
        const height = 520;

        p.setup = () => {

            p.createCanvas(width, height);
            p.background(255);

            /*  }
             
             function setup() {
                
                 
                 //noStroke();
                 
               } */
       /*  }
        p.draw = () => { */
            let size = 40;
            let margin = 20;

            let scale = 1;
            let t = 0;


            // function draw() {

            let l = width / (size + margin);

            while (t < 1100) {


                for (let j = 1; j < l - 1; j++) {

                    for (let i = 1; i < l - 1; i++) {

                        p.stroke(35, 40, 110);
                        //rect( (size+margin)*j , (size+margin)*i , size , size);
                        p.fill(255)

                        p.push(); // Start a new drawing state

                        p.rotate(p.PI / t);
                        p.rect((size + margin) * j + (scale * i) / 2, (size + margin) * i + (scale * i) / 2, size - scale * i, size - scale * i);

                        p.pop(); // Restore original state

                    }

                }
                t += 1
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