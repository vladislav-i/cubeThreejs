
//need window on load to execute javascript
window.onload = function() {
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create camera/set
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
//set position

//starting at center point 
camera.position.y= -400; //y position, new and far
camera.position.z= 400; //z is up and down
camera.rotation.x= .70; //left and right

var scene = new THREE.Scene(); //creat scene

//normal material for mesh, creating cube
//cube has x,y,z = all set to 200
var cube  = new THREE.Mesh(new THREE.CubeGeometry(200,200,200), new THREE.MeshNormalMaterial());

//rotating cube 45deg.
cube.rotation.z = .5;
//adding plane to scene
scene.add(cube);
//rendere this scene with this camera
renderer.render(scene, camera);
};