import '../styles/globals.css'
import type { AppProps } from 'next/app'

import SizeObserver from '../utils/size-observer'
import ScrollObserver from '../utils/scroll-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SizeObserver>
        <ScrollObserver>
       
            <Component {...pageProps} />
   
        </ScrollObserver>
      </SizeObserver>
    </>
  )
}

export default MyApp
