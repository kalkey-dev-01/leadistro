import { useInView } from 'framer-motion';
import * as React from 'react';
import { BufferGeometry } from 'three';
import { StyledCanvas } from './misc/Canvas';
import { RButton, RoundedButton } from './misc/RoundedButton';


interface FeatureProps {

}

export const Features: React.FC<FeatureProps> = ({ }) => {
    const ref = React.useRef<HTMLDivElement>(null)


    return (
        <>
            <div className='bg-white min-h-screen text-black flex  flex-col items-center '>
                <RoundedButton>
                    Features
                </RoundedButton>
                <div className="text-3xl md:text-6xl text-center">With all features</div>
                <div className="text-3xl md:text-6xl text-center">you need</div>
                {/* Cards */}
                
            




            </div>
        </>
    )
}