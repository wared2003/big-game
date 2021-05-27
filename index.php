<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>three js test</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <!-- ------------------------------- navbar -------------------------------- -->
    <nav class="navbar navbar-expand-lg navbar-light bg-creme">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="assets/graphique/logo-clair.png" alt="logo clair west-loon">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#c">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">Au sujet</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- ----------------------------- navbar end ------------------------------ -->

    <!-- --------------------------- three js banner ---------------------------- -->
    <script src="js/three/build/three.min.js"></script>
    <script src="js/three/examples/js/controls/OrbitControls.js"></script>
    <script type="module" src="js/scene.js"></script>
    <div id="box"></div><canvas id="c"></canvas>


    <!-- -------------------------- section au sujet --------------------------- -->

    <section class="about" id="about">
    
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
    </script>
</body>

</html>