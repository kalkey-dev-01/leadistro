import React from 'react'
import { MeshDistortMaterial, MeshWobbleMaterial, RoundedBox } from '@react-three/drei'
import { MeshProps, ThreeEvent } from '@react-three/fiber'
import { StyledCanvas } from './Canvas'


interface RBProps {
    meshProps?: any,
    style: React.CSSProperties,

}


export const RoundedButton: React.FC<RBProps> = ({ style, meshProps }) => {

    return (
        <StyledCanvas style={style}>
            <RoundedBox  visible args={[100, 75, 10]} scale={0} radius={0.55} smoothness={10} {...meshProps}>
            <MeshDistortMaterial color='white' attach="material" speed={0.7} distort={0.325} />
                {/* <MeshWobbleMaterial factor={0.055} speed={10} attach={'material'} color={'#0A0708'} /> */}
            </RoundedBox>
        </StyledCanvas>
    )
}