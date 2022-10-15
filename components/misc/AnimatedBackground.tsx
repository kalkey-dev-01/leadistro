import React, { Ref, Suspense } from "react";
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { StyledCanvas } from "./Canvas";




export const AnimatedBackground: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
    return (
        <>
            <StyledCanvas style={style}>
                <AnimatedSphere />
            </StyledCanvas>
        </>
    )
}

export default function AnimatedSphere() {

    return <>
        <Sphere visible args={[1.0, 500, 500]} scale={2} key={undefined} material={undefined} quaternion={undefined} attach={undefined} onUpdate={undefined} clear={undefined} position={undefined} up={undefined} rotation={undefined} matrix={undefined} layers={undefined} dispose={undefined} geometry={undefined} raycast={undefined} onPointerMissed={undefined} onClick={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerUp={undefined} onPointerDown={undefined} onPointerOver={undefined} onPointerOut={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerMove={undefined} onPointerCancel={undefined} onWheel={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined} >
            <MeshDistortMaterial color='#0A0708' attach="material" speed={1.5} distort={0.725} />
        </Sphere>
    </>
}