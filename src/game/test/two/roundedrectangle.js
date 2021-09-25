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

  const twoRoundedRec = new Two.RoundedRectangle(x, y, width, height, radius)

  twoRoundedRec.fill = fill
  twoRoundedRec.stroke = stroke

  if (noStroke) {
    twoRoundedRec.noStroke()
  }

  return twoRoundedRec
}

export default RoundedRectangle
