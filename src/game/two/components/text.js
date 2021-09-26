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

  const twoText = new Two.Text(text, x, y, style)

  return twoText
}

export default Text
