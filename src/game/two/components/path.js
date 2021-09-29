import Two from 'two.js'

const Path = (root, props) => {
  const {
    vertices,
    fill = '#fff',
    stroke = '#000',
    noStroke = false,
    noFill = false,
    linewidth = 1,
  } = props

  console.log('create p')

  const twoPath = new Two.Path(vertices)

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
