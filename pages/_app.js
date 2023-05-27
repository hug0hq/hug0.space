import '../styles/globals.css'
import '../styles/styles.css'

import '../styles/styles.scss'

import { useEffect } from 'react'
import ReactGA from 'react-ga4'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA_KEY)
      // ReactGA.pageview(window.location.pathname)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
