import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { LineBasicMaterial } from "three";
import { render } from "react-dom";

import { UnrealBloomPass } from "../components/UnrealBloomPass";

export default function ThreeScene() {
  const objectRef = useRef(null);

  // =========================
  // SETUP
  // =========================
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x14171e);
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth - 17, window.innerHeight);

  useEffect(() => {
    objectRef.current.appendChild(renderer.domElement);
  }, []);

  // =========================
  // OBJECTS TO PLACE IN SCENE
  // =========================
  // Large Center screen object
  var geometry = new THREE.SphereGeometry();
  var material = new THREE.MeshNormalMaterial({
    color: 0x9c2f4c,
    wireframe: true,
  });
  var sphere = new THREE.Mesh(geometry, material);

  // Surrounding particles
  let particleLimit = 15;

  for (let particleCount = 0; particleCount <= particleLimit; particleCount++) {
    var particleGeometry = new THREE.CircleGeometry(0.03, 6);
    var particleMaterial = new THREE.LineBasicMaterial({
      color: 0xfffff3,
    });
    var smallParticle = new THREE.Mesh(particleGeometry, particleMaterial);
    smallParticle.position.set(
      Math.random() * (5 - -5) + -5,
      Math.random() * (5 - -5) + -5,
      0
    );
    scene.add(smallParticle);
  }

  // Add everything to the scene
  scene.add(sphere);

  // =============================================
  // BLOOM
  // =============================================
  var bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  );
  bloomPass.threshold = 0.7;
  bloomPass.strength = 0.6;
  bloomPass.radius = 1;

  composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);

  const animate = () => {
    requestAnimationFrame(animate);

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  useEffect(() => {
    animate();
  });

  window.onresize = function () {
    var width = window.innerWidth - 17;
    var height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  };

  return <div className="three-scene" ref={objectRef}></div>;
}
