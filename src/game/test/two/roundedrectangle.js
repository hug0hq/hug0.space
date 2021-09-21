import Two from 'two.js'

const RoundedRectangle = (root, props) => {
  const {
    x = 0,
    y = 0,
    width = 10,
    height = 10,
    fill = '#fff',
    stroke = '#000',
    radius = 2,
    noStroke = false,
  } = props

  const pixiRec = new Two.RoundedRectangle(x, y, width, height, radius)

  pixiRec.fill = fill
  pixiRec.stroke = stroke

  if (noStroke) {
    pixiRec.noStroke()
  }

  return pixiRec
}

export default RoundedRectangle
