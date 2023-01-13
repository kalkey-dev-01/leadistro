import * as React from 'react'

import AnimatedSphere, { AnimatedBackground } from './misc/AnimatedBackground';

import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { Vector3 } from 'three/src/Three';



interface HeroProps {

}


const HeroSection: React.FC<{}> = ({ }) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const handleImageLoaded = React.useCallback(() => {
        setImageLoaded(true);
    }, [])
    // const refContainer = React.useRef<HTMLDivElement>(null);
    // const { scrollY } = React.useContext(ScrollContext);
    // let progress = 0;
    // const { current: elContainer } = refContainer;
    // if (elContainer) {
    //     progress = Math.min(1, scrollY / elContainer.clientHeight);
    // }
    return (

        <div

            className="min-h-screen bg-black min-w-full flex flex-col-reverse items-center justify-center md:flex-row-reverse">
            <div className='object-cover absolute w-full h-full'>
                <Canvas orthographic >
                    <ambientLight intensity={0.75} />
                    <directionalLight position={new Vector3(-8.5, 3, -10)} intensity={1.5} />
                    <React.Suspense fallback={<h1 className='Something went wrong'></h1>} >
                        <AnimatedSphere />
                    </React.Suspense>
                </Canvas>
            </div>
            {/* Logo Animation */}
            <div className={`flex-grow-0 pt-10 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 scale-90 translate-x-4'}`}>
                <Image onLoad={handleImageLoaded} src={require('../assets/Logoupdate.svg')} className='max-w-sm max-h-96 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]' alt='logo' />
            </div>
            {/* Text */}
            <div className='z-10 flex-1 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] flex items-center justify-center flex-col text-center md:text-left '>
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
