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




interface FeatureProps {

}

export const Features: React.FC<FeatureProps> = ({ }) => {
    const ref = React.useRef<HTMLDivElement>(null)

    const ButtonWithArtopos = () => {
        return <Atropos
            // activeOffset={40}
            // shadowScale={1.05}            
            // onEnter={() => console.log('Enter')}
            // onLeave={() => console.log('Leave')}
            // onRotate={(x, y) => console.log('Rotate', x, y)}
            className='atropos'>
            <div data-atropos-offset="10"  className='cursor-pointer  px-4 py-1.5 rounded-full border-black border-[1.5px]'>
                <h3 data-atropos-offset="7.5"  className='text-3xl'>Features</h3>
            </div>
        </Atropos>
    }



    return (
        <>
            <div className='bg-white min-h-screen text-black flex  flex-col items-center py-5 '>
           
                <AnimatedButton bgOffset='2.5' offset='7.5' className='text-2xl font-semibold' text='Features' />

                <div className='container my-5'>
                    {/* Heading */}
                    <div className="text-4xl md:text-7xl text-center">With all features</div>
                    <div className="text-4xl md:text-7xl text-center">you need</div>
                    {/* Sub Heading */}
                    <h6 className="mt-5 text-sm font-medium md:text-base px-10 md:px-32 xl:text-lg text-center">Magna id imperdiet semper eu mauris turpis etiam suspendisse consequat. Molestie.</h6>
                </div>



                {/* Cards */}
                <div className="flex flex-col md:flex-row w-full h-[120vh]  items-center md:h-[70vh] py-4 justify-evenly">
                    <Card image={require(`../assets/leadistro.svg`)} imgHeight={40} imgWidth={40} title={`logo`} description={`logo desc`} />
                    <Card image={require(`../assets/leadistro.svg`)} imgHeight={40} imgWidth={40} title={`logo`} description={`logo desc`} />
                    <Card image={require(`../assets/leadistro.svg`)} imgHeight={40} imgWidth={40} title={`logo`} description={`logo desc`} />
                </div>
                {/* <Carousel>
                    <CarouselItem index={0}>
                        <OnboardingComp1 />
                    </CarouselItem>
                    <CarouselItem index={1}>
                        <OnboardingComp2 />
                    </CarouselItem>
                    <CarouselItem index={2}>
                        <OnboardingComp3 />
                    </CarouselItem>
                    <CarouselItem index={3}>
                        <OnboardingComp4 />
                    </CarouselItem>
                </Carousel> */}





            </div>
        </>
    )
}