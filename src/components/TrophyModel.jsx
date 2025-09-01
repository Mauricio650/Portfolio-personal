import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


/*  
Graduation cap by Poly by Google [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/epKzelwHjN6) */


function Trophy() {
    const { scene } = useGLTF('models/Trophy.glb');
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
            scale={[5, 5, 5]} 
            position={[0, 0, 0]} 
            rotation={[0.3, 0.9, 0]}  
            castShadow  
        />
    );
}

export function TrophyModel() {
    return (
        <Canvas
            camera={{ 
                position: [5, 5, 5], 
                fov: 45
            }}
            style={{ 
                width: '100%',
                height: '100%',
                background: 'transparent' 
            }}
        >
            <ambientLight intensity={2.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Trophy />
            </Suspense>
            <OrbitControls 
                enableZoom={false}
                enablePan={false} 
            />
        </Canvas>
    );
}