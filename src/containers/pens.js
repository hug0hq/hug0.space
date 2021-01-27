import React from 'react';

import { Pen } from '../components';

export const Pens = (props) => {
    return (
        <div className="pens">
            <Pen id="codepen-crain" color="#edda5b" linkColor="#fff" href="https://codepen.io/hug0Hq/pen/KKMVGQg" />
            <Pen id="codepen-2dgolf" color="#1d1d1b" linkColor="#fff" href="https://codepen.io/hug0Hq/pen/ExyyYNZ" />
            <Pen id="codepen-amsterdamtext" color="#282c34" linkColor="#fff" href="https://codepen.io/hug0Hq/pen/OJXXLyB" />
            <Pen id="codepen-kawaiighost" color="#0cbab9" href="https://codepen.io/hug0Hq/pen/NEXgKa" />
            <Pen id="codepen-cookie" color="#f6f8ff" href="https://codepen.io/hug0Hq/pen/PozNeEQ" />
            <Pen id="codepen-chick" color="#A9E2F3" href="https://codepen.io/hug0Hq/pen/ZEzPVLP" />
        </div>
    );
}