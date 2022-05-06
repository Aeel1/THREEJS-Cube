// Scene
const scene = new THREE.Scene()

// Sizes
const sizes = {
    width: 800,
    height:600
}

// Camera

const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 )
camera.position.z = 3
scene.add(camera)

// Cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 )
const material = new THREE.MeshBasicMaterial( {color: 0xff0000} )
const cube = new THREE.Mesh( geometry, material )

scene.add( cube )



// Render
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animation
function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();