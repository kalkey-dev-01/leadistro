import * as React from 'react';
import { Canvas, ThreeEvent } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three/src/Three';
interface CanvasProps {
    style?: React.CSSProperties
    children: React.ReactNode,
    props?: CanvasProps
}

export const StyledCanvas: React.FC<CanvasProps> = ({ style, children, props }) => {


    return (
        <Canvas style={style} {...props}   >
            
            <OrbitControls enableZoom={false} enableRotate={true} />
            <ambientLight intensity={0.75} />
            <directionalLight position={new Vector3(-8.5,3,-10)} intensity={1.5} />
            <React.Suspense fallback={null} >
                {children}
            </React.Suspense>
        </Canvas>
    )
}