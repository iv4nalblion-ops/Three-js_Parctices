import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

console.log(canvas);

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

const Sizes = {

    width: 800,
    height: 600





}

//camera

const camera = new THREE.PerspectiveCamera(75,Sizes.width / Sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({

    canvas : canvas



});

renderer.setSize(Sizes.width, Sizes.height);
renderer.render(scene,camera);