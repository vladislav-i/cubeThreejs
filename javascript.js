
//need window on load to execute javascript
window.onload = function() {
	var camera, controls, scene, renderer;
	init();
	animate();
	function init(){
		//set camera
	    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
	    camera.position.x = 500;
	    //user trackballcontrols (tracks our camera)
	    controls = new THREE.TrackballControls(camera);
	    controls.addEventListener('change', render);
	    //creating scene
	    scene = new THREE.Scene();
	    
	    //create cube
	    var geometry = new THREE.CubeGeometry(100,100,100);
	    //create material 
	    var material = new THREE.MeshNormalMaterial();

	    for (var i=0; i<100; i++){
	    	var mesh = new THREE.Mesh( geometry, material);
	    	//position for each cube x,y and z
	    	//subtrack by 0.5 to get som negatice numbers
	    	mesh.position.x = (Math.random()-0.5) * 2000;
	    	mesh.position.z = (Math.random()-0.5) * 2000;
	    	mesh.position.y = (Math.random()-0.5) * 2000;


	    	mesh.position.x = (Math.random()-0.5) * 2000;
	    	mesh.position.z = (Math.random()-0.5) * 2000;
	    	mesh.position.y = (Math.random()-0.5) * 2000;

	    	mesh.rotation.x = (Math.random()-0.5);
	    	mesh.rotation.z = (Math.random()-0.5);
	    	mesh.rotation.y = (Math.random()-0.5);


	   		scene.add(mesh);
	   		//put cubes in different x locations

	    }




	    renderer = new THREE.WebGLRenderer();
	    renderer.setSize(window.innerWidth, window.innerHeight)
	    document.body.appendChild(renderer.domElement);
	}

	function animate(){
	    requestAnimationFrame( animate );
	    controls.update();
	}
	function render(){
	    renderer.render( scene, camera );
	} 
};

 



















