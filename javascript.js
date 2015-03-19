window.onload = function() {

	//create webGL rended object
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( 800, 600 );
	document.body.appendChild( renderer.domElement );

	var scene = new THREE.Scene();

	//create camera 
	var camera = new THREE.PerspectiveCamera(
	35,             // Field of view
	800 / 600,      // Aspect ratio
	0.1,            // Near plane
	10000           // Far plane
	);
	camera.position.set( -15, 10, 10 );
	camera.lookAt( scene.position );


	//create Cube

	var geometry = new THREE.CubeGeometry( 5, 5, 5 );
	var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
	var mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	//adding light to scene 
	var light = new THREE.PointLight( 0xFFFF00 );
	light.position.set( 10, 0, 10 );
	scene.add( light );

	renderer.render( scene, camera );

    };