import * as React from 'react'
import { ScrollContext } from '../utils/scroll-observer';
import { Canvas } from '@react-three/fiber'
import { } from '@react-three/drei'
import gsap from 'gsap'
import { AnimatedBackground } from './misc/AnimatedBackground';
import { RoundedButton } from './misc/AnimatedButton';
import Image from 'next/image';
import { motion } from 'framer-motion'

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
            className='min-h-screen flex flex-col items-center sticky top-0 -z-10 justify-center py-4'
        >
            <div className='object-cover absolute w-full h-full' >
                <AnimatedBackground />
            </div>

            <motion.div transition={{ delay: 1.15, type: 'tween' }} initial={{ scale: 0 }} animate={{ scale: 1.5 }} exit={{ scale: 0 }} className={`flex-grow-0 pt-10 z-10 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
                <Image src={require('../assets/leadistroLogo.svg')} width={60} height={50} alt='leadistro' onLoad={handleImageLoaded} />
            </motion.div>

            <motion.div transition={{ delay: 1.35, type: 'spring', stiffness: 25 }} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className='z-10 flex-1 flex items-center justify-center flex-col'>
                <div className='xl:px-64 px-10'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center font-light"> Complete your market research using <span className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text'> leadistro </span> </h1>
                </div>
                <h6 className="text-base md:text-lg lg:text-xl xl:text-2xl text-center my-10 font-normal md:px-40 px-10 text-white"> An Application for lite research of your competitors organisation or cold email marketing by extracting information from company domains</h6>
            </motion.div>
            <motion.div transition={{ delay: 1.5, type: 'tween' }} initial={{ scale: 0 }} animate={{ scale: 1.25 }} exit={{ scale: 0 }} className={`flex-grow-0 md:pb-16 pb-20 transition-all duration-1000 z-20 ${imageLoaded ? 'opacity-100' : 'opacity-50 -translate-y-10 '}`}>
                <Image src={require('../assets/downArrow.svg')} width={40} height={40} alt='scroll-down' onLoad={handleImageLoaded} />
            </motion.div>
        </div>
    )
}

