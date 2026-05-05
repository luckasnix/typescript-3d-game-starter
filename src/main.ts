import * as Three from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const app = document.getElementById("app") as HTMLDivElement;

if (!app) {
  throw new Error("Could not find the app container.");
}

const scene = new Three.Scene();

const renderer = new Three.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = Three.PCFSoftShadowMap;
app.append(renderer.domElement);

const geometry = new Three.BoxGeometry(1, 1, 1);
const material = new Three.MeshStandardMaterial({
  color: "#ffffff",
  roughness: 0.45,
  metalness: 0.1,
});
const cube = new Three.Mesh(geometry, material);
cube.position.y = 0.5;
cube.castShadow = true;
scene.add(cube);

const planeGeometry = new Three.PlaneGeometry(5, 5);
const planeMaterial = new Three.MeshStandardMaterial({
  color: "#888888",
  roughness: 0.9,
  metalness: 0.05,
  side: Three.DoubleSide,
});
const plane = new Three.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

const axesHelper = new Three.AxesHelper(10);
scene.add(axesHelper);

const ambientLight = new Three.AmbientLight("#ffffff", 0.5);
scene.add(ambientLight);

const directionalLight = new Three.DirectionalLight("#ffffff", 1);
directionalLight.position.set(4, 3, 2);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 10;
scene.add(directionalLight);

const camera = new Three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  100,
);
camera.position.set(1.5, 3, 4);
camera.lookAt(0, 0.5, 0);

const controls = new OrbitControls(camera, renderer.domElement);

const updateViewportSize = () => {
  const { innerWidth, innerHeight } = window;
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
};
updateViewportSize();
window.addEventListener("resize", updateViewportSize);

renderer.setAnimationLoop(() => {
  controls.update();
  renderer.render(scene, camera);
});
