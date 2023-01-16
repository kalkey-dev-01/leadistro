import React, { Ref, Suspense } from "react";
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import { Canvas,  useFrame } from '@react-three/fiber'
import { StyledCanvas } from "./Canvas";


import { } from 'maath'





export default function AnimatedSphere() {
    return <>
        <Sphere visible args={[1.0, 500, 500]} scale={2} position={[1.5, -0.5, 3]}  >
            <MeshDistortMaterial color='#212529' attach="material" speed={1.5} distort={0.55} />
        </Sphere>
    </>
}


