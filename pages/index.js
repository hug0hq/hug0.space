import Head from 'next/head'
import { Header, About, Games, Code, Art, Footer } from '../src/containers'

export default function Home() {
  const baseURL = process.env.DOMAIN
    ? `https://${process.env.DOMAIN}`
    : 'http://localhost:3000'

  const data = {
    title: "hug0's home on the internet",
    description:
      'Creative developer doing interactive experiences, games and art. o_o',
    metaCard: baseURL + '/meta-card.png',
  }

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={baseURL} />

        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={data.metaCard} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={data.title} />
        <meta property="twitter:description" content={data.description} />
        <meta property="twitter:image" content={data.metaCard} />
      </Head>

      <Header />
      <main>
        <About />
        <Games />
        <Code />
        <Art />
      </main>
      <Footer />
    </div>
  )
}
