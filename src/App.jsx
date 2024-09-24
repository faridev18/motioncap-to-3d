import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Lights from './components/Three/lights';
import Model from './components/Three/model';
import CameraView from './components/CameraView';
import { OrbitControls } from '@react-three/drei';

function App() {

  let kp;

  const mapJoints = (keypoints) => {
    kp = keypoints
  }

  const getJoints = () => {
    return kp;
  }

  return (
    <>
      <div style={{ position: "relative", width: "50%", height: "100vh" }}>

        <Canvas
          shadows
          camera={{ position: [0, 0, 2], fov: 60 }}>
            <OrbitControls/>
          <Lights />
          <Suspense fallback={null}>
            <mesh position={[0, -1, 0]}>
              <Model getJoints={getJoints} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
      <CameraView mapJoints={mapJoints} />
    </>
  )
}

export default App
