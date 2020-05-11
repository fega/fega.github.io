<template>
  <div id="renderer"></div>
</template>

<script>
import * as THREE from "three";

export default {
  mounted() {
    if (window.innerWidth<500) return;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      1,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer({antialias:true, precision:'lowp', powerPreference: 'low-power'});
    renderer.setSize(400, 400);
    document.getElementById("renderer").appendChild(renderer.domElement);
    var geometry = new THREE.SphereGeometry(2.5,30,30);
    let material = new THREE.MeshBasicMaterial( { color: "#4e022c", wireframe:true } );

    var cube = new THREE.Mesh (geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    function animate() {
      cube.rotation.x += 0.001;
      cube.rotation.y += 0.001;

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }
};
</script>

<style lang="sass" scoped>
#renderer
  min-height: 500px 
  position: absolute
  top: 0
  display: flex
  align-items: center
  justify-content: center
  width: 100vw
</style>