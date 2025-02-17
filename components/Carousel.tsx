import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'
import styles from '../styles/carousel.module.css'
interface ContextValue {
    embla: EmblaCarouselType | undefined
    selectedIndex: number
}
interface Props {
    className?: string
    children: React.ReactNode
}
export const CarouselContext = React.createContext<ContextValue>({
    embla: undefined,
    selectedIndex: -1
})

const Carousel: React.FC<Props> = ({ className, children }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [viewPortRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false
    }, [ClassNames(), Autoplay()])
    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
    }, [
        emblaApi,
        onSelect
    ])


    return (
        <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
            <div ref={viewPortRef} className={` ${styles.viewport} w-full overflow-hidden ${className}`}>
                <div className={`flex `}>
                    {children}
                </div>
            </div>
        </CarouselContext.Provider>
    )
}
export default Carousel