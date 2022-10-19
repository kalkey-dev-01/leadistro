import React, { Ref, Suspense } from "react";
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { StyledCanvas } from "./Canvas";
import { MotionCanvas, motion as threeMotion } from 'framer-motion-3d'
import { useInView, motion, MotionConfig } from 'framer-motion'




export const AnimatedBackground: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
    return (
        <>
            <StyledCanvas style={style}  >
                <AnimatedSphere />
            </StyledCanvas>
        </>
    )
}

export default function AnimatedSphere() {
    return <>
        <Sphere visible args={[1.0, 500, 500]} scale={2}   >
            <MeshDistortMaterial color='#0A0708' attach="material" speed={1.5} distort={0.725} />
        </Sphere>
    </>
}


export const StyledAnimatedBg: React.FC<{}> = () => {
    return (
        <>
            <MotionConfig transition={{ type: 'spring' }}>
                <motion.div>
                    <MotionCanvas fallback={null} >
                        <AnimatedSphere />
                    </MotionCanvas>
                </motion.div>
            </MotionConfig>
        </>
    )
}