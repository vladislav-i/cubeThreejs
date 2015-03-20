
//need window on load to execute javascript
window.onload = function() {

var angularSpeed = 0.2 // rotations per second 
var lastTime =  0; // once animate runs, time will change

function animate(){
	//get time
	var time = (new Date).getTime();
	var timeDiff = time - lastTime; //get difference in time
	var angularChange = angularSpeed * timeDiff * 2 * Math.PI/1000;

	cube.rotation.z += angularChange; // taking current position and moving it
	cube.rotation.x += angularChange;
	cube.rotation.y += angularChange;

	lastTime = time; // update current time

	//rendere this scene with this camera
	renderer.render(scene, camera); 

	requestAnimationFrame(function(){
		animate();
	});
}

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create camera/set
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
//set position

//starting at center point 
camera.position.y= -400; //y position, new and far
camera.position.z= 400; //left and right
camera.rotation.x= 45*(Math.PI/180); //up and down
// 45 degrees 

var scene = new THREE.Scene(); //creat scene

//normal material for mesh, creating cube
//cube has x,y,z = all set to 200
var cube  = new THREE.Mesh(new THREE.CubeGeometry(200,200,200), new THREE.MeshBasicMaterial({
	color: '#EE00FF',
	wireframe: 'true',
	wireframeLinewidth: "10"
}));

//rotating cube 
cube.rotation.z = 45*(Math.PI/180);
//adding plane to scene
scene.add(cube);

//calling function
animate();
};