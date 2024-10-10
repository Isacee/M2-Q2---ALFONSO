import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(-3, 0, 0);
scene.add(box);

const coneGeometry = new THREE.ConeGeometry(0.7, 2, 32);
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set(1, 4, 0);
scene.add(cone);

const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(1, 0, 0);
scene.add(cylinder);

const sphereGeometry = new THREE.SphereGeometry(0.75, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(1, -4, 0);
scene.add(sphere);

const torusGeometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set(5, 0, 0);
scene.add(torus);


camera.position.z = 10;


function animate() {

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  cone.rotation.x += 0.01;
  cone.rotation.z += 0.01;

  cylinder.rotation.x += 0.02;

  sphere.rotation.x += 0.02;

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.02;

  renderer.render(scene, camera);
}