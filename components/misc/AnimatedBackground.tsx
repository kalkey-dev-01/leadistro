import React, { Ref, Suspense } from "react";
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import { Canvas,  useFrame } from '@react-three/fiber'
import { StyledCanvas } from "./Canvas";
import { MotionCanvas, motion as threeMotion } from 'framer-motion-3d'
import { useInView, motion, MotionConfig } from 'framer-motion'
import { Vector3, Clock, Mesh } from "three/src/Three";
import { } from 'maath'



export const AnimatedBackground: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
    return (
        <>
            <StyledCanvas style={style}   >
                <AnimatedSphere />
            </StyledCanvas>
        </>
    )
}

export default function AnimatedSphere() {


    return <>
        <Sphere visible args={[1.0, 500, 500]} scale={2} position={[1.75, -0.5, 3]}  >
            <MeshDistortMaterial color='#212529' attach="material" speed={1.5} distort={0.595} />
        </Sphere>
    </>
}


