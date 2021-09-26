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
    linewidth = 1
  } = props

  const twoRoundedRec = new Two.Rectangle(x, y, width, height)

  twoRoundedRec.fill = fill
  twoRoundedRec.stroke = stroke
  twoRoundedRec.linewidth = linewidth

  if (noFill) {
    twoRoundedRec.noFill()
  }
  if (noStroke) {
    twoRoundedRec.noStroke()
  }

  return twoRoundedRec
}

export default Rectangle
