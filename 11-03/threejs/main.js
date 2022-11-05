import * as THREE from 'three';
import { LoopOnce } from 'three';

// THREE scene
const scene = new THREE.Scene();

// THREE camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.01,
  1000,
);

// THREE renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// THREE light
const ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);
const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.x = 7;
directional.position.y = 14;
scene.add(directional);

// cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhysicalMaterial({
  color: 0x00ff00,
  roughness: 0.5,
  metalness: 0.7,
});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

// create a render loop
function loop() {
  // modify the scene
  // cube.rotation.x += 0.01;
  cube.rotateX(0.01);
  cube.rotateY(0.01);

  // render the scene
  renderer.render(scene, camera);

  // make it a loop
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
