import * as React from 'react'

import AnimatedSphere from './misc/AnimatedBackground';

import Image from 'next/image';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

import { ScrollContext } from '../utils/scroll-observer';
import { MouseContext } from '../utils/mouse-observer';
import { SizeContext } from '../utils/size-observer'
import { Mesh } from 'three';
import { BackgroundPointsCanvas } from './misc/backgroundPoints';
import Atropos from 'atropos/react';



interface HeroProps {

}



const HeroSection: React.FC<{}> = ({ }) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const handleImageLoaded = React.useCallback(() => {
        setImageLoaded(true);
    }, [])
    const { x, y } = React.useContext(MouseContext)
    const { scrollY } = React.useContext(ScrollContext)
    const { innerWidth } = React.useContext(SizeContext)

    const numX = 1.5 - (scrollY * 0.001)
    const numZ = innerWidth <= 480 ? (2 + scrollY * 0.001) : (3 - scrollY * 0.003)
    const numY = (scrollY * 0.002) >= 0.475 ? -3.5 : 3.2 - (scrollY * 0.025)
    const lightZ = 10 + (scrollY * 0.05)
    const lightX = ((-x * 2) - .5) - (scrollY * 0.009)
    const lightY = 3 - (y * scrollY * 0.01)
    const distort = 0.2
    // const zoomMag = 100 + (scrollY * 0.5)



    // console.log(x, 'x');
    // console.log(y, 'y');
    // console.log(numY, 'y');
    console.log(numZ, 'z');
    const ref = React.useRef<Mesh>(null)


    return (
        <div className="min-h-screen bg-black min-w-full flex flex-col items-center py-2 justify-center text-center">
            {/* Background Animation */}
            <div className='object-cover absolute w-full h-screen' >
                <Canvas shadows   >
                    <OrbitControls enableZoom={false} enableRotate={false} />
                    <ambientLight intensity={0.75} />
                    <directionalLight position={[lightX, lightY, lightZ]} intensity={2.5} />
                    <React.Suspense fallback={null}>
                        <Sphere ref={ref} visible args={[1.0, 500, 500]}
                            scale={innerWidth < 640 ? 1.5 : 2}
                            position={[0, numY, numZ]}
                        //  position={[numX >= -1.5 ? numX : -1.5, 0, numZ]}
                        >
                            <MeshDistortMaterial color='#212529' attach="material" speed={1.5} distort={distort} />
                        </Sphere>
                    </React.Suspense>
                </Canvas>
            </div>
            <div className='z-10   text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] flex items-center justify-center flex-col   '>
                {/* Title && Subtitle */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">Revolutionize Your Email Marketing with <span className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text'> leadistro </span> </h1>
                <h6 className="text-base md:text-lg lg:text-xl xl:text-2xl my-10 font-normal "> Unlock the full potential of your campaigns with our powerful market researcher app</h6>
                {/* Button */}
                <Atropos className='atropos'>
                    <button data-atropos-offset={5}>
                        <div data-atropos-offset={12} className='flex flex-row bg-black text-white border-white border-[1.75px] px-4 py-2 rounded-full items-center space-x-2 justify-between' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <div  > Download </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </button>
                </Atropos>
            </div>



        </div >

    )
}

export default HeroSection



{/* Mobile Screen */ }
{/* <div className={` flex flex-col justify-center items-center   transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 scale-90 translate-x-4'}`}>
                <Image onLoad={handleImageLoaded} src={require('../assets/frame.svg')} width={480 / 1.3} height={720 / 1.3} className='absolute drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]' alt='phone' />
                <div className={`z-10 object-cover absolute h-80 md:h-[360px] px-1`}>
                    <BackgroundPointsCanvas />
                </div>
                <div className="z-20 absolute pt-2 ">
                    <Image src={require('../assets/LeadistroNativeLogo.svg')} alt={'logo'} width={150} height={150} objectFit='contain' objectPosition={'center'} />
                </div>
            </div> */}