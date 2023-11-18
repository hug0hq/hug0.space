import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useMove, useHover } from '@use-gesture/react'

const limitNumberWithinRange = (num, min, max) => {
	const MIN = min || 1
	const MAX = max || 20
	const parsed = parseInt(num)
	return Math.min(Math.max(parsed, MIN), MAX)
}

const Card = (props) => {
	const [mouseOut, setMouseOut] = useState(false)

	const [{ rotateX, rotateY, translateZ }, api] = useSpring(() => ({
		rotateX: 0,
		rotateY: 0,
		translateZ: 0,
		config: { mass: 4, tension: 250, friction: 40 },
	}))

	const bindMove = useMove(({ active, distance: [x, y], direction: [xd, yd] }) => {
		if (active) {
			api.start({
				rotateX: -limitNumberWithinRange((y * yd) / 2, -4, 4),
				rotateY: limitNumberWithinRange((x * xd) / 2, -4, 4),
			})
		} else {
			if (!mouseOut) api.stop()
		}
	})

	const bindHover = useHover(({ active }) => {
		if (active) {
			setMouseOut(false)
			api.start({
				translateZ: 50,
			})
		} else {
			setMouseOut(true)
			api.start({
				translateZ: 0,
				rotateX: 0,
				rotateY: 0,
			})
		}
	})

	return (
		<div className="card card-parent">
			<animated.div
				{...bindMove()}
				{...bindHover()}
				className="card--container "
				style={{
					transform: 'perspective(800px)',
					translateZ,
					rotateX,
					rotateY,
				}}
			>
				{props.children}
			</animated.div>
		</div>
	)
}

export default Card
