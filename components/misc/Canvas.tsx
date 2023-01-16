import * as React from 'react';
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import Three, { Clock } from 'three'
import { Spring } from '@react-spring/three'
import {  } from '@react-spring/parallax'
interface CanvasProps {

}

export const StyledCanvas: React.FC<CanvasProps> = () => {
    return (
        <Canvas shadows >
            <OrbitControls enableZoom={false} enableRotate={false} />
            <ambientLight intensity={0.75} />
            <directionalLight position={[-7.5, 3, -7]} intensity={2.5} />
            <React.Suspense fallback={null}>
                <Sphere visible args={[1.0, 500, 500]} scale={2} position={[1.5, -0.5, 3]}  >
                    <MeshDistortMaterial color='#212529' attach="material" speed={1.5} distort={0.55} />
                </Sphere>
            </React.Suspense>
        </Canvas>
    )
}

{/* <Canvas>
<OrbitControls enableZoom={false} enableRotate={false} />
<ambientLight intensity={0.75} />
<directionalLight position={[-7.5, 3, -7]} intensity={2.5} />
<React.Suspense fallback={<h1 className='text-white'>Something went wrong</h1>} >
    <AnimatedSphere />
</React.Suspense>
</Canvas> */}