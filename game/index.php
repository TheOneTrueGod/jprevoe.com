<?php 
    $gameLocations = array(
        '/game/spaceships' => 'game/spaceships.php'
    );
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="/packages/bootstrap/bootstrap.css" rel="stylesheet">
    <link href="/styles/styles.css" rel="stylesheet">
    
    <title>Games and Projects - jprevoe.com</title>
  </head>
  <body class="pageBackground">
    <div class="container contentContainer">
      <div class="row mb-3 mt-3">
        <div class="col">
          <h1 class="text-center">Games and Projects</h1>
          <h2 class="text-center">jprevoe.com</h2>
        </div>
      </div>
      <div style="max-width: 800px; margin: auto;">
        <?php
            $path = $_SERVER['REQUEST_URI'];
            if (!array_key_exists($path, $gameLocations)) {
                ?>Game not found!<?
            } else {
                ?>
                    <script type="text/javascript" src="/JeremyLibs/SpaceShips/lib/pixi.js"></script>
                    <script type="text/javascript" src="/JeremyLibs/SpaceShips/dist/built.js"></script>
                <?
            }
        ?>
      </div>
    </div>

    <script src="/packages/bootstrap/bootstrap.js"></script>
  </body>
</html>
