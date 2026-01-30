import { CameraControls, PresentationControls, Stage } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";

const Experience = () => {
    return (
        <PresentationControls // drei library
        speed={1.5} 
        global 
        zoom={1.2} 
        polar={[-0.1, Math.PI / 4]} 
        /**
        -0.1: Could see bottom more if number smaller(more negative)
        Math.PI / 4: Could see more top view when Math.PI devided by the smaller number(so number got bigger)
         */ 
        >
            <Stage 
            environment={"city"} 
            intensity={0.1} 
            contactShadow={false}
            adjustCamera={false} // Auto-fill prevention
            >
                <mesh>
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
                    <planeGeometry args={[170, 170]} />
                    <MeshReflectorMaterial
                        blur={[300, 100]}
                        resolution={2048}
                        mixBlur={1}
                        mixStrength={40}
                        roughness={1}
                        depthScale={1.2}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#101010"
                        metalness={0.5}
                    />
                </mesh>
        </PresentationControls>
    );
};

export default Experience;