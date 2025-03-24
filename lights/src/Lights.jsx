import React from 'react'
import { useControls } from 'leva'
const Lights = () => {

    // const {color, position, distance, intensity, decay} = useControls({
    //     color: 'red',
    //     distance: {value: 3, min: 0, max: 10, step: 0.1},
    //     intensity: {value: 0.5, min: 0, max: 1, step: 0.1},
    //     decay: {value: 2, min: 0, max: 10, step: 0.1}
    // })

    return (
        <>
            {/* <ambientLight 
            intensity={0.2} /> */}

            {/* <directionalLight
                position={[3, 3, 3]}
                intensity={0.5}
                color="red" />
            <directionalLight
                position={[0, 3, -3]}
                intensity={0.5}
                color="green" />
            <directionalLight
                position={[-3, 3, 3]}
                intensity={0.5}
                color="blue" /> */}

            {/* <pointLight
                position={[1, 1, 1]}
                intensity={intensity}
                distance={distance}
                decay={decay}
                color={color}
            /> */}

            {/* <hemisphereLight
                intensity={1}
                color="deepskyblue"
                groundColor="sandybrown"
                position={[0, 10, 0]}
            /> */}

            <spotLight
                intensity={1}
                color="red"
                position={[0, 10, 0]}
                angle={1}
                penumbra={0.05}
                distance={100}
                decay={1}
            />
        </>
    )
}

export default Lights