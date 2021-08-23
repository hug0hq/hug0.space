import React from 'react'

export const Social = (props) => {
  return (
    <div className="logoGroup">
      {/* <div>
                <a href="https://www.instagram.com/hug0hq" rel="noreferrer" >
                    <img width="25px" src="./logos/insta.svg" alt="Instagram logo"></img>
                </a>
            </div> */}
      <div>
        <a
          href="https://twitter.com/hug0hq"
          aria-label="My Twitter"
          rel="noreferrer"
        >
          <img width="25px" src="./logos/twitter.svg" alt="twitter logo"></img>
        </a>
      </div>
      <div>
        <a
          href="https://github.com/hug0hq"
          aria-label="My Github"
          rel="noreferrer"
        >
          <img width="25px" src="./logos/github.svg" alt="github logo"></img>
        </a>
      </div>
      <div>
        <a
          href="https://codepen.io/hug0hq"
          aria-label="My Codepen"
          rel="noreferrer"
        >
          <img width="25px" src="./logos/codepen.svg" alt="codepen logo"></img>
        </a>
      </div>
    </div>
  )
}
