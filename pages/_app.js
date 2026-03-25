import '../styles/globals.css'
import Head from 'next/head'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], weight: ['300','400','600','700'] })
const BRAND_LOGO_URL = 'https://storage.googleapis.com/bucket-sci-bud/bioimaging/artwork/scibud_logo_path_260325.svg'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href={BRAND_LOGO_URL} />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href={BRAND_LOGO_URL} />
        <meta property="og:image" content={BRAND_LOGO_URL} />
        <meta name="twitter:image" content={BRAND_LOGO_URL} />
      </Head>
      <main className={nunito.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
