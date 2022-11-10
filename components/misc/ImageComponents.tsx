import Image from 'next/image';
import React from 'react'

interface ImageComponentsProps {
    imageLink?: string,
    Title: string,
    desc?: string
}

export const ImageComponents: React.FC<ImageComponentsProps> = ({ imageLink, Title, desc }) => {
    return (
        <div className='flex flex-col space-y-2'>
            {
                imageLink && <Image src={require(`./../../assets/${imageLink}.png`)} alt={'leadistro Components'} width={1920} height={1080} />
            }
            <div className={`text-3xl`}>
                {Title}
            </div>
            <div className={`text-2xl`}>
                {desc}
            </div>
        </div>
    );
} 