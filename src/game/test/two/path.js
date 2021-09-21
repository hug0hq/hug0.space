import Two from 'two.js'

const Path = (root, props) => {
  const {
    vertices,
    x = 0,
    y = 0,
    width = 10,
    height = 10,
    fill = '#fff',
    stroke = '#000',
    noStroke = false,
  } = props

  //vertices, closed, curved, manual

  const pixiPath = new Two.Path(vertices)

  pixiPath.fill = fill
  pixiPath.stroke = stroke

  if (noStroke) {
    pixiPath.noStroke()
  }

  return pixiPath
}

export default Path
