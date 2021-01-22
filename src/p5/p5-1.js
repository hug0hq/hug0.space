import React from 'react';
import p5 from 'p5';

export default class A1 extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        var width = 400;
        var height = 400;

        let grid = []

        p.setup = () => {
            p.createCanvas(400, 400);
            //frameRate(10);
            for (var i = 0; i < height; i += height/14) {
                grid.push(i)
            }
        }
        
        p.draw = () => {

            p.background(255)
            p.noStroke()
            //for(var i=0;i<600; i+=h*2){
            grid.forEach(
                (line, i) => {
                    var m = p.map(line, 0, height, 0, 1);
                    p.fill( p.lerp(200, 0, m))
                    var hy = p.lerp(4, 30, m);
                    p.rect(0, line, width, hy)

                    grid[i] += 0.5;

                    if (line > height) {
                        grid[i] = 0;
                    }
                }
            )
            p.noFill()
            p.stroke(255)
            p.strokeWeight(width / 3)
            p.circle(width / 2, height / 2, width + width / 6)
            //console.log('oi')
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