// import Image from 'next/image'
import { ArtCard } from '../components'

const Art = () => {
  const cards = [
    {
      publicId: 'ga-sqrgradient1',
      alt: 'sqr gradient 1',
      href: 'https://editor.p5js.org/hug0/sketches/qSd-4t2Wt',
    },
    {
      publicId: 'ga-sunset',
      alt: 'sunset',
      href: 'https://editor.p5js.org/hug0/sketches/acMx6vOG4',
      video: true,
    },
    {
      publicId: 'ga-treechristmas',
      alt: 'tree christmas',
      href: 'https://editor.p5js.org/hug0/sketches/D7RH0Hm9y',
    },
    {
      publicId: 'ga-randomdotgrid',
      alt: 'dots random grid',
      href: 'https://editor.p5js.org/hug0/sketches/7b-Me5PCa',
    },
    {
      publicId: 'ga-circleshadow',
      alt: 'circle shadow',
      href: 'https://editor.p5js.org/hug0/sketches/cxPnkj95Q',
    },
    {
      publicId: 'ga-circlesgrid',
      alt: 'dots 1 grid',
      href: 'https://editor.p5js.org/hug0/sketches/PUTOVojk1',
    },
    {
      publicId: 'ga-coloredcirclesgrid',
      alt: 'dots 2 grid',
      href: 'https://editor.p5js.org/hug0/sketches/n3X0ZXdxk',
    },
    {
      publicId: 'ga-blackpen',
      alt: 'random lines',
      href: 'https://editor.p5js.org/hug0/sketches/URwNbuFhB',
    },
    {
      publicId: 'ga-squaregridrotation',
      alt: 'sqr 2 grid',
      href: 'https://editor.p5js.org/hug0/sketches/3E6uv8tyD',
    },
    {
      publicId: 'ga-squaregrid',
      alt: 'sqr 1 grid',
      href: 'https://editor.p5js.org/hug0/sketches/V7SOXVkpw',
    },
    {
      publicId: 'ga-43',
      alt: '4:3',
      href: 'https://editor.p5js.org/hug0/sketches/P4vg5KCxF',
      aspectRatio: '4:3',
    },
  ]

  return (
    <section className="section section--bg-white">
      <div className="container">
        <header className="container--header">
          <h1 className="title container--title">Generative Art</h1>
          <h2 className="title container--subtitle">It's code and art</h2>
        </header>
        <div className="container--body p5js">
          {cards.map((card) => {
            return (
              <ArtCard
                linkColor="#000"
                key={card.publicId}
                publicId={card.publicId}
                video={card.video}
                alt={card.alt}
                href={card.href}
                aspectRatio={card.aspectRatio}
              />
            )
          })}

          <div className="dummy card"></div>
        </div>
      </div>
    </section>
  )
}

export default Art
