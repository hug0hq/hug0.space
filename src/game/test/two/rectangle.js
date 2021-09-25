import Two from 'two.js'

const Rectangle = (root, props) => {
  const {
    x = 0,
    y = 0,
    width = 10,
    height = 10,
    fill = '#fff',
    stroke = '#000',
    noStroke = false,
  } = props

  const twoRoundedRec = new Two.Rectangle(x, y, width, height)

  twoRoundedRec.fill = fill
  twoRoundedRec.stroke = stroke

  if (noStroke) {
    twoRoundedRec.noStroke()
  }

  return twoRoundedRec
}

export default Rectangle
