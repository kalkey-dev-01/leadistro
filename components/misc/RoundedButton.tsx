import React from 'react'
import { MeshDistortMaterial, MeshWobbleMaterial, RoundedBox } from '@react-three/drei'
import { MeshProps, ThreeEvent } from '@react-three/fiber'
import { StyledCanvas } from './Canvas'


interface RBProps { 
children: React.ReactNode
className?: string
}


export const RoundedButton: React.FC<RBProps> = ({ children,className }) => {

    return (
     <>
     <div className={`text-white hover:text-black rounded-full text-2xl  px-6 py-2 border-[1.5px] ${className}`}>
        {children}
     </div>     
     </>
    )
}