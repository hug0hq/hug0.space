import React from 'react';

import { Pen } from './pen';

export const Pens = (props) => {

    return (
        <div className="pens">

            <Pen id="codepen-crain" color="#edda5b" linkColor="#fff"/*  src="./vid/b1.mp4" */ href="https://codepen.io/hug0Hq/pen/KKMVGQg"></Pen>
            <Pen id="codepen-2dgolf" color="#1d1d1b" linkColor="#fff"/*  src="./vid/b1.mp4" */ href="https://codepen.io/hug0Hq/pen/ExyyYNZ"></Pen>

            {/* <div className="thumbnail" style={{ backgroundColor: '#1d1d1b' }}>
                <a href="https://codepen.io/hug0Hq/pen/ExyyYNZ">
                    <video preload="auto" muted loop
                        onMouseOver={event => { event.target.play() }}
                        onMouseOut={event => { event.target.currentTime = 0; event.target.pause(); }}>
                        <source src="./vid/m2.webm" type="video/webm" />
                        <source src="./vid/b2.mp4" type='video/mp4;' />
                    </video>
                </a>
            </div> */}
            <Pen id="codepen-amsterdamtext" color="#282c34" linkColor="#fff"/*  src="./vid/b1.mp4" */ href="https://codepen.io/hug0Hq/pen/OJXXLyB"></Pen>

            {/*  <div className="thumbnail" style={{ backgroundColor: '#282c34' }}>
                <a href="https://codepen.io/hug0Hq/pen/OJXXLyB">
                    <video preload="auto" muted loop
                        onMouseOver={event => { event.target.play() }}
                        onMouseOut={event => { event.target.currentTime = 0; event.target.pause(); }}>
                        <source src="./vid/m3.webm" type="video/webm" />
                        <source src="./vid/b3.mp4" type='video/mp4;' />
                    </video>
                </a>
            </div> */}
            <Pen id="codepen-kawaiighost" color="#0cbab9"/*  src="./vid/b1.mp4" */ href="https://codepen.io/hug0Hq/pen/NEXgKa"></Pen>

            {/*  <div className="thumbnail" style={{ backgroundColor: '#0cbab9' }}>
                <a href="https://codepen.io/hug0Hq/pen/NEXgKa">
                    <video preload="auto" muted loop
                        onMouseOver={event => { event.target.play() }}
                        onMouseOut={event => { event.target.currentTime = 0; event.target.pause(); }}>
                        <source src="./vid/m4.webm" type="video/webm" />
                        <source src="./vid/b4.mp4" type='video/mp4;' />
                    </video>
                </a>
            </div> */}

            <Pen id="codepen-cookie" color="#f6f8ff"/*  src="./vid/b1.mp4" */ href="https://codepen.io/hug0Hq/pen/PozNeEQ"></Pen>

            {/* <div className="thumbnail" style={{ backgroundColor: '#f6f8ff' }}>
                <a href="https://codepen.io/hug0Hq/pen/PozNeEQ">
                    <video preload="auto" muted loop
                        onMouseOver={event => { event.target.play() }}
                        onMouseOut={event => { event.target.currentTime = 0; event.target.pause(); }}>
                        <source src="./vid/m5.webm" type="video/webm" />
                        <source src="./vid/b5.mp4" type='video/mp4;' />
                    </video>
                </a>
            </div> */}

            <Pen id="codepen-chick" color="#A9E2F3"/*  src="./vid/b1.mp4" */ href="https://codepen.io/hug0Hq/pen/ZEzPVLP"></Pen>

            {/* <div className="thumbnail" style={{ backgroundColor: '#A9E2F3' }}>
                <a href="https://codepen.io/hug0Hq/pen/ZEzPVLP">
                    <video preload="auto" muted loop
                        onMouseOver={event => { event.target.play() }}
                        onMouseOut={event => { event.target.currentTime = 0; event.target.pause(); }}>
                        <source src="./vid/m6.webm" type="video/webm" />
                        <source src="./vid/b6.mp4" type='video/mp4;' />
                    </video>
                </a>
            </div> */}
        </div>
    );
}