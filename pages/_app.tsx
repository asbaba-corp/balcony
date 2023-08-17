import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.API_BASE_URL, process.env.NEXT_PUBLIC_API_BASE_URL)

  return <Component {...pageProps} />
}

export default MyApp
