// Importar librería de Three.js
import * as THREE from '../node_modules/three/build/three.module.js';

// Crear el canvas
const canvas = document.querySelector("canvas.world");

// Crear una escena
const scene = new THREE.Scene();
scene.background = new THREE.Color("pink");

// Create una camara
const camera = new THREE.PerspectiveCamera(  
    75,  
    window.innerWidth / window.innerHeight,  
    0.1,  
    1000  
);  
camera.position.z = 5;  
scene.add(camera);

// Create un renderizador
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);

// Create un cubo
const geometry = new THREE.BoxGeometry();  
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });  
const cube = new THREE.Mesh(geometry, material);  
scene.add(cube);

// Animar la escena
function animate() {  
    requestAnimationFrame(animate);  
    cube.rotation.x += 0.01;  
    cube.rotation.y += 0.01;  
    renderer.render(scene, camera);  
}  

// Llamar la función
animate();