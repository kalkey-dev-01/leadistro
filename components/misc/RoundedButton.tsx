import React from 'react'
import { MeshDistortMaterial, MeshWobbleMaterial, RoundedBox } from '@react-three/drei'
import { MeshProps, ThreeEvent } from '@react-three/fiber'
import { StyledCanvas } from './Canvas'
import { motion } from 'framer-motion'


interface RBProps {
    children: React.ReactNode
    className?: string
}


export const RoundedButton: React.FC<RBProps> = ({ children, className }) => {

    return (
        <>
            <motion.div whileHover={{ scale: 1.25 }} className={`text-lg font-semibold cursor-pointer opacity-[0.85] rounded-3xl hover:opacity-100 border-[2.5px] border-white px-[12.5px] py-[1.5px] ${className}`}>
                {children}
            </motion.div>
        </>
    )
}