import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


/*

Jarlan by Jarlan Perez [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/1c9e8evf8uT)
 
*/

function Human() {
    const { scene } = useGLTF('models/Jarlan_human.glb');
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
            scale={[3, 3, 3]} 
            position={[0, 0, 0]} 
            castShadow 
        />
    );
}

export function HumanModel() {
    return (
        <Canvas className="h-full"
        >
            <ambientLight intensity={2.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Human />
            </Suspense>
            <OrbitControls 
                enableZoom={false}
                enablePan={false} 
            />
        </Canvas>
    );
}