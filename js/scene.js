        var mountain
        var plateau
        var michel
        var killian
        var edouard
        var pierre
        var bar
        import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js';
        import { OrbitControls } from "./three/examples/jsm/controls/OrbitControls.js";
        const canvas = document.querySelector('#c');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        

        const renderer = new THREE.WebGLRenderer({canvas});
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        //orbit controller
        const controls = new OrbitControls( camera, renderer.domElement );

        // const geometry = new THREE.BoxGeometry();
        // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // const cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );

        const loader = new GLTFLoader();

        const light = new THREE.AmbientLight( 0x404040,5 ); // soft white light
        scene.add( light );

        loader.load('assets/models/plateau.gltf', function (gltf) {
            plateau = gltf.scene;
            plateau.scale.set(5,5,5);
            scene.add(plateau);

        }, undefined, function (error) {

            console.error(error);

        });

        loader.load('assets/models/michel.gltf', function (gltf) {
            michel = gltf.scene;
            michel.scale.set(0.15,0.15,0.15);
            michel.position.x = 0.53;
            scene.add(michel);

        }, undefined, function (error) {

            console.error(error);

        });

        loader.load('assets/models/killian.gltf', function (gltf) {
            killian = gltf.scene;
            killian.scale.set(0.15,0.15,0.15);
            killian.position.x = -0.55;
            killian.position.z = -0.85;
            scene.add(killian);

        }, undefined, function (error) {

            console.error(error);

        });
        loader.load('assets/models/edouard.gltf', function (gltf) {
        edouard = gltf.scene;
        edouard.scale.set(0.15,0.15,0.15);
        edouard.position.x = -0.70;
        edouard.position.z = 1;
        scene.add(edouard);
        }, undefined, function (error) {
        console.error(error);
        });

        loader.load('assets/models/pierre.gltf', function (gltf) {
        pierre = gltf.scene;
        pierre.scale.set(0.15,0.15,0.15);
        pierre.position.x = 0.55;
        pierre.position.z = 1.05;
        scene.add(pierre);
        }, undefined, function (error) {
        console.error(error);
        });
        
        //chargement pions fin

        loader.load('assets/models/scene.gltf', function (gltf) {
        bar = gltf.scene;
        //bar.scale.set(0.5,0.5,0.5);
        //bar.position.x = 0;
        //bar.position.z = 0;
        scene.add(bar);
        }, undefined, function (error) {
        console.error(error);
        });

        //arriere plan montagne
        loader.load('assets/models/mountain.gltf', function (gltf) {
            mountain = gltf.scene;
            mountain.scale.set(3.2,3.2,3.2);
            mountain.position.x = 2.2;
            mountain.position.z = 0.03;
            mountain.position.y = -0.01;
            scene.add(mountain);

        }, undefined, function (error) {

            console.error(error);

        });

        



        camera.position.z = -1;
        camera.position.x = -1;
        camera.position.y = 0.2;
        controls.update();

        const animate = function () {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();
