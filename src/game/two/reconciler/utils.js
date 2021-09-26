import Group from '../components/group'
import Text from '../components/text'
import Ellipse from '../components/ellipse'
import RoundedRectangle from '../components/roundedrectangle'
import Rectangle from '../components/rectangle'
import Path from '../components/path'

export const createElement = (type, props = {}, root = null) => {
  const COMPONENTS = {
    Group: Group,
    Text: Text,
    Ellipse: Ellipse,
    RoundedRectangle: RoundedRectangle,
    Rectangle: Rectangle,
    Path: Path,
    default: undefined,
  }

  try {
    return COMPONENTS[type](root, props)
  } catch (e) {
    console.error(
      `react-two has no node with the type '${type}'. Group will be used instead.`,
    )
  }

  return COMPONENTS['Group'](root, props)
}

export const applyNodeProps = (instance, oldProps, newProps) => {
  const newPropKeys = Object.keys(newProps || {})

  // hard overwrite
  if (newProps !== oldProps) {
    for (let i = 0; i < newPropKeys.length; i++) {
      const p = newPropKeys[i]
      if (oldProps[p] !== newProps[p]) {
        if (p != 'children') {
          instance[p] = newProps[p]
        }
      }
    }
  }
}
