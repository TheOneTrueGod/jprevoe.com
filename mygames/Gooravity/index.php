<!DOCTYPE html>
<?php $path = $_SERVER['REQUEST_URI']; ?>
<!--
Our game is Gooravity
It's a game about saving a goo lost in space
The player jumps around and manipulates gravity to collect keys and get to the exit.
-->
<html>
<head>
    <meta charset="utf-8">
    <title>Gooravity</title>
    <link href="/packages/bootstrap/bootstrap.css" rel="stylesheet">
    <link href="/styles/styles.css" rel="stylesheet">
    <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .credits {
          text-align: center;
          color: white;
        }

        .credits a {
          color: white;
        }

        #gooravityContainer {
          margin: 40px;
          width: 800px;
          height: 600px;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 820px) {
          #gooravityContainer {
            margin: 10px;
            width: 640px;
            height: 480px;
          }
        }
        @media (max-width: 660px) {
          #gooravityContainer {
            margin: 10px;
            width: 400px;
            height: 300px;
          }
        }
    </style>
</head>

<body>
  <script type="text/javascript">
    window.assetPath = '<?php echo $path ?>';
  </script>
  <div class="container contentContainer pageBackground">
    <h1 class="text-center mt-3 mb-0">Gooravity</h1>
    <div id="gooravityContainer"></div>
  </div>
  <div class="credits"> Created by <a href="https://www.linkedin.com/in/jeremy-prevoe-09011b1a/">Jeremy Prevoe</a>, <a>Arjuna Hayes</a>, <a>and Eugene Lee</a></div>
</body>

<script src="<?php echo $path ?>/libraries/pixi.min.js"></script>
<script src="<?php echo $path ?>/libraries/howler.min.js"></script>
<script src="<?php echo $path ?>/libraries/viewportSize.min.js"></script>

<script src="<?php echo $path ?>/lib/Constants.js"></script>
<script src="<?php echo $path ?>/lib/textures.js"></script>

<script src="<?php echo $path ?>/lib/state/state.js"></script>
<script src="<?php echo $path ?>/lib/state/events.js"></script>
<script src="<?php echo $path ?>/lib/SoundController.js"></script>

<script src="<?php echo $path ?>/lib/geometry.js"></script>

<script src="<?php echo $path ?>/lib/objects/Collectable.js"></script>
<script src="<?php echo $path ?>/lib/objects/Key.js"></script>
<script src="<?php echo $path ?>/lib/objects/Star.js"></script>
<script src="<?php echo $path ?>/lib/objects/ExitDoor.js"></script>

<script src="<?php echo $path ?>/lib/objects/Arrow.js"></script>

<script src="<?php echo $path ?>/lib/particles/Particle.js"></script>
<script src="<?php echo $path ?>/lib/particles/Dirt.js"></script>
<script src="<?php echo $path ?>/lib/particles/JumpStar.js"></script>
<script src="<?php echo $path ?>/lib/particles/Background.js"></script>
<script src="<?php echo $path ?>/lib/particles/targeting.js"></script>

<script src="<?php echo $path ?>/lib/level.js"></script>
<script src="<?php echo $path ?>/lib/levels.js"></script>
<script src="<?php echo $path ?>/lib/world.js"></script>
<script src="<?php echo $path ?>/lib/character.js"></script>

<script src="<?php echo $path ?>/lib/ui.js"></script>
<script src="<?php echo $path ?>/lib/ui/LevelCompleteDialog.js"></script>
<script src="<?php echo $path ?>/lib/ui/TutorialDialog.js"></script>

<script src="<?php echo $path ?>/lib/main.js"></script>
</html>
