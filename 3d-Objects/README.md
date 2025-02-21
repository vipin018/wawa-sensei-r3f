 
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