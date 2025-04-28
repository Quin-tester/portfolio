import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { TalkModel } from "./TalkModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const TalkModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <TalkModel />
        </Stage>
        <OrbitControls enableZoom={true} autoRotate/>
        <PerspectiveCamera position={[1,0.5,2]} zoom ={1} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default TalkModelContainer;