import * as React from 'react'
import { ScrollContext } from '../utils/scroll-observer';
import { Canvas } from '@react-three/fiber'
import { } from '@react-three/drei'
import gsap from 'gsap'
import { AnimatedBackground } from './misc/AnimatedBackground';
import { RoundedButton } from './misc/RoundedButton';

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
                className='min-h-screen flex flex-col items-center sticky top-0 -z-10 justify-center'
            >
                {/* See Whats New Pill */}               

                    <div className='h-[50px] w-[175px] relative    border-2 border-white rounded-sm bg-[#0A0708] mb-14'>
                        <h3 className='z-10 left-[32.5px] top-[7.5px] absolute text-black text-2xl '>Download</h3>
                        <RoundedButton style={{}} />
                    </div>
               
                <div className='xl:px-64 px-10 '>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center font-light"> Make Your Cold Calls in hand and generate leads with <span className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal'> leadistro </span> </h1>
                </div>
                <h6 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white"> An App For Marketing</h6>
                <div className='-z-20 absolute w-full h-full' style={{ transform: `translateY(-${progress * 20}vh)` }}>
                    <AnimatedBackground style={{}} />
                </div>
            </div>


        </>







    )
}

