import '../styles/globals.css'
import type { AppProps } from 'next/app'

import SizeObserver from '../utils/size-observer'
import ScrollObserver from '../utils/scroll-observer'
import MouseObserver from '../utils/mouse-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (    
    <>
      <MouseObserver>
        <SizeObserver>
          <ScrollObserver>
            <Component {...pageProps} />
          </ScrollObserver>
        </SizeObserver>
      </MouseObserver>
    </>
  )
}

export default MyApp
