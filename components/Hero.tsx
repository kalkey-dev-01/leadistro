import * as React from 'react'
import { ScrollContext } from '../utils/scroll-observer';
import { Canvas } from '@react-three/fiber'
import { } from '@react-three/drei'
import gsap from 'gsap'
import { AnimatedBackground } from './misc/AnimatedBackground';

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
        <>
            <div ref={refContainer}
                style={{
                    transform: `translateY(-${progress * 20}vh)`
                }}
                className='min-h-screen flex flex-col items-center sticky top-0 -z-10 justify-center  '
            >
                <div className="text-4xl md:text-5xl lg:text-7xl xl:text-9xl text-white "> leadistro </div>
                <div className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-white "> An App For Marketing</div>
                <AnimatedBackground style={{ width: '100%', height: '720px', minHeight: '100%', position: 'absolute', zIndex: -20, transform: `translateY(-${progress * 20}vh)` }}  />

            </div>


        </>







    )
}

// <div ref={refContainer}
//     style={{
//         transform: `translateY(-${progress * 20}vh)`
//     }}
//     className='min-h-screen flex flex-col items-center sticky top-0 -z-10 justify-center '
// >
//     <div className='text-9xl text-white'>
//         leadistro
//     </div>
// </div>