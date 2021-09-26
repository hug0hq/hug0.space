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
    noFill = false,
    linewidth = 1,
  } = props

  const twoRec = new Two.Rectangle(x, y, width, height)

  twoRec.fill = fill
  twoRec.stroke = stroke
  twoRec.linewidth = linewidth

  if (noFill) {
    twoRec.noFill()
  }
  if (noStroke) {
    twoRec.noStroke()
  }

  return twoRec
}

export default Rectangle
