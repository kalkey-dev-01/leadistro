import * as React from 'react';
import { Canvas, ThreeEvent } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

interface CanvasProps {
    style?: React.CSSProperties
    children: React.ReactNode,
    props?: CanvasProps
}

export const StyledCanvas: React.FC<CanvasProps> = ({ style, children, props }) => {


    return (
        <Canvas style={style} {...props}   >
            
            <OrbitControls enableZoom={false} enableRotate={true} />
          
        </Canvas>
    )
}