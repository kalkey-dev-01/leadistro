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


                {/* Cards */}
                {/* <div ref={ref} className="flex flex-col md:flex-row w-full h-[120vh]  items-center md:h-[70vh] py-4 justify-evenly">
                    <Card image={require(`../assets/leadistro.svg`)} imgHeight={40} imgWidth={40} title={`logo`} description={`logo desc`} />
                    <Card image={require(`../assets/leadistro.svg`)} imgHeight={40} imgWidth={40} title={`logo`} description={`logo desc`} />
                    <Card image={require(`../assets/leadistro.svg`)} imgHeight={40} imgWidth={40} title={`logo`} description={`logo desc`} />
                </div> */}
                <Carousel>
                    <CarouselItem index={0}>
                        <ImageComponents imageLink='leadimg' Title='Leadistro' desc='Description' />
                    </CarouselItem>
                    <CarouselItem index={1}>
                        <ImageComponents imageLink='leadimg' Title='is' desc='Description' />
                    </CarouselItem>
                    <CarouselItem index={2} >
                        <ImageComponents imageLink='leadimg' Title='a' desc='Description' />
                    </CarouselItem>
                    <CarouselItem index={3}>
                        <ImageComponents imageLink='leadimg' Title='Marketing tool' desc='Description' />
                    </CarouselItem>
                </Carousel>





            </div>
        </>
    )
}