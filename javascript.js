
//need window on load to execute javascript
window.onload = function() {
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create camera/set
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
//set position

//starting at center point 
camera.position.y= -450; //y position, new and far
camera.position.z=400; //z is up and down
camera.rotation.x= .75; //left and right

var scene = new THREE.Scene(); //creat scene

//normal material for mesh
var plane = new THREE.Mesh(new THREE.PlaneGeometry(300,300), new THREE.MeshNormalMaterial());

//adding plane to scene
scene.add(plane);
//rendere this scene with this camera
renderer.render(scene, camera);
};