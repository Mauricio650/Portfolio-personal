import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


/*

Rocket with clouds by AchiraNadeeshan [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/uSNF7azGwA)
 
*/

function Rocket() {
    const { scene } = useGLTF('models/Rocketwithclouds.glb');
    const cubeRef = useRef();

    useFrame((state, delta) => {
        if (cubeRef.current) {
            cubeRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <primitive 
            ref={cubeRef}
            object={scene}
            scale={[1, 1, 1]} 
            position={[0, 0, 0]} 
            castShadow 
        />
    );
}

export function RocketModel() {
    return (
        <Canvas className="h-full"
        >
            <ambientLight intensity={2.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Rocket />
            </Suspense>
            <OrbitControls 
                enableZoom={false}
                enablePan={false} 
            />
        </Canvas>
    );
}