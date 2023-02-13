import Atropos from 'atropos/react';
import { useInView } from 'framer-motion';
import * as React from 'react';
import { BufferGeometry } from 'three';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import AnimatedButton from './misc/AnimatedButton';
import ParallaxFollowerButton from './misc/AnimatedButton';
import { StyledCanvas } from './misc/Canvas';
import { Card } from './misc/Card';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { ImageComponents } from './misc/ImageComponents';
gsap.registerPlugin(ScrollTrigger)



interface FeatureProps {

}

export const Features: React.FC<FeatureProps> = ({ }) => {
    // const ref = React.useRef<HTMLDivElement>(null)

    // React.useEffect(() => {
    //     const el = ref.current
    //     gsap.fromTo(el, { translateX: -1000, }, {
    //         translateX: 0, duration: 1, scrollTrigger: {
    //             trigger: el,

    //         }
    //     })
    // }, [])




    return (
        <>
            <div className='bg-white min-h-screen text-black flex py-2 flex-col items-center  '>

            







            </div>
        </>
    )
}