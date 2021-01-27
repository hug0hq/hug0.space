import React from 'react';

export const Social = (props) => {
    return (
        <div className="logoGroup">
            <div>
                <a href="https://www.instagram.com/hug0hq" rel="noreferrer" >
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
    );
}
