import Two from 'two.js'

const Path = (root, props) => {
  const { vertices, fill = '#fff', stroke = '#000', noStroke = false } = props

  const twoPath = new Two.Path(vertices)

  twoPath.fill = fill
  twoPath.stroke = stroke

  if (noStroke) {
    twoPath.noStroke()
  }

  return twoPath
}

export default Path
