import Group from './two/group'
import Text from './two/text'
import Ellipse from './two/ellipse'
import RoundedRectangle from './two/roundedrectangle'
import Path from './two/path'

export const createElement = (type, props = {}, root = null) => {
  const COMPONENTS = {
    Group: /* () => */ Group,
    Text: /* () => */ Text,
    Ellipse: /* () => */ Ellipse,
    RoundedRectangle: /* () => */ RoundedRectangle,
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

  return COMPONENTS['Group'](
    root,
    props,
  ) /* COMPONENTS[type](root, props) || COMPONENTS.default */
}

export const applyNodeProps = (instance, oldProps, newProps) => {
  const newPropKeys = Object.keys(newProps || {})
  // hard overwrite all props? can speed up performance

  if (newProps !== oldProps) {
    for (let i = 0; i < newPropKeys.length; i++) {
      const p = newPropKeys[i]
      if (oldProps[p] !== newProps[p]) {
        //changed = true
        //setValue(instance, p, newProps[p])
        //console.log(p, newProps[p])

        if (p != 'children') {
          console.log(p, newProps[p])
          instance[p] = newProps[p]
        }
      }
    }
  } else {
    console.error('same props')
  }
}
