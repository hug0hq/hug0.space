const Games = () => {
  return (
    <section className="section section--bg-dark">
      <div className="container">
        <header className="container--header">
          <h1 className="title container--title">Games</h1>
        </header>
        <div className="container--body gamelist">
          <div className="game">
            {/* <div className="sname"> */}
            <img className="game--img" src="./img/steve.svg" alt="game logo" />
            {/* </div> */}
            <h2 className="game--title">Steve Vrum! Vrum!</h2>
            {/* <p className="t4"> */}
            <span className="text game--text">
              Available for Android on{' '}
              <a
                href="https://play.google.com/store/apps/details?id=com.h0.SteveVrumVrum"
                target="_blank"
                rel="noreferrer"
              >
                Google Play
              </a>
            </span>
            {/* </h3> */}
          </div>
          <div className="game">
            {/* <div > */}
            <img className="game--img" src="./img/jim.svg" alt="game logo" />
            {/* </div> */}
            <h2 className="game--title">Sr. Jim!</h2>
            <span className="text game--text">
              Available for Android on{' '}
              <a
                href="https://play.google.com/store/apps/details?id=com.h0.SrJim"
                target="_blank"
                rel="noreferrer"
              >
                Google Play
              </a>{' '}
              and for the web on{' '}
              <a
                href="https://gamejolt.com/games/sr-jim/38705"
                target="_blank"
                rel="noreferrer"
              >
                Game Jolt
              </a>
              {/*  </h3> */}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Games
