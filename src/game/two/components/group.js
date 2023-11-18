import Two from 'two.js'

const Group = (root, props) => {
	const { x = 0, y = 0, rotation = 0 } = props

	const twoGroup = new Two.Group()

	twoGroup.translation.set(x, y)
	twoGroup.rotation = rotation

	return twoGroup
}

export default Group
