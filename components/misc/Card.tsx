import Image, { ImageProps } from 'next/image'
import React from 'react'

interface CardProps {
    image: string,
    title: string,
    description: string,
    imgWidth: string | number | undefined,
    imgHeight: string | number | undefined
}

export const Card: React.FC<CardProps> = ({ image, description, title, imgWidth, imgHeight }) => {
    return (
        <>
            <div className="flex flex-col w-[85vw] md:w-[30vw] my-2 rounded-xl h-[60vh] items-center justify-between py-5 px-3 space-y-3 border-2 border-black">
                {/* Image */}
                <Image src={image} alt={`${title}`} width={imgWidth} height={imgHeight} />
                {/* title */}
                <div className="">
                    {title}
                </div>
                {/* desc */}
                <div className="">{description}</div>
            </div>
        </>
    )
}