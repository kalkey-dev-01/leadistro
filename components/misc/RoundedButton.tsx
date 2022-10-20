import React from 'react'
import { MeshDistortMaterial, MeshWobbleMaterial, RoundedBox } from '@react-three/drei'
import { MeshProps, ThreeEvent } from '@react-three/fiber'
import { StyledCanvas } from './Canvas'
import { animate, motion, MotionProps, useMotionValue, useTransform } from 'framer-motion'


interface RBProps {
    children: React.ReactNode
    className?: string,
    props?: MotionProps,
    refEl?: any,
    event?: React.MouseEvent
}


export const RoundedButton: React.FC<RBProps> = ({ children, className }) => {

    function handleMouse(e: React.MouseEvent) {
        console.log('Page x ->', e.pageX);
        console.log('Page y ->', e.pageY);
        console.log('Client x ->', e.clientX);
        console.log('Client y ->', e.clientY);
    }

    return (
        <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.55 }} className='cursor-pointer font-extrabold px-6 py-2  text-lg md:text-xl rounded-full border-black border-[1.5px]'>
            <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.95 }}> {children}</motion.div>
        </motion.div>
    )
}


export const RButton: React.FC<RBProps> = ({ children, className, props }) => {
    function getRelCoord(event: React.MouseEvent, refEl: HTMLDivElement) {
        const pos = {
            x: event?.pageX,
            y: event?.pageY
        }
        const offset = {
            left: refEl.offsetLeft,
            top: refEl.offsetTop,
            width: refEl.offsetWidth,
            height: refEl.offsetHeight
        }
        let reference = refEl.offsetParent
        while (reference instanceof HTMLDivElement) {
            offset.left += reference.offsetLeft;
            offset.top += reference.offsetTop;
            reference = reference.offsetParent;
        }
        return {
            x: pos.x - offset.left,
            y: pos.y - offset.top,
            width: offset.width,
            height: offset.height,
            centerX: (pos.x - offset.left - offset.width / 2) / (offset.width / 2),
            centerY: (pos.y - offset.left - offset.width / 2) / (offset.width / 2)
        }

    }
    const [mousePosition, setMousePosition] = React.useState<any>({});
    const boxRef = React.useRef<HTMLDivElement>();
    const handleMouse = (e: React.MouseEvent) => {
        console.log('Page x ->', e.pageX);
        console.log('Page y ->', e.pageY);
        console.log('Client x ->', e.clientX);
        console.log('Client y ->', e.clientY);

        setMousePosition(getRelCoord(e, boxRef.current as HTMLDivElement))
    }
    return (
        <>
            <motion.div animate={{
                rotateX: mousePosition.centerX * 50,
                rotateY: mousePosition.centerY * 100
            }} onMouseMove={(e) => handleMouse(e)} style={{
                width: "80px",
                height: "30px",
                position: "relative"
            }} {...props}>
                <motion.div style={{
                    position: "absolute",
                    width: "70px",
                    height: "25px",
                    margin: "-10px",
                    borderRadius: 25,
                    backgroundColor: 'aquamarine'
                }}
                    animate={{
                        x: mousePosition.x,
                        y: mousePosition.y
                    }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </>
    )
}