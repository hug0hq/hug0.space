import { ArtCard } from '../components'

export const Art = () => {
  const cards = [
    {
      color: '#fff',
      publicId: 'go-wind',
      alt: 'green wind',
      tags: ['three.js', 'glsl'],
      href: 'https://codesandbox.io/s/ejfkx',
      video: true,
    },
    {
      color: '#ffb14e',
      publicId: 'go-sqrgradient1',
      alt: 'sqr gradient 1',
      tags: ['p5.js', 'glsl'],
      href: 'https://editor.p5js.org/hug0/sketches/qSd-4t2Wt',
    },
    {
      color: '#fff',
      publicId: 'ga-sunset',
      alt: 'sunset',
      tags: ['p5.js'],
      href: 'https://editor.p5js.org/hug0/sketches/acMx6vOG4',
      video: true,
    },
    {
      color: '#0f0f0f',
      publicId: 'ga-treechristmas',
      alt: 'tree christmas',
      tags: ['p5.js'],
      href: 'https://editor.p5js.org/hug0/sketches/D7RH0Hm9y',
    },
    {
      color: '#fff',
      publicId: 'ga-randomdotgrid_zkc71d',
      alt: 'dots random grid',
      tags: ['p5.js'],
      href: 'https://editor.p5js.org/hug0/sketches/7b-Me5PCa',
    },
    {
      color: '#fff',
      publicId: 'ga-circleshadow',
      alt: 'circle shadow',
      tags: ['p5.js'],
      href: 'https://editor.p5js.org/hug0/sketches/cxPnkj95Q',
    },
    {
      color: '#fff',
      publicId: 'ga-circlesgrid',
      alt: 'dots 1 grid',
      tags: ['p5.js'],
      href: 'https://editor.p5js.org/hug0/sketches/PUTOVojk1',
    },
    {
      color: '#fff',
      publicId: 'ga-coloredcirclesgrid',
      alt: 'dots 2 grid',
      tags: ['p5.js'],
      href: 'https://editor.p5js.org/hug0/sketches/n3X0ZXdxk',
    },
    {
      color: '#fff',
      publicId: 'ga-blackpen',
      alt: 'random lines',
      tags: ['p5.js'],
      href: 'https://editor.p5js.org/hug0/sketches/URwNbuFhB',
    },
    {
      color: '#fff',
      publicId: 'ga-squaregridrotation',
      alt: 'sqr 2 grid',
      tags: ['p5.js'],
      href: 'https://editor.p5js.org/hug0/sketches/3E6uv8tyD',
    },
    {
      color: '#fff',
      publicId: 'ga-squaregrid',
      alt: 'sqr 1 grid',
      tags: ['p5.js'],
      href: 'https://editor.p5js.org/hug0/sketches/V7SOXVkpw',
    },
    {
      color: '#ffff00',
      publicId: 'ga-43',
      alt: '4:3',
      tags: ['p5.js'],
      href: 'https://editor.p5js.org/hug0/sketches/P4vg5KCxF',
      aspectRatio: '4:3',
    },
  ]

  return (
    <section className='section section--bg-white'>
      <div className='container'>
        <header className='container--header'>
          <h1 className='title container--title'>Generative Art</h1>
          <h2 className='title container--subtitle'>It&apos;s code and art</h2>
        </header>
        <div className='container--body p5js'>
          {cards.map((card) => {
            return <ArtCard key={card.publicId} {...card} />
          })}

          {/* <div className="dummy card"></div> */}
        </div>
      </div>
    </section>
  )
}
