import Two from 'two.js'

const Path = (root, props) => {
  const {
    vertices,
    fill = '#fff',
    stroke = '#000',
    noStroke = false,
    noFill = false,
    linewidth = 1,
    closed = true,
    curved = false,
    manual = false,
  } = props

  const twoPath = new Two.Path(vertices, closed, curved, manual)

  twoPath.fill = fill
  twoPath.stroke = stroke
  twoPath.linewidth = linewidth

  if (noFill) {
    twoPath.noFill()
  }
  if (noStroke) {
    twoPath.noStroke()
  }

  return twoPath
}

export default Path
