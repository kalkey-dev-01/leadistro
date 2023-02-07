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
            <div className='bg-white min-h-screen text-black flex  flex-col items-center  '>


                <AnimatedButton bgOffset='3' offset='12' className='text-2xl font-normal' text='Features' />

                <div className='container my-5'>
                    {/* Heading */}
                    <div className="text-4xl md:text-7xl text-center">With all features</div>
                    <div className="text-4xl md:text-7xl text-center">you need</div>
                    {/* Sub Heading */}
                    <h6 className="mt-5 text-sm font-medium md:text-base px-10 md:px-32 xl:text-lg text-center">Magna id imperdiet semper eu mauris turpis etiam suspendisse consequat. Molestie.</h6>

                </div>







            </div>
        </>
    )
}