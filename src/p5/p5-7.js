import Sketch from 'react-p5'

export default A7 = (props) => {
  const width = 800
  const height = 600
  const div = 10

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef)
    p5.noStroke()

    let sq = width / div

    for (let i = div; i > 0; i--) {
      if (p5.random([0, 1]) === 0) {
        p5.fill(1, 255, 255)
      } else {
        p5.fill(255, 255, 0)
      }

      let m = (sq * 3) / 4
      p5.rect(0, 0, sq * i, m * i)
    }
  }

  return (
    <div {...props}>
      <Sketch setup={setup} />
    </div>
  )
}
