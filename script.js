
import * as THREE from "three";
import gsap from "gsap";                

const canvas = document.querySelector("canvas.webgl");

console.log(canvas);

const scene = new THREE.Scene();

const group = new THREE.Group();
scene.add(group);


const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
group.add(cube3);

cube1.position.x = -1.5;
cube3.position.x = 1.5;

group.position.y = 0;
group.scale.y = 1;
group.rotation.y = Math.PI * 0.25;

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);


//mesh.position.set(0.7,-0.6,.5);
//mesh.rotation.reorder("YXZ");
//mesh.rotation.x = Math.PI * 0.25;



const Sizes = {

    width: 800,
    height: 600 





}

//camera

const camera = new THREE.PerspectiveCamera(75,Sizes.width / Sizes.height);
camera.position.z = 3;
scene.add(camera);

//renderer

const renderer = new THREE.WebGLRenderer({

    canvas : canvas


    



});

renderer.setSize(Sizes.width, Sizes.height);
//let time = Date.now();
//Clock
const clock = new THREE.Clock();
gsap.to(cube1.position, {duration: 1, delay: 1, z: -    2});

//animations
const tick = () => {

    //time
   // const currentTime = Date.now();
    //const DeltaTime = currentTime - time;
    //time = currentTime;

    //Clock
    const elapsedTime = clock.getElapsedTime();
    console.log(elapsedTime);


    //cube1.rotation.x += 0.01 *DeltaTime;
    cube2.rotation.y = Math.sin(elapsedTime);
    cube2.rotation.x = Math.cos(elapsedTime);
    camera.position.y = Math.sin(elapsedTime);
    camera.position.x = Math.cos(elapsedTime);
    camera.lookAt(group.position);
    //cube3.rotation.z += 0.01;
    renderer.render(scene,camera);
    window.requestAnimationFrame(tick);


}

tick();