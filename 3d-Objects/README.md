 
 ## Geometry

 - boxGeometry (width, height, depth)
 - sphereGeometry (radius, segments)
 - planeGeometry (width, height)
 - cylinderGeometry (radiusTop, radiusBottom, height, segments)
 - torusGeometry (radius, tube)

 ## Material

- *meshNormalMaterial* : it is a material that is used to display the normal of the surface
 - *meshBasicMaterial* : it is the simplest material, it only has a color and it does not have or require any lighting
 - *meshStandardMaterial* : it is a more complex material, it has a color, roughness, metalness and it requires lighting
 - *meshLambertMaterial* : it is a material that is used for non-shiny surfaces, it has a color and it requires lighting
 - *meshPhongMaterial* : it is a material that is used for shiny surfaces, it has a color and it requires lighting
- *meshToonMaterial* : it is a material that is used for toon shading, it has a color and it requires lighting and it looks like a cartoon
-

### que : difference between lambert and phong material ?

*lambert material is used for non-shiny surfaces, it has a color and it requires lighting*
- example : wood and walls

*phong material is used for shiny surfaces, it has a color and it requires lighting*
- example : metal and glass

## Lighting

- *directionalLight* : it is a directional lighting which lights up the scene from a single direction and it has color and intensity
- *ambientLight* : this light, lights up the scene from all directions and it has color and intensity
- *pointLight* : as name suggests, it is a point light which lights up the scene from a single point and it has color and intensity
- *spotLight* : spot light is a light that is used to light up a specific area and it has color and intensity

## Mesh Properties

- *position* : it is the position of the mesh in the scene
syntax : position={[x, y, z]}
- *rotation* : it is the rotation of the mesh in the scene
syntax : rotation={[x, y, z]}
- *scale* : it is the scale of the mesh in the scene
syntax : scale={[x, y, z]}

## Group

- *group* : it is a group of meshes, it is used to group meshes together and it is used to apply transformations to the meshes
syntax : <group>


## Camera

- *camera* : it is the camera of the scene, it is used to view the scene. It is fov of the camera, aspect ratio and near and far of the camera

## Orbit Controls

- *OrbitControls* : it is a control that is used to control the camera of the scene. It is used to rotate the camera around the scene.

## Axes Helper

- *axesHelper* : it is a helper that is used to display the axes of the scene. It gives us the x, y, z axes in the scene. 
syntax : <axesHelper />






