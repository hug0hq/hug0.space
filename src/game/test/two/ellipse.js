import Two from 'two.js'

const Ellipse = (root, props) => {
  const {
    x = 0,
    y = 0,
    width = 10,
    height = 10,
    fill = '#fff',
    stroke = '#000',
    noStroke = false,
  } = props
  const pixiEllipse = new Two.Ellipse(x, y, width, height)

  pixiEllipse.fill = fill
  pixiEllipse.stroke = stroke

  if (noStroke) {
    pixiEllipse.noStroke()
  }

  return pixiEllipse
}

export default Ellipse
