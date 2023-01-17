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



interface HeroProps {

}



const HeroSection: React.FC<{}> = ({ }) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const handleImageLoaded = React.useCallback(() => {
        setImageLoaded(true);
    }, [])
    const { x, y } = React.useContext(MouseContext)
    const { scrollY } = React.useContext(ScrollContext)
    // const { innerWidth } = React.useContext(SizeContext)

    const numX = 1.5 - (scrollY * 0.009)
    const numZ = 3 - (scrollY * 0.005)
    const lightZ = -7 + (scrollY * 0.05)
    const distort = 0.25 + (x * y)



    // console.log(x, 'x');
    // console.log(y, 'y');
    // console.log(distort);
    const ref = React.useRef<Mesh>(null)

    return (

        <div className="min-h-screen bg-black min-w-full flex flex-col-reverse items-center justify-center md:flex-row-reverse">
            <div className='object-cover absolute h-full min-w-full'>
                <Canvas shadows  >
                    <OrbitControls enableZoom={false} enableRotate={false} />
                    <ambientLight intensity={0.75} />
                    <directionalLight position={[-7.5, 3, lightZ]} intensity={2.5} />
                    <React.Suspense fallback={null}>
                        <Sphere ref={ref} visible args={[1.0, 500, 500]} scale={2} position={[numX >= -1.5 ? numX : -1.5, 0, numZ]}  >
                            <MeshDistortMaterial color='#212529' attach="material" speed={1.5} distort={distort} />
                        </Sphere>
                    </React.Suspense>
                </Canvas>
            </div>
            {/* Logo Animation */}
            <div className={`flex-grow-0 flex flex-col justify-center items-center py-5 px-3 pt-10 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 scale-90 translate-x-4'}`}>
                <Image onLoad={handleImageLoaded} src={require('../assets/frame.svg')} width={480 / 1.3} height={720 / 1.3} className='drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]' alt='phone' />
                <div className={`z-10 absolute items-center`} style={{height:'480px', width:'260px'}}>
                    <BackgroundPointsCanvas />
                </div>
                <div className="z-20 absolute text-2xl text-white bg-black rounded-2xl">
                    <Image src={require('../assets/Logoupdate.svg')} alt={'logo'} width={150} height={150} objectFit='contain' objectPosition={'center'} />
                    <h1 className='text-center font-semibold'>leadistro</h1>
                </div>
            </div>
            {/* Text */}
            <div className='z-10 flex-1 px-2 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] flex items-center justify-center flex-col text-center md:text-left '>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light"> Complete your market research using <span className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text'> leadistro </span> </h1>
                <h6 className="text-base md:text-lg lg:text-xl xl:text-2xl md:mr-40 my-10 font-normal "> An Application for lite research of your competitors organisation or cold email marketing by extracting information from company domains</h6>
            </div>
        </div>

    )
}

export default HeroSection



{/* Mobile Screen */ }
{/* <div className='flex flex-col justify-center items-center py-5 px-3'>
                    <Image src={require('../assets/frame.svg')} alt={'Leadistro Home'} width={360} height={640} objectPosition={'center'} objectFit={'contain'}

                    />
                    <div className=" z-10 absolute items-center">
                        <BackgroundPointsCanvas />
                    </div>
                    <div className="z-20 absolute text-3xl text-white bg-black rounded-2xl">
                        <Image src={require('../assets/Logoupdate.svg')}  alt={'logo'} width={200} height={200} objectFit='contain' objectPosition={'center'} />
                        <h1 className='text-center font-semibold'>leadistro</h1>
                    </div>
                </div> */}
