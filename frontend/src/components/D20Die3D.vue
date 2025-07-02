<template>
  <div ref="container" class="d20-3d-canvas"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";

const container = ref(null);
let renderer, scene, camera, dieMesh, animationId, edgeLines;
let isDragging = false,
  lastX = 0,
  lastY = 0;

function makeNumbersTexture() {
  // Create a canvas with 20 numbers horizontally
  const w = 1024,
    h = 64;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, w, h);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000";
  ctx.font = "bold 20px Arial";
  const step = w / 20;
  const start = step * 0.5;
  for (let i = 0; i < 20; i++) {
    ctx.fillText((i + 1).toString(), start + step * i, h / 2);
  }
  return new THREE.CanvasTexture(canvas);
}

function createD20Geometry(radius = 1) {
  // D20 is an icosahedron
  const g = new THREE.IcosahedronGeometry(radius, 0);
  // Set up custom UVs so each face gets a unique number from the texture
  // Each face is a triangle, and there are 20 faces
  const uv = [];
  for (let i = 0; i < 20; i++) {
    // Map each face to a horizontal segment of the texture
    const u0 = (0.067 + i) / 20,
      v0 = 0.25;
    const u1 = (0.933 + i) / 20,
      v1 = 0.25;
    const u2 = (0.5 + i) / 20,
      v2 = 1;
    uv.push([u0, v0], [u1, v1], [u2, v2]);
  }
  // Flatten and assign to geometry
  const uvAttr = [];
  for (let i = 0; i < uv.length; i++) {
    uvAttr.push(uv[i][0], uv[i][1]);
  }
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uvAttr, 2));
  return g;
}

function createD20Material() {
  const texture = makeNumbersTexture();
  return new THREE.MeshBasicMaterial({
    map: texture,
    color: 0xe0e0e0, // Soft grey
  });
}

function animate() {
  if (!isDragging && dieMesh) {
    dieMesh.rotation.y += 0.008;
    dieMesh.rotation.x += 0.003;
  }
  renderer.render(scene, camera);
  animationId = requestAnimationFrame(animate);
}

function onPointerDown(e) {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
}
function onPointerUp() {
  isDragging = false;
}
function onPointerMove(e) {
  if (!isDragging) return;
  const dx = (e.clientX - lastX) * 0.01;
  const dy = (e.clientY - lastY) * 0.01;
  dieMesh.rotation.y += dx;
  dieMesh.rotation.x += dy;
  lastX = e.clientX;
  lastY = e.clientY;
}

onMounted(() => {
  // Set up scene
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0, 3.5);

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(120, 120);
  renderer.setClearColor(0x000000, 0); // transparent
  container.value.appendChild(renderer.domElement);

  // Lighting (not needed for MeshBasicMaterial, but harmless)
  const ambient = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 0.7);
  dir.position.set(2, 2, 3);
  scene.add(dir);

  // Die
  const geometry = createD20Geometry(1);
  const material = createD20Material();
  dieMesh = new THREE.Mesh(geometry, material);
  scene.add(dieMesh);

  // Add black edges for triangle borders
  const edges = new THREE.EdgesGeometry(geometry);
  edgeLines = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0x000000 }) // Note on linewidth below
  );

  // This is the fix: Add the edges to the die, not the scene
  dieMesh.add(edgeLines);

  // Animation
  animate();

  // Drag controls
  const canvas = renderer.domElement;
  canvas.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointermove", onPointerMove);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  renderer?.dispose?.();
  scene?.clear?.();
  // Remove event listeners
  const canvas = renderer?.domElement;
  if (canvas) canvas.removeEventListener("pointerdown", onPointerDown);
  window.removeEventListener("pointerup", onPointerUp);
  window.removeEventListener("pointermove", onPointerMove);
});
</script>

<style scoped>
.d20-3d-canvas {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
}
</style>
