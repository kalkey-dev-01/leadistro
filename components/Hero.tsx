import * as React from 'react'
import { ScrollContext } from '../utils/scroll-observer';

import gsap from 'gsap'

interface HeroProps {

}

export const Hero: React.FC<HeroProps> = ({ }) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const handleImageLoaded = React.useCallback(() => {
        setImageLoaded(true);
    }, [])
    const refContainer = React.useRef<HTMLDivElement>(null);
    const { scrollY } = React.useContext(ScrollContext);
    let progress = 0;
    const { current: elContainer } = refContainer;
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight);
    }


    // TODO !! - Complete HeroSection Perfectly 

    return (
      
            <div ref={refContainer}
                style={{
                    transform: `translateY(-${progress * 20}vh)`
                }}
                className='min-h-screen flex flex-col items-center sticky top-0 -z-10 justify-center '
            >           
                <div className='text-9xl text-white'>
                    leadistro
                </div>
            </div>
     
    )
} 