import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
     <div className="text" style={{ position: 'absolute', top: 20, left: 20, color: 'black' }}>
        <p>Controls:</p>
        <ul>
          <li>Arrow Up - Move Up</li>
          <li>Arrow Down - Move Down</li>
          <li>Arrow Left - Move Left</li>
          <li>Arrow Right - Move Right</li>
        </ul>
      </div>
      <Canvas camera={{ position: [0, 3, 8], fov: 42 }}>
        <Experience />
      </Canvas>
      
    </>
  );
}

export default App;
