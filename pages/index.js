import Head from 'next/head'
import Image from 'next/image'

/* import styles from '../styles/Home.module.css'
 */
// import App from '../src/App'
import dynamic from 'next/dynamic'

const App = dynamic(() => import('../src/App'), { ssr: false })

export default function Home() {

  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000"

  const data = {
    title: "hug0's home on the internet",
    description:
      'Creative developer doing interactive experiences, games and art. o_o',
    metaCard: baseURL+'/meta-card.png',
  }

  return (
    <div /* className={styles.container} */>
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

      <App></App>
    </div>
  )
}
