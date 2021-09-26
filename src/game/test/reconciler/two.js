import Group from '../two/group'
import Text from '../two/text'
import Ellipse from '../two/ellipse'
import RoundedRectangle from '../two/roundedrectangle'
import Rectangle from '../two/rectangle'
import Path from '../two/path'

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
