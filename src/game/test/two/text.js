import Two from 'two.js'

const Text = (root, props) => {
  const {
    text = 'Text',
    x = 0,
    y = 0,
    size = 40,
    fill,
    weight,
    family = 'sans-serif',
    alignment = 'middle',
    baseline = 'middle',
  } = props
  const style = { size, fill, weight, family, alignment, baseline }
  // message, x, y, styles
  const pixiText = new Two.Text(text, x, y, style)

  // console.log('two text', pixiText, y)
  return pixiText
}

export default Text
