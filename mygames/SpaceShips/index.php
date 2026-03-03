<?php $path = $_SERVER['REQUEST_URI']; ?>
<html>
  <head>
    <link href="/packages/bootstrap/bootstrap.css" rel="stylesheet">
    <link href="/styles/styles.css" rel="stylesheet">
  </head>
  <body>
    <script type="text/javascript">
      window.assetPath = '<?php echo $path ?>';
    </script>
    <div class="pageBackground">
      <div class="container contentContainer">
        <h1 class="text-center mt-3 mb-0">Space Ship Battles</h1>
        <div id="gameContainer" />
      </div>
    </div>
    <style>
      #gameContainer {
        width: 800px;
        height: 600px;
        margin: 40px;
      }

      .pageBackground {
        display: flex;
        justify-content: center;
      }

      .container {
        width: fit-content;
      }
    </style>
    <script type="text/javascript" src="<?php echo $path; ?>/pixi.min.js"></script>
    <script type="text/javascript" src="<?php echo $path; ?>/built.js"></script>
  </body>
</html>
