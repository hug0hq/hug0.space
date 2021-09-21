import { Pen } from '../components'

const Code = () => {
  const cards = [
    {
      color: '#edda5b',
      publicId: 'codepen-crain',
      href: 'https://codepen.io/hug0hq/pen/KKMVGQg',
    },
    {
      color: '#1d1d1b',
      publicId: 'codepen-2dgolf',
      href: 'https://codepen.io/hug0hq/pen/ExyyYNZ',
    },
    {
      color: '#282c34',
      publicId: 'codepen-amsterdamtext',
      href: 'https://codepen.io/hug0hq/pen/OJXXLyB',
    },
    {
      color: '#0cbab9',
      publicId: 'codepen-kawaiighost',
      href: 'https://codepen.io/hug0hq/pen/NEXgKa',
    },
    {
      color: '#f6f8ff',
      publicId: 'codepen-cookie',
      href: 'https://codepen.io/hug0hq/pen/PozNeEQ',
    },
    {
      color: '#A9E2F3',
      publicId: 'codepen-chick',
      href: 'https://codepen.io/hug0hq/pen/ZEzPVLP',
    },
  ]

  return (
    <section className="section section--bg-green">
      <div className="container">
        <header className="container--header">
          <h1 className="title container--title">Pens</h1>
          <h2 className="title container--subtitle">Cool code experiments</h2>
        </header>
        <div className="pens">
          {cards.map((card) => {
            return (
              <Pen
                key={card.publicId}
                id={card.publicId}
                color={card.color}
                linkColor="#fff"
                href={card.href}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Code
