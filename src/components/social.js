import React from 'react';
/* import { useSpring, animated } from 'react-spring'; */

//const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
//const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
//const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

/* const Logo = (props) => {
    const p = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    })
    return (
        <animated.img style={p} width="25px" src={props.src} alt={props.alt}></animated.img>
    )
}
 */
export const Social = (props) => {

    return (
        <div className="logoGroup">
            <div>
                <a href="https://www.instagram.com/hug0hq"rel="noreferrer" >
                    {/* <Logo src="./logos/insta.svg" alt="Instagram"></Logo> */}
                    <img width="25px" src="./logos/insta.svg" alt="Instagram logo"></img>
                </a>
            </div>
            <div>
                <a href="https://twitter.com/hug0Hq" rel="noreferrer"> 
                    <img width="25px" src="./logos/twitter.svg" alt="Twitter logo"></img>
                </a>
            </div>
            <div>
                <a href="https://github.com/hug0Hq" rel="noreferrer">
                    <img width="25px" src="./logos/github.svg" alt="Github logo"></img>
                </a>
            </div>
            <div>
                <a href="https://codepen.io/hug0Hq" rel="noreferrer">
                    <img width="25px" src="./logos/codepen.svg" alt="Codepen logo"></img>
                </a>
            </div>
        </div>
        /*  <animated.div
             className="card"
             onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
             onMouseLeave={() => set({ xys: [0, 0, 1] })}
             style={{ transform: p.xys.interpolate(trans) }}
         >
             {props.children}
         </animated.div> */

    );
}

