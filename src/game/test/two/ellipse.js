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

  const twoEllipse = new Two.Ellipse(x, y, width, height)

  twoEllipse.fill = fill
  twoEllipse.stroke = stroke

  if (noStroke) {
    twoEllipse.noStroke()
  }

  return twoEllipse
}

export default Ellipse
