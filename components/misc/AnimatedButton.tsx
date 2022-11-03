import React from 'react'
import Atropos from 'atropos/react'

interface FollowerButtonProps {
    offset: string;
    bgOffset: string;
    className: string;
    text: string

}

const AnimatedButton: React.FC<FollowerButtonProps> = ({ offset, bgOffset, className, text }) => {
    return (
        <Atropos
            // activeOffset={40}
            // shadowScale={1.05}            
            // onEnter={() => console.log('Enter')}
            // onLeave={() => console.log('Leave')}
            // onRotate={(x, y) => console.log('Rotate', x, y)}
            className='atropos'>
            <div data-atropos-offset={bgOffset} className='cursor-pointer  px-4 py-1.5 rounded-full border-black border-[1.5px]'>
                <h3 data-atropos-offset={offset} className={className}>{text}</h3>
            </div>
        </Atropos>
    )
}

export default AnimatedButton