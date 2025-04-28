import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { AppModel } from "./AppModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const AppModelContainer = () => {
  return (
    <Canvas
      gl={{ toneMappingExposure: 0.8 }}
      shadows
    >
      <Suspense fallback="loading...">
        <Stage environment="sunset" intensity={0.17}>
          <AppModel scale={1.5} /> 
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[0,0.5,2]} zoom={0.7} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default AppModelContainer;