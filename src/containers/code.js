import { Pen } from '../components'

export const Code = () => {
  const cards = [
    {
      color: '#170b3d',
      publicId: 'go_planet',
      tags: ['three.js', 'glsl'],
      href: 'https://codesandbox.io/s/q9v81',
    },
    {
      color: '#202a36',
      publicId: 'go_lemon',
      tags: ['three.js', 'cannon.js'],
      href: 'https://codesandbox.io/s/jpsrs',
    },
    {
      color: '#edda5b',
      publicId: 'codepen-crain',
      tags: ['three.js', 'cannon.js'],
      href: 'https://codepen.io/hug0hq/pen/KKMVGQg',
    },
    {
      color: '#1d1d1b',
      publicId: 'codepen-2dgolf',
      tags: ['two.js', 'matter.js'],
      href: 'https://codepen.io/hug0hq/pen/ExyyYNZ',
    },
    {
      color: '#282c34',
      tags: ['react.js'],
      publicId: 'codepen-amsterdamtext',
      href: 'https://codepen.io/hug0hq/pen/OJXXLyB',
    },
    {
      color: '#0cbab9',
      tags: ['css'],
      publicId: 'codepen-kawaiighost',
      href: 'https://codepen.io/hug0hq/pen/NEXgKa',
    },
    {
      color: '#f6f8ff',
      tags: ['gsap.js'],
      publicId: 'codepen-cookie',
      href: 'https://codepen.io/hug0hq/pen/PozNeEQ',
    },
    {
      color: '#A9E2F3',
      tags: ['zdog.js'],
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
            return <Pen key={card.publicId} {...card} />
          })}
        </div>
      </div>
    </section>
  )
}
