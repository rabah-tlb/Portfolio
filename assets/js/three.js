// Importation des modules Three.js
import * as THREE from "three";

// Création de la scène
const scene = new THREE.Scene();

// Création de la caméra
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Création du rendu
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Création de la géométrie et du matériau pour le robot
const robotGeometry = new THREE.BoxGeometry(1, 1, 1);
const robotMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Création du maillage pour le robot
const robot = new THREE.Mesh(robotGeometry, robotMaterial);
scene.add(robot);

// Fonction d'animation
function animate() {
  requestAnimationFrame(animate);

  // Rotation du robot
  robot.rotation.x += 0.01;
  robot.rotation.y += 0.01;

  // Rendu de la scène avec la caméra
  renderer.render(scene, camera);
}

// Appel de la fonction d'animation
animate();
