import { useEffect, useState, useMemo, useContext, useRef, useLayoutEffect, useCallback } from 'react'
import { EngineContext, usePhysics } from './context'
import { useRender, useApp } from '../two'
import Matter from 'matter-js'

const useBody = (type, args) => {
	const ref = useRef()
	const bodyref = useRef()
	const physics = usePhysics()

	useRender(() => {
		if (ref.current.position.x != bodyref.current.position.x || ref.current.position.y != bodyref.current.position.y)
			ref.current.position.set(bodyref.current.position.x, bodyref.current.position.y)
		if (ref.current.rotation != bodyref.current.angle) ref.current.rotation = bodyref.current.angle
	})

	useLayoutEffect(() => {
		const object = ref.current

		if (type == 'circle') {
			bodyref.current = Matter.Bodies.circle(object.position.x, object.position.y, args.radius || object.width / 2, args.options)
			return
		}

		bodyref.current = Matter.Bodies.rectangle(
			object.position.x,
			object.position.y,
			args.width || object.width,
			args.height || object.height,
			args.options
		)
	}, [])

	useLayoutEffect(() => {
		Matter.Composite.add(physics.world, bodyref.current)

		return () => {
			Matter.Composite.remove(physics.world, bodyref.current)
		}
	}, [])

	const setPosition = useCallback((x, y) => {
		if (bodyref.current.position.x != x || bodyref.current.position.y != y) {
			Matter.Body.setPosition(bodyref.current, { x: x, y: y })
		}
	}, [])

	const setRotation = useCallback((angle) => {
		Matter.Body.setAngle(bodyref.current, angle)
	}, [])

	const setRecSize = useCallback((width, height) => {
		if (type == 'circle') return

		Matter.Body.setVertices(bodyref.current, [
			{ x: -width / 2, y: height / 2 },
			{ x: width / 2, y: height / 2 },
			{ x: width / 2, y: -height / 2 },
			{ x: -width / 2, y: -height / 2 },
		])
	})

	const setVelocity = useCallback((velocity) => {
		Matter.Body.setVelocity(bodyref.current, {
			x: velocity,
			y: velocity,
		})
	})

	const applyForce = useCallback((force, vector) => {
		const deltaVector = Matter.Vector.sub(vector, bodyref.current.position)
		const normalizedDelta = Matter.Vector.normalise(deltaVector)
		const forceVector = Matter.Vector.mult(normalizedDelta, force)
		const op = Matter.Vector.neg(forceVector)

		Matter.Body.applyForce(bodyref.current, bodyref.current.position, op)
	}, [])

	const isMoving = useCallback(() => {
		return bodyref.current.speed > 0.5 ? true : false
	}, [])

	return [ref, { setPosition, setVelocity, setRotation, applyForce, isMoving, setRecSize }]
}

export const useBox = (args) => {
	return useBody('rectangle', args)
}

export const useCircle = (args) => {
	return useBody('circle', args)
}

export const Physics = (props) => {
	const [physics] = useState(Matter.Engine.create({ ...props }))
	const app = useApp()
	const engineProviderValue = useMemo(() => physics, [physics])

	useEffect(() => {
		return () => {
			Matter.Engine.clear(physics)
		}
	}, [])

	useRender((frame) => {
		Matter.Engine.update(physics, (1 / 3 / 60) * 1000) // (1000 / 60)

		// avoid tunneling

		physics.world.bodies.forEach((body) => {
			body.vertices.forEach((vertice) => {
				const velocity = Matter.Vector.neg(vertice.body.velocity)
				if (vertice.x > app.width) {
					Matter.Body.setPosition(vertice.body, {
						x: app.width - (vertice.x - vertice.body.positionPrev.x),
						y: vertice.body.position.y,
					})
					Matter.Body.setVelocity(vertice.body, {
						x: velocity.x,
						y: vertice.body.velocity.y,
					})
				}

				if (vertice.x < 0) {
					Matter.Body.setPosition(vertice.body, {
						x: 0 - (vertice.x - vertice.body.positionPrev.x),
						y: vertice.body.position.y,
					})
					Matter.Body.setVelocity(vertice.body, {
						x: velocity.x,
						y: vertice.body.velocity.y,
					})
				}
				if (vertice.y > app.height) {
					Matter.Body.setPosition(vertice.body, {
						x: vertice.body.position.x,
						y: app.height - (vertice.y - vertice.body.positionPrev.y),
					})
					Matter.Body.setVelocity(vertice.body, {
						x: vertice.body.velocity.x,
						y: velocity.y,
					})
				}
				if (vertice.y < 0) {
					Matter.Body.setPosition(vertice.body, {
						x: vertice.body.position.x,
						y: 0 - (vertice.y - vertice.body.positionPrev.y),
					})
					Matter.Body.setVelocity(vertice.body, {
						x: vertice.body.velocity.x,
						y: velocity.y,
					})
				}
			})
		})
	})

	return <EngineContext.Provider value={engineProviderValue}>{props.children}</EngineContext.Provider>
}
